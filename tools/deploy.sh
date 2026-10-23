#!/usr/bin/env bash
# ============================================================
# 一键部署到 GitHub Pages
# 用法：
#   1) 先授权 GitHub（仅首次需要）：
#        gh auth login --web
#   2) 然后运行：
#        bash tools/deploy.sh                # 默认仓库名 g6pd-lookup，公开
#        bash tools/deploy.sh 我的仓库名 private
# ============================================================
set -e
cd "$(dirname "$0")/.."

REPO="${1:-g6pd-lookup}"
VISIBILITY="${2:-public}"

# 1. 检查 GitHub 授权
if ! gh auth status &>/dev/null; then
  echo "❌ 尚未授权 GitHub。请先运行：gh auth login --web"
  exit 1
fi
OWNER="$(gh api user --jq .login)"
echo "✅ GitHub 已授权：$OWNER"

# 2. git 仓库初始化（幂等）
if [ ! -d .git ]; then
  git init -b main
  echo "✅ 已初始化 git 仓库"
fi
# 本项目级 git 身份（不影响全局配置）
git config user.name  >/dev/null 2>&1 || git config user.name  "g6pd-tool"
git config user.email >/dev/null 2>&1 || git config user.email "g6pd-tool@users.noreply.github.com"

# 3. 确保隐私数据被忽略
grep -q "profile.json" .gitignore 2>/dev/null || echo "data/profile.json" >> .gitignore

# 4. 提交
git add -A
if git diff --cached --quiet; then
  echo "ℹ️  没有新改动"
else
  git commit -q -m "update: $(date '+%Y-%m-%d %H:%M')"
  echo "✅ 已提交"
fi

# 5. 创建远程仓库并推送（已存在则直接推送）
if ! gh repo view "$REPO" &>/dev/null; then
  gh repo create "$REPO" --"$VISIBILITY" --source=. --push
  echo "✅ 已创建并推送仓库：$REPO"
else
  git remote get-url origin &>/dev/null 2>&1 || gh repo set-default "$REPO" 2>/dev/null || true
  git push -u origin main 2>/dev/null || git push origin main
  echo "✅ 已推送到既有仓库：$REPO"
fi

# 6. 开启 GitHub Pages（main 分支根目录；已开启则忽略）
if ! gh api "repos/$OWNER/$REPO/pages" &>/dev/null; then
  gh api --method POST "repos/$OWNER/$REPO/pages" \
    -f source[branch]=main -f source[path]=/ &>/dev/null \
    && echo "✅ GitHub Pages 已开启" \
    || echo "⚠️  Pages 开启返回异常，请到仓库 Settings → Pages 手动确认"
else
  echo "ℹ️  GitHub Pages 已处于开启状态"
fi

# 7. 输出访问地址
sleep 2
OWNER="$(gh api user --jq .login)"
URL="https://${OWNER}.github.io/${REPO}/"
echo ""
echo "============================================================"
echo "🎉 部署完成！手机访问地址（可转发给家人）："
echo "    $URL"
echo "============================================================"
echo "提示：Pages 首次生效可能需要 1~2 分钟；之后每次改动只需重新运行本脚本。"

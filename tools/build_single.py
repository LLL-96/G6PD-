#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
把 web/ 下的多文件网页版打包成一个自包含的离线 HTML：
  - CSS 已内联在 index.html 里
  - <script src="x.js"></script> 替换为内联 <script> x.js 内容 </script>
产物：项目根目录 g6pd-offline.html （双击即可用，断网可用，可微信/邮件分享给家人）
"""
import re
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
WEB = ROOT / "web"
OUT = ROOT / "g6pd-offline.html"


def inline_script(match: re.Match) -> str:
    name = match.group(1)
    content = (WEB / name).read_text(encoding="utf-8")
    # 防止内容里的 </script> 提前闭合（本工程无此情况，做一层保险）
    content = content.replace("</script>", "<\\/script>")
    return "<script>\n" + content + "\n</script>"


def main() -> None:
    html = (WEB / "index.html").read_text(encoding="utf-8")
    html = re.sub(r'<script src="([^"]+)"></script>', inline_script, html)
    OUT.write_text(html, encoding="utf-8")
    # 校验：不应再残留本地脚本引用
    leftovers = re.findall(r'<script src="([^"]+)"', html)
    assert not leftovers, f"仍有未内联脚本: {leftovers}"
    print(f"✅ 已生成单文件离线版：{OUT}")
    print(f"   大小：{OUT.stat().st_size / 1024:.1f} KB")
    print("   用法：双击打开即可用；传到手机后断网也能查；localStorage 保存在本机浏览器。")


if __name__ == "__main__":
    main()

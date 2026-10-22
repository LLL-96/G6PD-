#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
G6PD缺乏症（蚕豆病）禁忌速查器
================================
用法示例：
    python lookup.py 阿司匹林                 # 查询单个药品/食物
    python lookup.py 复方新诺明 痢特灵        # 一次查多个
    python lookup.py --list --risk forbidden  # 列出全部禁用项
    python lookup.py --category food          # 按类别浏览
    python lookup.py --emergency              # 溶血发作应急流程
    python lookup.py --card                   # 生成就医提示卡
    python lookup.py --stats                  # 数据库统计
    python lookup.py                          # 进入交互模式

免责声明：本工具数据来自公开权威资料整理，仅供参考，不构成医疗建议。
一切用药请以医生处方和药师指导为准。
"""

import argparse
import difflib
import json
import os
import sys
from datetime import date

# ---------- 终端输出适配 ----------
try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

USE_COLOR = (not os.environ.get("NO_COLOR")) and sys.stdout.isatty()

def _c(text, code):
    if not USE_COLOR:
        return text
    return f"\033[{code}m{text}\033[0m"

def red(t):    return _c(t, "91")
def yellow(t): return _c(t, "93")
def green(t):  return _c(t, "92")
def blue(t):   return _c(t, "94")
def bold(t):   return _c(t, "1")
def dim(t):    return _c(t, "2")

RISK_STYLE = {
    "forbidden": (red,    "⛔ 禁用"),
    "caution":   (yellow, "⚠️  慎用"),
    "safe":      (green,  "✅ 常规可用"),
    "info":      (blue,   "ℹ️  提示"),
}

CATEGORY_NAMES = {
    "analgesic": "解热镇痛药",
    "sulfa": "磺胺类抗菌药",
    "furan": "硝基呋喃类抗菌药",
    "antimalarial": "抗疟药",
    "antibiotic_other": "其他抗菌药物",
    "cardiovascular": "心血管系统用药",
    "metabolic": "内分泌（降糖药）",
    "neuro": "神经系统/抗过敏",
    "urinary": "泌尿系统用药",
    "other_drug": "其他药物",
    "tcm": "中药与中成药成分",
    "food": "食物",
    "household": "日用化学品",
    "occupational": "职业/环境暴露",
    "infection": "感染与疾病提示",
}

# ---------- 数据加载 ----------

def data_path():
    here = os.path.dirname(os.path.abspath(__file__))
    return os.path.join(here, "..", "data", "items.json")

def load_data():
    with open(data_path(), encoding="utf-8") as f:
        return json.load(f)

DATA = load_data()
ITEMS = DATA["items"]
SOURCES = {s["id"]: s for s in DATA["sources"]}

# ---------- 搜索 ----------

def norm(s):
    return "".join(str(s).lower().split())

def search(query, items=None):
    """返回 [(score, item)]，按相关度降序。"""
    items = ITEMS if items is None else items
    q = norm(query)
    if not q:
        return []
    exact, partial, fuzzy = [], [], []
    for it in items:
        fields = [it["name"], it.get("en", "")] + it.get("aliases", [])
        for f in fields:
            nf = norm(f)
            if not nf:
                continue
            if nf == q:
                exact.append((100, it))
                break
            if q in nf or nf in q:
                partial.append((80 if len(q) >= 2 else 40, it))
                break
        else:
            # 模糊匹配：仅对较长查询启用，且相似度阈值从严，避免短词误配
            if len(q) >= 4:
                best = difflib.get_close_matches(q, [norm(f) for f in fields if f], n=1, cutoff=0.6)
                if best:
                    fuzzy.append((50, it))
    merged = {}
    for score, it in exact + partial + fuzzy:
        key = it["id"]
        if merged.get(key, 0) < score:
            merged[key] = score
    return sorted(((s, ITEM_BY_ID[i]) for i, s in merged.items()), key=lambda x: -x[0])

ITEM_BY_ID = {it["id"]: it for it in ITEMS}

# ---------- 输出 ----------

def source_line(it):
    return "、".join(f"{sid}" for sid in it.get("sources", []))

def print_item(it, index=None):
    style, label = RISK_STYLE[it["risk"]]
    head = f"{style(label)}  {bold(it['name'])}"
    if it.get("en"):
        head += dim(f"  ({it['en']})")
    if it.get("controversy"):
        head += yellow("  [口径有分歧]")
    if index is not None:
        head = f"{dim(str(index) + '.')} {head}"
    print(head)
    cat = CATEGORY_NAMES.get(it["category"], it["category"])
    print(f"   类别：{cat}")
    if it.get("aliases"):
        print(f"   别名：{'、'.join(it['aliases'])}")
    print(f"   结论：{it['summary']}")
    if it.get("detail"):
        print(f"   说明：{it['detail']}")
    if it.get("note"):
        print(yellow(f"   注意：{it['note']}"))
    if it.get("sources"):
        print(dim(f"   来源：{source_line(it)}"))
    print()

def print_not_found(query):
    print(yellow(f"未在数据库中找到「{query}」。"))
    print("可能的原因：名称不在库中、输入有误，或该药确实未列入 G6PD 禁忌分级。")
    print("不要就此认为它安全——用药前请咨询医生/药师，并主动告知蚕豆病史。\n")

# ---------- 子命令 ----------

def cmd_list(risk=None, category=None):
    items = ITEMS
    if risk:
        items = [i for i in items if i["risk"] == risk]
    if category:
        c = norm(category)
        items = [i for i in items if norm(i["category"]) == c or norm(CATEGORY_NAMES.get(i["category"], "")) == c]
    if not items:
        print("没有符合条件的条目。")
        return
    order = {"forbidden": 0, "caution": 1, "safe": 2, "info": 3}
    items = sorted(items, key=lambda i: (order[i["risk"]], i["category"], i["name"]))
    title = "数据库条目"
    if risk:
        title += f"（{RISK_STYLE[risk][1]}）"
    if category:
        title += f"（类别：{category}）"
    print(bold(title) + dim(f"  共 {len(items)} 条") + "\n")
    cur = None
    for it in items:
        cat = CATEGORY_NAMES.get(it["category"], it["category"])
        if cat != cur:
            cur = cat
            print(blue(f"── {cat} ──"))
        style, label = RISK_STYLE[it["risk"]]
        line = f"  {style(label)}  {it['name']}"
        if it.get("controversy"):
            line += dim(" [分歧]")
        print(line + dim(f"  —— {it['summary']}"))
    print()

def cmd_emergency():
    print(bold(red("溶血发作应急处理（请先立即就医，本流程仅作参考）")) + "\n")
    steps = [
        ("第一步", "立即停止接触诱因", "停止食用蚕豆及可疑食物；停用可疑药物；远离樟脑丸（萘）等物品。"),
        ("第二步", "立即送正规医院", "前往医院急诊科/血液科，明确告知医生：“有蚕豆病史，怀疑溶血发作”。溶血多为自限性（1~2天，长者10天），及时处理大多可完全恢复。"),
        ("第三步", "途中与院内配合", "保证水分供给（溶血期应供给足够水分）；不要自行喂药、喂偏方；配合医生进行血常规、尿常规（看血红蛋白尿）等检查，必要时输血。"),
    ]
    for tag, title, body in steps:
        print(bold(f"  {tag}：{title}"))
        print(f"    {body}\n")
    print(bold("警惕症状（进食蚕豆/可疑药物后 1~3 天内出现需高度怀疑）："))
    for s in [
        "尿色加深，呈浓茶色或酱油色（血红蛋白尿）",
        "面色、嘴唇、指甲迅速苍白，乏力没精神",
        "皮肤、眼白发黄（黄疸）",
        "腹痛、恶心、呕吐、腰酸背痛",
        "严重时：心跳快、呼吸急、尿少，甚至休克",
    ]:
        print(f"  • {s}")
    print(dim("\n一句话：吃过蚕豆/可疑药物 + 尿色变深 + 发黄苍白 = 高度怀疑溶血，立即就医。"))

def cmd_card():
    today = date.today().isoformat()
    print(bold("═" * 56))
    print(bold("   G6PD 缺乏症（蚕豆病）就医提示卡"))
    print(bold("═" * 56))
    print(f"""
患者/患儿患有 G6PD 缺乏症（蚕豆病）：红细胞易因氧化性物质
破坏而发生急性溶血。用药、饮食前请核对以下禁忌：

【禁用药物】
  · 解热镇痛：阿司匹林、安乃近、氨基比林、非那西丁、保泰松
  · 磺胺类：复方新诺明（SMZ-TMP）、磺胺嘧啶及所有磺胺
  · 硝基呋喃类：呋喃妥因、呋喃唑酮（痢特灵）、呋喃西林
  · 抗疟药：伯氨喹、帕马喹（扑疟母星）、阿的平
  · 其他：亚甲蓝（美蓝）、氨苯砜、萘啶酸、非那吡啶、氯霉素
  · 中药成分：黄连、金银花、牛黄、珍珠末、薄荷、连翘、
    冰片、熊胆、腊梅花

【禁食 / 回避】
  · 蚕豆及一切制品（鲜蚕豆、豆瓣酱、兰花豆、蚕豆酥等）
  · 樟脑丸/卫生球/臭丸（萘）、紫药水（龙胆紫）

【慎用（需医生评估）】
  奎宁、氯喹、喹诺酮类（XX沙星）、大剂量维生素C、
  维生素K3、硝普钠、硝酸酯类、磺酰脲类降糖药、
  复方感冒药（成分复杂，需逐项核对）

【相对安全（供参考）】
  对乙酰氨基酚（常规剂量）、布洛芬（有分歧，需评估）、
  青霉素类 / 头孢类 / 大环内酯类抗生素

看病时请主动询问医生/药师：所开药物是否含以上禁忌成分？
谢谢！
""")
    print(bold("═" * 56))
    print(dim(f"生成日期：{today} · 数据来源：安徽省卫健委、协和/北大医院医生、台湾药学会等公开资料"))
    print(dim("仅供参考，不构成医疗建议。"))

def cmd_stats():
    from collections import Counter
    rc = Counter(i["risk"] for i in ITEMS)
    cc = Counter(i["category"] for i in ITEMS)
    print(bold("数据库统计\n"))
    print(f"  总条目：{len(ITEMS)}    来源数：{len(SOURCES)}    版本：{DATA['meta']['version']}（{DATA['meta']['updated']}）")
    for risk in ("forbidden", "caution", "safe", "info"):
        style, label = RISK_STYLE[risk]
        print(f"    {style(label)}：{rc.get(risk, 0)} 条")
    print()
    for cat, n in cc.most_common():
        print(f"    {CATEGORY_NAMES.get(cat, cat)}：{n} 条")
    print()

# ---------- 主流程 ----------

def do_query(queries):
    found_any = False
    for q in queries:
        results = search(q)
        print(bold(f"查询：{q}") + dim(f"  命中 {len(results)} 条") + "\n")
        if not results:
            print_not_found(q)
            continue
        found_any = True
        for score, it in results:
            print_item(it)
    return found_any

def repl():
    print(bold("G6PD（蚕豆病）禁忌速查器 · 交互模式"))
    print(dim("输入药品/食物名称查询；help 查看命令；exit 退出\n"))
    while True:
        try:
            line = input("g6pd> ").strip()
        except (EOFError, KeyboardInterrupt):
            print("\n再见。")
            return
        if not line:
            continue
        if line.lower() in ("exit", "quit", "q", "退出"):
            print("再见。")
            return
        if line.lower() in ("help", "?", "帮助"):
            print("""命令：
  药品/食物名称    直接查询（如：阿司匹林、复方新诺明、樟脑丸）
  --risk 等级      按风险浏览：forbidden / caution / safe / info
  --list           浏览全部条目
  --emergency      溶血发作应急流程
  --card           就医提示卡
  --stats          数据库统计
  exit             退出""")
            continue
        if line == "--list":
            cmd_list()
            continue
        if line.startswith("--risk"):
            parts = line.split()
            if len(parts) >= 2:
                cmd_list(risk=parts[1])
            else:
                print("用法：--risk forbidden|caution|safe|info\n")
            continue
        if line == "--emergency":
            cmd_emergency()
            continue
        if line == "--card":
            cmd_card()
            continue
        if line == "--stats":
            cmd_stats()
            continue
        do_query([line])

def main():
    ap = argparse.ArgumentParser(
        prog="lookup.py",
        description="G6PD缺乏症（蚕豆病）禁忌速查器",
        epilog="免责声明：数据整理自公开权威资料，仅供参考，不构成医疗建议。",
    )
    ap.add_argument("queries", nargs="*", help="要查询的药品/食物名称")
    ap.add_argument("--list", action="store_true", help="列出条目（可配合 --risk / --category）")
    ap.add_argument("--risk", choices=["forbidden", "caution", "safe", "info"], help="按风险等级过滤")
    ap.add_argument("--category", help="按类别过滤（如 food / 食物 / tcm）")
    ap.add_argument("--emergency", action="store_true", help="溶血发作应急流程")
    ap.add_argument("--card", action="store_true", help="生成就医提示卡")
    ap.add_argument("--stats", action="store_true", help="数据库统计")
    args = ap.parse_args()

    if args.emergency:
        cmd_emergency()
    elif args.card:
        cmd_card()
    elif args.stats:
        cmd_stats()
    elif args.list:
        cmd_list(risk=args.risk, category=args.category)
    elif args.queries:
        do_query(args.queries)
    else:
        repl()

if __name__ == "__main__":
    main()

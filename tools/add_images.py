#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
为条目添加可视化：
1) 所有条目加 icon（emoji 类别图标，按类别默认 + 重点项覆盖）；
2) 为关键可识别项生成带名称标注的 SVG 缩略图（data URI 存于 img 字段，完全离线可用）。
说明：SVG 为示意图（emoji+名称），仅供识别参考，不替代实物/说明书。
运行：python tools/add_images.py
"""
import json, os
from urllib.parse import quote

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data", "items.json")

CATEGORY_ICON = {
    "analgesic": "💊", "sulfa": "💊", "furan": "💊", "antimalarial": "💊",
    "antibiotic_other": "💊", "cardiovascular": "💊", "metabolic": "💊",
    "neuro": "💊", "urinary": "💊", "other_drug": "💊",
    "tcm": "🌿", "plant": "🌱", "food": "🍽️", "household": "🧴",
    "occupational": "⚠️", "infection": "🦠", "vaccine": "💉",
}

# 名称关键字覆盖（优先于类别）
NAME_ICON = [
    ("蚕豆", "🫘"), ("樟脑丸", "⚪"), ("萘", "⚪"), ("薄荷", "🧴"),
    ("风油精", "🧴"), ("海娜", "🎨"), ("指甲花", "🎨"),
    ("夹竹桃", "🌸"), ("水仙", "🌸"), ("红花", "🌸"), ("金银花", "🌸"),
    ("银杏", "🍂"), ("白果", "🍂"), ("高锰酸钾", "🟣"), ("龙胆紫", "🟣"),
    ("牛黄", "🟡"), ("黄连", "🟡"), ("碘伏", "🧴"), ("酒精", "🧴"),
    ("蚕豆", "🫘"),
]

# 需要生成缩略图的关键条目：名称子串 -> emoji 字形
IMG_SPECS = [
    ("蚕豆及蚕豆", "🫘", "#eaf6eb", "#2e7d32", "蚕豆"),
    ("萘（樟脑丸", "⚪", "#eef2f7", "#455a64", "樟脑丸/萘"),
    ("阿司匹林", "💊", "#fdecea", "#c62828", "阿司匹林"),
    ("复方磺胺甲噁唑", "💊", "#fdecea", "#c62828", "复方新诺明"),
    ("伯氨喹", "💊", "#fdecea", "#c62828", "伯氨喹"),
    ("海娜/指甲花", "🎨", "#fff0e6", "#b8791b", "海娜/指甲花"),
    ("夹竹桃", "🌸", "#fdeef2", "#c2185b", "夹竹桃"),
    ("水仙", "🌸", "#fff7e0", "#b26a00", "水仙"),
    ("红花", "🌺", "#fdecea", "#c62828", "红花"),
    ("银杏/白果", "🍂", "#fff7e0", "#b26a00", "银杏/白果"),
    ("薄荷（薄荷脑", "🌿", "#eaf6eb", "#2e7d32", "薄荷"),
    ("金银花", "🌼", "#fff7e0", "#b26a00", "金银花"),
    ("牛黄", "🟡", "#fff7e0", "#b26a00", "牛黄"),
    ("黄连（川连）", "🟡", "#fff7e0", "#b26a00", "黄连"),
    ("含薄荷脑/樟脑的外用制剂", "🧴", "#e8f1fb", "#1565c0", "风油精/清凉油"),
    ("高锰酸钾", "🟣", "#f3e8fb", "#6a1b9a", "高锰酸钾"),
    ("龙胆紫（紫药水）", "🟣", "#f3e8fb", "#6a1b9a", "紫药水"),
    ("维C银翘片", "💊", "#fff7e0", "#b26a00", "维C银翘片"),
    ("白加黑", "💊", "#e8f1fb", "#1565c0", "白加黑"),
    ("小儿氨酚黄那敏颗粒", "💊", "#eaf6eb", "#2e7d32", "小儿氨酚黄那敏"),
]

def make_svg(glyph, bg, fg, label):
    svg = (
        "<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'>"
        "<rect x='2' y='2' width='116' height='116' rx='18' fill='{bg}' stroke='{fg}' stroke-opacity='0.25'/>"
        "<text x='60' y='70' font-size='54' text-anchor='middle'>{glyph}</text>"
        "<text x='60' y='104' font-size='13' text-anchor='middle' fill='{fg}' "
        "font-family='PingFang SC,Microsoft YaHei,sans-serif'>{label}</text>"
        "</svg>"
    ).format(bg=bg, fg=fg, glyph=glyph, label=label)
    return "data:image/svg+xml," + quote(svg, safe="")

def pick_icon(it):
    name = it.get("name", "")
    for kw, emo in NAME_ICON:
        if kw in name:
            return emo
    return CATEGORY_ICON.get(it.get("category", ""), "💊")

def main():
    with open(DATA, encoding="utf-8") as f:
        db = json.load(f)
    items = db["items"]

    # 1) 所有条目 icon
    for it in items:
        it["icon"] = pick_icon(it)

    # 2) 关键项 img
    img_count = 0
    for sub, glyph, bg, fg, label in IMG_SPECS:
        for it in items:
            if sub in it.get("name", ""):
                it["img"] = make_svg(glyph, bg, fg, label)
                img_count += 1
                break

    with open(DATA, "w", encoding="utf-8") as f:
        json.dump(db, f, ensure_ascii=False, indent=2, sort_keys=False)
        f.write("\n")
    print(f"已为 {len(items)} 条加 icon，{img_count} 条加 SVG 缩略图。")

if __name__ == "__main__":
    main()

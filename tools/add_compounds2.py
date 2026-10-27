#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""补充常见复方/中成药的 ingredients（成分列表），用于卡片自动逐条比对禁忌库。
成分名尽量使用库内已有的通用名，便于被 search 命中。
"""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "data", "items.json")

COMPOUNDS = {
    # 中成药复方：成分表常含本库禁用药材（金银花/连翘/薄荷/牛黄/冰片）
    "连花清瘟": ["连翘", "金银花", "炙麻黄", "苦杏仁", "石膏", "板蓝根",
                 "绵马贯众", "鱼腥草", "广藿香", "大黄", "红景天", "薄荷脑", "甘草"],
    "小儿豉翘清热颗粒": ["连翘", "薄荷", "荆芥", "淡豆豉", "牛蒡子", "柴胡",
                          "黄芩", "赤芍", "槟榔", "厚朴", "大黄"],
    "抗病毒口服液": ["板蓝根", "石膏", "芦根", "生地黄", "郁金", "知母",
                      "石菖蒲", "广藿香", "连翘"],
    "感冒清热颗粒": ["荆芥穗", "薄荷", "防风", "柴胡", "紫苏叶", "葛根",
                      "桔梗", "苦杏仁", "白芷", "苦地丁", "芦根"],
    "蒲地蓝": ["蒲公英", "苦地丁", "板蓝根", "黄芩"],
    "蓝芩": ["板蓝根", "黄芩", "栀子", "黄柏", "胖大海"],
    "小儿柴桂退热颗粒": ["柴胡", "桂枝", "葛根", "黄芩", "白芍", "蝉蜕"],
    # 西药复方
    "复方消化酶": ["胃蛋白酶", "木瓜蛋白酶", "淀粉酶", "熊去氧胆酸"],
    "多酶片": ["胃蛋白酶", "胰酶", "淀粉酶"],
    "复方口服避孕药": ["炔雌醇", "孕激素"],
    "复方聚乙二醇电解质": ["聚乙二醇4000", "氯化钠", "氯化钾", "碳酸氢钠"],
}


def main():
    data = json.load(open(SRC, encoding="utf-8"))
    items = data["items"] if isinstance(data, dict) else data
    by_name = {it["name"]: it for it in items}
    done, missing = [], []
    for name, ings in COMPOUNDS.items():
        it = by_name.get(name)
        if not it:
            missing.append(name)
            continue
        it["ingredients"] = ings
        done.append(name)
    json.dump(data, open(SRC, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print(f"已补成分拆解：{len(done)} 条")
    for n in done:
        print("  ✓", n)
    if missing:
        print("⚠ 库内未找到（跳过）：", missing)
    print("现有 ingredients 条目总数：", sum(1 for i in items if i.get("ingredients")))


if __name__ == "__main__":
    main()

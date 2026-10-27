#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""把"成分中含本库禁用项"的复方/中成药统一升级为 forbidden，
消除"备注说含禁用成分、整体却标慎用"的自相矛盾。
复方感冒药（总括条目）与复方甘草片保持 caution：
  前者为代表性成分、并非所有配方都含人工牛黄；后者樟脑属"含薄荷脑/樟脑外用制剂"的慎用，不是萘。
"""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "data", "items.json")

UPGRADE = {
    "连花清瘟": "含连翘、金银花、薄荷脑等禁用药材，整体按禁用处理。",
    "小儿豉翘清热颗粒": "含连翘、薄荷等禁用药材，整体按禁用处理。",
    "感冒清热颗粒": "含薄荷等禁用药材，整体按禁用处理。",
    "抗病毒口服液": "含连翘等禁用药材，整体按禁用处理。",
    "维C银翘片": "含金银花、连翘等禁用药材，整体按禁用处理。",
    "小儿氨酚黄那敏颗粒": "含人工牛黄（牛黄为禁用），整体按禁用处理。",
    "氨酚烷胺类（快克/感康）": "含人工牛黄（牛黄为禁用），整体按禁用处理。",
}

NOTE = "不同厂家配方略有差异，请以说明书成分表为准；如确不含上述成分，可另行咨询药师。"


def main():
    data = json.load(open(SRC, encoding="utf-8"))
    items = data["items"] if isinstance(data, dict) else data
    by_name = {it["name"]: it for it in items}
    done, missing = [], []
    for name, summary in UPGRADE.items():
        it = by_name.get(name)
        if not it:
            missing.append(name)
            continue
        old = it["risk"]
        it["risk"] = "forbidden"
        it["summary"] = summary
        if NOTE not in (it.get("note") or ""):
            it["note"] = ((it.get("note") or "") + ("｜" if it.get("note") else "") + NOTE)
        done.append((name, old))
    data["meta"]["version"] = "0.2.4"
    data["meta"]["updated"] = "2026-10-27"
    json.dump(data, open(SRC, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print(f"已升级为禁用：{len(done)} 条")
    for n, old in done:
        print(f"  {old} → forbidden  {n}")
    if missing:
        print("⚠ 未找到：", missing)
    print("禁用总数：", sum(1 for i in items if i["risk"] == "forbidden"))


if __name__ == "__main__":
    main()

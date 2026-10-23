#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
准确性修订（2026-10-23）：
1) 9 味中药中标 “禁用” 但无分歧标注的 8 条补 controversy=true，并加“证据/口径说明”
   （中药回避主要依据国内卫健委口径，国际循证有限）——薄荷已标分歧，跳过。
2) 氯霉素、磺胺醋酰滴眼液：补 controversy=true 并加“国际多归低危、国内口径禁用”的口径说明。
3) 氯喹：别名“羟氯喹（相关）”改为独立别名“羟氯喹”，并加提示二者为不同药。
4) 全表别名做首尾空格清理（修正 pamaquine 别名 “ plasmochin” 前的空格）。
5) 新增确实该列的诱发物：甲苯胺蓝（亚甲蓝同类氧化性染料）、酚酞（旧式泻药，历史列为慎用）。
6) meta 版本号 + 更新日期顺带更新。
"""
import json
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = ROOT / "data" / "items.json"

TCM_EVIDENCE = "｜证据说明：该中药回避主要依据国内儿科/卫健委口径，国际循证证据有限，按国内指南回避更稳妥；实际用药请遵医嘱。"


def main():
    text = DATA.read_text(encoding="utf-8")
    db = json.loads(text)
    items = db["items"]

    # 计数，便于日志
    changed = []

    for it in items:
        # 4) 别名首尾空格清理（全表）
        if isinstance(it.get("aliases"), list):
            it["aliases"] = [a.strip() for a in it["aliases"]]

        cat = it.get("category")
        name = it.get("name", "")

        # 1) TCM 补分歧标注
        if cat == "tcm" and not it.get("controversy", False):
            it["controversy"] = True
            note = (it.get("note") or "").strip()
            it["note"] = (note + TCM_EVIDENCE) if note else TCM_EVIDENCE.lstrip("｜")
            changed.append(f"TCM 分歧: {name}")

        # 2) 氯霉素
        if name == "氯霉素":
            it["controversy"] = True
            note = (it.get("note") or "").strip()
            add = "｜提示：氯霉素在国际部分 G6PD 清单中归为低危，国内口径列为禁用；如必须使用，请与医生充分沟通。"
            it["note"] = (note + add) if note else add.lstrip("｜")
            changed.append("口径说明: 氯霉素")

        # 2) 磺胺醋酰滴眼液
        if name == "磺胺醋酰":
            it["controversy"] = True
            note = (it.get("note") or "").strip()
            add = "｜证据说明：磺胺醋酰滴眼液经黏膜全身吸收量极小，国际多归低危，国内口径建议回避；点眼后留意异常反应。"
            it["note"] = (note + add) if note else add.lstrip("｜")
            changed.append("口径说明: 磺胺醋酰")

        # 3) 氯喹：修正别名表述
        if name == "氯喹" and isinstance(it.get("aliases"), list):
            it["aliases"] = [("羟氯喹" if a == "羟氯喹（相关）" else a) for a in it["aliases"]]
            note = (it.get("note") or "").strip()
            add = "｜羟氯喹（hydroxychloroquine）为不同药物，G6PD 中通常按低危对待，使用前请与医生确认。"
            it["note"] = (note + add) if note else add.lstrip("｜")
            changed.append("别名/口径修正: 氯喹")

    # 5) 新增条目
    existing_ids = {it["id"] for it in items}
    new_entries = []

    if "toluidine-blue" not in existing_ids:
        new_entries.append({
            "id": "toluidine-blue",
            "name": "甲苯胺蓝",
            "en": "Toluidine blue",
            "aliases": ["tolonium chloride", "天青染料", "toluidine blue O"],
            "category": "other_drug",
            "risk": "forbidden",
            "summary": "与亚甲蓝同类的氧化性染色剂/药物，可能诱发溶血。",
            "detail": "常与亚甲蓝并列列入 G6PD 禁用清单；用于部分诊断染色或局部止血场景，使用前务必告知蚕豆病史。",
            "note": "若遇必须使用的情况，与医生确认替代方案。",
            "controversy": False,
            "sources": ["S7"],
        })
        changed.append("新增: 甲苯胺蓝")

    if "phenolphthalein" not in existing_ids:
        new_entries.append({
            "id": "phenolphthalein",
            "name": "酚酞",
            "en": "Phenolphthalein",
            "aliases": ["果导", "果导片"],
            "category": "other_drug",
            "risk": "caution",
            "summary": "旧式刺激性泻药，部分历史资料列为 G6PD 慎用。",
            "detail": "酚酞（如果导）属老式泻药，已在多国退市；既往资料将其列入 G6PD 慎用/回避范围，现有制剂已少见。",
            "note": "证据有限且药品已较罕见，若使用含酚酞产品请咨询医生。",
            "controversy": True,
            "sources": ["S1"],
        })
        changed.append("新增: 酚酞")

    items.extend(new_entries)

    # 6) meta 更新
    db["meta"]["version"] = "0.1.1"
    db["meta"]["updated"] = "2026-10-23"

    DATA.write_text(json.dumps(db, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("已修改/新增条目：")
    for c in changed:
        print("  -", c)
    print(f"条目总数：{len(items)}")


if __name__ == "__main__":
    main()

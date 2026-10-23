#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
为常见复方药补充「成分列表（ingredients）」，供查询时自动拆成分比对。
幂等：可重复运行。
运行：python tools/add_compounds.py
"""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data", "items.json")

def norm(s):
    return "".join(str(s).lower().split())

# 已有条目按真实 id 补 ingredients（代表性成分，具体以说明书为准）
PATCH = {
    "compound_cold_med": ["对乙酰氨基酚", "马来酸氯苯那敏", "伪麻黄碱", "咖啡因", "人工牛黄"],
    "smz": ["磺胺甲噁唑", "甲氧苄啶"],
    "复方甘草片": ["甘草流浸膏", "阿片粉", "樟脑"],
}
PATCH_NOTE = {
    "compound_cold_med": "以下为常见复方感冒药的代表性成分，具体以所购药品说明书为准。",
}

# 从“复方感冒药”伞形条目中移除、改由专门条目承接的别名（避免检索歧义）
STRIP_ALIASES = {
    "compound_cold_med": ["维C银翘片", "白加黑", "泰诺感冒片", "快克", "感康",
                          "小儿氨酚黄那敏", "氨酚伪麻美芬片"],
}

NEW = [
    dict(id="vitc_yin", name="维C银翘片", en="VC Yinqiao tablet", risk="caution",
         category="other_drug", aliases=["维C银翘", "VC银翘片"],
         ingredients=["对乙酰氨基酚", "维生素C", "马来酸氯苯那敏", "金银花", "连翘"],
         summary="复方中成药，含西药成分，须逐条核对禁忌。",
         detail="本品为中西药复方，下方已按成分逐条比对禁忌库；具体以说明书为准，用药前咨询医师或药师。",
         note="金银花、连翘在 G6PD 禁忌名单中，含这些成分的复方须特别留意。"),
    dict(id="baijiahei", name="白加黑", en="Baijiahei (day/night)", risk="caution",
         category="other_drug", aliases=["氨酚伪麻美芬片", "氨酚美芬伪麻片"],
         ingredients=["对乙酰氨基酚", "盐酸伪麻黄碱", "氢溴酸右美沙芬", "苯海拉明"],
         summary="复方感冒药（日/夜片），成分须逐条核对。",
         detail="本品为复方，下方已按成分逐条比对禁忌库；具体以说明书为准，用药前咨询医师或药师。"),
    dict(id="ped_analgesic", name="小儿氨酚黄那敏颗粒", en="Pediatric Paracetamol/CPM", risk="caution",
         category="other_drug", aliases=["小儿氨酚黄那敏", "护彤"],
         ingredients=["对乙酰氨基酚", "马来酸氯苯那敏", "人工牛黄"],
         summary="小儿常用复方感冒药，成分须逐条核对。",
         detail="本品为中西药复方，下方已按成分逐条比对禁忌库；具体以说明书为准，用药前咨询医师或药师。",
         note="含人工牛黄（牛黄在 G6PD 禁忌名单中）。"),
    dict(id="amantadine_complex", name="氨酚烷胺类（快克/感康）", en="Paracetamol/Amantadine", risk="caution",
         category="other_drug", aliases=["快克", "感康", "复方氨酚烷胺片"],
         ingredients=["对乙酰氨基酚", "盐酸金刚烷胺", "咖啡因", "马来酸氯苯那敏", "人工牛黄"],
         summary="复方感冒药，成分须逐条核对。",
         detail="本品为复方，下方已按成分逐条比对禁忌库；具体以说明书为准，用药前咨询医师或药师。",
         note="含人工牛黄（牛黄在 G6PD 禁忌名单中）。"),
    dict(id="tylenol_complex", name="酚麻美敏（泰诺）", en="Tylenol Cold (APAP/PSE/DM/CPM)", risk="caution",
         category="other_drug", aliases=["泰诺", "泰诺感冒片", "酚麻美敏片"],
         ingredients=["对乙酰氨基酚", "伪麻黄碱", "氢溴酸右美沙芬", "马来酸氯苯那敏"],
         summary="复方感冒药，成分须逐条核对。",
         detail="本品为复方，下方已按成分逐条比对禁忌库；具体以说明书为准，用药前咨询医师或药师。"),
]

def main():
    with open(DATA, encoding="utf-8") as f:
        db = json.load(f)
    items = db["items"]
    by_id = {it["id"]: it for it in items}

    # 1) 移除伞形条目中被专门条目接管的别名
    for iid, alist in STRIP_ALIASES.items():
        it = by_id.get(iid)
        if it and it.get("aliases"):
            drop = set(norm(a) for a in alist)
            it["aliases"] = [a for a in it["aliases"] if norm(a) not in drop]

    # 2) 补充 ingredients
    patched = 0
    for iid, ings in PATCH.items():
        it = by_id.get(iid)
        if it:
            it["ingredients"] = ings
            if iid in PATCH_NOTE:
                it["note"] = PATCH_NOTE[iid]
            patched += 1

    # 3) 重新构建 known 并新增专门条目
    known = set()
    for it in items:
        known.add(norm(it["id"])); known.add(norm(it["name"]))
        for a in it.get("aliases", []):
            known.add(norm(a))

    added = 0
    for e in NEW:
        if norm(e["name"]) in known:
            # 已存在：合并缺失的别名/成分，避免重复运行漏更新
            for it in items:
                if norm(it["name"]) == norm(e["name"]):
                    for a in e.get("aliases", []):
                        if norm(a) not in set(norm(x) for x in it.get("aliases", [])):
                            it.setdefault("aliases", []).append(a)
                    if e.get("ingredients") and not it.get("ingredients"):
                        it["ingredients"] = e["ingredients"]
                    break
            continue
        eid = e["id"]
        while norm(eid) in known:
            eid = eid + "_"
        e["id"] = eid
        e.setdefault("controversy", False)
        e.setdefault("sources", ["S1", "S4", "S7"])
        e.setdefault("note", e.get("note", ""))
        items.append(e)
        added += 1
        known.add(norm(eid)); known.add(norm(e["name"]))
        for a in e.get("aliases", []):
            known.add(norm(a))

    with open(DATA, "w", encoding="utf-8") as f:
        json.dump(db, f, ensure_ascii=False, indent=2, sort_keys=False)
        f.write("\n")
    print(f"patch ingredients {patched} 条，新增复方条目 {added} 条；当前共 {len(items)} 条。")

if __name__ == "__main__":
    main()

#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
扩展非药物类诱发物：新增「植物/花草」类别，并补充常见生活用品/花草触发物。
原则：
  - 有明确个案/成分氧化证据者 → caution（注明证据来源与「避免」建议），不轻易标禁用；
  - 已确认的强氧化剂（如萘、紫药水）此前已收录，不在本批重复；
  - 命中即搜即有：这些条目进入搜索库后，搜「指甲花/海娜/风油精/红花油」等都会命中。
运行：python tools/bulk_triggers.py
"""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data", "items.json")

def norm(s):
    return "".join(str(s).lower().split())

DEFAULT_SUMMARY = {
    "caution": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用或避免。",
    "info": "与 G6PD 相关的一般性提示。",
}
DEFAULT_DETAIL = {
    "caution": "该植物/物品含可能参与氧化应激的成分，部分资料或个案报道其与溶血相关；"
               "蚕豆病者建议避免或至少在医生/药师指导下使用，并加强尿色/血象监测。",
    "info": "用药或接触前请主动告知蚕豆病史，出现尿色变深、发黄苍白等立即就医。",
}

def E(name, en, risk, category, aliases=None, summary=None, detail=None, controversy=False, sources=None):
    return dict(name=name, en=en, risk=risk, category=category,
                aliases=aliases or [],
                summary=summary or DEFAULT_SUMMARY[risk],
                detail=detail or DEFAULT_DETAIL[risk],
                controversy=controversy,
                sources=sources or ["S1", "S4", "S7"])

ENTRIES = []
A = ENTRIES.append

# ===== 植物 / 花草（新类别 plant）=====
plant_src = ["S1", "S4", "S7"]
A(E("海娜/指甲花", "Henna (Lawsonia inermis)", "caution", "plant",
    ["指甲花", "海娜粉", "散沫花", "mehndi"],
    controversy=True,
    detail=("海娜含萘醌类色素（lawsone），已有多篇儿童急性溶血个案报道与 G6PD 缺乏相关；"
            "蚕豆病者应避免用于染发、手绘等皮肤接触，尤其婴幼儿。")))
A(E("红花", "Safflower (Carthamus tinctorius)", "caution", "plant",
    ["草红花", "红蓝花", "刺红花"],
    controversy=True,
    detail=("红花黄色素具一定氧化潜力，部分资料将其列入蚕豆病慎用；作为活血化瘀中药使用时应由医生评估。")))
A(E("银杏/白果", "Ginkgo (Ginkgo biloba)", "caution", "plant",
    ["白果", "公孙树", "银杏叶提取物"],
    controversy=True,
    detail=("银杏叶提取物有个别溶血相关报道；白果（银杏果）主要风险为神经毒性，"
            "但蚕豆病者食用/用药仍建议谨慎，儿童尤甚。")))
A(E("丹参", "Salvia miltiorrhiza", "caution", "plant",
    ["紫丹参", "赤参"],
    controversy=True,
    detail=("丹参酮、丹酚酸兼具抗氧化与个别氧化争议，作为心血管常用中药，蚕豆病者使用建议咨询医生。")))
A(E("鱼腥草", "Houttuynia cordata", "caution", "plant",
    ["折耳根", "蕺菜"],
    controversy=True,
    detail=("含挥发油与多种活性成分，部分资料提示蚕豆病者慎用；作为野菜或注射液使用时注意个体反应。")))
A(E("茵栀黄", "Yinzhihuang (herbal)", "caution", "plant",
    ["茵栀黄口服液", "茵栀黄颗粒", "茵栀黄注射液"],
    detail=("用于新生儿黄疸的中成药（茵陈、栀子、黄芩、金银花等），蚕豆病新生儿用药需由医生评估利弊，"
            "不自行使用。")))

# ===== 生活用品补充（household）=====
A(E("风油精/清凉油", "Essential balm (Fengyoujing)", "caution", "household",
    ["清凉油", "万金油", "白花油", "薄荷膏"],
    detail=("多含薄荷脑、樟脑、桉叶油；樟脑对 G6PD 缺乏者具明确风险，避免用于婴幼儿及大面积、破损皮肤。")))
A(E("红花油", "Red flower oil", "caution", "household",
    ["正红花油", "万花油"],
    detail=("常含红花、冬青油（水杨酸甲酯）、樟脑等成分，外用亦建议蚕豆病者慎用，避免大面积使用。")))
A(E("指甲油/美甲产品", "Nail polish / Artificial nails", "caution", "household",
    ["指甲油", "美甲", "甲油胶", "光疗胶"],
    detail=("含甲苯、甲醛、邻苯二甲酸酯等有机溶剂，长期或大量接触建议谨慎；优先选成分标注清晰的产品。")))
A(E("高锰酸钾", "Potassium permanganate", "caution", "household",
    ["PP粉", "灰锰氧"],
    detail=("强氧化剂，外用于消毒/坐浴须严格按说明稀释；误服或高浓度有风险，妥善保管远离儿童。")))
A(E("香薰/精油（薄荷脑·樟脑类）", "Aromatherapy oils (menthol/camphor)", "caution", "household",
    ["精油", "香薰", "薄荷精油", "樟脑精油", "尤加利精油"],
    detail=("含薄荷脑、樟脑、桉叶油等的精油对 G6PD 缺乏者具风险，尤其避免婴幼儿吸入/涂抹；"
            "普通薰衣草、甜橙等相对温和但大面积使用仍建议谨慎。")))

def main():
    with open(DATA, encoding="utf-8") as f:
        db = json.load(f)
    items = db["items"]
    known = set()
    for it in items:
        known.add(norm(it["id"]))
        known.add(norm(it["name"]))
        for a in it.get("aliases", []):
            known.add(norm(a))

    added, skipped = 0, 0
    for e in ENTRIES:
        key = norm(e["name"])
        dup = key in known or any(norm(a) in known for a in e["aliases"])
        if dup:
            skipped += 1
            continue
        eid = e["name"]
        while norm(eid) in known:
            eid = eid + "_"
        e["id"] = eid
        known.add(norm(eid))
        known.add(key)
        for a in e["aliases"]:
            known.add(norm(a))
        e.setdefault("note", "")
        items.append(e)
        added += 1

    # 给「蚕豆及蚕豆制品」补充方言别名，提升即搜即有命中
    for it in items:
        if it.get("name", "").startswith("蚕豆及蚕豆"):
            extra = ["胡豆", "罗汉豆", "佛豆", "川豆", "南豆"]
            for x in extra:
                if norm(x) not in known:
                    it.setdefault("aliases", []).append(x)
                    known.add(norm(x))
            break

    db["meta"]["version"] = "0.1.4"
    db["meta"]["updated"] = "2026-10-23"
    with open(DATA, "w", encoding="utf-8") as f:
        json.dump(db, f, ensure_ascii=False, indent=2, sort_keys=False)
        f.write("\n")
    print(f"已新增 {added} 条，跳过重复 {skipped} 条；当前共 {len(items)} 条；版本 {db['meta']['version']}。")

if __name__ == "__main__":
    main()

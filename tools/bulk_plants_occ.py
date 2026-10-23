#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
扩展非药物诱发物（第二批）：有毒观赏植物 + 职业/环境类。
重要：有毒观赏植物主要风险并非 G6PD 溶血，而是自身毒性（误食/接触），
一律标 info 并在 detail 注明「主要风险非 G6PD 溶血」，避免误导；
家中有蚕豆病患儿仍建议远离/避免误食。
运行：python tools/bulk_plants_occ.py
"""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data", "items.json")

def norm(s):
    return "".join(str(s).lower().split())

def E(name, en, risk, category, aliases=None, summary=None, detail=None, controversy=False, sources=None):
    return dict(name=name, en=en, risk=risk, category=category,
                aliases=aliases or [],
                summary=summary or "与 G6PD 相关的一般性提示。",
                detail=detail or "接触或误食前请主动告知蚕豆病史，出现不适立即就医。",
                controversy=controversy,
                sources=sources or ["S1", "S4", "S7"])

ENTRIES = []
A = ENTRIES.append

# ===== 有毒观赏植物（plant, info，注明非 G6PD 风险）=====
plant_detail = ("该植物主要风险并非 G6PD 溶血，而是自身毒性（误食/接触可中毒）；"
               "蚕豆病患儿亦应避免接触与误食，出现口唇麻木、呕吐、心慌等立即就医。")
def P(name, en, aliases, tox):
    A(E(name, en, "info", "plant", aliases,
        summary="观赏/家养植物；主要风险是自身毒性，非 G6PD 溶血。",
        detail=plant_detail + " 具体毒性：" + tox))

P("夹竹桃", "Oleander (Nerium oleander)", ["夹竹桃叶", "柳叶桃"],
  "含强心苷，极少量即可致严重心律失常甚至死亡，全株剧毒。")
P("水仙", "Daffodil / Narcissus", ["水仙花", "凌波仙子"],
  "鳞茎含石蒜碱等生物碱，误食致呕吐、腹泻、惊厥。")
P("石蒜", "Lycoris radiata", ["红花石蒜", "彼岸花"],
  "含石蒜碱、加兰他敏类生物碱，误食致呕吐、惊厥。")
P("郁金香", "Tulip", ["郁金香花"],
  "鳞茎含郁金香苷，接触致「郁金香指」皮炎，误食不适。")
P("滴水观音/海芋", "Alocasia / Elephant ear", ["海芋", "广东狼毒"],
  "汁液含草酸钙针晶，误食/沾肤致剧烈刺痛、肿胀。")
P("绿萝/黄金葛", "Pothos / Epipremnum", ["黄金葛"],
  "含草酸钙针晶，宠物与幼儿误食致口腔灼伤。")
P("万年青/黛粉叶", "Dieffenbachia", ["黛粉叶", "粗肋草"],
  "含草酸钙针晶，误食致口腔肿胀、流涎。")
P("曼陀罗", "Datura / Thorn apple", ["洋金花", "醉仙桃"],
  "含莨菪碱类，误食致幻觉、口干、高热、昏迷，剧毒。")
P("蓖麻", "Castor bean (Ricinus)", ["蓖麻子"],
  "种子含蓖麻毒蛋白（ricin），微量即可致肝肾功能衰竭，剧毒。")
P("相思豆/相思子", "Abrus precatorius / Rosary pea", ["鸡母珠", "美人豆"],
  "种子含相思豆毒蛋白（abrin），嚼碎吞下可致死，剧毒。")
P("苏铁/铁树", "Cycas", ["铁树", "凤尾蕉"],
  "种子与茎髓含苏铁苷，长期/大量致肝损伤，有致癌风险。")
P("马缨丹/五色梅", "Lantana", ["五色梅", "七变花"],
  "叶与未熟果含马缨丹烯，误食致肝损伤、光敏。")
P("含羞草", "Mimosa / Sensitive plant", ["知羞草"],
  "含含羞草碱，长期接触/饲养可能致脱发、影响甲状腺。")
P("罂粟/虞美人", "Poppy (Papaver)", ["虞美人", "鸦片花"],
  "含吗啡类生物碱，非法种植；果实/汁液具成瘾与中毒风险。")

# ===== 职业 / 环境类（occupational）=====
A(E("油漆/涂料（含苯系溶剂）", "Paint / Coatings (benzene solvents)", "caution", "occupational",
    ["油漆", "涂料", "乳胶漆(含溶剂)", "木器漆"],
    detail=("油漆、稀释剂常含苯、甲苯、二甲苯等芳香族溶剂，长期吸入可损害造血系统；"
            "作业人员注意通风与防护，孕妇及儿童远离施工现场。")))
A(E("对苯二胺（染发剂成分/PPD）", "p-Phenylenediamine (PPD)", "caution", "occupational",
    ["PPD", "染发剂成分", "乌尔丝"],
    detail=("对苯二胺是氧化型染发剂主要成分，可致严重接触性皮炎，少数个案报道溶血；"
            "染发前做皮肤试验，蚕豆病者慎用，避免染发剂接触头皮破损处。")))
A(E("橡胶防老剂（防老剂D/4010NA等）", "Rubber antioxidants", "caution", "occupational",
    ["防老剂D", "防老剂甲", "4010NA", "IPPD", "防老剂A"],
    detail=("橡胶制品（轮胎、胶管、手套）常用芳胺类防老剂（如防老剂D、4010NA），"
            "部分具氧化应激与泌尿/血液系统风险；相关行业人员注意防护。")))
A(E("苯胺及其衍生物", "Aniline & derivatives", "caution", "occupational",
    ["苯胺", "邻甲苯胺", "对氯苯胺", "联苯胺"],
    detail=("苯胺类芳香胺可诱发高铁血红蛋白血症与氧化溶血，属职业性血液毒物；"
            "接触后注意监测尿色与血象。")))
A(E("氢醌/对苯二酚", "Hydroquinone", "caution", "occupational",
    ["对苯二酚", "氢醌", "照相显影剂"],
    detail=("氢醌为强氧化剂，皮肤外用（美白）与职业接触在 G6PD 缺乏者中有溶血风险；"
            "避免大面积/长期外用含氢醌产品。")))
A(E("硝基苯", "Nitrobenzene", "caution", "occupational",
    ["硝基苯", "密斑油"],
    detail=("硝基苯可经皮肤吸收致高铁血红蛋白血症与溶血，属职业中毒物；注意防护。")))
A(E("天那水/香蕉水（稀释剂）", "Thinner / Banana oil", "caution", "occupational",
    ["天那水", "香蕉水", "松香水", "油漆稀释剂"],
    detail=("含甲苯、二甲苯、丙酮等，挥发气体长期吸入损害神经与造血；施工通风、戴口罩。")))
A(E("农药/杀虫剂（百草枯/有机磷等）", "Pesticides / Insecticides", "info", "occupational",
    ["百草枯", "有机磷", "敌敌畏", "杀虫剂"],
    detail=("农药主要风险是急性中毒（百草枯致肺纤维化、有机磷致胆碱能危象），并非 G6PD 溶血；"
            "但任何中毒都应在正规医院处理，就诊时主动告知蚕豆病史。")))
A(E("印刷油墨", "Printing ink", "info", "occupational",
    ["油墨", "印刷油", "报纸油墨"],
    detail=("油墨含溶剂与少量重金属，长期职业接触注意通风防护；主要风险非 G6PD 溶血。")))

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
        known.add(norm(eid)); known.add(key)
        for a in e["aliases"]:
            known.add(norm(a))
        e.setdefault("note", "")
        items.append(e)
        added += 1

    db["meta"]["version"] = "0.1.5"
    db["meta"]["updated"] = "2026-10-23"
    with open(DATA, "w", encoding="utf-8") as f:
        json.dump(db, f, ensure_ascii=False, indent=2, sort_keys=False)
        f.write("\n")
    print(f"已新增 {added} 条，跳过重复 {skipped} 条；当前共 {len(items)} 条；版本 {db['meta']['version']}。")

if __name__ == "__main__":
    main()

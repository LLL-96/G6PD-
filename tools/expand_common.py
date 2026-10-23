#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
扩展常见药覆盖（2026-10-23）：
- 常见中成药感冒/清热解毒类：标 caution/controversy，提示核对成分表（多含本库回避中药）。
- 常见“非诱发物”常用药：标 safe/info，让搜索能解析到明确结论，避免“未找到”吓人提示。
- 补品牌别名：百服咛→对乙酰氨基酚；999感冒灵→感冒灵。
所有新增均以“非经典诱发物按安全/提示处理，TCM 类按国内口径谨慎”为原则，并标注证据。
"""
import json
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = ROOT / "data" / "items.json"

db = json.loads(DATA.read_text(encoding="utf-8"))
items = db["items"]
existing = {it["id"] for it in items}
names = {it["name"] for it in items}


def add(d):
    if d["id"] in existing or d["name"] in names:
        print("跳过已存在:", d["name"])
        return
    items.append(d)
    existing.add(d["id"]); names.add(d["name"])


# ---------- 常见中成药（含多种中药成分，按国内口径谨慎）----------
tcm_cold = [
    ("pudilan", "蒲地蓝", "Pudilan", ["蒲地蓝消炎", "蒲地蓝消炎口服液", "蒲地蓝消炎片"],
     "清热解毒类中成药，常含黄芩、金银花、连翘等；其中金银花、连翘属本库回避中药，服用前务必核对成分表。",
     "caution"),
    ("lanqin", "蓝芩", "Lanqin", ["蓝芩口服液", "蓝芩颗粒"],
     "清热解毒类中成药，多含板蓝根、黄芩、栀子等，成分复杂，G6PD 患儿建议核对成分并咨询医生。",
     "caution"),
    ("banlangen", "板蓝根", "Banlangen / Isatis root", ["板蓝根颗粒", "复方板蓝根"],
     "常见清热解毒中成药；虽部分资料认为相对温和，但成分复杂，G6PD 患儿使用建议咨询医生。",
     "caution"),
    ("lianhua", "连花清瘟", "Lianhua Qingwen", ["连花清瘟胶囊", "连花清瘟颗粒"],
     "常见清热解毒中成药，含连翘、金银花、薄荷脑等；其中连翘、金银花属本库回避中药，服用前核对成分表。",
     "caution"),
    ("xiaochaihu", "小柴胡颗粒", "Xiaochaihu", ["小柴胡"],
     "和解类中成药，成分含柴胡、黄芩、姜半夏等，成分复杂，G6PD 患儿建议咨询医生后使用。",
     "caution"),
    ("xiaoershaoqiao", "小儿豉翘清热颗粒", "Xiao'er Shaoqiao", ["豉翘", "小儿豉翘"],
     "儿科常用清热颗粒，含连翘、薄荷、淡豆豉等；连翘、薄荷属本库回避中药，服用前核对成分表。",
     "caution"),
    ("ganmaoqingre", "感冒清热颗粒", "Ganmao Qingre", ["感冒清热", "感冒清热冲剂"],
     "疏风散寒类中成药，成分含荆芥、薄荷、防风等；薄荷属本库回避中药，服用前核对成分表。",
     "caution"),
    ("jizhi", "急支糖浆", "Jizhi Tangjiang", ["急支"],
     "止咳化痰中成药，含鱼腥草、金荞麦、麻黄等，成分复杂，G6PD 患儿建议咨询医生。",
     "caution"),
    ("beibipingba", "蜜炼川贝枇杷膏", "Beibipingba Gao", ["川贝枇杷膏", "枇杷膏"],
     "润肺止咳膏剂，成分复杂（多含川贝、枇杷叶、蜂蜜等），G6PD 患儿建议核对成分并咨询医生。",
     "info"),
    ("kangbingdu", "抗病毒口服液", "Kangbingdu", ["抗病毒", "抗病毒颗粒"],
     "清热解毒类中成药，成分复杂，G6PD 患儿建议咨询医生后使用。",
     "info"),
]
for i, (id_, name, en, aliases, note, risk) in enumerate(tcm_cold):
    add({
        "id": id_, "name": name, "en": en, "aliases": aliases,
        "category": "tcm", "risk": risk,
        "summary": "中成药（成分复杂），建议核对成分表并咨询医生。",
        "detail": note,
        "note": "中成药大多由多味中药组成，难以逐一判定；凡含本库已列回避成分（黄连/金银花/牛黄/连翘/薄荷/冰片/熊胆/腊梅花/珍珠等）者，按国内口径回避。",
        "controversy": True,
        "sources": ["S1", "S3"],
    })

# ---------- 常见“非诱发物”常用药（标 safe/info，让搜索有结论）----------
safe_common = [
    ("loratadine", "氯雷他定", "Loratadine", ["开瑞坦", "克敏能"],
     "第二代抗组胺药，非 G6PD 诱发物，常规剂量一般可用。", "safe", ["S2", "S7"]),
    ("cetirizine", "西替利嗪", "Cetirizine", ["仙特明", "迪皿"],
     "第二代抗组胺药，非 G6PD 诱发物，常规剂量一般可用。", "safe", ["S2", "S7"]),
    ("montelukast", "孟鲁司特", "Montelukast", ["顺尔宁"],
     "白三烯受体拮抗剂（平喘/抗过敏），非 G6PD 诱发物，常规剂量一般可用。", "safe", ["S2"]),
    ("ambroxol", "氨溴索", "Ambroxol", ["沐舒坦", "盐酸氨溴索"],
     "祛痰药，非 G6PD 诱发物，常规剂量一般可用。", "safe", ["S2", "S7"]),
    ("yitanjing", "易坦静", "Yitanjing", ["氨溴特罗", "氨溴特罗口服溶液"],
     "含氨溴索+克仑特罗的复方祛痰平喘口服液；两者均非已知 G6PD 诱发物，一般可用，按医嘱。", "safe", ["S2"]),
    ("smecta", "蒙脱石散", "Smectite / Diosmectite", ["思密达", "蒙脱石"],
     "止泻吸附剂，不被吸收，非 G6PD 诱发物，腹泻时可按医嘱使用。", "safe", ["S2"]),
    ("mami", "妈咪爱", "Medilac-Vita", ["枯草杆菌二联活菌", "益生菌颗粒"],
     "益生菌制剂，非 G6PD 诱发物，一般可用。", "info", ["S2"]),
    ("probiotic", "益生菌", "Probiotics", ["乳酸菌", "双歧杆菌", "合生元"],
     "肠道微生态制剂，非 G6PD 诱发物，一般可用。", "info", ["S2"]),
    ("calciumglu", "葡萄糖酸钙", "Calcium gluconate", ["钙", "葡萄糖钙"],
     "补钙/抗过敏辅助，非 G6PD 诱发物，常规剂量一般可用。", "safe", ["S2"]),
    ("vitd", "维生素D", "Vitamin D", ["维D", "星鲨", "D3"],
     "常规营养补充，非 G6PD 诱发物，一般可用。", "safe", ["S2"]),
    ("calpol", "炉甘石", "Calamine", ["炉甘石洗剂"],
     "外用止痒收敛剂，不被吸收，非 G6PD 诱发物，可安全外用。", "safe", ["S2"]),
    ("zincoxide", "氧化锌", "Zinc oxide", ["氧化锌软膏", "护臀霜"],
     "外用保护剂，不被吸收，非 G6PD 诱发物，可安全外用。", "safe", ["S2"]),
    ("hydrocort", "氢化可的松", "Hydrocortisone", ["氢化可的松乳膏"],
     "外用糖皮质激素，局部吸收少，非 G6PD 诱发物，可外用。", "safe", ["S2", "S7"]),
    ("mupirocin", "莫匹罗星", "Mupirocin", ["百多邦"],
     "外用抗生素（针对革兰氏阳性菌），不被吸收，非 G6PD 诱发物，可安全外用。", "safe", ["S2"]),
    ("iodophor", "碘伏", "Povidone-iodine", ["碘伏消毒液", "安尔碘"],
     "外用消毒剂，皮肤黏膜消毒，非 G6PD 诱发物，可安全外用。", "safe", ["S2"]),
    ("alcohol", "酒精", "Ethanol / Alcohol", ["乙醇", "75%酒精", "医用酒精"],
     "外用消毒剂，不被吸收，非 G6PD 诱发物，可用于皮肤消毒。", "info", ["S2"]),
    ("miconazole", "达克宁", "Miconazole", ["咪康唑", "硝酸咪康唑"],
     "外用抗真菌药（脚气/股癣），局部吸收少，非 G6PD 诱发物，可安全外用。", "safe", ["S2", "S7"]),
    ("ceftriaxone", "头孢曲松", "Ceftriaxone", ["罗氏芬", "头孢三嗪"],
     "第三代头孢菌素，非 G6PD 诱发物，常规剂量一般可用（与青霉素类一致）。", "safe", ["S2", "S7"]),
    ("salbutamol", "沙丁胺醇", "Salbutamol", ["舒喘灵", "万托林"],
     "β2 受体激动剂（平喘），非 G6PD 诱发物，喘息时按医嘱使用。", "info", ["S2", "S7"]),
    ("budesonide", "布地奈德", "Budesonide", ["普米克", "雷诺考特"],
     "吸入/鼻用糖皮质激素（平喘/鼻炎），局部作用，非 G6PD 诱发物，按医嘱使用。", "info", ["S2", "S7"]),
    ("gentamicin", "庆大霉素", "Gentamicin", ["硫酸庆大霉素"],
     "氨基糖苷类抗生素；并非经典 G6PD 诱发物，但个例报道与溶血相关，且有耳肾毒性，儿科需谨慎评估。", "caution", ["S2", "S7"]),
]
for (id_, name, en, aliases, note, risk, src) in safe_common:
    add({
        "id": id_, "name": name, "en": en, "aliases": aliases,
        "category": "other_drug", "risk": risk,
        "summary": note.split("，")[0] + "。",
        "detail": note,
        "note": ("证据说明：上述多为非经典 G6PD 诱发物；如合并其他疾病或多种用药，仍请遵医嘱。" if risk == "safe"
                 else "证据有限/存在个别报道，需医生评估。"),
        "controversy": (risk == "caution"),
        "sources": src,
    })

# ---------- 补品牌别名 ----------
for it in items:
    if it["name"] == "对乙酰氨基酚":
        if "百服咛" not in it["aliases"]:
            it["aliases"].append("百服咛")
    if it["name"] == "感冒灵":
        if "999感冒灵" not in it["aliases"]:
            it["aliases"].append("999感冒灵")

db["meta"]["version"] = "0.1.2"
db["meta"]["updated"] = "2026-10-23"

DATA.write_text(json.dumps(db, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"新增后条目总数：{len(items)}")

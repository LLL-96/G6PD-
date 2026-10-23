#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
系统化批量导入常见药品（按大类），最大化「即搜即有」覆盖率。
策略：
  - 已知氧化性诱发物（禁用）已在库中，绝不再以 safe 加入；
  - 绝大多数非氧化性常用药 → safe（相对安全，需遵医嘱）；
  - 个别证据有限/有报道者 → caution；
  - 未知项由 CLI/网页的「ℹ️ 提示」兜底，保证即搜即有。
运行：python tools/bulk_import.py
"""
import json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data", "items.json")

def norm(s):
    return "".join(str(s).lower().split())

# 按风险给出默认结论/说明，减少逐条书写
DEFAULT_SUMMARY = {
    "safe": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
    "caution": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用。",
    "info": "与 G6PD 相关的一般性提示。",
}
DEFAULT_DETAIL = {
    "safe": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
    "caution": "现有资料对其与 G6PD 溶血的关联证据有限或存在个别报道，不建议自行服用；必要时由医生权衡利弊后使用，并加强尿色/血象监测。",
    "info": "用药或接种前请主动告知蚕豆病史，出现尿色变深、发黄苍白等立即就医。",
}

# 条目：name, en, risk, category, [aliases], summary=None, detail=None, controversy=False, sources=None
def E(name, en, risk, category, aliases=None, summary=None, detail=None, controversy=False, sources=None):
    return dict(name=name, en=en, risk=risk, category=category,
                aliases=aliases or [],
                summary=summary or DEFAULT_SUMMARY[risk],
                detail=detail or DEFAULT_DETAIL[risk],
                controversy=controversy,
                sources=sources or (["S7", "S1"] if risk == "safe" else ["S4", "S7"]))

ENTRIES = []
A = ENTRIES.append

# ===== 解热镇痛（NSAID 类，统一 caution）=====
nsaid_detail = ("NSAID 类解热镇痛药。虽然不像阿司匹林那样是明确禁忌，但个别病例报告与溶血相关，"
               "且蚕豆病急性期、发热或感染时应避免使用；不建议自行服用，需医生评估。")
for n, e, al in [
    ("双氯芬酸", "Diclofenac", ["扶他林", "戴芬", "英太青"]),
    ("洛索洛芬", "Loxoprofen", ["乐松"]),
    ("萘普生", "Naproxen", ["萘普生钠"]),
    ("美洛昔康", "Meloxicam", ["莫比可"]),
    ("塞来昔布", "Celecoxib", ["西乐葆"]),
    ("吲哚美辛", "Indometacin", ["消炎痛"]),
    ("依托考昔", "Etoricoxib", ["安康信"]),
    ("氟比洛芬", "Flurbiprofen", ["氟比洛芬酯"]),
]:
    A(E(n, e, "caution", "analgesic", al, detail=nsaid_detail))

# ===== 抗生素：青霉素类（safe）=====
for n, e, al in [
    ("阿莫西林", "Amoxicillin", ["阿莫仙", "阿莫灵", "联邦阿莫仙"]),
    ("氨苄西林", "Ampicillin", ["氨苄青霉素"]),
    ("哌拉西林他唑巴坦", "Piperacillin/Tazobactam", ["特治星"]),
    ("阿莫西林克拉维酸钾", "Amoxicillin/Clavulanate", ["力百汀", "安灭菌", "菌必治(混)"]),
    ("青霉素V", "Phenoxymethylpenicillin", ["青霉素Ⅴ钾"]),
]:
    A(E(n, e, "safe", "antibiotic_other", al))

# ===== 抗生素：头孢菌素类（safe）=====
for n, e, al in [
    ("头孢克肟", "Cefixime", ["世福素", "立克舒"]),
    ("头孢呋辛", "Cefuroxime", ["西力欣", "新福欣"]),
    ("头孢拉定", "Cefradine", ["泛捷复", "先锋Ⅵ"]),
    ("头孢氨苄", "Cefalexin", ["先锋Ⅳ", "头孢Ⅳ号"]),
    ("头孢地尼", "Cefdinir", ["全泽复"]),
    ("头孢他啶", "Ceftazidime", ["复达欣", "凯复定"]),
    ("头孢克洛", "Cefaclor", ["希刻劳", "新达罗"]),
    ("头孢哌酮舒巴坦", "Cefoperazone/Sulbactam", ["舒普深"]),
]:
    A(E(n, e, "safe", "antibiotic_other", al))

# ===== 抗生素：大环内酯类（safe）=====
for n, e, al in [
    ("阿奇霉素", "Azithromycin", ["希舒美", "阿奇霉素干混悬剂"]),
    ("红霉素", "Erythromycin", ["依托红霉素", "琥乙红霉素"]),
    ("克拉霉素", "Clarithromycin", ["克拉仙", "甲红霉素"]),
    ("罗红霉素", "Roxithromycin", ["罗力得"]),
]:
    A(E(n, e, "safe", "antibiotic_other", al))

# ===== 抗生素：氨基糖苷类（safe）=====
for n, e, al in [
    ("阿米卡星", "Amikacin", ["丁胺卡那霉素"]),
    ("妥布霉素", "Tobramycin", ["托百士(眼用)"]),
    ("链霉素", "Streptomycin", []),
]:
    A(E(n, e, "safe", "antibiotic_other", al))

# ===== 抗生素：四环素类（safe）=====
for n, e, al in [
    ("多西环素", "Doxycycline", ["强力霉素", "多西环素"]),
    ("米诺环素", "Minocycline", ["美满霉素"]),
    ("四环素", "Tetracycline", []),
]:
    A(E(n, e, "safe", "antibiotic_other", al))

# ===== 抗生素：其他（safe）=====
for n, e, al in [
    ("克林霉素", "Clindamycin", ["氯洁霉素", "克林霉素磷酸酯"]),
    ("万古霉素", "Vancomycin", ["稳可信"]),
    ("利奈唑胺", "Linezolid", ["斯沃"]),
    ("替考拉宁", "Teicoplanin", ["他格适"]),
]:
    A(E(n, e, "safe", "antibiotic_other", al))

# ===== 抗病毒药 =====
A(E("奥司他韦", "Oseltamivir", "safe", "antibiotic_other", ["达菲", "可威"]))
A(E("阿昔洛韦", "Acyclovir", "safe", "antibiotic_other", ["无环鸟苷", "舒维疗"]))
A(E("伐昔洛韦", "Valacyclovir", "safe", "antibiotic_other", ["维德思"]))
A(E("更昔洛韦", "Ganciclovir", "safe", "antibiotic_other", ["赛美维"]))
A(E("泛昔洛韦", "Famciclovir", "safe", "antibiotic_other", []))
A(E("利巴韦林", "Ribavirin", "caution", "antibiotic_other",
    ["病毒唑"],
    detail=("利巴韦林有诱发溶血的报道（尤其大剂量或特定人群），且具明确致畸性；"
            "蚕豆病者应避免使用，必须使用时由医生严格评估并监测。")))

# ===== 抗真菌药 =====
for n, e, al in [
    ("氟康唑", "Fluconazole", ["大扶康", "三联"]),
    ("伊曲康唑", "Itraconazole", ["斯皮仁诺"]),
    ("酮康唑", "Ketoconazole", ["里素劳"]),
    ("制霉菌素", "Nystatin", ["制霉素"]),
    ("特比萘芬", "Terbinafine", ["兰美抒", "疗霉舒"]),
    ("克霉唑", "Clotrimazole", ["克霉唑阴道片"]),
]:
    A(E(n, e, "safe", "antibiotic_other", al))

# ===== 抗过敏（H1 抗组胺，safe）=====
for n, e, al in [
    ("氯苯那敏", "Chlorphenamine", ["扑尔敏", "马来酸氯苯那敏"]),
    ("左西替利嗪", "Levocetirizine", ["迪皿"]),
    ("地氯雷他定", "Desloratadine", ["恩理思", "芙必叮"]),
    ("非索非那定", "Fexofenadine", ["阿乐迈", "毕研通"]),
    ("依巴斯汀", "Ebastine", ["开思亭"]),
    ("咪唑斯汀", "Mizolastine", ["皿治林"]),
    ("赛庚啶", "Cyproheptadine", ["赛庚啶片"]),
]:
    A(E(n, e, "safe", "neuro", al))

A(E("异丙嗪", "Promethazine", "caution", "neuro", ["非那根"],
    detail=("异丙嗪（非那根）结构上与吩噻嗪相关，少数资料显示其可能参与氧化应激；"
            "虽非绝对禁忌，但谨慎起见建议咨询医生后使用。")))
# 苯海拉明已在库（caution），氯雷他定/西替利嗪已在库（safe）

# ===== 呼吸系统（止咳化痰/平喘，safe）=====
resp_safe_detail = ("该药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；"
                   "用药仍须遵医嘱，并主动告知蚕豆病史。")
for n, e, al in [
    ("氨茶碱", "Aminophylline", ["茶碱缓释片(同族)"]),
    ("茶碱", "Theophylline", []),
    ("乙酰半胱氨酸", "Acetylcysteine", ["痰易净", "富露施"]),
    ("右美沙芬", "Dextromethorphan", ["氢溴酸右美沙芬", "美可糖浆"]),
    ("异丙托溴铵", "Ipratropium", ["爱全乐"]),
    ("噻托溴铵", "Tiotropium", ["思力华"]),
    ("倍氯米松", "Beclometasone", ["必可酮", "伯克纳"]),
    ("氟替卡松", "Fluticasone", ["辅舒酮", "辅舒良"]),
    ("沙美特罗", "Salmeterol", ["舒利迭(合用)"]),
]:
    A(E(n, e, "safe", "other_drug", al, detail=resp_safe_detail))

A(E("复方甘草片", "Compound Liquorice Tablets", "caution", "other_drug", ["复方甘草合剂"],
    detail=("含甘草流浸膏、阿片粉及樟脑等成分，复方制剂成分复杂；"
            "虽非典型氧化性诱发物，但蚕豆病者建议慎用或改用单一成分止咳药，并咨询药师。")))

# ===== 消化系统（safe）=====
gi_detail = ("该消化/胃肠药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；"
            "长期或大剂量使用请遵医嘱。")
for n, e, al in [
    ("奥美拉唑", "Omeprazole", ["洛赛克", "奥克"]),
    ("泮托拉唑", "Pantoprazole", ["潘妥洛克"]),
    ("雷贝拉唑", "Rabeprazole", ["波利特"]),
    ("兰索拉唑", "Lansoprazole", ["达克普隆"]),
    ("埃索美拉唑", "Esomeprazole", ["耐信"]),
    ("铝碳酸镁", "Hydrotalcite", ["达喜"]),
    ("西咪替丁", "Cimetidine", ["泰胃美"]),
    ("雷尼替丁", "Ranitidine", ["善胃得"]),
    ("法莫替丁", "Famotidine", ["高舒达", "信法丁"]),
    ("多潘立酮", "Domperidone", ["吗丁啉", "恒邦"]),
    ("莫沙必利", "Mosapride", ["加斯清"]),
    ("乳果糖", "Lactulose", ["杜密克"]),
    ("开塞露", "Glycerin Enema", ["甘油栓"]),
    ("口服补液盐", "Oral Rehydration Salts", ["ORS", "博叶"]),
    ("硫糖铝", "Sucralfate", ["胃溃宁"]),
    ("胶体果胶铋", "Colloidal Bismuth Pectin", ["果胶铋"]),
    ("复方消化酶", "Compound Digestive Enzyme", ["达吉", "慷彼申"]),
]:
    A(E(n, e, "safe", "other_drug", al, detail=gi_detail))

# ===== 心血管系统（safe）=====
cv_detail = ("该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；"
            "慢性病患者请继续遵专科医嘱用药，勿自行停药。")
for n, e, al in [
    ("普萘洛尔", "Propranolol", ["心得安"]),
    ("美托洛尔", "Metoprolol", ["倍他乐克"]),
    ("比索洛尔", "Bisoprolol", ["康忻", "博苏"]),
    ("阿替洛尔", "Atenolol", ["氨酰心安"]),
    ("氨氯地平", "Amlodipine", ["络活喜", "压氏达"]),
    ("硝苯地平", "Nifedipine", ["心痛定", "拜新同"]),
    ("非洛地平", "Felodipine", ["波依定"]),
    ("缬沙坦", "Valsartan", ["代文"]),
    ("氯沙坦", "Losartan", ["科素亚"]),
    ("厄贝沙坦", "Irbesartan", ["安博维"]),
    ("卡托普利", "Captopril", ["开博通"]),
    ("依那普利", "Enalapril", ["依苏", "悦宁定"]),
    ("培哚普利", "Perindopril", ["雅施达"]),
    ("呋塞米", "Furosemide", ["速尿", "呋喃苯胺酸"]),
    ("氢氯噻嗪", "Hydrochlorothiazide", ["双氢克尿噻"]),
    ("螺内酯", "Spironolactone", ["安体舒通"]),
    ("地高辛", "Digoxin", []),
    ("阿托伐他汀", "Atorvastatin", ["立普妥"]),
    ("瑞舒伐他汀", "Rosuvastatin", ["可定"]),
    ("辛伐他汀", "Simvastatin", ["舒降之"]),
    ("氯吡格雷", "Clopidogrel", ["波立维", "泰嘉"]),
    ("华法林", "Warfarin", ["苄丙酮香豆素"]),
    ("普罗帕酮", "Propafenone", ["心律平"]),
    ("维拉帕米", "Verapamil", ["异搏定"]),
    ("地尔硫卓", "Diltiazem", ["合心爽", "恬尔心"]),
]:
    A(E(n, e, "safe", "cardiovascular", al, detail=cv_detail))

A(E("胺碘酮", "Amiodarone", "caution", "cardiovascular", ["可达龙", "乙胺碘呋酮"],
    detail=("胺碘酮含碘，长期大剂量使用有少数溶血相关报道；虽非绝对禁忌，"
            "但蚕豆病者在心律管理上应由心内科医生评估后使用并监测。")))

# ===== 内分泌/代谢（safe/caution）=====
for n, e, al in [
    ("二甲双胍", "Metformin", ["格华止", "美迪康"]),
    ("阿卡波糖", "Acarbose", ["拜糖平", "卡博平"]),
    ("瑞格列奈", "Repaglinide", ["诺和龙"]),
    ("吡格列酮", "Pioglitazone", ["艾可拓"]),
    ("胰岛素", "Insulin", ["重组人胰岛素", "甘精胰岛素", "门冬胰岛素"]),
    ("左甲状腺素", "Levothyroxine", ["优甲乐", "雷替斯"]),
    ("泼尼松", "Prednisone", ["强的松"]),
    ("甲泼尼龙", "Methylprednisolone", ["甲强龙", "美卓乐"]),
    ("地塞米松", "Dexamethasone", ["氟美松"]),
    ("阿仑膦酸钠", "Alendronate", ["福善美"]),
]:
    A(E(n, e, "safe", "metabolic", al))

A(E("别嘌醇", "Allopurinol", "caution", "metabolic", ["痛风立克", "别嘌呤醇"],
    detail=("别嘌醇含硫脲结构，个别病例报告与溶血及严重过敏相关；"
            "蚕豆病者降尿酸应谨慎，由医生权衡利弊，必要时换用非布司他并监测。")))
# 磺酰脲类（格列本脲/美脲/齐特）已在库 caution

# ===== 维生素/营养补充（safe）=====
vit_detail = ("该维生素/补充剂不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；"
             "避免盲目大剂量补充。")
for n, e, al in [
    ("维生素B1", "Vitamin B1", ["硫胺素"]),
    ("维生素B2", "Vitamin B2", ["核黄素"]),
    ("维生素B6", "Vitamin B6", ["吡哆醇"]),
    ("维生素B12", "Vitamin B12", ["钴胺素", "甲钴胺"]),
    ("叶酸", "Folic Acid", ["叶酸片"]),
    ("维生素E", "Vitamin E", ["生育酚"]),
    ("复合维生素", "Multivitamin", ["多维元素片", "善存", "金施尔康"]),
    ("葡萄糖酸锌", "Zinc Gluconate", ["葡萄糖酸锌口服液"]),
    ("铁剂", "Iron Supplement", ["硫酸亚铁", "富马酸亚铁", "右旋糖酐铁", "蛋白琥珀酸铁"]),
]:
    A(E(n, e, "safe", "other_drug", al, detail=vit_detail))
# 维生素C(大剂量)/K1/K3、钙剂、益生菌、妈咪爱、葡萄糖酸钙已在库

# ===== 疫苗（新类别，safe）=====
vac_detail = ("疫苗本身不诱发 G6PD 溶血，多数权威资料将其列入可接种范围。"
             "少数儿童接种后可能发热，而发热/感染可加重溶血风险；"
             "接种后注意补水、监测尿色，出现浓茶色尿立即就医。")
for n, e in [
    ("流感疫苗", "Influenza Vaccine"),
    ("乙肝疫苗", "Hepatitis B Vaccine"),
    ("百白破疫苗", "DTP Vaccine"),
    ("麻疹疫苗", "Measles Vaccine"),
    ("水痘疫苗", "Varicella Vaccine"),
    ("肺炎球菌疫苗", "Pneumococcal Vaccine"),
    ("HPV疫苗", "HPV Vaccine"),
    ("新冠疫苗", "COVID-19 Vaccine"),
    ("卡介苗", "BCG Vaccine"),
    ("脊髓灰质炎疫苗", "Polio Vaccine"),
    ("轮状病毒疫苗", "Rotavirus Vaccine"),
    ("麻腮风疫苗", "MMR Vaccine"),
]:
    A(E(n, e, "safe", "vaccine", [], detail=vac_detail))

# ===== 外用/皮肤（safe）=====
skin_detail = ("该外用/局部制剂全身吸收少，不属于已知 G6PD 氧化性诱发物，一般可用；"
              "大面积破损皮肤使用请遵医嘱。")
for n, e, al in [
    ("红霉素软膏", "Erythromycin Ointment", []),
    ("阿昔洛韦乳膏", "Aciclovir Cream", ["无环鸟苷乳膏"]),
    ("氟轻松", "Fluocinolone", ["肤轻松"]),
    ("醋酸地塞米松乳膏", "Dexamethasone Acetate Cream", ["皮炎平(含)"]),
    ("尿素软膏", "Urea Ointment", ["尿素维E乳膏"]),
    ("维A酸乳膏", "Tretinoin Cream", ["迪维", "维特明"]),
    ("鱼石脂", "Ichthammol", ["鱼石脂软膏"]),
    ("水杨酸软膏", "Salicylic Acid Ointment", []),
    ("创可贴", "Adhesive Bandage", ["苯扎氯铵贴"]),
    ("红霉素眼膏", "Erythromycin Eye Ointment", []),
    ("妥布霉素滴眼液", "Tobramycin Eye Drops", ["托百士"]),
    ("色甘酸钠滴眼液", "Sodium Cromoglicate Eye Drops", ["宁敏"]),
    ("玻璃酸钠滴眼液", "Sodium Hyaluronate Eye Drops", ["润舒", "爱丽"]),
    ("金霉素眼膏", "Chlortetracycline Eye Ointment", []),
]:
    A(E(n, e, "safe", "other_drug", al, detail=skin_detail))

A(E("氧氟沙星滴眼液", "Ofloxacin Eye Drops", "caution", "other_drug", ["泰利必妥"],
    detail=("氧氟沙星属氟喹诺酮类（XX沙星），口服/全身用药多与溶血风险相关、列为慎用；"
            "滴眼液局部吸收少，通常认为风险低，但仍建议咨询医生后使用。")))
A(E("氯霉素滴眼液", "Chloramphenicol Eye Drops", "caution", "other_drug", ["润舒(含氯霉素)"],
    detail=("氯霉素全身用药在 G6PD 缺乏症中明确禁用；滴眼液局部吸收少，风险相对低，"
            "但婴幼儿及长期使用者建议咨询医生，优先选其他抗菌滴眼液。")))

# ===== 鼻用/耳鼻喉（safe）=====
ent_detail = ("该鼻用/局部制剂全身吸收少，不属于已知 G6PD 氧化性诱发物，一般可用。")
for n, e, al in [
    ("生理性海水鼻喷雾", "Saline Nasal Spray", ["生理盐水喷鼻", "诺斯清"]),
    ("糠酸莫米松鼻喷雾", "Mometasone Nasal Spray", ["内舒拿"]),
    ("布地奈德鼻喷雾", "Budesonide Nasal Spray", ["雷诺考特"]),
    ("氮卓斯汀鼻喷雾", "Azelastine Nasal Spray", ["爱赛平"]),
]:
    A(E(n, e, "safe", "other_drug", al, detail=ent_detail))

# ===== 精神/神经（safe/caution）=====
for n, e, al in [
    ("地西泮", "Diazepam", ["安定"]),
    ("艾司唑仑", "Estazolam", ["舒乐安定"]),
    ("唑吡坦", "Zolpidem", ["思诺思", "思梦还"]),
    ("舍曲林", "Sertraline", ["左洛复", "郁乐复"]),
    ("氟西汀", "Fluoxetine", ["百忧解"]),
    ("帕罗西汀", "Paroxetine", ["赛乐特", "乐友"]),
    ("米氮平", "Mirtazapine", ["瑞美隆"]),
    ("奥氮平", "Olanzapine", ["再普乐", "欧兰宁"]),
    ("喹硫平", "Quetiapine", ["思瑞康"]),
    ("加巴喷丁", "Gabapentin", ["纽诺汀"]),
    ("普瑞巴林", "Pregabalin", ["乐瑞卡"]),
]:
    A(E(n, e, "safe", "neuro", al))

A(E("丙戊酸钠", "Sodium Valproate", "caution", "neuro", ["德巴金", "丙戊酸镁"],
    detail=("丙戊酸有个别溶血/肝功能损害报道，且具明确致畸性；"
            "蚕豆病者使用抗癫痫药应由神经科评估，并定期监测。")))
A(E("卡马西平", "Carbamazepine", "caution", "neuro", ["得理多", "卡马西平缓释片"],
    detail=("卡马西平可见严重皮肤反应及个别血液系统异常报道；"
            "蚕豆病者使用应由神经科评估利弊并监测。")))

# ===== 造影剂/诊断用药（safe）=====
for n, e, al in [
    ("碘海醇", "Iohexol", ["欧乃派克"]),
    ("碘普罗胺", "Iopromide", ["优维显"]),
    ("硫酸钡", "Barium Sulfate", ["钡餐"]),
]:
    A(E(n, e, "safe", "other_drug", al,
        detail=("碘对比剂/钡剂本身不诱发 G6PD 溶血，增强造影前告知病史即可；"
                "检查后多饮水促进排泄。")))

# ===== 激素/避孕（safe/info）=====
A(E("黄体酮", "Progesterone", "safe", "metabolic", ["孕酮", "地屈孕酮"]))
A(E("雌激素", "Estrogen", "safe", "metabolic", ["戊酸雌二醇", "结合雌激素"]))
A(E("复方口服避孕药", "Combined Oral Contraceptive", "info", "metabolic", ["短效避孕药", "妈富隆", "达英35"],
    detail=("含雌激素/孕激素的复方避孕药一般不属于 G6PD 氧化性诱发物，多数资料视为可用；"
            "个体耐受不同，使用前咨询医师或药师。")))

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
        eid = e["name"]  # 以中文名作 id（JSON 允许）
        while norm(eid) in known:
            eid = eid + "_"
        e["id"] = eid
        known.add(norm(eid))
        known.add(key)
        for a in e["aliases"]:
            known.add(norm(a))
        # 强制字段完整
        e.setdefault("note", "")
        items.append(e)
        added += 1

    db["meta"]["version"] = "0.1.3"
    db["meta"]["updated"] = "2026-10-24"
    # 确保 vaccine 类别存在（仅兜底，真正注册在 lookup.py/app.js）
    with open(DATA, "w", encoding="utf-8") as f:
        json.dump(db, f, ensure_ascii=False, indent=2, sort_keys=False)
        f.write("\n")
    print(f"已新增 {added} 条，跳过重复 {skipped} 条；当前共 {len(items)} 条。")

if __name__ == "__main__":
    main()

#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""系统补齐常见药缺口：按真实药理分类定级，同类复用安全结论。
安全类：未列入 G6PD 禁忌/慎用名单，按所属类别常规可用（用药遵医嘱）。
慎用类：有 G6PD 相关溶血/骨髓抑制/氧化应激等证据或需特别留意的，标慎用并注明。
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
F = os.path.join(ROOT, "data", "items.json")
d = json.load(open(F, encoding="utf-8"))
known = {i["name"] for i in d["items"]}
known_norm = {re.sub(r"\s+", "", i["name"]).lower() for i in d["items"]}
by_alias = set()
for i in d["items"]:
    for a in i.get("aliases", []):
        by_alias.add(re.sub(r"\s+", "", a).lower())

def norm(s): return re.sub(r"\s+", "", s).lower()

# 通用文案
SAFE_SUM = "属于{cls}，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。"
SAFE_DET = "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。"
SAFE_NOTE = "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。"

entries = []
def add(name, cat, risk, summary, detail, note, controversy, sources, aliases=None):
    if norm(name) in known_norm or norm(name) in by_alias:
        return
    eid = "gap_" + re.sub(r"[^\w一-鿿]", "_", name)
    entries.append({
        "id": eid, "name": name, "risk": risk, "category": cat,
        "summary": summary, "detail": detail, "note": note,
        "controversy": controversy, "sources": sources,
        "aliases": aliases or []
    })

# ---------- 抗生素（多数安全） ----------
abx = [
 ("苯唑西林","青霉素类（耐酶）"),("美洛西林","青霉素类（广谱）"),
 ("头孢唑林","头孢菌素（一代）"),("头孢西丁","头孢菌素（二代/头霉素）"),
 ("头孢孟多","头孢菌素（二代）"),("头孢硫脒","头孢菌素（一代）"),
 ("乙酰螺旋霉素","大环内酯类"),("麦迪霉素","大环内酯类"),
 ("依替米星","氨基糖苷类"),("奈替米星","氨基糖苷类"),
 ("土霉素","四环素类"),("洛美沙星","氟喹诺酮类"),("奥硝唑","硝基咪唑类"),
]
for n, cls in abx:
    add(n, "antibiotic_other", "safe",
        SAFE_SUM.format(cls=cls), SAFE_DET, SAFE_NOTE, False, ["S7","S2"])

# ---------- 解热镇痛 / NSAID ----------
add("吡罗昔康","analgesic","caution",
    "吡罗昔康属非甾体抗炎药（NSAID）。","NSAID 可能抑制血小板、个别人群存在氧化应激顾虑，部分 G6PD 资料将其列为慎用。",
    "急性发作期或感染发热时，优先咨询医生；可用对乙酰氨基酚作为更稳妥的退热选择。", True, ["S7","S2"])
add("尼美舒利","analgesic","caution",
    "尼美舒利属非甾体抗炎药（NSAID），儿童使用受限。","与多数 NSAID 类似，存在氧化应激顾虑，部分资料列为慎用；且儿童应用本身受限制。",
    "退热止痛优先选对乙酰氨基酚；尼美舒利不建议用于儿童。", True, ["S7","S2"])
add("瑞巴派特","analgesic","safe",
    "瑞巴派特是胃黏膜保护剂，非 NSAID。", SAFE_DET, SAFE_NOTE, False, ["S7"])

# ---------- 抗病毒（安全） ----------
for n in ["金刚烷胺","干扰素","恩替卡韦","替诺福韦","拉米夫定","阿德福韦酯","替比夫定"]:
    add(n, "antiviral", "safe", SAFE_SUM.format(cls="抗病毒药"), SAFE_DET, SAFE_NOTE, False, ["S7","S2"])

# ---------- 抗真菌（安全） ----------
for n, cls in [("两性霉素B","多烯类抗真菌"),("伏立康唑","三唑类抗真菌"),("卡泊芬净","棘白菌素类抗真菌")]:
    add(n, "antifungal", "safe", SAFE_SUM.format(cls=cls), SAFE_DET, SAFE_NOTE, False, ["S7","S2"])

# ---------- 抗组胺 ----------
add("酮替芬","antihistamine","safe",
    "酮替芬是抗组胺/抗过敏药。", SAFE_DET, SAFE_NOTE, False, ["S7"])
add("司他斯汀","antihistamine","safe",
    "司他斯汀是抗组胺药。", SAFE_DET, SAFE_NOTE, False, ["S7"])

# ---------- 心血管（安全） ----------
cv = ["替米沙坦","坎地沙坦","福辛普利","赖诺普利","吲达帕胺","托拉塞米",
      "曲美他嗪","尼可地尔","非诺贝特","普罗布考","藻酸双酯钠","决奈达隆","伊布利特"]
for n in cv:
    add(n, "cardiovascular", "safe", SAFE_SUM.format(cls="心血管用药"), SAFE_DET, SAFE_NOTE, False, ["S7","S2"])

# ---------- 内分泌/代谢 ----------
endo = ["格列吡嗪","西格列汀","沙格列汀","达格列净","利拉鲁肽",
        "甲巯咪唑","丙硫氧嘧啶","卡比马唑",
        "非布司他","苯溴马隆","碳酸氢钠","碳酸钙","骨化三醇","阿法骨化醇"]
for n in endo:
    add(n, "metabolic", "safe", SAFE_SUM.format(cls="内分泌/代谢用药"), SAFE_DET, SAFE_NOTE, False, ["S7","S2"])

# ---------- 呼吸 ----------
resp = ["溴己新","羧甲司坦","特布他林","可待因","喷托维林","桉柠蒎"]
for n in resp:
    add(n, "respiratory", "safe", SAFE_SUM.format(cls="呼吸系统用药"), SAFE_DET, SAFE_NOTE, False, ["S7","S2"])
add("可待因","respiratory","safe",
    "可待因为中枢镇咳/镇痛药。", SAFE_DET + "注意：可待因主要风险为呼吸抑制与成瘾性，与 G6PD 溶血无明确关联；儿童咳嗽慎用。",
    "镇咳优先用非成瘾性药物；儿童避免可待因。", False, ["S7"])

# ---------- 消化 ----------
gi = ["枸橼酸铋钾","伊托必利","甲氧氯普胺","昂丹司琼","格拉司琼","洛哌丁胺",
      "地衣芽孢杆菌","胰酶","多酶片","熊去氧胆酸","丁二磺酸腺苷蛋氨酸","甘草酸二铵",
      "水飞蓟素","联苯双酯","双环醇","聚乙二醇4000","复方聚乙二醇电解质"]
for n in gi:
    add(n, "gastrointestinal", "safe", SAFE_SUM.format(cls="消化系统用药"), SAFE_DET, SAFE_NOTE, False, ["S7","S2"])
add("甲氧氯普胺","gastrointestinal","safe",
    "甲氧氯普胺是促胃动力/止吐药。", SAFE_DET + "注意：长期或大剂量可致锥体外系反应，与 G6PD 无关。",
    "短期对症可用；出现肌肉僵硬等及时停药就医。", False, ["S7"])

# ---------- 神经/精神 ----------
neuro_safe = ["阿普唑仑","氯硝西泮","劳拉西泮","佐匹克隆","咪达唑仑","苯巴比妥",
              "左乙拉西坦","拉莫三嗪","西酞普兰","艾司西酞普兰","利培酮","阿立哌唑",
              "氟哌啶醇","奋乃静","舒必利","哌替啶","曲马多","芬太尼","羟考酮","罗通定"]
for n in neuro_safe:
    add(n, "neuro", "safe", SAFE_SUM.format(cls="神经/精神类用药"), SAFE_DET, SAFE_NOTE, False, ["S7","S2"])
# 特殊说明的几个
add("吗啡","neuro","safe",
    "吗啡是阿片类镇痛药。", SAFE_DET + "说明：阿片类主要风险为呼吸抑制/成瘾，与 G6PD 溶血无明确关联；个别文献提及罕见溶血，非禁忌。",
    "镇痛由医生处方；术后/癌痛按医嘱使用。", False, ["S7"])
add("氯丙嗪","neuro","safe",
    "氯丙嗪是吩噻嗪类抗精神病药。", SAFE_DET + "说明：吩噻嗪类极罕见可诱发溶血，但非 G6PD 经典禁忌；主要风险为锥体外系反应与体位性低血压。",
    "长期用药遵医嘱监测。", True, ["S7"])
add("氨酚羟考酮","neuro","caution",
    "氨酚羟考酮 = 羟考酮 + 对乙酰氨基酚的复方制剂。","羟考酮本身对 G6PD 无明确禁忌；但含对乙酰氨基酚，超量有肝损风险。复方成分需整体看待。",
    "按处方剂量使用，勿与其他含对乙酰氨基酚药同服；用药前告知蚕豆病史。", True, ["S7","S2"])

# ---------- 激素 ----------
horm = ["炔雌醇","米非司酮","己烯雌酚","替勃龙"]
for n in horm:
    add(n, "hormone", "safe", SAFE_SUM.format(cls="激素/内分泌用药"), SAFE_DET, SAFE_NOTE, False, ["S7","S2"])

# ---------- 泌尿 ----------
uro = ["坦索罗辛","非那雄胺","度他雄胺","托特罗定","索利那新","黄酮哌酯"]
for n in uro:
    add(n, "urinary", "safe", SAFE_SUM.format(cls="泌尿系统用药"), SAFE_DET, SAFE_NOTE, False, ["S7","S2"])

# ---------- 血液 ----------
heme = ["肝素","利伐沙班","达比加群","替格瑞洛","腺苷钴胺","氨甲环酸","氨甲苯酸"]
for n in heme:
    add(n, "other_drug", "safe", SAFE_SUM.format(cls="血液/止血抗凝用药"), SAFE_DET, SAFE_NOTE, False, ["S7","S2"])

# ---------- 维生素/补充 ----------
for n in ["鱼油","鱼肝油"]:
    add(n, "vitamin", "safe", SAFE_SUM.format(cls="营养补充剂"), SAFE_DET, SAFE_NOTE, False, ["S7"])

# ---------- 免疫抑制剂 / 抗风湿（部分慎用） ----------
add("环孢素","other_drug","safe",
    "环孢素是钙调磷酸酶抑制剂（免疫抑制剂）。", SAFE_DET + "说明：主要风险为肾毒性/高血压，与 G6PD 溶血无明确关联。",
    "器官移植/自身免疫病按医嘱长期使用并监测。", False, ["S7"])
add("他克莫司","other_drug","safe",
    "他克莫司是免疫抑制剂。", SAFE_DET + "说明：主要风险为肾毒性/血糖升高，与 G6PD 溶血无明确关联。",
    "按医嘱监测血药浓度。", False, ["S7"])
add("吗替麦考酚酯","other_drug","safe",
    "吗替麦考酚酯是免疫抑制剂。", SAFE_DET + "说明：主要风险为骨髓抑制/感染，与 G6PD 溶血无明确经典关联。",
    "移植/免疫病按医嘱使用。", False, ["S7"])
add("来氟米特","other_drug","safe",
    "来氟米特是抗风湿免疫调节药。", SAFE_DET, SAFE_NOTE, False, ["S7"])
add("硫唑嘌呤","other_drug","caution",
    "硫唑嘌呤是抗代谢免疫抑制剂。","硫唑嘌呤可抑制骨髓、偶见溶血报道，部分 G6PD 资料将其列为需谨慎的药物。",
    "使用期间定期查血常规；主动告知蚕豆病史，由医生权衡获益风险。", True, ["S7","S2"])
add("甲氨蝶呤","other_drug","caution",
    "甲氨蝶呤是抗代谢药（抗肿瘤/抗风湿）。","甲氨蝶呤主要风险为骨髓抑制与肝损；虽非 G6PD 经典禁忌，但免疫抑制状态下需谨慎。",
    "严格按医嘱剂量；定期监测血象与肝肾功能。", True, ["S7"])
add("雷公藤","tcm","caution",
    "雷公藤（及雷公藤多苷）是中药免疫抑制剂。","雷公藤有生殖、肝、骨髓等多系统毒性，G6PD 人群使用更需谨慎，且成分复杂。",
    "务必在专科医生指导下使用，不自行服用；用药期监测血象与肝肾功能。", True, ["S7","S3"])
add("沙利度胺","other_drug","caution",
    "沙利度胺是免疫调节/镇静药。","沙利度胺致畸性强、可致周围神经病变；虽非 G6PD 经典禁忌，但属严格管控药，需谨慎。",
    "育龄期严格避孕；仅在医生处方与监测下使用。", True, ["S7"])
add("环磷酰胺","other_drug","caution",
    "环磷酰胺是烷化剂（化疗/免疫抑制）。","环磷酰胺可诱导氧化应激、有溶血个案报告，部分 G6PD 资料建议谨慎。",
    "化疗/免疫病方案由医生制定；主动告知蚕豆病史并监测。", True, ["S7","S2"])

# ---------- 抗肿瘤（化疗，安全但需专科） ----------
onco = ["顺铂","卡铂","紫杉醇","多西他赛","氟尿嘧啶","吉西他滨","表柔比星","伊马替尼","吉非替尼","培美曲塞","依托泊苷"]
for n in onco:
    add(n, "other_drug", "safe",
        SAFE_SUM.format(cls="抗肿瘤化疗药"),
        "G6PD 缺乏者可以接受肿瘤化疗；本药未列入蚕豆病禁忌名单。化疗方案由肿瘤科医生按病种与个体情况制定。",
        "化疗期间主动告知蚕豆病史；出现黄疸、酱油色尿等及时报告医生。", False, ["S7","S2"])

# ---------- 抗结核（安全） ----------
for n, cls in [("利福平","抗结核药"),("吡嗪酰胺","抗结核药"),("对氨基水杨酸","抗结核药")]:
    add(n, "antibiotic_other", "safe",
        SAFE_SUM.format(cls=cls), SAFE_DET, SAFE_NOTE, False, ["S7","S2"])

# ---------- 中成药（标 caution + controversy） ----------
tcm = ["小儿柴桂退热颗粒","醒脾养儿颗粒","小儿七星茶","健儿消食口服液","神曲消食口服液",
       "藿香正气水","参苓白术散","归脾丸","六味地黄丸","逍遥丸","金匮肾气丸","玉屏风颗粒"]
for n in tcm:
    add(n, "tcm", "caution",
        f"{n}是中成药/中成药制剂。","中成药多含多种草本成分，目前缺少针对 G6PD 的系统安全性数据，部分成分（如含金银花、连翘、黄连、薄荷、樟脑等）存在理论顾虑。",
        "用药前请核对说明书成分；含明确禁忌草本能不用则不用；不确定时咨询中医师/药师，并主动告知蚕豆病史。", True, ["S3","S5"])

# ---------- 眼/皮肤/外用品 ----------
add("萘敏维滴眼液","topical","caution",
    "萘敏维滴眼液含萘甲唑啉等减充血成分。","主要风险为血管收缩剂相关的局部刺激/反跳；并非 G6PD 经典禁忌，但儿童与蚕豆病者局部用含'萘'成分制剂宜谨慎。",
    "眼红/眼痒优先用人工泪液；确需使用请咨询药师。", True, ["S7"])
add("夫西地酸乳膏","topical","safe",
    "夫西地酸是外用抗生素。", SAFE_DET, SAFE_NOTE, False, ["S7"])
add("阿达帕林凝胶","topical","safe",
    "阿达帕林是外用维A酸类（治痤疮）。", SAFE_DET, SAFE_NOTE, False, ["S7"])
add("云南白药","tcm","caution",
    "云南白药是复方中药制剂（散剂/气雾/膏剂等）。","成分含多种草药且配方保密，缺少 G6PD 专项安全数据；外伤止血可用，内服/大面积使用宜谨慎。",
    "外用止血可按说明书；口服制剂咨询药师；异常出血不止及时就医。", True, ["S3","S5"])
add("湿润烧伤膏","topical","safe",
    "湿润烧伤膏是外用中药制剂。", SAFE_DET + "说明：外用烧伤创面，全身吸收有限；主要成分为中药油膏，未见 G6PD 禁忌报告。",
    SAFE_NOTE, True, ["S3"])

# ---------- 特定剂型（镜像母体药风险） ----------
add("布洛芬栓","analgesic","caution",
    "布洛芬栓是布洛芬的栓剂剂型。","与口服布洛芬同为 NSAID，部分 G6PD 资料列为慎用，且存在使用分歧。",
    "退热止痛优先对乙酰氨基酚；确需用布洛芬请咨询医生。", True, ["S7","S2"])
add("对乙酰氨基酚栓","analgesic","safe",
    "对乙酰氨基酚栓是对乙酰氨基酚的栓剂剂型。","对乙酰氨基酚是 G6PD 人群退热止痛的首选，栓剂仅为给药途径不同。",
    "按体重/年龄给药，避免超量；24 小时不超过推荐次数。", False, ["S1","S2"])
add("双氯芬酸钠栓","analgesic","caution",
    "双氯芬酸钠栓是双氯芬酸（NSAID）的栓剂。","与双氯芬酸同为 NSAID，部分 G6PD 资料列为慎用。",
    "镇痛优先对乙酰氨基酚；确需用请咨询医生。", True, ["S7","S2"])
add("消炎痛栓","analgesic","caution",
    "消炎痛栓即吲哚美辛栓（NSAID）。","吲哚美辛属 NSAID，部分 G6PD 资料列为慎用。",
    "镇痛优先对乙酰氨基酚；确需用请咨询医生。", True, ["S7","S2"])
add("小儿布洛芬栓","analgesic","caution",
    "小儿布洛芬栓是儿童用布洛芬栓剂。","与布洛芬同为 NSAID，部分 G6PD 资料列为慎用，且儿科使用存在分歧。",
    "儿童退热首选对乙酰氨基酚；用布洛芬前咨询儿科医生。", True, ["S7","S2"])

# ---- 写入 ----
before = len(d["items"])
for e in entries:
    d["items"].append(e)
d["meta"]["version"] = "0.1.6"
json.dump(d, open(F, "w", encoding="utf-8"), ensure_ascii=False, indent=2, sort_keys=False)
open(F, "a", encoding="utf-8").write("\n")
print(f"新增 {len(entries)} 条（跳过已存在），总条目 {before} -> {len(d['items'])}")

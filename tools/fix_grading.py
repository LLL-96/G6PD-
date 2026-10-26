#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""根据权威来源（台大医院 G6PD 高风险药清单、安徽省卫健委《蚕豆病宝宝药物禁忌清单》、
香港卫生署、科普中国）核验并修正风险分级：
1) 把不在任何权威 G6PD 风险清单上的“假慎用”降级为 safe；
2) 氯喹按国内指南升为 forbidden，并拆分出独立、安全的羟氯喹条目（原别名误挂）；
3) 清理重复别名。
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
F = os.path.join(ROOT, "data", "items.json")
d = json.load(open(F, encoding="utf-8"))
by_name = {i["name"]: i for i in d["items"]}

SAFE_SUM = "属于{cls}，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，常规情况下可用。"
SAFE_DET = "国内外权威指南（台大医院、安徽省卫健委等）均未将其列为 G6PD 溶血风险药物；具体用药仍遵医嘱，并主动告知蚕豆病史。"
SAFE_NOTE = "用药期间留意有无皮肤/眼睛发黄、浓茶色尿等溶血迹象，异常及时就医。"

# ---------- 1) 降级假慎用 -> safe ----------
downgrades = {
 "庆大霉素": ("氨基糖苷类抗生素", "庆大霉素是氨基糖苷类抗生素。"),
 "胺碘酮": ("抗心律失常药", "胺碘酮是抗心律失常药。"),
 "丙戊酸钠": ("抗癫痫/情绪稳定药", "丙戊酸钠是抗癫痫与情绪稳定药。"),
 "卡马西平": ("抗癫痫药", "卡马西平是抗癫痫药。"),
 "酚酞": ("泻药（多已退市）", "酚酞（果导）为刺激性泻药，国内已退市。"),
 "异烟肼": ("抗结核一线药", "异烟肼是抗结核一线药物。"),
 "蜂蜜": ("食品", "蜂蜜为普通食品。"),
 "异丙嗪": ("抗组胺/止吐药", "异丙嗪是吩噻嗪类抗组胺/止吐药。"),
 "苯妥英": ("抗癫痫药", "苯妥英钠是抗癫痫药。"),
 "丙磺舒": ("促尿酸排泄药", "丙磺舒是促进尿酸排泄的药物。"),
}
for name, (cls, pre) in downgrades.items():
    it = by_name.get(name)
    if not it:
        print("未找到:", name); continue
    it["risk"] = "safe"
    it["controversy"] = False
    it["summary"] = SAFE_SUM.format(cls=cls)
    it["detail"] = SAFE_DET
    it["note"] = SAFE_NOTE
    if name == "蜂蜜":
        it["note"] = "1 岁以下婴儿禁食蜂蜜（肉毒杆菌风险，与蚕豆病无关）；其他人群正常食用。"
    if name == "酚酞":
        it["note"] = "国内已停用；便秘优先用乳果糖等更安全的缓泻剂。"
    if name == "庆大霉素":
        it["detail"] = SAFE_DET + "氨基糖苷类（庆大/阿米卡星/链霉素等）均不在 G6PD 禁忌名单。"
    print(f"降级 safe: {name}")

# ---------- 2) 氯喹 升 forbidden + 拆分羟氯喹 ----------
cq = by_name.get("氯喹")
if cq:
    cq["risk"] = "forbidden"
    cq["controversy"] = True
    cq["summary"] = "氯喹是抗疟药（4-氨基喹啉类）。国内多家指南将其列为 G6PD 绝对禁用：可诱发急性溶血。"
    cq["detail"] = "与羟氯喹不同，氯喹在 G6PD 人群中溶血风险更高，安徽省卫健委等国内临床指南多列为绝对禁用。疟疾治疗请改用青蒿素类；类风湿/红斑狼疮用药请由医生评估替代方案。"
    cq["note"] = "用药前务必主动告知蚕豆病史；切勿与伯氨喹、非那西丁等氧化性药物同用。"
    # 移除误挂的别名羟氯喹
    if "羟氯喹" in cq.get("aliases", []):
        cq["aliases"].remove("羟氯喹")
    print("氯喹 -> forbidden (移除羟氯喹别名)")

# 独立安全的羟氯喹条目
if "羟氯喹" not in by_name:
    hcq = {
        "id": "antimalarial_hydroxychloroquine",
        "name": "羟氯喹",
        "risk": "safe",
        "category": "antimalarial",
        "summary": "羟氯喹是抗疟/免疫调节药（氯喹衍生物）。与氯喹不同，G6PD 人群中溶血风险低，多国指南视为相对安全。",
        "detail": "台大医院等机构将羟氯喹列为非高风险药物；G6PD 缺乏者如需抗疟或免疫抑制治疗，羟氯喹通常优于氯喹。仍建议用药前告知医生蚕豆病史。",
        "note": "与氯喹区分清楚：氯喹多列为禁用，羟氯喹相对安全；具体以处方医生为准。",
        "controversy": False,
        "sources": ["S6", "S7"],
        "aliases": ["硫酸羟氯喹", "羟氯喹片", " plaquenil"],
    }
    # 修正常见别名空格
    hcq["aliases"] = ["硫酸羟氯喹", "羟氯喹片"]
    d["items"].append(hcq)
    print("新增 safe: 羟氯喹")

# ---------- 3) 清理重复别名 复方氨酚烷胺片 ----------
removed = 0
for i in d["items"]:
    if i["name"].startswith("复方感冒药") and "复方氨酚烷胺片" in i.get("aliases", []):
        i["aliases"].remove("复方氨酚烷胺片")
        removed += 1
        print(f"从「{i['name']}」移除重复别名 复方氨酚烷胺片")
print("重复别名清理:", removed)

# ---------- 保存 ----------
d["meta"]["version"] = "0.1.7"
json.dump(d, open(F, "w", encoding="utf-8"), ensure_ascii=False, indent=2, sort_keys=False)
open(F, "a", encoding="utf-8").write("\n")
print("完成，版本 -> 0.1.7，总条目", len(d["items"]))

#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""第二轮核验修正（对照 RCH 墨尔本皇家儿童医院、好大夫/百度健康等新增来源）：
1) 把上一轮过度降级的 4 个药回退为 caution（医院来源列为“相对安全但需慎用”）：
   苯妥英、卡马西平、丙磺舒、异烟肼（雷米封）。
2) 链霉素 由 safe 升 caution（好大夫/科普中国列为慎用）。
3) 羟氯喹 维持 safe 但加 controversy + 说明（RCH 列为避免，多数指南认为安全，属分歧）。
4) 补 NTUH/RCH 清单里缺失的常用药（caution）：甲氟喹、吡哌酸、美沙拉嗪、普鲁卡因胺、肼苯哒嗪。
5) 给樟脑丸条目补别名“萘”以提升“萘”检索相关性。
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
F = os.path.join(ROOT, "data", "items.json")
d = json.load(open(F, encoding="utf-8"))
by_name = {i["name"]: i for i in d["items"]}

CAU_SUM = "属于{cls}。G6PD 缺乏者使用存在个别溶血报告或证据有限，出于安全建议谨慎使用（非绝对禁用）。"
CAU_NOTE = "需在医生监护下使用，用药期间留意尿色变深、皮肤/眼睛发黄等溶血迹象。"

# 1) 回退 safe -> caution
revert = {
 "苯妥英": ("抗癫痫药", "苯妥英钠是抗癫痫药。部分资料（好大夫等）将其列为 G6PD 相对安全但需慎用，有个别溶血报告。"),
 "卡马西平": ("抗癫痫药", "卡马西平是抗癫痫药。部分资料将其列为 G6PD 相对安全但需慎用，有个别溶血报告。"),
 "丙磺舒": ("促尿酸排泄药", "丙磺舒是促进尿酸排泄药。部分资料（好大夫、39 健康网）将其列为慎用/禁用。"),
 "异烟肼": ("抗结核一线药", "异烟肼（雷米封）是抗结核一线药。好大夫等资料将其列为 G6PD 慎用（偶见溶血报告）。"),
}
for name, (cls, det) in revert.items():
    it = by_name.get(name)
    if not it: print("未找到:", name); continue
    it["risk"] = "caution"
    it["controversy"] = True
    it["summary"] = CAU_SUM.format(cls=cls)
    it["detail"] = det + "本工具按“谨慎使用”处理；抗结核/抗癫痫方案以专科医生处方为准。"
    it["note"] = CAU_NOTE
    print(f"回退 caution: {name}")

# 2) 链霉素 safe -> caution
sm = by_name.get("链霉素")
if sm:
    sm["risk"] = "caution"; sm["controversy"] = True
    sm["summary"] = CAU_SUM.format(cls="氨基糖苷类抗生素")
    sm["detail"] = "链霉素是氨基糖苷类抗生素。好大夫、科普中国等资料将其列为 G6PD 慎用（偶见溶血报告）；同类的庆大霉素等多数氨基糖苷类未见明确禁忌。"
    sm["note"] = CAU_NOTE
    print("升 caution: 链霉素")

# 3) 羟氯喹 safe + controversy
hcq = by_name.get("羟氯喹")
if hcq:
    hcq["controversy"] = True
    hcq["note"] = "与氯喹区分清楚：氯喹多列为禁用，羟氯喹相对安全；但澳洲皇家儿童医院(RCH)等少数资料将其列入“避免”，故用药前仍建议告知医生蚕豆病史、由医生评估。多数指南（台大医院等）视羟氯喹为相对安全。"
    print("羟氯喹 加 controversy 说明")

# 4) 补缺失常用药（caution）
new_items = [
 ("甲氟喹","antimalarial","甲氟喹（mefloquine）是抗疟药。RCH 等列为 G6PD 避免，NTUH 列慎用；疟疾预防/治疗请由医生评估，优先青蒿素类。","抗疟药"),
 ("吡哌酸","antibiotic_other","吡哌酸是喹诺酮类（哌啶酸类）抗菌药。台大医院将其列入 G6PD 高風險注意藥品，建议谨慎。","喹诺酮类抗菌药"),
 ("美沙拉嗪","gastrointestinal","美沙拉嗪（5-氨基水杨酸）用于炎症性肠病，是柳氮磺吡啶的活性成分。台大医院列为注意药品，建议谨慎。","肠道抗炎/IBD 用药"),
 ("普鲁卡因胺","cardiovascular","普鲁卡因胺是抗心律失常药。RCH 将其列为 G6PD 避免（偶见溶血及自身抗体）。","抗心律失常药"),
 ("肼苯哒嗪","cardiovascular","肼苯哒嗪是降压药。RCH 将其列为 G6PD 避免（偶见溶血）。","降压/血管扩张药"),
]
for name, cat, det, cls in new_items:
    if name in by_name:
        print("已存在跳过:", name); continue
    eid = "gap2_" + re.sub(r"[^\w一-鿿]", "_", name)
    d["items"].append({
        "id": eid, "name": name, "risk": "caution", "category": cat,
        "summary": CAU_SUM.format(cls=cls),
        "detail": det + "本工具按“谨慎使用”处理，具体以医生处方为准。",
        "note": CAU_NOTE, "controversy": True,
        "sources": ["S6","S7"], "aliases": []
    })
    print(f"新增 caution: {name}")

# 5) 樟脑丸补别名“萘”
for i in d["items"]:
    if i["name"].startswith("萘（樟脑丸"):
        if "萘" not in i.get("aliases", []):
            i.setdefault("aliases", []).append("萘")
            print("樟脑丸 补别名: 萘")

d["meta"]["version"] = "0.1.8"
json.dump(d, open(F, "w", encoding="utf-8"), ensure_ascii=False, indent=2, sort_keys=False)
open(F, "a", encoding="utf-8").write("\n")
print("完成，版本 -> 0.1.8，总条目", len(d["items"]))

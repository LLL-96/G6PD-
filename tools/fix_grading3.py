#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""第三轮核验补漏：补 NTUH/RCH/安徽清单上的 4 个缺失诱因。
- 柳氮磺吡啶(磺胺沙拉嗪, IBD 常用) -> forbidden（RCH/安徽明确禁用）
- 甲基多巴、硝唑尼特、甲氧苄啶 -> caution
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
F = os.path.join(ROOT, "data", "items.json")
d = json.load(open(F, encoding="utf-8"))
by_name = {i["name"]: i for i in d["items"]}

NEW = [
 {
  "id": "sulfa_sulfasalazine", "name": "柳氮磺吡啶", "risk": "forbidden", "category": "sulfa",
  "summary": "柳氮磺吡啶（磺胺沙拉嗪）是磺胺类抗炎药，用于溃疡性结肠炎、类风湿等。G6PD 明确禁忌，可诱发溶血。",
  "detail": "柳氮磺吡啶在体内分解为磺胺吡啶（致溶血成分）与美沙拉嗪；RCH、安徽省卫健委等权威资料均列为 G6PD 禁用/避免。IBD 患者请由医生改用不含磺胺的方案。",
  "note": "用药前务必主动告知蚕豆病史；溃疡性结肠炎/类风湿患者请与医生确认替代方案。",
  "controversy": False, "sources": ["S1","S7"],
  "aliases": ["磺胺沙拉嗪", "偶氮磺胺吡啶", "sulfasalazine", "SASP"]
 },
 {
  "id": "cv_methyldopa", "name": "甲基多巴", "risk": "caution", "category": "cardiovascular",
  "summary": "甲基多巴是中枢性降压药。RCH 等资料将其列为 G6PD 避免（可致免疫性溶血）。",
  "detail": "甲基多巴可引起 Coombs 阳性免疫性溶血；RCH 将其列入 G6PD 需避免的药物。妊娠期高血压常用，但 G6PD 者应由医生评估替代（如拉贝洛尔、硝苯地平）。",
  "note": "用药期间监测血常规与溶血迹象；孕期用药遵医嘱。",
  "controversy": True, "sources": ["S6","S7"],
  "aliases": ["爱道美", "甲多巴", "methyldopa"]
 },
 {
  "id": "other_nitazoxanide", "name": "硝唑尼特", "risk": "caution", "category": "antibiotic_other",
  "summary": "硝唑尼特是硝基噻唑类抗寄生虫药，结构与硝基呋喃类相关，部分资料列为 G6PD 禁用/慎用。",
  "detail": "硝唑尼特含硝基噻唑结构，与硝基呋喃类（呋喃妥因等，禁用）作用机制相近，存在氧化应激顾虑；部分资料将其列为 G6PD 禁用。抗寄生虫治疗请由医生评估。",
  "note": "抗寄生虫用药前主动告知蚕豆病史。",
  "controversy": True, "sources": ["S7"],
  "aliases": ["nitazoxanide", "硝唑尼特片"]
 },
 {
  "id": "abx_trimethoprim", "name": "甲氧苄啶", "risk": "caution", "category": "antibiotic_other",
  "summary": "甲氧苄啶（TMP）是抗菌增效剂，复方新诺明中的成分之一。部分资料列为 G6PD 慎用。",
  "detail": "甲氧苄啶常与磺胺甲噁唑组成复方新诺明（后者明确禁用）。TMP 单用虽溶血证据较少，但部分资料（好大夫等）列为慎用；与磺胺联用时一律按复方新诺明（禁用）处理。",
  "note": "复方新诺明（含磺胺甲噁唑）为禁用，请勿使用；单用 TMP 亦建议咨询医生。",
  "controversy": True, "sources": ["S1","S7"],
  "aliases": ["TMP", "三甲氧苄啶", "甲氧苄氨嘧啶"]
 },
]

for e in NEW:
    if e["name"] in by_name:
        print("已存在跳过:", e["name"]); continue
    d["items"].append(e)
    print(f"新增 {e['risk']}: {e['name']}")

# 柳氮磺吡啶 也补到 磺胺吡啶 的别名，便于关联检索
sp = by_name.get("磺胺吡啶")
if sp and "柳氮磺吡啶" not in sp.get("aliases", []):
    # 不重复挂：柳氮已有独立条目，这里不挂，避免别名冲突
    pass

d["meta"]["version"] = "0.1.9"
json.dump(d, open(F, "w", encoding="utf-8"), ensure_ascii=False, indent=2, sort_keys=False)
open(F, "a", encoding="utf-8").write("\n")
print("完成，版本 -> 0.1.9，总条目", len(d["items"]))

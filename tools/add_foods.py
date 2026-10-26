#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""补食物类缺口（对照 安徽省卫健委 S1、G6PD 基金会、科普中国 S5）：
- 苦瓜（凉瓜）: caution —— 籽含 vicine 样物质；国际 G6PD 基金会列 Avoid，安徽列"需警惕/建议避免（尤其野生苦瓜）"。
- 蓝莓: caution —— 安徽提示极少数敏感个体可能诱发溶血。
- 芦荟（食用/保健品）: caution —— 部分资料列慎食，证据有限；外用芦荟胶无碍。
- 黄豆/大豆、绿豆: safe —— 明确不是蚕豆，可正常食用（回应家长常见疑问）。
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
F = os.path.join(ROOT, "data", "items.json")
d = json.load(open(F, encoding="utf-8"))
by_name = {i["name"]: i for i in d["items"]}

NEW = [
 {
  "id": "food_bitter_melon", "name": "苦瓜（凉瓜）", "risk": "caution", "category": "food",
  "summary": "苦瓜籽含 vicine 样物质，G6PD 人群食用（尤其籽、生食、野生苦瓜、浓缩汁）有溶血个案，建议慎食/避免。",
  "detail": "国际 G6PD 基金会将苦瓜列为“避免(Avoid)”；安徽省卫健委将其列入“需要警惕的食物”，并称野生苦瓜含天然氧化性成分、建议避免。风险主要来自苦瓜籽（vicine 样物质）、生食/凉拌、野生苦瓜及苦瓜汁/浓缩提取物；成熟苦瓜充分煮熟后少量食用风险相对较低。",
  "note": "吃前彻底去籽、充分煮熟、少量为宜；野生苦瓜、苦瓜汁/茶、苦瓜籽提取物建议避免；初次食用后留意有无酱油色尿、黄疸。",
  "controversy": True, "sources": ["S1","S5"],
  "aliases": ["凉瓜", "苦瓜籽", "苦瓜汁", "苦瓜茶", "野生苦瓜", "苦瓜干"]
 },
 {
  "id": "food_blueberry", "name": "蓝莓", "risk": "caution", "category": "food",
  "summary": "蓝莓含花青素等，极少数敏感 G6PD 个体可能诱发溶血，建议初次少量尝试或避免。",
  "detail": "安徽省卫健委提示：蓝莓极少数敏感个体可能诱发溶血，建议初次少量尝试后观察，或直接避免。日常少量食用通常问题不大，但蓝莓浓缩汁/大剂量补充剂宜谨慎。",
  "note": "初次吃先少量，观察有无酱油色尿、黄疸、乏力；避免大剂量蓝莓提取物/浓缩汁。",
  "controversy": True, "sources": ["S1"],
  "aliases": ["蓝莓干", "蓝莓酱", "蓝莓汁"]
 },
 {
  "id": "food_aloe", "name": "芦荟（食用）", "risk": "caution", "category": "food",
  "summary": "食用芦荟（芦荟汁/芦荟胶囊）部分资料列为 G6PD 慎食，证据有限；外用芦荟胶通常无碍。",
  "detail": "部分资料将食用芦荟列为 G6PD 慎食，但证据有限、存在分歧。芦荟含蒽醌类成分，大剂量口服有刺激性；外用护肤芦荟胶皮肤吸收少，一般无碍。",
  "note": "口服芦荟汁/芦荟胶囊建议咨询医生；外用芦荟胶正常使用。",
  "controversy": True, "sources": ["S5"],
  "aliases": ["芦荟汁", "芦荟胶囊", "芦荟胶"]
 },
 {
  "id": "food_soybean", "name": "黄豆/大豆", "risk": "safe", "category": "food",
  "summary": "黄豆/大豆不是蚕豆，不含蚕豆嘧啶葡糖苷，G6PD 者可正常食用（豆浆、豆奶、豆腐均可）。",
  "detail": "安徽省卫健委明确：黄豆、绿豆等与蚕豆（Vicia faba）不是一回事，不含诱发溶血的蚕豆嘧啶葡糖苷，G6PD 缺乏者可正常食用。豆浆、豆奶、豆腐、豆制品均可。",
  "note": "普通大豆酱油不含蚕豆可放心；但购买前仍建议看配料表，确认未混入蚕豆成分。",
  "controversy": False, "sources": ["S1"],
  "aliases": ["黄豆", "大豆", "豆浆", "豆奶", "豆腐", "豆制品"]
 },
 {
  "id": "food_mungbean", "name": "绿豆", "risk": "safe", "category": "food",
  "summary": "绿豆不是蚕豆，G6PD 者可正常食用（绿豆汤、绿豆糕均可）。",
  "detail": "安徽省卫健委明确：绿豆与蚕豆不是一回事，不含蚕豆嘧啶葡糖苷，G6PD 缺乏者可正常食用。",
  "note": "正常食用即可。",
  "controversy": False, "sources": ["S1"],
  "aliases": ["绿豆汤", "绿豆糕", "绿豆沙", "绿豆粥"]
 },
]

for e in NEW:
    if e["name"] in by_name:
        print("已存在跳过:", e["name"]); continue
    d["items"].append(e)
    print(f"新增 {e['risk']}: {e['name']}")

d["meta"]["version"] = "0.2.0"
json.dump(d, open(F, "w", encoding="utf-8"), ensure_ascii=False, indent=2, sort_keys=False)
open(F, "a", encoding="utf-8").write("\n")
print("完成，版本 -> 0.2.0，总条目", len(d["items"]))

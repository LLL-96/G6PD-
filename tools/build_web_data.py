#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
把 data/items.json 转换为网页版数据 web/data.js
用法：python tools/build_web_data.py
改了 items.json 后重跑此脚本即可同步网页数据。
"""

import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "data", "items.json")
DST_DIR = os.path.join(ROOT, "web")
DST = os.path.join(DST_DIR, "data.js")

def main():
    with open(SRC, encoding="utf-8") as f:
        data = json.load(f)
    os.makedirs(DST_DIR, exist_ok=True)
    payload = {
        "meta": data["meta"],
        "sources": data["sources"],
        "items": data["items"],
    }
    js = (
        "// 本文件由 tools/build_web_data.py 自动生成，请勿手改；"
        "请修改 data/items.json 后重新生成。\n"
        "const G6PD_DATA = " + json.dumps(payload, ensure_ascii=False, indent=1) + ";\n"
    )
    with open(DST, "w", encoding="utf-8") as f:
        f.write(js)
    print(f"已生成 {DST}")
    print(f"条目数：{len(data['items'])}  来源数：{len(data['sources'])}")

if __name__ == "__main__":
    main()

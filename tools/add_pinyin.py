#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""给每条数据补 py（全拼）/ pyi（首字母）字段，供拼音搜索使用。
只取 name + 前 10 个别名，控制数据体积。
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "data", "items.json")

from pypinyin import lazy_pinyin, Style


def clean(s):
    return re.sub(r"[^a-z0-9]", "", s.lower())


def full(s):
    try:
        return clean("".join(lazy_pinyin(s, errors="ignore")))
    except TypeError:
        return clean("".join(lazy_pinyin(s)))


def initials(s):
    try:
        return clean("".join(lazy_pinyin(s, style=Style.FIRST_LETTER, errors="ignore")))
    except TypeError:
        return clean("".join(lazy_pinyin(s, style=Style.FIRST_LETTER)))


def main():
    data = json.load(open(SRC, encoding="utf-8"))
    items = data["items"] if isinstance(data, dict) else data
    n = 0
    for it in items:
        fields = [it.get("name", "")] + (it.get("aliases") or [])[:10]
        py, pyi = [], []
        for f in fields:
            if not f:
                continue
            a, b = full(f), initials(f)
            if a and a not in py:
                py.append(a)
            if b and b not in pyi:
                pyi.append(b)
        it["py"] = py
        it["pyi"] = pyi
        n += 1
    json.dump(data, open(SRC, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print(f"已补拼音字段：{n} 条")
    # 抽查
    for name in ["布洛芬", "对乙酰氨基酚", "阿莫西林", "复方磺胺甲噁唑", "萘（樟脑丸/卫生球）"]:
        for it in items:
            if it["name"] == name:
                print(f"  {name} → pyi={it['pyi'][:3]} py={it['py'][:2]}")


if __name__ == "__main__":
    main()

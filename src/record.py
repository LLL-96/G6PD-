#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
G6PD缺乏症（蚕豆病）健康管理档案
================================
本地记录患者信息、溶血发作史、就诊记录、家人G6PD状态与复查提醒。
就诊记录中的药品会自动比对禁忌库（data/items.json）并标注风险。

用法：
    python record.py                  # 总览仪表盘 + 交互菜单（推荐）
    python record.py overview         # 只看总览
    python record.py profile          # 查看/编辑患者信息（交互）
    python record.py episode          # 发作史：列表 / 新增（交互）
    python record.py visit            # 就诊记录：列表 / 新增（交互）
    python record.py family           # 家人G6PD状态：列表 / 新增（交互）
    python record.py reminder         # 复查提醒：列表 / 新增 / 到期

免责声明：本工具仅作个人健康信息记录，不构成医疗建议。
一切诊疗决策请以医生意见为准。
"""

import json
import os
import sys
from datetime import date, datetime

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

# ---------- 复用禁忌库 ----------
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from lookup import search, RISK_STYLE, USE_COLOR, _c  # noqa: E402

def red(t):    return _c(t, "91")
def yellow(t): return _c(t, "93")
def green(t):  return _c(t, "92")
def blue(t):   return _c(t, "94")
def bold(t):   return _c(t, "1")
def dim(t):    return _c(t, "2")

# ---------- 存储 ----------

def profile_path():
    here = os.path.dirname(os.path.abspath(__file__))
    return os.path.join(here, "..", "data", "profile.json")

def default_profile():
    return {
        "meta": {"version": "0.1.0", "created_at": date.today().isoformat()},
        "patient": {
            "name": "", "gender": "", "birth_date": "", "diagnosed_date": "",
            "who_class": "", "variant": "", "notes": "",
        },
        "episodes": [],
        "visits": [],
        "family": [],
        "reminders": [],
    }

def load_profile():
    p = profile_path()
    if not os.path.exists(p):
        return default_profile()
    with open(p, encoding="utf-8") as f:
        return json.load(f)

def save_profile(data):
    import time
    data["meta"]["updated_at"] = datetime.now().isoformat(timespec="seconds")
    payload = json.dumps(data, ensure_ascii=False, indent=2)
    tmp = profile_path() + ".tmp"
    # Windows 上并发/杀软扫描可能短暂锁定 tmp 文件，重试几次
    for attempt in range(5):
        try:
            with open(tmp, "w", encoding="utf-8") as f:
                f.write(payload)
            os.replace(tmp, profile_path())  # 原子写入，避免写一半损坏
            return
        except PermissionError:
            if attempt == 4:
                raise
            time.sleep(0.2 * (attempt + 1))

# ---------- 交互辅助 ----------

def ask(prompt, default=None, required=False):
    suffix = f"（回车默认：{default}）" if default not in (None, "") else ""
    while True:
        try:
            v = input(f"  {prompt}{suffix}: ").strip()
        except (EOFError, KeyboardInterrupt):
            print()
            return default or ""
        if not v:
            if default not in (None, ""):
                return default
            if required:
                print(yellow("    此项为必填，请重新输入。"))
                continue
            return ""
        return v

def ask_choice(prompt, options, allow_skip=True):
    """options: [(key, label), ...]，返回 key 或 ''（跳过）。"""
    print(f"  {prompt}")
    for i, (k, label) in enumerate(options, 1):
        print(f"    {i}. {label}")
    while True:
        try:
            v = input(f"  请输入序号{'' if allow_skip else '（必选）'}: ").strip()
        except (EOFError, KeyboardInterrupt):
            print()
            return "" if allow_skip else options[0][0]
        if not v and allow_skip:
            return ""
        if v.isdigit() and 1 <= int(v) <= len(options):
            return options[int(v) - 1][0]
        print(yellow("    输入无效，请重试。"))

def ask_date(prompt, default_today=False):
    while True:
        v = ask(prompt, default="今天" if default_today else None)
        if not v:
            return ""
        if v in ("今天", "today", "t"):
            return date.today().isoformat()
        v = v.replace("/", "-").replace(".", "-")
        for fmt in ("%Y-%m-%d", "%Y-%m", "%m-%d"):
            try:
                d = datetime.strptime(v, fmt)
                if fmt == "%m-%d":
                    d = d.replace(year=date.today().year)
                return d.date().isoformat()
            except ValueError:
                continue
        print(yellow("    日期格式无法识别，请用 YYYY-MM-DD（如 2025-03-01）。"))

def next_id(rows):
    return max((r.get("id", 0) for r in rows), default=0) + 1

def confirm(prompt):
    return ask(prompt + "（y/N）", default="n").lower() in ("y", "yes", "是")

# ---------- 患者信息 ----------

WHO_CLASSES = [
    ("I", "Ⅰ类：酶活性严重缺乏（接近0），可慢性溶血"),
    ("II", "Ⅱ类：酶活性严重缺乏（<10%），药物/食物/感染可诱发急性溶血"),
    ("III", "Ⅲ类：酶活性轻中度缺乏（10%~60%），症状轻重不一"),
    ("IV", "Ⅳ类：酶活性轻度降低（60%~正常），一般无症状"),
    ("unknown", "不清楚/未分级"),
]

def show_profile(data):
    p = data["patient"]
    print(bold("患者信息"))
    if not p["name"]:
        print(dim("  尚未填写。运行 profile 命令录入。"))
        return
    print(f"  姓名/昵称：{p['name']}")
    if p["gender"]:
        print(f"  性别：{p['gender']}")
    if p["birth_date"]:
        print(f"  出生日期：{p['birth_date']}")
    if p["diagnosed_date"]:
        print(f"  确诊日期：{p['diagnosed_date']}")
    if p["who_class"]:
        cls = dict(WHO_CLASSES).get(p["who_class"], p["who_class"])
        print(f"  WHO分级：{cls}")
    if p["variant"]:
        print(f"  基因型/变异：{p['variant']}")
    if p["notes"]:
        print(f"  备注：{p['notes']}")

def edit_profile(data):
    print(bold("编辑患者信息（回车跳过可稍后补填）"))
    p = data["patient"]
    p["name"] = ask("姓名/昵称", default=p["name"], required=not p["name"])
    p["gender"] = ask("性别（男/女）", default=p["gender"])
    p["birth_date"] = ask_date("出生日期", default_today=False) or p["birth_date"]
    p["diagnosed_date"] = ask_date("确诊日期（通常为新生儿筛查日）") or p["diagnosed_date"]
    choice = ask_choice("WHO酶活性分级", WHO_CLASSES, allow_skip=True)
    p["who_class"] = choice or p["who_class"]
    p["variant"] = ask("基因型/变异（如已知，可选）", default=p["variant"])
    p["notes"] = ask("备注", default=p["notes"])
    save_profile(data)
    print(green("  已保存。\n"))

# ---------- 发作史 ----------

TRIGGER_TYPES = [
    ("drug", "药物"),
    ("food", "食物（如蚕豆）"),
    ("infection", "感染"),
    ("chemical", "化学品（如樟脑丸）"),
    ("unknown", "不明/多种"),
]

def list_episodes(data):
    eps = data["episodes"]
    print(bold(f"溶血发作史（共 {len(eps)} 次）"))
    if not eps:
        print(dim("  暂无记录。没有发作是最好的情况。"))
        return
    for e in sorted(eps, key=lambda x: x.get("date", "")):
        trig = dict(TRIGGER_TYPES).get(e.get("trigger_type", ""), "")
        head = f"  {e['date']}  {trig}"
        if e.get("trigger"):
            head += f"：{e['trigger']}"
        print(head)
        if e.get("symptoms"):
            print(f"    症状：{e['symptoms']}")
        if e.get("hospital"):
            print(f"    就诊：{e['hospital']}")
        if e.get("outcome"):
            print(f"    转归：{e['outcome']}")
        if e.get("notes"):
            print(dim(f"    备注：{e['notes']}"))

def add_episode(data):
    print(bold("新增溶血发作记录"))
    d = ask_date("发作日期", default_today=True)
    tt = ask_choice("诱因类型", TRIGGER_TYPES)
    trig = ask("具体诱因（药名/食物名/感染名，可空）")
    symptoms = ask("症状（如尿色深、黄疸、苍白，可空）")
    hospital = ask("就诊医院/科室（可空）")
    outcome = ask("转归（如痊愈/输血，可空）")
    notes = ask("备注（可空）")
    # 若诱因是药物/食物，自动比对禁忌库
    if trig:
        hits = search(trig)
        if hits:
            print(yellow(f"  禁忌库比对："))
            for score, it in hits:
                style, label = RISK_STYLE[it["risk"]]
                print(f"    {style(label)}  {it['name']} —— {it['summary']}")
    data["episodes"].append({
        "id": next_id(data["episodes"]), "date": d, "trigger_type": tt,
        "trigger": trig, "symptoms": symptoms, "hospital": hospital,
        "outcome": outcome, "notes": notes,
    })
    save_profile(data)
    print(green("  已保存。如这是近期发作且原因不明，建议就诊血液内科排查。\n"))

# ---------- 就诊记录 ----------

def list_visits(data):
    vs = data["visits"]
    print(bold(f"就诊记录（共 {len(vs)} 次）"))
    if not vs:
        print(dim("  暂无记录。"))
        return
    for v in sorted(vs, key=lambda x: x.get("date", "")):
        told = green("已告知病史") if v.get("told_doctor") else yellow("未确认告知")
        print(f"  {v['date']}  {v.get('hospital', '')} {v.get('department', '')}  {told}")
        if v.get("doctor"):
            print(f"    医生：{v['doctor']}")
        if v.get("reason"):
            print(f"    主诉：{v['reason']}")
        for m in v.get("medicines", []):
            if m.get("risk"):
                style, label = RISK_STYLE.get(m["risk"], RISK_STYLE["info"])
                risk_tag = style(f"[{label}]")
            else:
                risk_tag = dim("[未收录]")
            print(f"    用药：{m['name']}  {risk_tag}")
        if v.get("notes"):
            print(dim(f"    备注：{v['notes']}"))

def add_visit(data):
    print(bold("新增就诊记录"))
    d = ask_date("就诊日期", default_today=True)
    hospital = ask("医院", required=True)
    department = ask("科室", default="儿科")
    doctor = ask("医生（可空）")
    reason = ask("主诉/诊断（可空）")
    told = confirm("就诊时已主动告知蚕豆病史？")
    # 逐条录入药品，自动比对禁忌库
    meds = []
    print("  录入开具药品（药名留空结束；将自动比对禁忌库）")
    while True:
        name = ask("药名")
        if not name:
            break
        risk = None
        hits = search(name)
        if hits:
            score, it = hits[0]
            risk = it["risk"]
            style, label = RISK_STYLE[it["risk"]]
            extra = ""
            if len(hits) > 1:
                extra = dim(f"（另有 {len(hits)-1} 条相关结果，可用速查器细查）")
            print(yellow(f"    比对：{style(label)}  {it['name']} —— {it['summary']} {extra}"))
            if it["risk"] == "forbidden":
                print(red("    ⚠ 该药在禁用名单中！如已开具，请立即与开药医生复核。"))
            elif it["risk"] == "caution":
                print(yellow("    ⚠ 该药需医生评估后使用，请确认医生已知情。"))
        else:
            print(dim("    禁忌库中无此药（未收录 ≠ 安全，请遵医嘱）。"))
        meds.append({"name": name, "risk": risk})
    notes = ask("备注（可空）")
    data["visits"].append({
        "id": next_id(data["visits"]), "date": d, "hospital": hospital,
        "department": department, "doctor": doctor, "reason": reason,
        "told_doctor": told, "medicines": meds, "notes": notes,
    })
    save_profile(data)
    print(green("  已保存。\n"))

# ---------- 家人状态 ----------

FAMILY_STATUS = [
    ("patient", "G6PD缺乏症患者"),
    ("carrier", "携带者"),
    ("normal", "正常/已排除"),
    ("unknown", "未查/不清楚"),
]

def list_family(data):
    fam = data["family"]
    print(bold(f"家人G6PD状态（共 {len(fam)} 人）"))
    if not fam:
        print(dim("  暂无记录。"))
        return
    status_style = {"patient": red, "carrier": yellow, "normal": green, "unknown": dim}
    for m in sorted(fam, key=lambda x: x.get("relation", "")):
        st = status_style.get(m.get("status", ""), lambda t: t)
        print(f"  {m['relation']}：{m['name'] or '（未填名）'}  {st(dict(FAMILY_STATUS).get(m.get('status',''), ''))}")
        if m.get("tested_via"):
            print(dim(f"    检测方式：{m['tested_via']}"))
        if m.get("notes"):
            print(dim(f"    备注：{m['notes']}"))

def add_family(data):
    print(bold("登记家人G6PD状态"))
    rel = ask("关系（如母亲、父亲、舅舅、表哥）", required=True)
    name = ask("姓名（可空）")
    gender = ask("性别（男/女，可空）")
    status = ask_choice("G6PD状态", FAMILY_STATUS)
    tested_via = ask("检测方式（新生儿筛查/抽血酶活性/基因检测，可空）")
    notes = ask("备注（可空）")
    data["family"].append({
        "id": next_id(data["family"]), "relation": rel, "name": name,
        "gender": gender, "status": status, "tested_via": tested_via, "notes": notes,
    })
    save_profile(data)
    print(green("  已保存。\n"))
    # X连锁遗传提示
    p = data["patient"]
    if p.get("gender") == "男" and rel in ("母亲", "妈妈", "母"):
        if status in ("unknown", ""):
            print(yellow("  提示：G6PD缺乏症为X连锁遗传，男性患者的致病基因必然来自母亲。"))
            print(yellow("  建议母亲做一次G6PD酶活性检测，并请母系亲属（舅舅、姨妈、表哥）留意。\n"))

# ---------- 复查提醒 ----------

def list_reminders(data, due_only=False):
    rs = data["reminders"]
    today = date.today()
    rows = []
    for r in rs:
        nd = r.get("next_due", "")
        days = None
        if nd:
            try:
                days = (datetime.strptime(nd, "%Y-%m-%d").date() - today).days
            except ValueError:
                pass
        rows.append((r, days))
    rows.sort(key=lambda x: (x[1] is None, x[1] if x[1] is not None else 0))
    if due_only:
        rows = [(r, d) for r, d in rows if d is not None and d <= 7]
    title = "复查提醒（7天内到期）" if due_only else f"复查提醒（共 {len(rs)} 项）"
    print(bold(title))
    if not rows:
        print(dim("  暂无到期的提醒。" if due_only else "  暂无提醒。无症状者通常无需定期复查，遵医嘱即可。"))
        return []
    for r, days in rows:
        line = f"  {r['title']}"
        if r.get("next_due"):
            if days is not None and days < 0:
                line += red(f"  已过期{-days}天")
            elif days is not None and days <= 7:
                line += yellow(f"  {days}天后到期")
            else:
                line += f"  {r['next_due']}"
        if r.get("interval_days"):
            line += dim(f"（每{r['interval_days']}天）")
        print(line)
        if r.get("notes"):
            print(dim(f"    {r['notes']}"))
    return rows

def add_reminder(data):
    print(bold("新增复查提醒"))
    title = ask("事项（如：血常规复查、儿科随访）", required=True)
    interval = ask("重复周期（天，如180；一次性事项留空）")
    last = ask_date("上次完成日期")
    notes = ask("备注（可空）")
    interval_days = int(interval) if interval.isdigit() else None
    next_due = ""
    if interval_days and last:
        try:
            d = datetime.strptime(last, "%Y-%m-%d").date()
            next_due = date.fromordinal(d.toordinal() + interval_days).isoformat()
        except ValueError:
            pass
    elif last:
        # 一次性事项：完成后手动标记，这里记录原日期供参考
        next_due = ""
    data["reminders"].append({
        "id": next_id(data["reminders"]), "title": title,
        "interval_days": interval_days, "last_done": last,
        "next_due": next_due, "notes": notes,
    })
    save_profile(data)
    print(green("  已保存。\n"))

def mark_reminder_done(data):
    rows = list_reminders(data)
    if not rows:
        return
    try:
        idx = input("  输入要标记完成的提醒序号: ").strip()
    except (EOFError, KeyboardInterrupt):
        return
    if not idx.isdigit() or not (1 <= int(idx) <= len(rows)):
        print(yellow("  输入无效。"))
        return
    r = rows[int(idx) - 1][0]
    r["last_done"] = date.today().isoformat()
    if r.get("interval_days"):
        r["next_due"] = date.fromordinal(date.today().toordinal() + r["interval_days"]).isoformat()
    else:
        r["next_due"] = ""
    save_profile(data)
    print(green(f"  已标记「{r['title']}」完成。\n"))

# ---------- 总览 ----------

def overview(data):
    print(bold("═" * 50))
    print(bold("  G6PD缺乏症（蚕豆病）健康档案 · 总览"))
    print(bold("═" * 50))
    show_profile(data)
    eps = data["episodes"]
    print(f"\n  溶血发作：{len(eps)} 次" + (dim(f"  最近：{max(e['date'] for e in eps)}") if eps else ""))
    vs = data["visits"]
    print(f"  就诊记录：{len(vs)} 次" + (dim(f"  最近：{max(v['date'] for v in vs)}") if vs else ""))
    warned = sum(1 for v in vs for m in v.get("medicines", []) if m.get("risk") in ("forbidden", "caution"))
    if warned:
        print(yellow(f"  就诊记录中标记过风险的用药：{warned} 条"))
    fam = data["family"]
    if fam:
        from collections import Counter
        c = Counter(m.get("status") for m in fam)
        desc = "、".join(f"{dict(FAMILY_STATUS).get(k, k)} {v} 人" for k, v in c.items())
        print(f"  家人登记：{len(fam)} 人（{desc}）")
    list_reminders(data, due_only=True)
    # 智能提示
    tips = []
    if not data["patient"]["name"]:
        tips.append("患者信息未填写，运行 profile 补全。")
    p = data["patient"]
    male_patient = p.get("gender") == "男"
    mother = next((m for m in fam if m["relation"] in ("母亲", "妈妈", "母")), None)
    if male_patient and not mother:
        tips.append("未登记母亲状态：男性患者致病基因必然来自母亲，建议母亲检测并登记。")
    elif male_patient and mother and mother.get("status") in ("unknown", ""):
        tips.append("母亲状态为“未查”：建议母亲做G6PD酶活性检测。")
    if eps:
        tips.append(f"共有 {len(eps)} 次发作记录，就诊/用药时主动告知医生完整病史。")
    if tips:
        print(bold("\n  提醒："))
        for t in tips:
            print(yellow(f"    · {t}"))
    print()

# ---------- 主流程 ----------

MODULES = [
    ("profile", "患者信息"),
    ("episode", "溶血发作史"),
    ("visit", "就诊记录"),
    ("family", "家人G6PD状态"),
    ("reminder", "复查提醒"),
]

def menu(data):
    while True:
        print(bold("主菜单"))
        for i, (k, label) in enumerate(MODULES, 1):
            print(f"  {i}. {label}")
        print("  q. 退出")
        try:
            choice = input("请选择: ").strip().lower()
        except (EOFError, KeyboardInterrupt):
            print("\n再见。")
            return
        if choice in ("q", "quit", "exit", "退出"):
            print("再见。")
            return
        if choice == "1" or choice == "profile":
            edit_profile(data)
        elif choice == "2" or choice == "episode":
            list_episodes(data)
            if confirm("新增一条发作记录？"):
                add_episode(data)
        elif choice == "3" or choice == "visit":
            list_visits(data)
            if confirm("新增一条就诊记录？"):
                add_visit(data)
        elif choice == "4" or choice == "family":
            list_family(data)
            if confirm("登记一位家人？"):
                add_family(data)
        elif choice == "5" or choice == "reminder":
            list_reminders(data)
            sub = ask_choice("操作", [("add", "新增提醒"), ("done", "标记完成"), ("back", "返回")])
            if sub == "add":
                add_reminder(data)
            elif sub == "done":
                mark_reminder_done(data)
        else:
            print(yellow("输入无效。\n"))

def main():
    args = sys.argv[1:]
    cmd = args[0] if args else "overview"
    data = load_profile()
    if cmd == "overview":
        overview(data)
        if len(args) == 0:
            menu(data)
    elif cmd == "profile":
        show_profile(data)
        if confirm("现在编辑？"):
            edit_profile(data)
    elif cmd == "episode":
        list_episodes(data)
        if confirm("新增一条发作记录？"):
            add_episode(data)
    elif cmd == "visit":
        list_visits(data)
        if confirm("新增一条就诊记录？"):
            add_visit(data)
    elif cmd == "family":
        list_family(data)
        if confirm("登记一位家人？"):
            add_family(data)
    elif cmd == "reminder":
        list_reminders(data)
        sub = args[1] if len(args) > 1 else ask_choice("操作", [("add", "新增提醒"), ("done", "标记完成"), ("back", "返回")])
        if sub == "add":
            add_reminder(data)
        elif sub == "done":
            mark_reminder_done(data)
    else:
        print(f"未知命令：{cmd}")
        print("可用：overview / profile / episode / visit / family / reminder")

if __name__ == "__main__":
    main()

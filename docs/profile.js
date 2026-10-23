/* 蚕豆病禁忌速查 · 健康档案模块（网页版）
 * 数据存于浏览器 localStorage（key: g6pd_profile_v1），不出设备；
 * 支持导出 JSON / 导入 JSON 换机迁移。
 * 依赖 app.js 暴露的 window.g6pd（search / esc / itemCard 等）。
 */
(function () {
  "use strict";

  var KEY = "g6pd_profile_v1";
  var app = window.g6pd;
  var esc = app.esc;
  var search = app.search;

  /* ---------- 数据层 ---------- */

  function blank() {
    return {
      patient: { name: "", gender: "", birth: "", diagnosed: "", who: "", notes: "" },
      episodes: [], visits: [], family: [], reminders: []
    };
  }

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return blank();
      var d = JSON.parse(raw);
      var b = blank();
      // 合并默认结构，容忍旧版本缺字段
      b.patient = Object.assign(b.patient, d.patient || {});
      ["episodes", "visits", "family", "reminders"].forEach(function (k) {
        if (Array.isArray(d[k])) b[k] = d[k];
      });
      return b;
    } catch (e) {
      return blank();
    }
  }

  function save() {
    localStorage.setItem(KEY, JSON.stringify(state.data));
  }

  var state = { data: load(), tab: "episodes", form: null };
  var root = document.getElementById("profileApp");

  function nextId(rows) {
    return rows.reduce(function (m, r) { return Math.max(m, r.id || 0); }, 0) + 1;
  }

  function today() {
    var d = new Date();
    var p = function (n) { return (n < 10 ? "0" : "") + n; };
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
  }

  function addDays(dateStr, days) {
    var d = new Date(dateStr + "T00:00:00");
    d.setDate(d.getDate() + days);
    var p = function (n) { return (n < 10 ? "0" : "") + n; };
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
  }

  function daysUntil(dateStr) {
    var diff = new Date(dateStr + "T00:00:00") - new Date(today() + "T00:00:00");
    return Math.round(diff / 86400000);
  }

  /* ---------- 常量 ---------- */

  var WHO = [
    ["I", "Ⅰ类 严重缺乏（接近0，可慢性溶血）"],
    ["II", "Ⅱ类 严重缺乏（<10%）"],
    ["III", "Ⅲ类 轻中度缺乏（10%~60%）"],
    ["IV", "Ⅳ类 轻度降低（一般无症状）"],
    ["", "不清楚/未分级"]
  ];
  var TRIGGERS = [
    ["drug", "药物"], ["food", "食物（如蚕豆）"], ["infection", "感染"],
    ["chemical", "化学品（如樟脑丸）"], ["unknown", "不明/多种"]
  ];
  var FSTATUS = [
    ["patient", "G6PD缺乏症患者"], ["carrier", "携带者"],
    ["normal", "正常/已排除"], ["unknown", "未查/不清楚"]
  ];
  var STATUS_STYLE = { patient: "forbidden", carrier: "caution", normal: "safe", unknown: "none" };

  /* ---------- 工具 ---------- */

  function toast(msg) {
    var t = document.getElementById("toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "toast";
      t.className = "toast";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._timer);
    t._timer = setTimeout(function () { t.classList.remove("show"); }, 2600);
  }

  function optgroups(options, selected) {
    return options.map(function (o) {
      var sel = o[0] === selected ? " selected" : "";
      return '<option value="' + esc(o[0]) + '"' + sel + ">" + esc(o[1]) + "</option>";
    }).join("");
  }

  /* ---------- 渲染 ---------- */

  function render() {
    var d = state.data;
    var html = "";

    // 患者卡片
    var p = d.patient;
    html += '<div class="pcard"><div class="rh" style="display:flex;justify-content:space-between;align-items:center">' +
      '<b style="font-size:16px">👤 患者信息</b>' +
      '<button class="btn ghost small" data-action="edit-patient">' + (p.name ? "编辑" : "填写") + "</button></div>";
    if (p.name) {
      var whoLabel = "";
      WHO.forEach(function (o) { if (o[0] === p.who) whoLabel = o[1]; });
      html += '<div class="pv" style="margin-top:8px"><b>' + esc(p.name) + "</b>" +
        (p.gender ? " · " + esc(p.gender) : "") + "</div>";
      if (p.birth) html += '<div class="pv"><span class="pk">出生</span> ' + esc(p.birth) + "</div>";
      if (p.diagnosed) html += '<div class="pv"><span class="pk">确诊</span> ' + esc(p.diagnosed) + "</div>";
      if (p.who) html += '<div class="pv"><span class="pk">分级</span> ' + esc(whoLabel) + "</div>";
      if (p.notes) html += '<div class="pv"><span class="pk">备注</span> ' + esc(p.notes) + "</div>";
    } else {
      html += '<div class="pv" style="color:var(--ink-3);margin-top:6px">尚未填写，点右上角「填写」</div>';
    }
    html += "</div>";

    // 统计条
    html += '<div class="stat-row">' +
      stat(d.episodes.length, "溶血发作") +
      stat(d.visits.length, "就诊记录") +
      stat(d.family.length, "家人登记") +
      stat(dueCount(), "待办提醒") +
      "</div>";

    // 表单（如有）
    if (state.form && FORMS[state.form]) html += FORMS[state.form]();

    // 子页签
    var tabs = [
      ["episodes", "发作史"], ["visits", "就诊记录"],
      ["family", "家人状态"], ["reminders", "复查提醒"], ["data", "数据"]
    ];
    html += '<div class="ptabs">';
    tabs.forEach(function (t) {
      html += '<div class="ptab' + (state.tab === t[0] ? " on" : "") + '" data-action="tab" data-tab="' + t[0] + '">' + t[1] + "</div>";
    });
    html += "</div>";

    // 子内容
    if (state.tab === "episodes") html += viewEpisodes();
    else if (state.tab === "visits") html += viewVisits();
    else if (state.tab === "family") html += viewFamily();
    else if (state.tab === "reminders") html += viewReminders();
    else if (state.tab === "data") html += viewData();

    root.innerHTML = html;

    // 就诊表单：药品输入框回车即添加
    if (state.form === "visit") {
      var mi = root.querySelector('[data-f="med"]');
      if (mi) mi.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter") { ev.preventDefault(); addMedFromInput(); }
      });
    }
  }

  function stat(n, label) {
    return '<div class="stat"><div class="n">' + n + '</div><div class="t">' + label + "</div></div>";
  }

  function dueCount() {
    return state.data.reminders.filter(function (r) {
      return r.next_due && daysUntil(r.next_due) <= 7;
    }).length;
  }

  /* ----- 患者表单 ----- */

  function formPatient() {
    var p = state.data.patient;
    return '<div class="form"><b>患者信息</b>' +
      field("姓名/昵称", '<input data-f="name" value="' + esc(p.name) + '" placeholder="如：小明">') +
      '<div class="row">' +
      '<div>' + field("性别", '<select data-f="gender">' + optgroups([["", "未填"], ["男", "男"], ["女", "女"]], p.gender) + "</select>") + "</div>" +
      '<div>' + field("出生日期", '<input type="date" data-f="birth" value="' + esc(p.birth) + '">') + "</div>" +
      "</div>" +
      '<div class="row">' +
      '<div>' + field("确诊日期", '<input type="date" data-f="diagnosed" value="' + esc(p.diagnosed) + '">') + "</div>" +
      '<div>' + field("WHO酶活性分级", '<select data-f="who">' + optgroups(WHO, p.who) + "</select>") + "</div>" +
      "</div>" +
      field("备注", '<input data-f="notes" value="' + esc(p.notes) + '" placeholder="可选">') +
      '<div class="btnrow"><button class="btn" data-action="save-patient">保存</button>' +
      '<button class="btn ghost" data-action="cancel">取消</button></div></div>';
  }

  function field(label, inputHtml) {
    return "<label>" + esc(label) + "</label>" + inputHtml;
  }

  /* ----- 发作史 ----- */

  function viewEpisodes() {
    var eps = state.data.episodes.slice().sort(function (a, b) { return (a.date || "") < (b.date || "") ? 1 : -1; });
    var html = "";
    if (!eps.length) html += '<div class="empty"><div class="big">🌤️</div>暂无发作记录<br>没有发作是最好的情况</div>';
    eps.forEach(function (e) {
      var trig = "";
      TRIGGERS.forEach(function (t) { if (t[0] === e.trigger_type) trig = t[1]; });
      html += '<div class="rec"><div class="rh"><span class="rt">' + esc(e.date) + " " + esc(trig) + "</span>" +
        '<button class="del" data-action="del-episode" data-id="' + e.id + '">删除</button></div>';
      if (e.trigger) html += '<div class="rb">诱因：' + esc(e.trigger) + "</div>";
      if (e.symptoms) html += '<div class="rb">症状：' + esc(e.symptoms) + "</div>";
      if (e.hospital) html += '<div class="rb">就诊：' + esc(e.hospital) + (e.outcome ? "（" + esc(e.outcome) + "）" : "") + "</div>";
      else if (e.outcome) html += '<div class="rb">转归：' + esc(e.outcome) + "</div>";
      if (e.notes) html += '<div class="rb" style="color:var(--ink-3)">备注：' + esc(e.notes) + "</div>";
      html += "</div>";
    });
    html += '<button class="addbtn" data-action="add-episode">＋ 记录一次发作</button>';
    return html;
  }

  function formEpisode() {
    return '<div class="form"><b>记录溶血发作</b>' +
      field("发作日期", '<input type="date" data-f="date" value="' + today() + '">') +
      field("诱因类型", '<select data-f="trigger_type">' + optgroups(TRIGGERS, "") + "</select>") +
      field("具体诱因（药名/食物名）", '<input data-f="trigger" placeholder="如：复方新诺明（将自动比对禁忌库）">') +
      field("症状", '<input data-f="symptoms" placeholder="如：尿色深、黄疸、苍白">') +
      field("就诊医院/科室", '<input data-f="hospital" placeholder="可选">') +
      field("转归", '<input data-f="outcome" placeholder="如：痊愈、输血">') +
      field("备注", '<input data-f="notes" placeholder="可选">') +
      '<div class="btnrow"><button class="btn" data-action="save-episode">保存</button>' +
      '<button class="btn ghost" data-action="cancel">取消</button></div></div>';
  }

  /* ----- 就诊记录 ----- */

  function medTag(risk) {
    if (!risk) return '<span class="mtag none">未收录</span>';
    return '<span class="mtag ' + esc(risk) + '">' + esc(app.RISK_LABEL[risk] || risk) + "</span>";
  }

  function statusTag(status) {
    var cls = STATUS_STYLE[status] || "none";
    var label = "";
    FSTATUS.forEach(function (s) { if (s[0] === status) label = s[1]; });
    return '<span class="mtag ' + esc(cls) + '">' + esc(label || "未填") + "</span>";
  }

  function viewVisits() {
    var vs = state.data.visits.slice().sort(function (a, b) { return (a.date || "") < (b.date || "") ? 1 : -1; });
    var html = "";
    if (!vs.length) html += '<div class="empty"><div class="big">🏥</div>暂无就诊记录</div>';
    vs.forEach(function (v) {
      html += '<div class="rec"><div class="rh"><span class="rt">' + esc(v.date) + " " + esc(v.hospital) + "</span>" +
        '<button class="del" data-action="del-visit" data-id="' + v.id + '">删除</button></div>' +
        '<div class="rb">' + esc(v.department || "") +
        (v.doctor ? " · " + esc(v.doctor) : "") +
        (v.told ? ' · <span style="color:var(--green)">已告知病史</span>' : ' · <span style="color:var(--yellow)">未确认告知</span>') + "</div>";
      if (v.reason) html += '<div class="rb">主诉：' + esc(v.reason) + "</div>";
      (v.meds || []).forEach(function (m) {
        html += '<div class="medline">💊 ' + esc(m.name) + " " + medTag(m.risk) + "</div>";
      });
      if (v.notes) html += '<div class="rb" style="color:var(--ink-3)">备注：' + esc(v.notes) + "</div>";
      html += "</div>";
    });
    html += '<button class="addbtn" data-action="add-visit">＋ 记录一次就诊</button>';
    return html;
  }

  function formVisit() {
    return '<div class="form"><b>记录就诊</b>' +
      '<div class="row">' +
      '<div>' + field("就诊日期", '<input type="date" data-f="date" value="' + today() + '">') + "</div>" +
      '<div>' + field("科室", '<input data-f="department" value="儿科">') + "</div>" +
      "</div>" +
      field("医院", '<input data-f="hospital" placeholder="如：市妇幼保健院" required>') +
      field("医生", '<input data-f="doctor" placeholder="可选">') +
      field("主诉/诊断", '<input data-f="reason" placeholder="可选">') +
      field("已主动告知蚕豆病史？", '<select data-f="told"><option value="1">已告知</option><option value="0">未告知/不确定</option></select>') +
      '<label>开具药品（逐条添加，自动比对禁忌库）</label>' +
      '<div class="row"><div><input data-f="med" placeholder="药名，如：阿莫西林" enterkeyhint="done"></div>' +
      '<div style="flex:0 0 76px"><button class="btn small" data-action="add-med" style="width:100%">添加</button></div></div>' +
      '<div id="medCheck"></div><div id="medList"></div>' +
      field("备注", '<input data-f="notes" placeholder="可选">') +
      '<div class="btnrow"><button class="btn" data-action="save-visit">保存</button>' +
      '<button class="btn ghost" data-action="cancel">取消</button></div></div>';
  }

  var formMeds = [];

  function renderMedList() {
    var box = document.getElementById("medList");
    if (!box) return;
    box.innerHTML = formMeds.map(function (m, i) {
      return '<div class="medline">💊 ' + esc(m.name) + " " + medTag(m.risk) +
        '<button class="del" data-action="del-med" data-i="' + i + '">✕</button></div>';
    }).join("");
  }

  function addMedFromInput() {
    var input = root.querySelector('[data-f="med"]');
    var check = document.getElementById("medCheck");
    var name = (input.value || "").trim();
    if (!name) return;
    var hits = search(name);
    var risk = null, html = "";
    if (hits.length) {
      var it = hits[0];
      risk = it.risk;
      var tag = medTag(it.risk);
      html = '<div class="med-check' + (it.risk === "forbidden" ? " bad" : it.risk === "caution" ? " warn" : "") + '">' +
        tag + " " + esc(it.name) + " —— " + esc(it.summary) + "</div>";
      if (it.risk === "forbidden") {
        html += '<div class="med-check bad">⛔ 该药在禁用名单中！如已开具，请立即与开药医生复核。</div>';
      } else if (it.risk === "caution") {
        html += '<div class="med-check warn">⚠ 该药需医生评估后使用，请确认医生已知情。</div>';
      }
    } else {
      html = '<div class="med-check">禁忌库中无此药（未收录 ≠ 安全，请遵医嘱）。</div>';
    }
    check.innerHTML = html;
    formMeds.push({ name: name, risk: risk });
    input.value = "";
    renderMedList();
    input.focus();
  }

  /* ----- 家人状态 ----- */

  function viewFamily() {
    var fam = state.data.family;
    var html = "";
    if (!fam.length) html += '<div class="empty"><div class="big">👨‍👩‍👧</div>暂无家人登记<br>X连锁遗传，母系亲属尤其值得关注</div>';
    fam.forEach(function (m) {
      var st = "";
      FSTATUS.forEach(function (s) { if (s[0] === m.status) st = s[1]; });
      html += '<div class="rec"><div class="rh"><span class="rt">' + esc(m.relation) + " " + esc(m.name) + "</span>" +
        '<button class="del" data-action="del-family" data-id="' + m.id + '">删除</button></div>' +
        '<div class="medline">' + statusTag(m.status) + "</div>";
      if (m.tested) html += '<div class="rb" style="color:var(--ink-3)">检测：' + esc(m.tested) + "</div>";
      html += "</div>";
    });
    html += '<button class="addbtn" data-action="add-family">＋ 登记一位家人</button>';
    return html;
  }

  function formFamily() {
    return '<div class="form"><b>登记家人</b>' +
      '<div class="row">' +
      '<div>' + field("关系", '<input data-f="relation" placeholder="如：母亲">') + "</div>" +
      '<div>' + field("姓名", '<input data-f="name" placeholder="可选">') + "</div>" +
      "</div>" +
      field("G6PD状态", '<select data-f="status">' + optgroups(FSTATUS, "") + "</select>") +
      field("检测方式", '<input data-f="tested" placeholder="如：新生儿筛查/酶活性/基因检测">') +
      '<div class="btnrow"><button class="btn" data-action="save-family">保存</button>' +
      '<button class="btn ghost" data-action="cancel">取消</button></div></div>';
  }

  /* ----- 复查提醒 ----- */

  function viewReminders() {
    var rs = state.data.reminders.slice().sort(function (a, b) {
      return (a.next_due || "9999") < (b.next_due || "9999") ? -1 : 1;
    });
    var html = "";
    if (!rs.length) html += '<div class="empty"><div class="big">📅</div>暂无提醒<br>无症状者通常无需定期复查，遵医嘱即可</div>';
    rs.forEach(function (r) {
      var due = "";
      if (r.next_due) {
        var n = daysUntil(r.next_due);
        due = n < 0 ? '<span class="overdue">已过期' + (-n) + "天</span>"
          : n <= 7 ? '<span style="color:var(--yellow);font-weight:700">' + n + "天后</span>"
          : esc(r.next_due);
      }
      html += '<div class="rec"><div class="rh"><span class="rt">' + esc(r.title) + "</span>" +
        '<span><button class="del" data-action="done-reminder" data-id="' + r.id + '">完成</button>' +
        '<button class="del" data-action="del-reminder" data-id="' + r.id + '">删除</button></span></div>' +
        '<div class="rb">下次：' + due + (r.interval_days ? "（每" + r.interval_days + "天）" : "") + "</div>" +
        (r.notes ? '<div class="rb" style="color:var(--ink-3)">' + esc(r.notes) + "</div>" : "") +
        "</div>";
    });
    html += '<button class="addbtn" data-action="add-reminder">＋ 新增提醒</button>';
    return html;
  }

  function formReminder() {
    return '<div class="form"><b>新增复查提醒</b>' +
      field("事项", '<input data-f="title" placeholder="如：血常规复查">') +
      '<div class="row">' +
      '<div>' + field("重复周期（天）", '<input type="number" data-f="interval_days" placeholder="如：180，可空">') + "</div>" +
      '<div>' + field("上次完成日期", '<input type="date" data-f="last_done">') + "</div>" +
      "</div>" +
      field("备注", '<input data-f="notes" placeholder="可选">') +
      '<div class="btnrow"><button class="btn" data-action="save-reminder">保存</button>' +
      '<button class="btn ghost" data-action="cancel">取消</button></div></div>';
  }

  /* ----- 数据管理 ----- */

  function viewData() {
    return '<div class="pcard"><b>💾 数据管理</b>' +
      '<div class="pv" style="color:var(--ink-2);margin-top:8px;font-size:13.5px">档案数据只保存在这台设备的浏览器里（localStorage），不会上传。换手机或清理浏览器前，请先导出备份。</div>' +
      '<div class="btnrow">' +
      '<button class="btn" data-action="export">⬇ 导出备份</button>' +
      '<button class="btn ghost" data-action="import">⬆ 导入备份</button>' +
      "</div>" +
      '<div class="btnrow"><button class="btn ghost" data-action="wipe" style="color:var(--red)">🗑 清空全部数据</button></div>' +
      '<input type="file" id="importFile" accept=".json,application/json" style="display:none">' +
      "</div>";
  }

  /* ---------- 表单收集与保存 ---------- */

  function collect(prefix) {
    var out = {};
    root.querySelectorAll("[data-f]").forEach(function (el) {
      var k = el.getAttribute("data-f");
      if (prefix && k.indexOf(prefix) !== 0) return;
      out[k] = el.value;
    });
    return out;
  }

  function actions() {
    root.addEventListener("click", function (e) {
      var el = e.target.closest("[data-action]");
      if (!el) return;
      var a = el.getAttribute("data-action");
      var d = state.data;

      if (a === "tab") {
        state.tab = el.getAttribute("data-tab");
        state.form = null;
        formMeds = [];
        render();
      } else if (a === "edit-patient") {
        state.form = "patient";
        render();
      } else if (a === "cancel") {
        state.form = null;
        formMeds = [];
        render();
      } else if (a === "save-patient") {
        var f = collect();
        d.patient = {
          name: (f.name || "").trim(), gender: f.gender || "",
          birth: f.birth || "", diagnosed: f.diagnosed || "",
          who: f.who || "", notes: f.notes || ""
        };
        save(); state.form = null; render();
        toast("已保存");
        if (d.patient.gender === "男") {
          setTimeout(motherHint, 300);
        }
      } else if (a === "add-episode") {
        state.form = "episode"; render();
      } else if (a === "save-episode") {
        var ef = collect();
        if (!ef.date) { toast("请选择发作日期"); return; }
        d.episodes.push({
          id: nextId(d.episodes), date: ef.date, trigger_type: ef.trigger_type || "",
          trigger: ef.trigger || "", symptoms: ef.symptoms || "",
          hospital: ef.hospital || "", outcome: ef.outcome || "", notes: ef.notes || ""
        });
        save(); state.form = null; render(); toast("已保存");
        // 诱因自动比对
        if (ef.trigger) {
          var hits = search(ef.trigger);
          if (hits.length) {
            var it = hits[0];
            toast("禁忌库比对：" + (app.RISK_LABEL[it.risk] || it.risk) + " " + it.name);
          }
        }
      } else if (a === "add-visit") {
        state.form = "visit"; formMeds = []; render();
      } else if (a === "add-med") {
        addMedFromInput();
      } else if (a === "del-med") {
        formMeds.splice(parseInt(el.getAttribute("data-i"), 10), 1);
        renderMedList();
      } else if (a === "save-visit") {
        var vf = collect();
        if (!vf.hospital || !vf.hospital.trim()) { toast("请填写医院"); return; }
        d.visits.push({
          id: nextId(d.visits), date: vf.date || today(), hospital: vf.hospital.trim(),
          department: vf.department || "", doctor: vf.doctor || "",
          reason: vf.reason || "", told: vf.told === "1",
          meds: formMeds.slice(), notes: vf.notes || ""
        });
        save(); state.form = null; formMeds = []; render(); toast("已保存");
        var bad = d.visits[d.visits.length - 1].meds.filter(function (m) { return m.risk === "forbidden"; });
        if (bad.length) {
          setTimeout(function () {
            toast("⚠ 本次录入含 " + bad.length + " 种禁用药物，请与医生复核");
          }, 2800);
        }
      } else if (a === "add-family") {
        state.form = "family"; render();
      } else if (a === "save-family") {
        var ff = collect();
        if (!ff.relation || !ff.relation.trim()) { toast("请填写关系"); return; }
        d.family.push({
          id: nextId(d.family), relation: ff.relation.trim(), name: ff.name || "",
          status: ff.status || "", tested: ff.tested || ""
        });
        save(); state.form = null; render(); toast("已保存");
        if (d.patient.gender === "男" && ["母亲", "妈妈", "母"].indexOf(ff.relation.trim()) !== -1
            && (ff.status === "unknown" || !ff.status)) {
          setTimeout(function () {
            toast("提示：男性患者致病基因必然来自母亲，建议母亲做G6PD检测");
          }, 2800);
        }
      } else if (a === "add-reminder") {
        state.form = "reminder"; render();
      } else if (a === "save-reminder") {
        var rf = collect();
        if (!rf.title || !rf.title.trim()) { toast("请填写事项"); return; }
        var interval = parseInt(rf.interval_days, 10);
        if (isNaN(interval) || interval <= 0) interval = null;
        var nextDue = "";
        if (interval && rf.last_done) nextDue = addDays(rf.last_done, interval);
        d.reminders.push({
          id: nextId(d.reminders), title: rf.title.trim(),
          interval_days: interval, last_done: rf.last_done || "",
          next_due: nextDue, notes: rf.notes || ""
        });
        save(); state.form = null; render(); toast("已保存");
      } else if (a === "done-reminder") {
        var r = d.reminders.filter(function (x) { return x.id === parseInt(el.getAttribute("data-id"), 10); })[0];
        if (r) {
          r.last_done = today();
          r.next_due = r.interval_days ? addDays(today(), r.interval_days) : "";
          save(); render(); toast("已标记完成");
        }
      } else if (a === "export") {
        exportJson();
      } else if (a === "import") {
        var fi = document.getElementById("importFile");
        if (fi) fi.click();
      } else if (a === "wipe") {
        if (confirm("确定清空全部档案数据？此操作不可恢复，建议先导出备份。")) {
          state.data = blank();
          save(); state.tab = "patient"; state.form = null; render();
          toast("已清空");
        }
      } else if (a === "del-episode" || a === "del-visit" || a === "del-family" || a === "del-reminder") {
        var key = { "del-episode": "episodes", "del-visit": "visits", "del-family": "family", "del-reminder": "reminders" }[a];
        var id = parseInt(el.getAttribute("data-id"), 10);
        d[key] = d[key].filter(function (x) { return x.id !== id; });
        save(); render(); toast("已删除");
      }
    });
  }

  function motherHint() {
    var d = state.data;
    var mother = d.family.filter(function (m) {
      return ["母亲", "妈妈", "母"].indexOf(m.relation) !== -1;
    })[0];
    if (!mother) {
      toast("提示：登记母亲状态——男性患者致病基因必然来自母亲");
    } else if (mother.status === "unknown" || !mother.status) {
      toast("提示：母亲状态为未查，建议做G6PD酶活性检测");
    }
  }

  /* ---------- 导入导出 ---------- */

  function exportJson() {
    var blob = new Blob([JSON.stringify(state.data, null, 2)], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "g6pd-档案备份-" + today() + ".json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    toast("已导出，请妥善保存备份文件");
  }

  function bindImport() {
    root.addEventListener("change", function (e) {
      if (e.target.id !== "importFile") return;
      var file = e.target.files && e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var d = JSON.parse(reader.result);
          if (!d || typeof d !== "object" || !d.patient) throw new Error("bad format");
          var b = blank();
          b.patient = Object.assign(b.patient, d.patient || {});
          ["episodes", "visits", "family", "reminders"].forEach(function (k) {
            if (Array.isArray(d[k])) b[k] = d[k];
          });
          state.data = b;
          save(); state.tab = "patient"; state.form = null;
          render();
          toast("导入成功");
        } catch (err) {
          toast("导入失败：文件格式不正确");
        }
      };
      reader.readAsText(file);
      e.target.value = "";
    });
  }

  /* ---------- 启动 ---------- */

  var FORMS = {
    patient: formPatient,
    episode: formEpisode,
    visit: formVisit,
    family: formFamily,
    reminder: formReminder
  };

  function init() {
    actions();
    bindImport();
    render();
  }

  init();
})();

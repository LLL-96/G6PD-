/* 蚕豆病禁忌速查 · 移动端逻辑
 * 依赖 data.js 提供的 G6PD_DATA
 * 搜索策略与 CLI 版保持一致：精确 > 别名/子串 > 字符 subsequence 模糊
 */
(function () {
  "use strict";

  var ITEMS = G6PD_DATA.items;
  var SOURCES = {};
  G6PD_DATA.sources.forEach(function (s) { SOURCES[s.id] = s.name; });

  var CATEGORY_NAMES = {
    analgesic: "解热镇痛药", sulfa: "磺胺类抗菌药", furan: "硝基呋喃类抗菌药",
    antimalarial: "抗疟药", antibiotic_other: "其他抗菌药物", cardiovascular: "心血管系统用药",
    metabolic: "内分泌（降糖药）", neuro: "神经系统/抗过敏", urinary: "泌尿系统用药",
    other_drug: "其他药物", tcm: "中药与中成药成分", food: "食物",
    household: "日用化学品", occupational: "职业/环境暴露", infection: "感染与疾病提示",
    vaccine: "疫苗（常规接种）"
  };

  var RISK_LABEL = { forbidden: "⛔ 禁用", caution: "⚠️ 慎用", safe: "✅ 常规可用", info: "ℹ️ 提示" };
  var RISK_ORDER = { forbidden: 0, caution: 1, safe: 2, info: 3 };

  /* ===== SEARCH-CORE-START（tools/test_web_search.js 会提取本段做一致性测试） ===== */
  function norm(s) {
    return String(s || "").toLowerCase().replace(/\s+/g, "");
  }

  /* 最长公共子序列长度（difflib.SequenceMatcher.ratio 的核心度量） */
  function lcsLen(a, b) {
    var n = a.length, m = b.length;
    if (!n || !m) return 0;
    var prev = new Array(m + 1).fill(0);
    var cur = new Array(m + 1).fill(0);
    for (var i = 1; i <= n; i++) {
      for (var j = 1; j <= m; j++) {
        cur[j] = a[i - 1] === b[j - 1]
          ? prev[j - 1] + 1
          : Math.max(prev[j], cur[j - 1]);
      }
      var tmp = prev; prev = cur; cur = tmp;
    }
    return prev[m];
  }

  /* 与 CLI difflib.get_close_matches(cutoff=0.6) 等效的相似度 */
  function similar(a, b) {
    var total = a.length + b.length;
    if (!total) return 0;
    return (2 * lcsLen(a, b)) / total;
  }

  function itemFields(it) {
    return [it.name, it.en || ""].concat(it.aliases || []);
  }

  /* 返回匹配得分（0 表示不匹配），与 CLI 的三档策略对应 */
  function scoreItem(q, it) {
    var fields = itemFields(it);
    for (var i = 0; i < fields.length; i++) {
      var nf = norm(fields[i]);
      if (!nf) continue;
      if (nf === q) return 100;
    }
    for (var j = 0; j < fields.length; j++) {
      var f = norm(fields[j]);
      if (!f) continue;
      if (f.indexOf(q) !== -1 || q.indexOf(f) !== -1) return 80;
    }
    if (q.length >= 4) {
      for (var k = 0; k < fields.length; k++) {
        var t = norm(fields[k]);
        if (t && similar(q, t) >= 0.6 - 1e-9) return 50;
      }
    }
    return 0;
  }

  function search(q) {
    var nq = norm(q);
    if (!nq) return [];
    var out = [];
    ITEMS.forEach(function (it) {
      var s = scoreItem(nq, it);
      if (s > 0) out.push({ score: s, item: it });
    });
    out.sort(function (a, b) {
      if (b.score !== a.score) return b.score - a.score;
      return RISK_ORDER[a.item.risk] - RISK_ORDER[b.item.risk];
    });
    return out.map(function (x) { return x.item; });
  }
  /* ===== SEARCH-CORE-END ===== */

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function sourceText(it) {
    return (it.sources || []).map(function (id) {
      return SOURCES[id] ? esc(SOURCES[id]) : esc(id);
    }).join("；");
  }

  /* ---------- 渲染 ---------- */

  function itemCard(it, idPrefix) {
    var label = RISK_LABEL[it.risk] || it.risk;
    var cat = CATEGORY_NAMES[it.category] || it.category;
    var aliases = (it.aliases && it.aliases.length) ? it.aliases.join("、") : "";
    var did = idPrefix + "-" + it.id;
    var html =
      '<div class="item ' + esc(it.risk) + '" data-id="' + esc(it.id) + '">' +
        '<div class="bar"></div>' +
        '<div class="head">' +
          '<div class="row1">' +
            '<span class="tag">' + esc(label) + '</span>' +
            '<span class="name">' + esc(it.name) + '</span>' +
            (it.controversy ? '<span class="debate">[口径有分歧]</span>' : "") +
            '<span class="chev">展开 ▾</span>' +
          '</div>' +
          '<div class="summary">' + esc(it.summary) + '</div>' +
        '</div>' +
        '<div class="detail" id="' + did + '">' +
          '<div class="kv"><div class="k">类别</div><div class="v">' + esc(cat) + '</div></div>' +
          (aliases ? '<div class="kv"><div class="k">别名/商品名</div><div class="v">' + esc(aliases) + '</div></div>' : "") +
          (it.detail ? '<div class="kv"><div class="k">说明</div><div class="v">' + esc(it.detail) + '</div></div>' : "") +
          (it.note ? '<div class="warn">⚠ ' + esc(it.note) + '</div>' : "") +
          '<div class="src">来源：' + sourceText(it) + '</div>' +
        '</div>' +
      '</div>';
    return html;
  }

  function bindCardToggles(container) {
    container.querySelectorAll(".item").forEach(function (el) {
      el.addEventListener("click", function () {
        el.classList.toggle("open");
        var chev = el.querySelector(".chev");
        if (chev) chev.textContent = el.classList.contains("open") ? "收起 ▴" : "展开 ▾";
      });
    });
  }

  var resultsEl = document.getElementById("results");
  var countEl = document.getElementById("count");
  var allListEl = document.getElementById("allList");
  var inputEl = document.getElementById("q");
  var clearBtn = document.getElementById("clearBtn");
  var currentRisk = "";

  function renderResults(list) {
    if (!list.length) {
      var q = inputEl.value.trim();
      resultsEl.innerHTML =
        '<div class="item info">' +
          '<div class="bar"></div>' +
          '<div class="head">' +
            '<div class="row1">' +
              '<span class="tag">ℹ️ 提示</span>' +
              '<span class="name">' + esc(q) + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="detail" style="display:block">' +
            '<div class="kv"><div class="k">结论</div><div class="v">本禁忌库未收录「' + esc(q) + '」。</div></div>' +
            '<div class="kv"><div class="k">说明</div><div class="v">它目前不是已知 G6PD（蚕豆病）诱发物，常规情况下一般可用。</div></div>' +
            '<div class="warn">⚠ 但蚕豆病个体对氧化性物质敏感度不同，且复方制剂常含多种成分；用药前务必咨询医师或药师，并主动告知蚕豆病史。未收录 ≠ 绝对安全。</div>' +
          '</div>' +
        '</div>';
      countEl.textContent = "未收录 · 按「提示」处理";
      return;
    }
    var html = list.map(function (it) { return itemCard(it, "s"); }).join("");
    resultsEl.innerHTML = html;
    countEl.textContent = "命中 " + list.length + " 条" + (currentRisk ? "（已按风险筛选）" : "");
    bindCardToggles(resultsEl);
  }

  function refresh() {
    var q = inputEl.value.trim();
    clearBtn.classList.toggle("show", !!q);
    if (!q) {
      resultsEl.innerHTML = "";
      countEl.textContent = "";
      return;
    }
    var list = search(q);
    if (currentRisk) list = list.filter(function (it) { return it.risk === currentRisk; });
    renderResults(list);
  }

  var debounceTimer = null;
  inputEl.addEventListener("input", function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(refresh, 100);
  });

  clearBtn.addEventListener("click", function () {
    inputEl.value = "";
    clearBtn.classList.remove("show");
    refresh();
    inputEl.focus();
  });

  document.getElementById("quick").addEventListener("click", function (e) {
    var btn = e.target.closest("button");
    if (!btn) return;
    inputEl.value = btn.getAttribute("data-q");
    refresh();
  });

  document.getElementById("chips").addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (!chip) return;
    document.querySelectorAll("#chips .chip").forEach(function (c) { c.classList.remove("on"); });
    chip.classList.add("on");
    currentRisk = chip.getAttribute("data-risk") || "";
    refresh();
  });

  /* ---------- 全部列表页 ---------- */

  function renderAllList() {
    var byCat = {};
    ITEMS.forEach(function (it) {
      var c = CATEGORY_NAMES[it.category] || it.category;
      (byCat[c] = byCat[c] || []).push(it);
    });
    var html = "";
    Object.keys(byCat).sort(function (a, b) {
      return RISK_ORDER[byCat[a][0].risk] - RISK_ORDER[byCat[b][0].risk];
    }).forEach(function (cat) {
      var items = byCat[cat].slice().sort(function (a, b) {
        return RISK_ORDER[a.risk] - RISK_ORDER[b.risk];
      });
      html += '<div class="group-title">' + esc(cat) + "（" + items.length + "）</div>";
      html += items.map(function (it) { return itemCard(it, "a"); }).join("");
    });
    allListEl.innerHTML = html;
    bindCardToggles(allListEl);
  }

  /* ---------- Tab 切换 ---------- */

  document.querySelectorAll("nav button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll("nav button").forEach(function (b) { b.classList.remove("on"); });
      btn.classList.add("on");
      var page = btn.getAttribute("data-page");
      document.querySelectorAll(".page").forEach(function (p) { p.classList.remove("on"); });
      document.getElementById("page-" + page).classList.add("on");
      window.scrollTo(0, 0);
    });
  });

  /* ---------- 复制提示卡 ---------- */

  document.getElementById("copyCard").addEventListener("click", function () {
    var text = document.getElementById("cardText").innerText;
    function done() {
      var btn = document.getElementById("copyCard");
      btn.textContent = "✅ 已复制，可直接粘贴发给医生";
      setTimeout(function () { btn.textContent = "📋 复制提示卡全文"; }, 2500);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
    } else {
      fallbackCopy(text); done();
    }
  });

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }

  /* ---------- 初始化 ---------- */

  renderAllList();

  /* 向档案模块（profile.js）暴露复用能力，避免重复实现 */
  window.g6pd = {
    search: search,
    esc: esc,
    itemCard: itemCard,
    RISK_LABEL: RISK_LABEL,
    RISK_ORDER: RISK_ORDER,
    CATEGORY_NAMES: CATEGORY_NAMES,
    SOURCES: SOURCES
  };
})();

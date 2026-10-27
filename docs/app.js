/* 蚕豆病禁忌速查 · 移动端逻辑（场景优先 · 家长亲切版）
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
    vaccine: "疫苗（常规接种）", plant: "植物 / 花草", antiviral: "抗病毒药",
    respiratory: "呼吸系统用药", gastrointestinal: "消化系统用药", hormone: "激素类用药",
    antifungal: "抗真菌药", antihistamine: "抗组胺药", topical: "外用药", vitamin: "维生素类"
  };

  /* 一级浏览分组：把 25 个细类归并为 6 个生活场景大类，更贴近家长视角 */
  var BROWSE_GROUPS = [
    { id: "drug", icon: "💊", name: "生病用药", cats: ["analgesic","sulfa","furan","antimalarial","antibiotic_other","cardiovascular","metabolic","neuro","urinary","antiviral","respiratory","gastrointestinal","hormone","antifungal","antihistamine","topical","other_drug","tcm","vitamin"] },
    { id: "food", icon: "🍎", name: "日常饮食", cats: ["food"] },
    { id: "household", icon: "🧴", name: "居家用品", cats: ["household"] },
    { id: "plant", icon: "🌿", name: "植物花草", cats: ["plant"] },
    { id: "env", icon: "⚠️", name: "环境 / 职业", cats: ["occupational"] },
    { id: "other", icon: "🩺", name: "感染 / 疫苗 / 提示", cats: ["infection","vaccine"] }
  ];
  function catToGroup(cat) {
    for (var i = 0; i < BROWSE_GROUPS.length; i++) {
      if (BROWSE_GROUPS[i].cats.indexOf(cat) >= 0) return BROWSE_GROUPS[i].id;
    }
    return "other";
  }

  /* 首页常见场景：直接按生活情境挑出相关条目 */
  var SCENARIOS = [
    { id: "fever", icon: "🤒", name: "发烧·退烧", cats: ["analgesic"], kw: [] },
    { id: "cold", icon: "🤧", name: "感冒·咳嗽", cats: ["respiratory","antihistamine","analgesic"], kw: ["感冒"] },
    { id: "diarrhea", icon: "💩", name: "拉肚子", cats: ["gastrointestinal","urinary","antibiotic_other"], kw: [] },
    { id: "skin", icon: "🩹", name: "湿疹·外伤", cats: ["topical","antifungal"], kw: [] },
    { id: "vaccine", icon: "💉", name: "打疫苗", cats: ["vaccine"], kw: [] },
    { id: "snack", icon: "🍬", name: "零食·点心", cats: ["food"], kw: [] },
    { id: "moth", icon: "🧺", name: "衣物防蛀", cats: ["household"], kw: ["樟脑","萘","防蛀","臭丸"] },
    { id: "outdoor", icon: "🌳", name: "外出·游玩", cats: ["plant","occupational"], kw: [] }
  ];

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
      if (f.indexOf(q) !== -1 || (f.length >= 2 && q.indexOf(f) !== -1)) return 80;
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

  /* 命中高亮：在文本中高亮与查询连续匹配的子串 */
  function hl(text, q) {
    var t = String(text == null ? "" : text);
    if (!q) return esc(t);
    var lt = t.toLowerCase(), lq = q.toLowerCase();
    var i = lt.indexOf(lq);
    if (i < 0) return esc(t);
    return esc(t.slice(0, i)) + '<span class="s-hl">' + esc(t.slice(i, i + q.length)) + "</span>" + esc(t.slice(i + q.length));
  }

  function fieldContains(it, q) {
    q = norm(q);
    if (!q) return true;
    return norm(it.name).indexOf(q) >= 0 ||
      (it.en && norm(it.en).indexOf(q) >= 0) ||
      (it.aliases || []).some(function (a) { return norm(a).indexOf(q) >= 0; });
  }

  function byId(id) {
    for (var i = 0; i < ITEMS.length; i++) if (ITEMS[i].id === id) return ITEMS[i];
    return null;
  }

  /* ---------- 收藏（localStorage） ---------- */
  var FAV_KEY = "g6pd_fav_v1";
  function loadFav() { try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; } catch (e) { return []; } }
  var favArr = loadFav();
  function isFav(id) { return favArr.indexOf(id) >= 0; }
  function toggleFav(id) {
    if (isFav(id)) favArr = favArr.filter(function (x) { return x !== id; });
    else favArr.push(id);
    try { localStorage.setItem(FAV_KEY, JSON.stringify(favArr)); } catch (e) {}
  }

  /* ---------- 搜索历史（localStorage） ---------- */
  var HIST_KEY = "g6pd_history_v1";
  function loadHist() { try { return JSON.parse(localStorage.getItem(HIST_KEY)) || []; } catch (e) { return []; } }
  function pushHist(q) {
    q = (q || "").trim();
    if (!q) return;
    var h = loadHist().filter(function (x) { return x !== q; });
    h.unshift(q);
    if (h.length > 8) h = h.slice(0, 8);
    try { localStorage.setItem(HIST_KEY, JSON.stringify(h)); } catch (e) {}
  }
  function clearHist() { try { localStorage.removeItem(HIST_KEY); } catch (e) {} }

  /* ---------- 联想建议 ---------- */
  function suggest(q, n) {
    var nq = norm(q);
    if (!nq) return [];
    var out = [];
    ITEMS.forEach(function (it) {
      var s = scoreItem(nq, it);
      if (s >= 50) out.push({ score: s, item: it });
    });
    out.sort(function (a, b) {
      if (b.score !== a.score) return b.score - a.score;
      return RISK_ORDER[a.item.risk] - RISK_ORDER[b.item.risk];
    });
    return out.slice(0, n).map(function (x) { return x.item; });
  }

  /* ---------- 条目卡片 ---------- */
  function itemCard(it, idPrefix) {
    var label = RISK_LABEL[it.risk] || it.risk;
    var cat = CATEGORY_NAMES[it.category] || it.category;
    var aliases = (it.aliases && it.aliases.length) ? it.aliases.join("、") : "";
    var did = idPrefix + "-" + it.id;

    var comp = null, hasForbid = false, hasCaution = false;
    if (it.ingredients && it.ingredients.length) {
      comp = it.ingredients.map(function (ing) {
        var r = search(ing);
        var top = r[0];
        return { name: ing, risk: top ? top.risk : "none", matched: top ? top.name : null };
      });
      hasForbid = comp.some(function (c) { return c.risk === "forbidden"; });
      hasCaution = comp.some(function (c) { return c.risk === "caution"; });
    }
    var cmpTag = "";
    if (hasForbid) cmpTag = '<span class="cmp-tag bad">含禁用成分</span>';
    else if (hasCaution) cmpTag = '<span class="cmp-tag warn">含慎用成分</span>';

    var html =
      '<div class="item ' + esc(it.risk) + '" data-id="' + esc(it.id) + '">' +
        '<div class="bar"></div>' +
        '<div class="head">' +
          '<div class="row1">' +
            '<span class="tag">' + esc(label) + '</span>' +
            (it.icon ? '<span class="ic-badge">' + esc(it.icon) + '</span>' : '') +
            '<span class="name">' + hl(it.name, currentQuery) + '</span>' +
            (it.controversy ? '<span class="debate">[分歧]</span>' : "") +
            cmpTag +
            '<button class="star' + (isFav(it.id) ? " on" : "") + '" data-fav="' + esc(it.id) + '" aria-label="收藏">★</button>' +
            '<span class="chev">展开 ▾</span>' +
          '</div>' +
          '<div class="summary">' + hl(it.summary, currentQuery) + '</div>' +
        '</div>' +
        '<div class="detail" id="' + did + '">' +
          (it.img ? '<div class="imgwrap"><img class="item-img" alt="' + esc(it.name) + '" src="' + it.img + '"><div class="imgcap">示意图 · 仅供识别参考，以实物/说明书为准</div></div>' : "") +
          '<div class="kv"><div class="k">类别</div><div class="v">' + esc(cat) + '</div></div>' +
          (aliases ? '<div class="kv"><div class="k">别名/商品名</div><div class="v">' + esc(aliases) + '</div></div>' : "") +
          (it.detail ? '<div class="kv"><div class="k">说明</div><div class="v">' + esc(it.detail) + '</div></div>' : "") +
          (it.note ? '<div class="warn">⚠ ' + esc(it.note) + '</div>' : "") +
          (comp ? compoundBlock(comp, hasForbid, hasCaution) : "") +
          '<div class="src">来源：' + sourceText(it) + '</div>' +
        '</div>' +
      '</div>';
    return html;
  }

  function compoundBlock(comp, hasForbid, hasCaution) {
    var rows = comp.map(function (c) {
      var lab = c.risk === "none" ? "未收录" : (RISK_LABEL[c.risk] || c.risk);
      var cls = c.risk === "none" ? "none" : c.risk;
      var approx = (c.matched && c.matched !== c.name) ? "（≈" + esc(c.matched) + "）" : "";
      return '<div class="cing"><span class="mtag ' + cls + '">' + esc(lab) + "</span>" +
        '<span class="ingname">' + esc(c.name) + approx + "</span></div>";
    }).join("");
    var note = hasForbid
      ? "⛔ 本品含禁用成分，如已开具请立即与开药医生复核。"
      : hasCaution
        ? "⚠ 本品含慎用成分，请确认医生/药师已知情。"
        : "成分均未提示禁忌，但仍需遵医嘱。";
    return '<div class="compound"><div class="ck">🔬 成分比对（逐条核对禁忌库）</div>' +
      rows + '<div class="cnote ' + (hasForbid ? "bad" : hasCaution ? "warn" : "") + '">' + note + "</div></div>";
  }

  /* 卡片点击：收藏星 / 展开；统一委托 */
  function bindCardClicks(container) {
    container.addEventListener("click", function (e) {
      var starBtn = e.target.closest(".star");
      if (starBtn) {
        e.stopPropagation();
        var id = starBtn.getAttribute("data-fav");
        toggleFav(id);
        starBtn.classList.toggle("on");
        if (currentFav) {
          var q = inputEl.value.trim();
          renderResults(applyFilters(search(q)));
        }
        return;
      }
      var el = e.target.closest(".item");
      if (el) {
        el.classList.toggle("open");
        var chev = el.querySelector(".chev");
        if (chev) chev.textContent = el.classList.contains("open") ? "收起 ▴" : "展开 ▾";
      }
    });
  }

  /* ---------- 搜索页状态 ---------- */
  var inputEl = document.getElementById("q");
  var clearBtn = document.getElementById("clearBtn");
  var resultsEl = document.getElementById("results");
  var countEl = document.getElementById("count");
  var suggestEl = document.getElementById("suggest");
  var chipsEl = document.getElementById("chips");
  var histArea = document.getElementById("histArea");
  var scenarioGrid = document.getElementById("scenarioGrid");
  var forbiddenHero = document.getElementById("forbiddenHero");
  var forbidCountEl = document.getElementById("forbidCount");
  var currentRisk = "";
  var currentFav = false;
  var currentQuery = "";
  var activeIndex = -1;

  function applyFilters(list) {
    if (currentRisk) list = list.filter(function (it) { return it.risk === currentRisk; });
    if (currentFav) list = list.filter(function (it) { return isFav(it.id); });
    return list;
  }

  function renderResults(list) {
    if (!list.length) {
      var q = inputEl.value.trim();
      resultsEl.innerHTML =
        '<div class="item info">' +
          '<div class="bar"></div>' +
          '<div class="head">' +
            '<div class="row1"><span class="tag">ℹ️ 提示</span><span class="name">' + esc(q) + '</span></div>' +
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
    resultsEl.innerHTML = list.map(function (it) { return itemCard(it, "s"); }).join("");
    countEl.textContent = "命中 " + list.length + " 条" + (currentRisk || currentFav ? "（已筛选）" : "");
  }

  function renderFavorites() {
    var items = ITEMS.filter(function (it) { return isFav(it.id); });
    if (!items.length) {
      resultsEl.innerHTML = '<div class="empty"><div class="big">⭐</div>还没有收藏<br>在查询结果里点卡片右上角的 ☆，把常用药加进来</div>';
      countEl.textContent = "";
      return;
    }
    currentQuery = "";
    resultsEl.innerHTML = items.map(function (it) { return itemCard(it, "s"); }).join("");
    countEl.textContent = "常用 · " + items.length + " 条";
  }

  function renderHistFav() {
    var html = "";
    if (favArr.length) {
      html += '<div class="hist-label">⭐ 我常查的</div><div class="hchips">' +
        favArr.map(function (id) { var it = byId(id); return it ? '<span class="hchip fav" data-q="' + esc(it.name) + '">' + esc(it.name) + "</span>" : ""; }).join("") +
        '</div>';
    }
    var h = loadHist();
    if (h.length) {
      html += '<div class="hist-label">🕘 最近查询</div><div class="hchips">' +
        h.map(function (q) { return '<span class="hchip" data-q="' + esc(q) + '">' + esc(q) + "</span>"; }).join("") +
        '</div>';
    }
    histArea.innerHTML = html;
    countEl.textContent = "";
    resultsEl.innerHTML = "";
  }

  function refresh() {
    var q = inputEl.value.trim();
    clearBtn.classList.toggle("show", !!q);
    if (!q) {
      currentQuery = "";
      hideSuggest();
      if (currentFav) { renderFavorites(); histArea.innerHTML = ""; }
      else { renderHistFav(); }
      return;
    }
    currentQuery = q;
    renderResults(applyFilters(search(q)));
    showSuggest(q);
  }

  function runQuery(q) {
    inputEl.value = q;
    hideSuggest();
    pushHist(q);
    refresh();
  }

  /* ---------- 联想下拉 ---------- */
  function showSuggest(q) {
    var items = suggest(q, 8);
    if (!items.length) { hideSuggest(); return; }
    activeIndex = -1;
    suggestEl.innerHTML = items.map(function (it, i) {
      var cat = CATEGORY_NAMES[it.category] || it.category;
      return '<div class="opt" data-i="' + i + '" data-name="' + esc(it.name) + '">' +
        '<span class="dot ' + esc(it.risk) + '"></span>' +
        '<span class="s-name">' + hl(it.name, q) + "</span>" +
        '<span class="s-cat">' + esc(cat) + "</span>" +
        "</div>";
    }).join("");
    suggestEl.style.display = "block";
  }
  function hideSuggest() { suggestEl.style.display = "none"; activeIndex = -1; }
  function updateActive(opts) { opts.forEach(function (o, i) { o.classList.toggle("active", i === activeIndex); }); }
  function chooseSug(name) { runQuery(name); }

  /* ---------- 分类页状态 ---------- */
  var listQ = document.getElementById("listQ");
  var scenChips = document.getElementById("scenChips");
  var allList = document.getElementById("allList");
  var browseState = { scenario: null, openGroups: {} };

  function subcatHTML(items) {
    if (!items.length) return "";
    var byCat = {};
    items.forEach(function (it) { var c = CATEGORY_NAMES[it.category] || it.category; (byCat[c] = byCat[c] || []).push(it); });
    var cats = Object.keys(byCat).sort(function (a, b) { return byCat[b].length - byCat[a].length; });
    var html = "";
    cats.forEach(function (cat) {
      var arr = byCat[cat].slice().sort(function (a, b) { return RISK_ORDER[a.risk] - RISK_ORDER[b.risk]; });
      html += '<div class="subcat-title">' + esc(cat) + "（" + arr.length + "）</div>";
      html += arr.map(function (it) { return itemCard(it, "a"); }).join("");
    });
    return html;
  }

  function riskHTML(items) {
    var order = [["forbidden", "⛔ 禁用"], ["caution", "⚠️ 慎用"], ["safe", "✅ 可用"], ["info", "ℹ️ 提示"]];
    var html = "";
    order.forEach(function (pair) {
      var arr = items.filter(function (it) { return it.risk === pair[0]; })
        .sort(function (a, b) { return a.name.localeCompare(b.name, "zh"); });
      if (arr.length) {
        html += '<div class="subcat-title">' + pair[1] + "（" + arr.length + "）</div>";
        html += arr.map(function (it) { return itemCard(it, "a"); }).join("");
      }
    });
    return html;
  }

  function scenarioItems(sid, q) {
    var s = null;
    for (var i = 0; i < SCENARIOS.length; i++) if (SCENARIOS[i].id === sid) s = SCENARIOS[i];
    if (!s) return [];
    return ITEMS.filter(function (it) {
      var inCat = s.cats.indexOf(it.category) >= 0;
      var hitKw = s.kw.some(function (k) { return fieldContains(it, k); });
      if (!inCat && !hitKw) return false;
      if (q && !fieldContains(it, q)) return false;
      return true;
    });
  }

  function renderScenChips() {
    var html = '<div class="schip' + (browseState.scenario ? "" : " on") + '" data-sid="">全部场景</div>';
    SCENARIOS.forEach(function (s) {
      html += '<div class="schip' + (browseState.scenario === s.id ? " on" : "") + '" data-sid="' + s.id + '">' + s.icon + " " + esc(s.name) + "</div>";
    });
    scenChips.innerHTML = html;
  }

  function renderBrowse() {
    renderScenChips();
    var q = norm(listQ.value.trim());
    if (browseState.scenario) {
      var items = scenarioItems(browseState.scenario, q);
      var sname = "";
      for (var i = 0; i < SCENARIOS.length; i++) if (SCENARIOS[i].id === browseState.scenario) sname = SCENARIOS[i].name;
      var html = '<div class="back-chip" id="backAll">← 返回全部分类</div>';
      html += '<div class="list-note" style="margin-top:0">' + esc(sname) + " · 共 " + items.length + " 项（按风险排序）</div>";
      html += items.length ? riskHTML(items) : '<div class="empty"><div class="big">🔍</div>没有匹配的条目</div>';
      allList.innerHTML = html;
      return;
    }
    if (q) {
      var byGroup = {};
      ITEMS.forEach(function (it) { if (fieldContains(it, q)) { var g = catToGroup(it.category); (byGroup[g] = byGroup[g] || []).push(it); } });
      var flat = "";
      BROWSE_GROUPS.forEach(function (g) {
        var arr = byGroup[g.id];
        if (!arr || !arr.length) return;
        flat += '<div class="group-head">' + g.icon + " " + esc(g.name) + ' <span class="gh-count">' + arr.length + " 条</span></div>";
        flat += subcatHTML(arr);
      });
      allList.innerHTML = flat || '<div class="empty"><div class="big">🔍</div>没有匹配的条目</div>';
      return;
    }
    // 折叠手风琴：默认收起，点开看细类
    var acc = "";
    BROWSE_GROUPS.forEach(function (g) {
      var items = ITEMS.filter(function (it) { return catToGroup(it.category) === g.id; });
      if (!items.length) return;
      var open = !!browseState.openGroups[g.id];
      acc += '<div class="bgroup' + (open ? " open" : "") + '" data-g="' + g.id + '">' +
        '<div class="bg-head"><span class="bg-ic">' + g.icon + '</span><span class="bg-name">' + esc(g.name) + '</span>' +
        '<span class="bg-cnt">' + items.length + '</span><span class="bg-arrow">▾</span></div>' +
        (open ? '<div class="bg-body">' + subcatHTML(items) + '</div>' : '') +
        '</div>';
    });
    allList.innerHTML = acc;
  }

  /* ---------- 禁用清单 ---------- */
  var forbidList = document.getElementById("forbidList");
  function renderForbidden() {
    var items = ITEMS.filter(function (it) { return it.risk === "forbidden"; });
    var byGroup = {};
    items.forEach(function (it) { var g = catToGroup(it.category); (byGroup[g] = byGroup[g] || []).push(it); });
    var html = "";
    BROWSE_GROUPS.forEach(function (g) {
      var arr = byGroup[g.id];
      if (!arr || !arr.length) return;
      html += '<div class="group-head">' + g.icon + " " + esc(g.name) + ' <span class="gh-count">' + arr.length + " 条</span></div>";
      html += subcatHTML(arr);
    });
    forbidList.innerHTML = html;
  }
  function forbiddenPlainText() {
    var items = ITEMS.filter(function (it) { return it.risk === "forbidden"; });
    var lines = ["【蚕豆病（G6PD）禁用清单】"];
    var byGroup = {};
    items.forEach(function (it) { var g = catToGroup(it.category); (byGroup[g] = byGroup[g] || []).push(it); });
    BROWSE_GROUPS.forEach(function (g) {
      var arr = byGroup[g.id];
      if (!arr || !arr.length) return;
      lines.push("");
      lines.push(g.name + "：");
      arr.forEach(function (it) {
        var al = (it.aliases && it.aliases.length) ? "（" + it.aliases.join("、") + "）" : "";
        lines.push("· " + it.name + al + " —— " + (it.summary || ""));
      });
    });
    lines.push("");
    lines.push("（仅供参考，以医生/药师指导为准）");
    return lines.join("\n");
  }

  /* ---------- 首页渲染 ---------- */
  function renderHome() {
    scenarioGrid.innerHTML = SCENARIOS.map(function (s) {
      return '<div class="scen" data-sid="' + s.id + '"><span class="scen-ic">' + s.icon + '</span><span class="scen-lbl">' + esc(s.name) + "</span></div>";
    }).join("");
    var fc = ITEMS.filter(function (it) { return it.risk === "forbidden"; }).length;
    if (forbidCountEl) forbidCountEl.textContent = fc;
    // 重置风险筛选高亮
    currentRisk = ""; currentFav = false;
    if (chipsEl) chipsEl.querySelectorAll(".chip").forEach(function (c) {
      c.classList.toggle("on", c.getAttribute("data-risk") === "" && !c.getAttribute("data-fav"));
    });
  }

  /* ---------- Tab 切换 ---------- */
  function switchTab(page) {
    document.querySelectorAll("nav button").forEach(function (b) { b.classList.toggle("on", b.getAttribute("data-page") === page); });
    document.querySelectorAll(".page").forEach(function (p) { p.classList.remove("on"); });
    var pg = document.getElementById("page-" + page);
    if (pg) pg.classList.add("on");
    window.scrollTo(0, 0);
    if (page === "list") renderBrowse();
    else if (page === "forbidden") renderForbidden();
    else if (page === "search") { renderHome(); refresh(); }
  }

  /* ---------- 复制 / 打印 ---------- */
  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }
  function copyText(text, btn, okMsg) {
    function done() { if (btn) { btn.textContent = okMsg; setTimeout(function () { btn.textContent = btn.getAttribute("data-old"); }, 2500); } }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
    } else { fallbackCopy(text); done(); }
  }

  /* ---------- 事件绑定 ---------- */
  if (chipsEl) chipsEl.addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (!chip) return;
    chipsEl.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("on"); });
    chip.classList.add("on");
    currentRisk = chip.getAttribute("data-risk") || "";
    currentFav = !!chip.getAttribute("data-fav");
    refresh();
  });

  if (scenarioGrid) scenarioGrid.addEventListener("click", function (e) {
    var s = e.target.closest(".scen");
    if (!s) return;
    browseState.scenario = s.getAttribute("data-sid");
    listQ.value = "";
    switchTab("list");
  });

  if (forbiddenHero) forbiddenHero.addEventListener("click", function () { switchTab("forbidden"); });

  if (scenChips) scenChips.addEventListener("click", function (e) {
    var c = e.target.closest(".schip");
    if (!c) return;
    browseState.scenario = c.getAttribute("data-sid") || null;
    renderBrowse();
  });

  if (allList) allList.addEventListener("click", function (e) {
    var back = e.target.closest("#backAll");
    if (back) { browseState.scenario = null; renderBrowse(); return; }
    var head = e.target.closest(".bg-head");
    if (head) {
      var g = head.parentNode.getAttribute("data-g");
      browseState.openGroups[g] = !browseState.openGroups[g];
      renderBrowse();
    }
  });

  if (histArea) histArea.addEventListener("click", function (e) {
    var c = e.target.closest(".hchip");
    if (c) { switchTab("search"); runQuery(c.getAttribute("data-q")); }
  });

  if (listQ) listQ.addEventListener("input", function () { renderBrowse(); });

  var debounceTimer = null;
  inputEl.addEventListener("input", function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(refresh, 100);
  });
  inputEl.addEventListener("keydown", function (e) {
    if (suggestEl.style.display === "none") return;
    var opts = suggestEl.querySelectorAll(".opt");
    if (e.key === "ArrowDown") { e.preventDefault(); activeIndex = Math.min(activeIndex + 1, opts.length - 1); updateActive(opts); }
    else if (e.key === "ArrowUp") { e.preventDefault(); activeIndex = Math.max(activeIndex - 1, 0); updateActive(opts); }
    else if (e.key === "Enter") {
      if (activeIndex >= 0 && opts[activeIndex]) { e.preventDefault(); chooseSug(opts[activeIndex].getAttribute("data-name")); }
      else { hideSuggest(); pushHist(inputEl.value.trim()); }
    } else if (e.key === "Escape") { hideSuggest(); }
  });
  inputEl.addEventListener("focus", function () {
    if (!inputEl.value.trim()) { hideSuggest(); if (!currentFav) renderHistFav(); }
  });

  clearBtn.addEventListener("click", function () {
    inputEl.value = ""; clearBtn.classList.remove("show"); refresh(); inputEl.focus();
  });

  suggestEl.addEventListener("click", function (e) {
    var opt = e.target.closest(".opt");
    if (!opt) return;
    chooseSug(opt.getAttribute("data-name"));
  });

  document.querySelectorAll("nav button").forEach(function (btn) {
    btn.addEventListener("click", function () { switchTab(btn.getAttribute("data-page")); });
  });

  var copyForbid = document.getElementById("copyForbid");
  if (copyForbid) { copyForbid.setAttribute("data-old", copyForbid.textContent); copyForbid.addEventListener("click", function () { copyText(forbiddenPlainText(), copyForbid, "✅ 已复制，可粘贴给医生"); }); }
  var printForbid = document.getElementById("printForbid");
  if (printForbid) printForbid.addEventListener("click", function () { window.print(); });

  var copyCard = document.getElementById("copyCard");
  if (copyCard) copyCard.addEventListener("click", function () {
    var text = document.getElementById("cardText").innerText;
    function done() { copyCard.textContent = "✅ 已复制，可直接粘贴发给医生"; setTimeout(function () { copyCard.textContent = "📋 复制就医提示卡"; }, 2500); }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
    else { fallbackCopy(text); done(); }
  });

  /* ---------- 初始化 ---------- */
  bindCardClicks(resultsEl);
  bindCardClicks(allList);

  var badge = document.getElementById("badgeCount");
  if (badge) badge.textContent = "共 " + ITEMS.length + " 条";

  renderHome();
  refresh();
  renderBrowse();
  renderForbidden();

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

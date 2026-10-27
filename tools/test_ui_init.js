#!/usr/bin/env node
/* 临时 UI 初始化校验：用较完整的 DOM 桩加载 data.js+app.js，
 * 检查首页/分类/禁用三页初始化后确实渲染出预期内容。
 */
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");

function makeEl(id) {
  return {
    id: id || "", innerHTML: "", value: "", textContent: "", style: {},
    _l: {},
    classList: { _s: new Set(), add(c){this._s.add(c);}, remove(c){this._s.delete(c);}, toggle(c,f){ if(f===undefined){this._s.has(c)?this._s.delete(c):this._s.add(c);} else { f?this._s.add(c):this._s.delete(c);} }, contains(c){return this._s.has(c);} },
    addEventListener(ev, fn){ (this._l[ev]=this._l[ev]||[]).push(fn); },
    appendChild(){}, removeChild(){}, click(){},
    querySelector(){ return null; }, querySelectorAll(){ return []; },
    setAttribute(k,v){ this["_a_"+k]=v; }, getAttribute(k){ return this["_a_"+k] || null; },
    closest(){ return null; }, focus(){},
  };
}
const elements = {};
global.document = {
  getElementById(id){ return elements[id] || (elements[id]=makeEl(id)); },
  createElement(){ return makeEl(); },
  body: makeEl("body"),
  querySelectorAll(){ return []; },
  addEventListener(){},
};
global.window = global;
const store = {};
global.localStorage = { getItem(k){return k in store?store[k]:null;}, setItem(k,v){store[k]=String(v);}, removeItem(k){delete store[k];} };
global.navigator = {};
global.confirm = () => true;
global.window.scrollTo = function(){};

function load(rel){ let code = fs.readFileSync(path.join(ROOT, rel), "utf8"); code = code.replace("const G6PD_DATA", "globalThis.G6PD_DATA"); eval(code); }

let fail = 0;
function check(name, cond){ if(cond){console.log("✅ "+name);} else {fail++; console.log("❌ "+name);} }

try {
  load("docs/data.js");
  load("docs/app.js");
  const G = globalThis.G6PD_DATA;
  const forbidN = G.items.filter(i=>i.risk==="forbidden").length;

  const sg = elements["scenarioGrid"].innerHTML;
  check("首页场景网格渲染（含 发烧·退烧）", sg.indexOf("发烧·退烧")>=0 && sg.indexOf("衣物防蛀")>=0);
  check("首页禁用计数 = 实际禁用数("+forbidN+")", String(elements["forbidCount"].textContent) === String(forbidN));
  check("首页场景数 = 8", (sg.match(/class="scen"/g)||[]).length === 8);

  const al = elements["allList"].innerHTML;
  check("分类页手风琴渲染（含 生病用药 分组）", al.indexOf("生病用药")>=0 && al.indexOf("bgroup")>=0);
  check("分类页 6 个分组全出现", ["生病用药","日常饮食","居家用品","植物花草","环境 / 职业","感染 / 疫苗 / 提示"].every(g=>al.indexOf(g)>=0));

  const fl = elements["forbidList"].innerHTML;
  check("禁用页渲染且含分组标题", fl.indexOf("禁用")>=0 && fl.indexOf("group-head")>=0);
  check("禁用页条目数 = "+forbidN, (fl.match(/class="item forbidden"/g)||[]).length === forbidN);
  check("卡片渲染「用途」行（含阿司匹林用途）", fl.indexOf("use-line") >= 0 && fl.indexOf("解热、镇痛、抗炎") >= 0);

  const ha = elements["histArea"].innerHTML;
  check("搜索页初始历史区为空（无查询/无收藏）", ha === "");

  // 交互1：点场景「发烧·退烧」→ 切换到分类页并按风险筛选
  const sgListeners = elements["scenarioGrid"]._l["click"] || [];
  let threw = null;
  try {
    sgListeners.forEach(fn => fn({ target: { closest(sel){ return sel === ".scen" ? { getAttribute(){ return "fever"; } } : null; } } }));
  } catch(e){ threw = e; }
  check("交互·点场景不抛错并切到分类页", !threw);
  check("交互·场景筛选出退烧药（含 对乙酰氨基酚）", (elements["allList"].innerHTML.indexOf("对乙酰氨基酚") >= 0) && (elements["allList"].innerHTML.indexOf("返回全部分类") >= 0));

  // 交互2：分类页点开「日常饮食」手风琴
  const alListeners = elements["allList"]._l["click"] || [];
  threw = null;
  try {
    alListeners.forEach(fn => fn({ target: { closest(sel){ return sel === "#backAll" ? null : (sel === ".bg-head" ? { parentNode: { getAttribute(){ return "food"; } } } : null); } } }));
  } catch(e){ threw = e; }
  check("交互·展开分组不抛错", !threw);
  check("交互·展开后分类页含食物条目", elements["allList"].innerHTML.indexOf("蚕豆") >= 0 || elements["allList"].innerHTML.indexOf("食物") >= 0);

  // 新能力：拼音搜索 / 复方拆解 / 分歧说明
  const g = window.g6pd;
  check("拼音首字母 blf → 布洛芬", g.search("blf").some(i => i.name === "布洛芬"));
  check("拼音全拼 buluofen → 布洛芬", g.search("buluofen").some(i => i.name === "布洛芬"));
  const lh = G.items.find(i => i.name === "连花清瘟");
  const lhCard = g.itemCard(lh, "t");
  check("连花清瘟拆解出禁用成分", lhCard.indexOf("含本库禁用成分") >= 0 && lhCard.indexOf("连翘") >= 0);
  const cm = G.items.find(i => i.name === "氯霉素");
  check("分歧条目显示说明", g.itemCard(cm, "t").indexOf("为什么标「分歧」") >= 0);
  check("非分歧条目不显示分歧框", g.itemCard(G.items.find(i => i.name === "阿司匹林"), "t").indexOf("debate-box") < 0);
} catch(e){ fail++; console.log("❌ 异常: "+e.message); console.log(e.stack.split("\n").slice(0,4).join("\n")); }

console.log(fail ? `\n${fail} 项失败` : "\nUI 初始化校验全部通过");
process.exit(fail?1:0);

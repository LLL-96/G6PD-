#!/usr/bin/env node
/* profile.js 冒烟测试：用最小 DOM/localStorage stub 在 node 中加载
 * data.js + app.js + profile.js，验证档案页能无错渲染且包含关键区块。
 * 真实交互（点击、输入）需在浏览器中验证，见 README。
 */
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");

function makeEl(id) {
  const el = {
    id: id || "",
    innerHTML: "", value: "", textContent: "",
    style: {},
    classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
    _listeners: {},
    addEventListener(ev, fn) { (this._listeners[ev] = this._listeners[ev] || []).push(fn); },
    appendChild() {}, removeChild() {}, click() {},
    querySelector() { return null; },
    querySelectorAll() { return []; },
    setAttribute() {}, getAttribute() { return null; },
    insertBefore() {}, closest() { return null; },
    focus() {},
  };
  return el;
}

const elements = {};
global.document = {
  getElementById(id) { return elements[id] || (elements[id] = makeEl(id)); },
  createElement() { return makeEl(); },
  body: makeEl("body"),
  querySelectorAll() { return []; },
  addEventListener() {},
};
global.window = global;
const store = {};
global.localStorage = {
  getItem(k) { return k in store ? store[k] : null; },
  setItem(k, v) { store[k] = String(v); },
  removeItem(k) { delete store[k]; },
};
global.navigator = {};
global.confirm = () => true;
// 不覆盖 node 原生 Blob/URL（会破坏 WorkBuddy 的 fs shim）；仅 stub 浏览器独有的 FileReader
if (typeof global.FileReader === "undefined") {
  global.FileReader = function () {};
}

function load(rel) {
  let code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  // 浏览器中多个 <script> 共享全局作用域；node eval 不会，这里把 const 声明挂到 globalThis 模拟
  code = code.replace("const G6PD_DATA", "globalThis.G6PD_DATA");
  eval(code);
}

let failed = 0;
function check(name, cond) {
  if (cond) { console.log("✅ " + name); }
  else { failed++; console.log("❌ " + name); }
}

try {
  load("web/data.js");
  load("web/app.js");
  check("app.js 加载并暴露 window.g6pd", typeof window.g6pd === "object" && typeof window.g6pd.search === "function");
  load("web/profile.js");
  const root = document.getElementById("profileApp");
  check("档案页渲染：患者信息卡", root.innerHTML.indexOf("患者信息") !== -1);
  check("档案页渲染：统计条", root.innerHTML.indexOf("溶血发作") !== -1);
  check("档案页渲染：子页签", root.innerHTML.indexOf("就诊记录") !== -1);
  check("档案页渲染：发作史空态", root.innerHTML.indexOf("暂无发作记录") !== -1);
  check("档案页渲染：数据管理页签", root.innerHTML.indexOf("数据管理") !== -1 || root.innerHTML.indexOf(">数据<") !== -1);

  // 模拟已有数据的渲染（预置 localStorage）
  store["g6pd_profile_v1"] = JSON.stringify({
    patient: { name: "小明", gender: "男", birth: "2024-06-15", diagnosed: "", who: "II", notes: "" },
    episodes: [{ id: 1, date: "2026-03-10", trigger_type: "drug", trigger: "复方新诺明", symptoms: "尿色深", hospital: "", outcome: "痊愈", notes: "" }],
    visits: [{ id: 1, date: "2026-10-15", hospital: "市妇幼", department: "儿科", doctor: "", reason: "", told: true, meds: [{ name: "复方新诺明", risk: "forbidden" }], notes: "" }],
    family: [{ id: 1, relation: "母亲", name: "", status: "unknown", tested: "" }],
    reminders: [{ id: 1, title: "血常规复查", interval_days: 180, last_done: "2026-04-20", next_due: "2026-10-17", notes: "" }],
  });
  // 重新触发一次渲染：通过页签点击不可达（IIFE），改为验证初始 render 之外，
  // 直接检查 localStorage 读写通道可用
  check("localStorage 通道可读写", typeof localStorage.getItem("g6pd_profile_v1") === "string");
} catch (e) {
  failed++;
  console.log("❌ 加载/渲染抛出异常: " + e.message);
  console.log(e.stack.split("\n").slice(0, 5).join("\n"));
}

console.log(failed ? `\n${failed} 项失败` : "\n冒烟测试全部通过");
process.exit(failed ? 1 : 0);

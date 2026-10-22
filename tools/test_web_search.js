#!/usr/bin/env node
/* 网页版搜索逻辑与 CLI 版一致性测试
 * 1) node --check 级别语法验证由外部完成
 * 2) 本脚本提取 app.js 的 SEARCH-CORE 段 + data.js，在 node 中执行，
 *    再调用 CLI 的 search() 对比同一批查询词的结果是否一致。
 */
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const appSrc = fs.readFileSync(path.join(ROOT, "web", "app.js"), "utf8");
const dataSrc = fs.readFileSync(path.join(ROOT, "web", "data.js"), "utf8");

const m = appSrc.match(/\/\* ===== SEARCH-CORE-START[\s\S]*?===== \*\/([\s\S]*?)\/\* ===== SEARCH-CORE-END/);
if (!m) { console.error("未找到 SEARCH-CORE 段"); process.exit(1); }
const coreSrc = m[1];

// 在 node 上下文中执行：data.js 提供 G6PD_DATA，core 提供 norm/search 等
const G6PD_DATA = new Function(dataSrc + "\nreturn G6PD_DATA;")();
const fn = new Function("G6PD_DATA",
  "var ITEMS = G6PD_DATA.items;\n" + coreSrc + "\nreturn { search: search, norm: norm };");
const api = fn(G6PD_DATA);

const QUERIES = [
  "阿司匹林", "复方新诺明", "痢特灵", "对乙酰氨基酚", "对乙先氨基酚", "布洛芬",
  "阿莫西林", "樟脑丸", "蚕豆", "感冒灵", "伯氨喹啉", "紫药水", "牛黄解毒片",
  "SMZ", "mothballs", "维生素K3", "黄连", "aaa不存在的药", "双黄连口服液", "美林",
];

let pass = 0, fail = 0;
for (const q of QUERIES) {
  const webIds = api.search(q).map(i => i.id);
  const cliOut = execFileSync(
    "C:/Users/WIN10/.workbuddy/binaries/python/versions/3.13.12/python.exe",
    ["-c", `
import sys, json
sys.path.insert(0, "src")
from lookup import search
print(json.dumps([it["id"] for _, it in search(${JSON.stringify(q)})], ensure_ascii=False))
`],
    { cwd: ROOT, encoding: "utf8" }
  ).trim();
  const cliIds = JSON.parse(cliOut);
  const same = JSON.stringify(webIds) === JSON.stringify(cliIds);
  if (same) { pass++; console.log(`✅ ${q}  → ${webIds.length} 条，两端一致`); }
  else {
    fail++;
    console.log(`❌ ${q}`);
    console.log(`   web: ${JSON.stringify(webIds)}`);
    console.log(`   cli: ${JSON.stringify(cliIds)}`);
  }
}
console.log(`\n结果：${pass} 通过 / ${fail} 失败`);
process.exit(fail ? 1 : 0);

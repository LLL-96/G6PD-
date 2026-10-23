// 本文件由 tools/build_web_data.py 自动生成，请勿手改；请修改 data/items.json 后重新生成。
const G6PD_DATA = {
 "meta": {
  "title": "G6PD缺乏症（蚕豆病）禁忌速查数据库",
  "version": "0.1.1",
  "updated": "2026-10-23",
  "disclaimer": "本数据库仅供参考，不构成医疗建议。一切用药请以医生处方和药师指导为准；如怀疑溶血发作，请立即就医。",
  "risk_levels": {
   "forbidden": "⛔ 禁用（高风险）",
   "caution": "⚠️ 慎用（中风险，需医生评估）",
   "safe": "✅ 常规剂量一般可用",
   "info": "ℹ️ 疾病提示"
  }
 },
 "sources": [
  {
   "id": "S1",
   "name": "安徽省卫生健康委员会《蚕豆病宝宝的“药物禁忌清单”》",
   "url": "https://wjw.ah.gov.cn/ztzl/fyjk/xjpx/58286751.html"
  },
  {
   "id": "S2",
   "name": "腾讯医典《葡萄糖-6-磷酸脱氢酶缺乏症》",
   "url": "https://h5.baike.qq.com/mobile/overview_detail.html?name=葡萄糖-6-磷酸脱氢酶缺乏症"
  },
  {
   "id": "S3",
   "name": "北京协和医院段明辉主任医师（39健康网《蚕豆病饮食及用药禁忌》）",
   "url": "https://mip.39yst.com/ask/14214850.shtml"
  },
  {
   "id": "S4",
   "name": "北京医院范芸主任医师（39健康网《蚕豆病禁用的药物》）",
   "url": "https://mip.39yst.com/ask/7514763.shtml"
  },
  {
   "id": "S5",
   "name": "科普中国《蚕豆病：一颗蚕豆引发的溶血危机》",
   "url": "https://www.kepuchina.cn/article/articleinfo?ar_id=675508"
  },
  {
   "id": "S6",
   "name": "台北荣民总医院健康电子报《認識蠶豆症》",
   "url": "https://epaper.ntuh.gov.tw/health/201304/pdf/%E8%AA%8D%E8%AD%98%E8%A0%B6%E8%B1%86%E7%97%87.pdf"
  },
  {
   "id": "S7",
   "name": "台湾药学会《G6PD缺乏病人之低危險及不安全藥物》",
   "url": "http://tcpa.taiwan-pharma.org.tw/node/14809"
  },
  {
   "id": "S8",
   "name": "新竹台大分院药师《蠶豆症Q&A》",
   "url": "https://www.hch.gov.tw/?aid=626&pid=81&page_name=detail&iid=1457"
  },
  {
   "id": "S9",
   "name": "北京大学第一医院侯凤琴主任医师（有来医生）",
   "url": "https://www.youlai.cn/video/article/43327EszYt.html"
  }
 ],
 "items": [
  {
   "id": "aspirin",
   "name": "阿司匹林",
   "en": "Aspirin / Acetylsalicylic acid",
   "aliases": [
    "乙酰水杨酸",
    "拜阿司匹林",
    "APC",
    "复方阿司匹林",
    "巴米尔"
   ],
   "category": "analgesic",
   "risk": "forbidden",
   "summary": "解热镇痛剂量明确诱发溶血，禁用。",
   "detail": "阿司匹林在解热镇痛剂量下是G6PD缺乏者的明确高危药物，代谢中产生氧化应激，可诱发急性溶血。复方制剂（如APC）同样禁用。",
   "note": "低剂量（如川崎病抗血小板治疗）须由专科医生严格评估后使用，家长不可自行给药。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S5",
    "S7"
   ]
  },
  {
   "id": "metamizole",
   "name": "安乃近",
   "en": "Metamizole / Dipyrone",
   "aliases": [
    "诺瓦经",
    "罗瓦尔精"
   ],
   "category": "analgesic",
   "risk": "forbidden",
   "summary": "明确禁用。",
   "detail": "解热镇痛老药，其氨基结构可诱发氧化性溶血，国内多部资料列为蚕豆病绝对禁忌。",
   "note": "",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S5",
    "S7"
   ]
  },
  {
   "id": "aminopyrine",
   "name": "氨基比林",
   "en": "Aminopyrine / Aminophenazone",
   "aliases": [
    "胺比林"
   ],
   "category": "analgesic",
   "risk": "forbidden",
   "summary": "明确禁用。",
   "detail": "解热镇痛药，可直接损伤红细胞膜，诱发溶血。",
   "note": "",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S5",
    "S7"
   ]
  },
  {
   "id": "phenacetin",
   "name": "非那西丁",
   "en": "Phenacetin / Acetophenetidin",
   "aliases": [
    "对乙酰氨基苯乙醚"
   ],
   "category": "analgesic",
   "risk": "forbidden",
   "summary": "明确禁用。",
   "detail": "代谢产物可诱发溶血。常隐藏在复方解热镇痛药中，需注意核对成分表。",
   "note": "",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S5",
    "S7"
   ]
  },
  {
   "id": "phenylbutazone",
   "name": "保泰松",
   "en": "Phenylbutazone",
   "aliases": [
    "布他酮"
   ],
   "category": "analgesic",
   "risk": "forbidden",
   "summary": "明确禁用。",
   "detail": "非甾体抗炎药，国内资料列为蚕豆病禁忌药物。",
   "note": "",
   "controversy": false,
   "sources": [
    "S1",
    "S4"
   ]
  },
  {
   "id": "smz",
   "name": "复方磺胺甲噁唑",
   "en": "Trimethoprim/Sulfamethoxazole (SMZ-TMP)",
   "aliases": [
    "复方新诺明",
    "SMZ",
    "磺胺甲噁唑",
    "co-trimoxazole",
    "百炎净"
   ],
   "category": "sulfa",
   "risk": "forbidden",
   "summary": "磺胺类代表药，明确禁用。",
   "detail": "磺胺甲噁唑与甲氧苄啶的复方制剂，是最常见的“踩雷”抗生素之一，感染时若医生不知情很容易开出。",
   "note": "整个磺胺类药物家族均禁用，包括单方制剂和外用制剂。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ]
  },
  {
   "id": "sulfadiazine",
   "name": "磺胺嘧啶",
   "en": "Sulfadiazine (SD)",
   "aliases": [
    "SD",
    "磺胺嘧啶银"
   ],
   "category": "sulfa",
   "risk": "forbidden",
   "summary": "明确禁用。",
   "detail": "经典磺胺类抗菌药，可诱发溶血，烧伤外用的磺胺嘧啶银同样应回避。",
   "note": "",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ]
  },
  {
   "id": "sulfisoxazole",
   "name": "磺胺异噁唑",
   "en": "Sulfisoxazole (SIZ)",
   "aliases": [
    "SIZ",
    "菌得清"
   ],
   "category": "sulfa",
   "risk": "forbidden",
   "summary": "明确禁用。",
   "detail": "短效磺胺类，国内资料列为蚕豆病绝对禁忌。",
   "note": "",
   "controversy": false,
   "sources": [
    "S1",
    "S7"
   ]
  },
  {
   "id": "sulfacetamide",
   "name": "磺胺醋酰",
   "en": "Sulfacetamide",
   "aliases": [
    "磺胺乙酰",
    "斑马眼药水"
   ],
   "category": "sulfa",
   "risk": "forbidden",
   "summary": "磺胺类滴眼液，禁用。",
   "detail": "常用于结膜炎/沙眼的磺胺类滴眼液，经黏膜吸收，同样有溶血风险。",
   "note": "买眼药水前看清成分，含“磺胺”二字即回避。｜证据说明：磺胺醋酰滴眼液经黏膜全身吸收量极小，国际多归低危，国内口径建议回避；点眼后留意异常反应。",
   "controversy": true,
   "sources": [
    "S7"
   ]
  },
  {
   "id": "sulfapyridine",
   "name": "磺胺吡啶",
   "en": "Sulfapyridine (SP)",
   "aliases": [
    "SP"
   ],
   "category": "sulfa",
   "risk": "forbidden",
   "summary": "明确禁用。",
   "detail": "磺胺类抗菌药，国外分级列为G6PD缺乏者不安全药物。",
   "note": "",
   "controversy": false,
   "sources": [
    "S7"
   ]
  },
  {
   "id": "sulfaguanidine",
   "name": "磺胺胍",
   "en": "Sulfaguanidine (SG)",
   "aliases": [
    "SG",
    "磺胺咪"
   ],
   "category": "sulfa",
   "risk": "forbidden",
   "summary": "明确禁用。",
   "detail": "肠道磺胺类，国外分级列为不安全药物，现已少用但需警惕老药复方制剂。",
   "note": "",
   "controversy": false,
   "sources": [
    "S7"
   ]
  },
  {
   "id": "nitrofurantoin",
   "name": "呋喃妥因",
   "en": "Nitrofurantoin",
   "aliases": [
    "呋喃坦啶",
    "硝基呋喃妥因"
   ],
   "category": "furan",
   "risk": "forbidden",
   "summary": "硝基呋喃类，明确禁用。",
   "detail": "曾广泛用于尿路感染，代谢生成的活性氧自由基损伤红细胞，极易诱发急性溶血。",
   "note": "",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7",
    "S8"
   ]
  },
  {
   "id": "furazolidone",
   "name": "呋喃唑酮",
   "en": "Furazolidone",
   "aliases": [
    "痢特灵"
   ],
   "category": "furan",
   "risk": "forbidden",
   "summary": "硝基呋喃类，明确禁用。",
   "detail": "旧称“痢特灵”，用于肠道感染，溶血风险明确。",
   "note": "",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ]
  },
  {
   "id": "nitrofural",
   "name": "呋喃西林",
   "en": "Nitrofural / Furacilin",
   "aliases": [
    "呋喃星",
    "硝基呋喃腙"
   ],
   "category": "furan",
   "risk": "forbidden",
   "summary": "硝基呋喃类，明确禁用。",
   "detail": "常作为外用消毒成分，也可诱发溶血。",
   "note": "部分外用消毒制剂含此成分，需核对说明书。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ]
  },
  {
   "id": "primaquine",
   "name": "伯氨喹",
   "en": "Primaquine",
   "aliases": [
    "伯氨喹啉",
    "磷酸伯氨喹"
   ],
   "category": "antimalarial",
   "risk": "forbidden",
   "summary": "抗疟药，蚕豆病经典禁忌。",
   "detail": "伯氨喹是G6PD缺乏者诱发溶血最著名的药物，直接破坏红细胞膜稳定性，也是WHO分级中Ⅱ/Ⅲ型缺乏者的不安全药物。",
   "note": "前往疟疾流行区需预防用药时，务必提前告知医生病史。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7",
    "S8"
   ]
  },
  {
   "id": "pamaquine",
   "name": "帕马喹",
   "en": "Pamaquine",
   "aliases": [
    "扑疟母星",
    "plasmochin"
   ],
   "category": "antimalarial",
   "risk": "forbidden",
   "summary": "抗疟药，明确禁用。",
   "detail": "与伯氨喹同属8-氨基喹啉类，溶血风险明确，现临床已少用。",
   "note": "",
   "controversy": false,
   "sources": [
    "S4",
    "S7"
   ]
  },
  {
   "id": "quinacrine",
   "name": "阿的平",
   "en": "Quinacrine / Mepacrine",
   "aliases": [
    "米帕林",
    "疟涤平"
   ],
   "category": "antimalarial",
   "risk": "forbidden",
   "summary": "抗疟药，国内资料列为禁忌。",
   "detail": "早期合成抗疟药，国内卫健委科普列为蚕豆病宝宝绝对禁用药物。",
   "note": "",
   "controversy": false,
   "sources": [
    "S1",
    "S7"
   ]
  },
  {
   "id": "methylene_blue",
   "name": "亚甲蓝",
   "en": "Methylene Blue",
   "aliases": [
    "美蓝",
    "次甲蓝"
   ],
   "category": "other_drug",
   "risk": "forbidden",
   "summary": "明确禁用。",
   "detail": "大剂量亚甲蓝可抑制G6PD活性，诱发高铁血红蛋白血症与溶血。常用于化验示踪或药物中毒急救。",
   "note": "急诊抢救时家属应主动告知病史。",
   "controversy": false,
   "sources": [
    "S1",
    "S7",
    "S8"
   ]
  },
  {
   "id": "nalidixic_acid",
   "name": "萘啶酸",
   "en": "Nalidixic Acid",
   "aliases": [
    "萘啶酮酸"
   ],
   "category": "other_drug",
   "risk": "forbidden",
   "summary": "第一代喹诺酮类，明确禁用。",
   "detail": "泌尿道抗菌药，国内外分级均列为G6PD缺乏者不安全药物。",
   "note": "注意与“慎用”的喹诺酮类区分：萘啶酸风险高于环丙沙星等。",
   "controversy": false,
   "sources": [
    "S1",
    "S7"
   ]
  },
  {
   "id": "phenazopyridine",
   "name": "非那吡啶",
   "en": "Phenazopyridine",
   "aliases": [
    "尿通宁",
    "苯偶氮吡胺"
   ],
   "category": "urinary",
   "risk": "forbidden",
   "summary": "泌尿道镇痛药，明确禁用。",
   "detail": "缓解尿路刺激症状的对症药，国内外分级均列为不安全药物。",
   "note": "",
   "controversy": false,
   "sources": [
    "S1",
    "S7",
    "S8"
   ]
  },
  {
   "id": "acetanilide",
   "name": "乙酰苯胺",
   "en": "Acetanilide",
   "aliases": [
    "退热冰"
   ],
   "category": "analgesic",
   "risk": "forbidden",
   "summary": "明确禁用。",
   "detail": "旧式解热药，是“非那西丁”的代谢前体，溶血风险明确。",
   "note": "",
   "controversy": false,
   "sources": [
    "S1",
    "S7"
   ]
  },
  {
   "id": "chloramphenicol",
   "name": "氯霉素",
   "en": "Chloramphenicol",
   "aliases": [
    "氯丝霉素"
   ],
   "category": "antibiotic_other",
   "risk": "forbidden",
   "summary": "国内资料列为禁用（存在地区分歧）。",
   "detail": "国内卫健委科普明确将氯霉素列入蚕豆病绝对禁用清单；国外分级将其列为低危，但注明地中海型与亚洲型变异者高危。",
   "note": "鉴于国内以亚洲型变异为主，按国内口径回避为妥。｜提示：氯霉素在国际部分 G6PD 清单中归为低危，国内口径列为禁用；如必须使用，请与医生充分沟通。",
   "controversy": true,
   "sources": [
    "S1",
    "S7"
   ]
  },
  {
   "id": "dapsone",
   "name": "氨苯砜",
   "en": "Dapsone",
   "aliases": [
    "二氨二苯砜",
    "迪对策"
   ],
   "category": "other_drug",
   "risk": "forbidden",
   "summary": "明确禁用。",
   "detail": "抗麻风及皮肤病用药，强氧化性，溶血风险明确；台大医院提示即使非G6PD缺乏者大量使用也可能溶血。",
   "note": "",
   "controversy": false,
   "sources": [
    "S6",
    "S7",
    "S8"
   ]
  },
  {
   "id": "rasburicase",
   "name": "拉布立酶",
   "en": "Rasburicase",
   "aliases": [
    "Fasturtec",
    "艾力"
   ],
   "category": "other_drug",
   "risk": "forbidden",
   "summary": "肿瘤溶解综合征用药，明确禁用。",
   "detail": "重组尿酸氧化酶，国内外分级均列为G6PD缺乏者不安全药物，用药前常规筛查G6PD。",
   "note": "",
   "controversy": false,
   "sources": [
    "S7",
    "S8"
   ]
  },
  {
   "id": "fava_bean",
   "name": "蚕豆及蚕豆制品",
   "en": "Fava beans / Broad beans",
   "aliases": [
    "胡豆",
    "罗汉豆",
    "兰花豆",
    "怪味胡豆",
    "蚕豆酥",
    "蚕豆酱",
    "豆瓣酱",
    "油炸蚕豆"
   ],
   "category": "food",
   "risk": "forbidden",
   "summary": "疾病名称的来源，绝对禁食。",
   "detail": "鲜、干蚕豆均含蚕豆嘧啶核苷等强氧化物质，食后诱发的溶血往往比药物更重。豆瓣酱等蚕豆制品同样回避。",
   "note": "幼儿对蚕豆毒素更敏感；市售零食（怪味胡豆、兰花豆）成分表含“蚕豆”即回避。",
   "controversy": false,
   "sources": [
    "S1",
    "S2",
    "S3",
    "S8"
   ]
  },
  {
   "id": "naphthalene",
   "name": "萘（樟脑丸/卫生球）",
   "en": "Naphthalene (mothballs)",
   "aliases": [
    "樟脑丸",
    "卫生球",
    "臭丸",
    "萘丸",
    "mothballs"
   ],
   "category": "household",
   "risk": "forbidden",
   "summary": "衣柜防虫樟脑丸，禁用。",
   "detail": "传统樟脑丸主含萘，升华气体经呼吸道吸收可诱发溶血，是家庭中最常见的非药物诱因之一。幼儿可能误食，风险更高。",
   "note": "注意区分“萘丸”与“对二氯苯”型防虫剂——两者都应回避；防蛀可改用密封收纳。台湾2013年仅删除了“外用樟脑药品”的禁用注解，萘丸仍在禁用名单。",
   "controversy": false,
   "sources": [
    "S1",
    "S2",
    "S5",
    "S6",
    "S7",
    "S8"
   ]
  },
  {
   "id": "gentian_violet",
   "name": "龙胆紫（紫药水）",
   "en": "Gentian violet",
   "aliases": [
    "紫药水",
    "甲紫",
    "结晶紫"
   ],
   "category": "household",
   "risk": "forbidden",
   "summary": "皮肤消毒剂，禁用。",
   "detail": "龙胆紫是明确的可诱发溶血物质，严禁涂抹伤口或皮肤。",
   "note": "家庭小药箱建议清理，伤口消毒改用碘伏。",
   "controversy": false,
   "sources": [
    "S5",
    "S8"
   ]
  },
  {
   "id": "benzene",
   "name": "苯及芳香族溶剂",
   "en": "Benzene",
   "aliases": [
    "苯",
    "甲苯接触",
    "油漆稀料"
   ],
   "category": "occupational",
   "risk": "forbidden",
   "summary": "职业/环境暴露，应回避。",
   "detail": "苯等工业化学品是明确的溶血诱因，从事装修、印刷、化工等职业者需做好防护。",
   "note": "",
   "controversy": false,
   "sources": [
    "S2",
    "S5"
   ]
  },
  {
   "id": "arsenic",
   "name": "砷（砒霜/含砷污染）",
   "en": "Arsenic",
   "aliases": [
    "砒霜",
    "三氧化二砷"
   ],
   "category": "occupational",
   "risk": "forbidden",
   "summary": "环境/职业暴露，应回避。",
   "detail": "砷是明确的氧化性溶血诱因，需避免污染饮用水与职业接触。",
   "note": "",
   "controversy": false,
   "sources": [
    "S2",
    "S5"
   ]
  },
  {
   "id": "trinitrotoluene",
   "name": "三硝基甲苯（TNT）",
   "en": "Trinitrotoluene",
   "aliases": [
    "TNT",
    "炸药"
   ],
   "category": "occupational",
   "risk": "forbidden",
   "summary": "职业暴露，明确回避。",
   "detail": "军工/采矿从业者的明确溶血诱因。",
   "note": "",
   "controversy": false,
   "sources": [
    "S7"
   ]
  },
  {
   "id": "phenylhydrazine",
   "name": "苯肼",
   "en": "Phenylhydrazine",
   "aliases": [
    "苯基联胺"
   ],
   "category": "occupational",
   "risk": "forbidden",
   "summary": "实验/工业试剂，明确回避。",
   "detail": "强还原性工业与实验试剂，溶血风险明确，普通家庭极少接触。",
   "note": "",
   "controversy": false,
   "sources": [
    "S7"
   ]
  },
  {
   "id": "berberis",
   "name": "黄连（川连）",
   "en": "Coptis / Berberine source",
   "aliases": [
    "川连",
    "味连",
    "鸡爪连",
    "黄连素",
    "小檗碱"
   ],
   "category": "tcm",
   "risk": "forbidden",
   "summary": "中药禁忌成分。",
   "detail": "安徽省卫健委科普将黄连、川连列为蚕豆病患者应避免的中药成分；含黄连/小檗碱的中成药（如黄连上清片、香连丸）需回避。",
   "note": "小檗碱（黄连素）虽是西药化的常用药，其来源成分仍在禁忌清单内，使用前咨询医生。｜证据说明：该中药回避主要依据国内儿科/卫健委口径，国际循证证据有限，按国内指南回避更稳妥；实际用药请遵医嘱。",
   "controversy": true,
   "sources": [
    "S1"
   ]
  },
  {
   "id": "honeysuckle",
   "name": "金银花",
   "en": "Honeysuckle / Lonicera",
   "aliases": [
    "双花",
    "忍冬花"
   ],
   "category": "tcm",
   "risk": "forbidden",
   "summary": "中药禁忌成分。",
   "detail": "安徽省卫健委科普列为应避免的中药成分。很多“清热”类感冒中成药含金银花（如双黄连口服液）。",
   "note": "给孩子用任何中成药前，务必逐条核对成分表。｜证据说明：该中药回避主要依据国内儿科/卫健委口径，国际循证证据有限，按国内指南回避更稳妥；实际用药请遵医嘱。",
   "controversy": true,
   "sources": [
    "S1"
   ]
  },
  {
   "id": "bezoar",
   "name": "牛黄",
   "en": "Calculus Bovis",
   "aliases": [
    "天然牛黄",
    "人工牛黄",
    "体外培育牛黄"
   ],
   "category": "tcm",
   "risk": "forbidden",
   "summary": "中药禁忌成分。",
   "detail": "安徽省卫健委科普列为应避免的中药成分。牛黄解毒片、小儿牛黄散等含牛黄制剂需回避。",
   "note": "人工牛黄同样在回避范围内。｜证据说明：该中药回避主要依据国内儿科/卫健委口径，国际循证证据有限，按国内指南回避更稳妥；实际用药请遵医嘱。",
   "controversy": true,
   "sources": [
    "S1"
   ]
  },
  {
   "id": "pearl",
   "name": "珍珠（珍珠末/珍珠粉）",
   "en": "Pearl powder",
   "aliases": [
    "珍珠末",
    "珍珠粉",
    "真珠母",
    "珠贝"
   ],
   "category": "tcm",
   "risk": "forbidden",
   "summary": "中药禁忌成分。",
   "detail": "安徽省卫健委科普将珍珠末列为应避免的中药成分；协和医生提示珍珠粉等传统食品需咨询医生后食用。",
   "note": "不少“惊悸安神”类儿科中成药含珍珠成分。｜证据说明：该中药回避主要依据国内儿科/卫健委口径，国际循证证据有限，按国内指南回避更稳妥；实际用药请遵医嘱。",
   "controversy": true,
   "sources": [
    "S1",
    "S3"
   ]
  },
  {
   "id": "wintersweet",
   "name": "腊梅花",
   "en": "Wintersweet flower",
   "aliases": [
    "腊梅",
    "黄梅花",
    "铁筷子花"
   ],
   "category": "tcm",
   "risk": "forbidden",
   "summary": "中药禁忌成分。",
   "detail": "安徽省卫健委科普列为应避免的中药成分，常见于暑湿类中成药。",
   "note": "证据说明：该中药回避主要依据国内儿科/卫健委口径，国际循证证据有限，按国内指南回避更稳妥；实际用药请遵医嘱。",
   "controversy": true,
   "sources": [
    "S1"
   ]
  },
  {
   "id": "mint",
   "name": "薄荷（薄荷脑/薄荷醇）",
   "en": "Menthol / Mint",
   "aliases": [
    "薄荷脑",
    "薄荷醇",
    "menthol"
   ],
   "category": "tcm",
   "risk": "forbidden",
   "summary": "中药禁忌成分；外用制剂按地区口径谨慎。",
   "detail": "国内卫健委科普将薄荷列为蚕豆病应避免的中药成分，含薄荷的儿科外用/口服制剂均需核对。台湾方面：含薄荷的吸入剂、擦剂、滴鼻剂建议2岁以下禁用，其他外用剂型需咨询医师药师。",
   "note": "清凉油、风油精、部分驱蚊贴含薄荷脑/樟脑，给宝宝使用前先看成分。",
   "controversy": true,
   "sources": [
    "S1",
    "S6",
    "S8"
   ]
  },
  {
   "id": "forsythia",
   "name": "连翘",
   "en": "Forsythia",
   "aliases": [
    "青翘",
    "老翘",
    "连召"
   ],
   "category": "tcm",
   "risk": "forbidden",
   "summary": "中药禁忌成分。",
   "detail": "安徽省卫健委科普列为应避免的中药成分，银翘散类制剂（如维C银翘片）含连翘。",
   "note": "证据说明：该中药回避主要依据国内儿科/卫健委口径，国际循证证据有限，按国内指南回避更稳妥；实际用药请遵医嘱。",
   "controversy": true,
   "sources": [
    "S1"
   ]
  },
  {
   "id": "borneol",
   "name": "冰片",
   "en": "Borneol",
   "aliases": [
    "合成冰片",
    "龙脑",
    "艾片"
   ],
   "category": "tcm",
   "risk": "forbidden",
   "summary": "中药禁忌成分。",
   "detail": "安徽省卫健委科普列为应避免的中药成分，常见于开窍类中成药与外用膏药。",
   "note": "证据说明：该中药回避主要依据国内儿科/卫健委口径，国际循证证据有限，按国内指南回避更稳妥；实际用药请遵医嘱。",
   "controversy": true,
   "sources": [
    "S1"
   ]
  },
  {
   "id": "bear_bile",
   "name": "熊胆",
   "en": "Bear bile",
   "aliases": [
    "熊胆粉",
    "金胆"
   ],
   "category": "tcm",
   "risk": "forbidden",
   "summary": "中药禁忌成分。",
   "detail": "安徽省卫健委科普列为应避免的中药成分，常见于小儿惊风、清热类中成药。",
   "note": "证据说明：该中药回避主要依据国内儿科/卫健委口径，国际循证证据有限，按国内指南回避更稳妥；实际用药请遵医嘱。",
   "controversy": true,
   "sources": [
    "S1"
   ]
  },
  {
   "id": "quinine",
   "name": "奎宁",
   "en": "Quinine",
   "aliases": [
    "金鸡纳霜",
    "奎宁水",
    "tonic water"
   ],
   "category": "antimalarial",
   "risk": "caution",
   "summary": "存在分歧：国内多列禁忌，国外列为低危。",
   "detail": "国内多部资料将奎宁列为禁忌；国外分级将其列为低危药物（Ⅱ/Ⅲ型缺乏者可在医师指导下使用）。夜间腿部痉挛患者可能接触到含奎宁制剂（部分国家仍有销售）。",
   "note": "需用时务必由医生评估，并说明溶血风险分级。",
   "controversy": true,
   "sources": [
    "S1",
    "S3",
    "S4",
    "S7"
   ]
  },
  {
   "id": "chloroquine",
   "name": "氯喹",
   "en": "Chloroquine",
   "aliases": [
    "氯喹啉",
    "羟氯喹"
   ],
   "category": "antimalarial",
   "risk": "caution",
   "summary": "存在分歧：国内列禁用，国外列为低危。",
   "detail": "安徽省卫健委将氯喹列入绝对禁用；国外分级列为低危。羟氯喹（Plaquenil）在台大医院高风险药品表中出现。用于疟疾预防或自身免疫病时，须由医生权衡。",
   "note": "羟氯喹（hydroxychloroquine）为不同药物，G6PD 中通常按低危对待，使用前请与医生确认。",
   "controversy": true,
   "sources": [
    "S1",
    "S7"
   ]
  },
  {
   "id": "levofloxacin",
   "name": "左氧氟沙星",
   "en": "Levofloxacin",
   "aliases": [
    "左克",
    "来立信",
    "可乐必妥"
   ],
   "category": "antibiotic_other",
   "risk": "caution",
   "summary": "喹诺酮类，谨慎使用。",
   "detail": "国内卫健委列为谨慎使用；台大医院将其列入高风险药品表；台湾药学会列为低危。意见不一，需医生评估后使用。",
   "note": "整个喹诺酮类（XX沙星）在使用前都应主动告知病史。",
   "controversy": true,
   "sources": [
    "S1",
    "S6",
    "S7"
   ]
  },
  {
   "id": "ciprofloxacin",
   "name": "环丙沙星",
   "en": "Ciprofloxacin",
   "aliases": [
    "西普乐",
    "悉复欢"
   ],
   "category": "antibiotic_other",
   "risk": "caution",
   "summary": "喹诺酮类，谨慎使用。",
   "detail": "国内卫健委列为谨慎使用；台大医院高风险药品表收录；国外分级列为低危。",
   "note": "",
   "controversy": true,
   "sources": [
    "S1",
    "S6",
    "S7"
   ]
  },
  {
   "id": "norfloxacin",
   "name": "诺氟沙星",
   "en": "Norfloxacin",
   "aliases": [
    "氟哌酸",
    "力醇罗"
   ],
   "category": "antibiotic_other",
   "risk": "caution",
   "summary": "喹诺酮类，谨慎使用。",
   "detail": "国内卫健委列为谨慎使用；国外分级列为低危。俗称“氟哌酸”，家庭常备，需特别注意。",
   "note": "",
   "controversy": true,
   "sources": [
    "S1",
    "S7"
   ]
  },
  {
   "id": "ofloxacin",
   "name": "氧氟沙星",
   "en": "Ofloxacin",
   "aliases": [
    "氟嗪酸",
    "泰利必妥"
   ],
   "category": "antibiotic_other",
   "risk": "caution",
   "summary": "喹诺酮类，谨慎使用。",
   "detail": "国外分级列为低危药物，需医生指导下使用。",
   "note": "",
   "controversy": true,
   "sources": [
    "S7"
   ]
  },
  {
   "id": "moxifloxacin",
   "name": "莫西沙星",
   "en": "Moxifloxacin",
   "aliases": [
    "拜复乐"
   ],
   "category": "antibiotic_other",
   "risk": "caution",
   "summary": "喹诺酮类，谨慎使用。",
   "detail": "台大医院将其列入G6PD缺乏高风险药品表，需医生评估。",
   "note": "",
   "controversy": true,
   "sources": [
    "S6"
   ]
  },
  {
   "id": "acetaminophen",
   "name": "对乙酰氨基酚",
   "en": "Acetaminophen / Paracetamol",
   "aliases": [
    "扑热息痛",
    "泰诺林",
    "必理通",
    "paracetamol"
   ],
   "category": "analgesic",
   "risk": "safe",
   "summary": "常规剂量下一般可用，是首选退烧药。",
   "detail": "协和医生建议蚕豆病发热首选对乙酰氨基酚，其机制不经过影响红细胞代谢的途径；国外分级列为低危。国内部分学者认为不能完全排除溶血可能，倾向慎用。",
   "note": "①只用单方制剂；②严格按体重计算剂量、不超量；③不与含同成分的复方感冒药叠加服用；④有溶血发作史者先咨询医生。",
   "controversy": true,
   "sources": [
    "S3",
    "S9",
    "S7",
    "S1"
   ]
  },
  {
   "id": "ibuprofen",
   "name": "布洛芬",
   "en": "Ibuprofen",
   "aliases": [
    "芬必得",
    "美林",
    "托恩"
   ],
   "category": "analgesic",
   "risk": "caution",
   "summary": "存在分歧：一派认为相对安全，一派认为需谨慎。",
   "detail": "北大第一医院医生认为布洛芬不是强氧化物、相对安全，可作为首选；协和医生认为可能增加溶血风险，建议对乙酰氨基酚效果不佳时才考虑。国内卫健委口径：常规剂量可用，严禁超量或与其他解热镇痛药同用。",
   "note": "如使用：常规剂量、短期、单一品种；有家族史或既往溶血史者避免；不与对乙酰氨基酚同时服用。",
   "controversy": true,
   "sources": [
    "S3",
    "S9",
    "S1"
   ]
  },
  {
   "id": "vitamin_c_high",
   "name": "大剂量维生素C",
   "en": "High-dose Ascorbic acid",
   "aliases": [
    "维生素C",
    "维C",
    "抗坏血酸"
   ],
   "category": "other_drug",
   "risk": "caution",
   "summary": "大剂量（静脉/日超1克）慎用；日常剂量无虞。",
   "detail": "大剂量维生素C（尤其静脉输注、每日口服超过1克）有促氧化作用，国内外资料均提示慎用；台大医院将其列为“正常治疗剂量下可由医师处方使用”。",
   "note": "日常膳食或常规剂量补充剂无需恐慌；避免静脉大剂量维生素C。",
   "controversy": false,
   "sources": [
    "S1",
    "S6",
    "S7"
   ]
  },
  {
   "id": "vitamin_k3",
   "name": "维生素K3（甲萘醌）",
   "en": "Vitamin K3 / Menadione",
   "aliases": [
    "甲萘醌",
    "亚硫酸氢钠甲萘醌",
    "Hykinone"
   ],
   "category": "other_drug",
   "risk": "caution",
   "summary": "国内多列禁忌；与天然维生素K1不是一回事。",
   "detail": "合成水溶性维生素K3（甲萘醌）国内资料列为禁忌或慎用；国外分级列为低危。新生儿出生时常规补充的是维生素K1（植物甲萘醌），不在禁用名单。",
   "note": "就诊或用药时认准“K1”与“K3”的区别，不清楚就问医生。",
   "controversy": true,
   "sources": [
    "S1",
    "S4",
    "S7"
   ]
  },
  {
   "id": "isoniazid",
   "name": "异烟肼",
   "en": "Isoniazid (INH)",
   "aliases": [
    "雷米封",
    "INH"
   ],
   "category": "antibiotic_other",
   "risk": "caution",
   "summary": "抗结核药，慎用。",
   "detail": "协和医生提示需严格遵医嘱；国外分级列为低危药物。结核规范治疗不可擅自停药，应由专科医生评估。",
   "note": "",
   "controversy": true,
   "sources": [
    "S3",
    "S7"
   ]
  },
  {
   "id": "probenecid",
   "name": "丙磺舒",
   "en": "Probenecid",
   "aliases": [
    "羧苯磺胺"
   ],
   "category": "other_drug",
   "risk": "caution",
   "summary": "存在分歧：国内列禁忌，国外列低危。",
   "detail": "北京医院医生提示其干扰尿酸排泄、加重溶血风险，列为禁忌；国外分级列为低危。痛风患者可能接触，需提前说明病史。",
   "note": "",
   "controversy": true,
   "sources": [
    "S4",
    "S7"
   ]
  },
  {
   "id": "nitroprusside",
   "name": "硝普钠",
   "en": "Sodium nitroprusside",
   "aliases": [
    "亚硝基铁氰化钠"
   ],
   "category": "cardiovascular",
   "risk": "caution",
   "summary": "静脉降压药，慎用。",
   "detail": "用于高血压急症的静脉用药，国内卫健委列为谨慎使用，急诊抢救时需家属主动告知病史。",
   "note": "",
   "controversy": false,
   "sources": [
    "S1"
   ]
  },
  {
   "id": "isosorbide_dinitrate",
   "name": "硝酸异山梨酯",
   "en": "Isosorbide dinitrate",
   "aliases": [
    "消心痛",
    "异舒吉"
   ],
   "category": "cardiovascular",
   "risk": "caution",
   "summary": "硝酸酯类，谨慎使用。",
   "detail": "国外分级列为低危；台大医院将其列入高风险药品表，意见不一。",
   "note": "",
   "controversy": true,
   "sources": [
    "S6",
    "S7"
   ]
  },
  {
   "id": "nitroglycerin",
   "name": "硝酸甘油",
   "en": "Nitroglycerin",
   "aliases": [
    "耐绞宁",
    "硝酸甘油片"
   ],
   "category": "cardiovascular",
   "risk": "caution",
   "summary": "硝酸酯类急救药，谨慎使用。",
   "detail": "台大医院将其列入G6PD缺乏高风险药品表。心绞痛急救场景下需医生知情决策。",
   "note": "",
   "controversy": true,
   "sources": [
    "S6"
   ]
  },
  {
   "id": "gliclazide",
   "name": "格列齐特",
   "en": "Gliclazide",
   "aliases": [
    "达美康",
    "列克"
   ],
   "category": "metabolic",
   "risk": "caution",
   "summary": "磺酰脲类降糖药，谨慎使用。",
   "detail": "台大医院高风险药品表与国外低危分级均涉及该类药物，糖尿病患者需提前说明病史。",
   "note": "同类格列本脲（优降糖）、格列美脲（亚莫利）同样谨慎。",
   "controversy": true,
   "sources": [
    "S6",
    "S7"
   ]
  },
  {
   "id": "glibenclamide",
   "name": "格列本脲",
   "en": "Glibenclamide",
   "aliases": [
    "优降糖",
    "达安疗"
   ],
   "category": "metabolic",
   "risk": "caution",
   "summary": "磺酰脲类降糖药，谨慎使用。",
   "detail": "国外分级与台大医院高风险表均涉及，需医生知情。",
   "note": "",
   "controversy": true,
   "sources": [
    "S6",
    "S7"
   ]
  },
  {
   "id": "glimepiride",
   "name": "格列美脲",
   "en": "Glimepiride",
   "aliases": [
    "亚莫利",
    "万苏平"
   ],
   "category": "metabolic",
   "risk": "caution",
   "summary": "磺酰脲类降糖药，谨慎使用。",
   "detail": "台大医院将其列入高风险药品表。",
   "note": "",
   "controversy": true,
   "sources": [
    "S6"
   ]
  },
  {
   "id": "pyrimethamine",
   "name": "乙胺嘧啶",
   "en": "Pyrimethamine",
   "aliases": [
    "息疟定",
    "达拉匹林"
   ],
   "category": "antimalarial",
   "risk": "caution",
   "summary": "抗疟药，谨慎使用。",
   "detail": "国内卫健委列为谨慎使用；国外分级列为低危。",
   "note": "",
   "controversy": true,
   "sources": [
    "S1",
    "S7"
   ]
  },
  {
   "id": "colchicine",
   "name": "秋水仙碱",
   "en": "Colchicine",
   "aliases": [
    "秋水仙素"
   ],
   "category": "other_drug",
   "risk": "caution",
   "summary": "痛风/家族性地中海热用药，慎用。",
   "detail": "国内卫健委列为谨慎使用；国外分级列为低危。",
   "note": "",
   "controversy": true,
   "sources": [
    "S1",
    "S7"
   ]
  },
  {
   "id": "diphenhydramine",
   "name": "苯海拉明",
   "en": "Diphenhydramine",
   "aliases": [
    "Benadryl",
    "苯那君"
   ],
   "category": "neuro",
   "risk": "caution",
   "summary": "第一代抗组胺药，慎用。",
   "detail": "国内卫健委列为谨慎使用；国外分级列为低危。常见于复方抗过敏/晕车药。",
   "note": "第二代抗组胺药（如西替利嗪、氯雷他定）未见列入名单，可优先与医生确认。",
   "controversy": true,
   "sources": [
    "S1",
    "S7"
   ]
  },
  {
   "id": "levodopa",
   "name": "左旋多巴",
   "en": "Levodopa",
   "aliases": [
    "L-Dopa"
   ],
   "category": "neuro",
   "risk": "caution",
   "summary": "抗帕金森药，慎用。",
   "detail": "国内卫健委列为谨慎使用；国外分级列为低危。",
   "note": "",
   "controversy": true,
   "sources": [
    "S1",
    "S7"
   ]
  },
  {
   "id": "quinidine",
   "name": "奎尼丁",
   "en": "Quinidine",
   "aliases": [
    "硫酸奎尼丁"
   ],
   "category": "cardiovascular",
   "risk": "caution",
   "summary": "抗心律失常药，慎用。",
   "detail": "国内卫健委列为谨慎使用；国外分级列为低危。",
   "note": "",
   "controversy": true,
   "sources": [
    "S1",
    "S7"
   ]
  },
  {
   "id": "phenytoin",
   "name": "苯妥英",
   "en": "Phenytoin",
   "aliases": [
    "大仑丁",
    "苯妥英钠"
   ],
   "category": "neuro",
   "risk": "caution",
   "summary": "抗癫痫药，慎用。",
   "detail": "国外分级列为低危药物，需在医生指导下使用。",
   "note": "",
   "controversy": true,
   "sources": [
    "S7"
   ]
  },
  {
   "id": "compound_cold_med",
   "name": "复方感冒药/复方解热镇痛药",
   "en": "Compound cold & antipyretic medicines",
   "aliases": [
    "小儿氨酚黄那敏",
    "氨酚伪麻美芬片",
    "白加黑",
    "泰诺感冒片",
    "维C银翘片",
    "感冒灵颗粒",
    "复方锌布颗粒",
    "复方氨酚烷胺片",
    "快克",
    "感康"
   ],
   "category": "analgesic",
   "risk": "caution",
   "summary": "最大的隐蔽雷区：成分复杂，需逐项核对。",
   "detail": "复方制剂常同时含：对乙酰氨基酚（与单方退烧药叠加过量风险）、咖啡因、马来酸氯苯那敏，以及金银花、连翘、薄荷等中药禁忌成分。给蚕豆病患者使用前必须逐条核对成分表。",
   "note": "核对要点：对乙酰氨基酚、阿司匹林、咖啡因、磺胺、金银花、连翘、薄荷、牛黄、冰片。不确定就问医生或药师。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ]
  },
  {
   "id": "methyl_salicylate",
   "name": "水杨酸甲酯（冬青油）",
   "en": "Methyl salicylate",
   "aliases": [
    "冬青油",
    "冬绿油",
    "topsyl"
   ],
   "category": "household",
   "risk": "caution",
   "summary": "外用制剂，谨慎使用。",
   "detail": "台湾卫生署要求含水杨酸甲酯的外用软膏加注每日使用量上限，以避免水杨酸中毒；国内应咨询医生药师。",
   "note": "常见于跌打损伤外用药、肌肉止痛膏。",
   "controversy": true,
   "sources": [
    "S6",
    "S8"
   ]
  },
  {
   "id": "camphor_topical",
   "name": "含薄荷脑/樟脑的外用制剂",
   "en": "Camphor/Menthol topical products",
   "aliases": [
    "清凉油",
    "风油精",
    "无比滴",
    "退热贴（部分）",
    "止痒膏"
   ],
   "category": "household",
   "risk": "caution",
   "summary": "外用产品意见不一，用前咨询药师。",
   "detail": "台湾2007年要求含薄荷、樟脑、甲基水杨酸的吸入剂/擦剂/滴鼻剂加注“婴儿及2岁以下禁用”警语，其他外用剂型需咨询医师药师；2013年删除了“樟脑外用对蚕豆症患者禁用”的注解（目前无文献认定外用樟脑致溶血）。国内资料保守，建议回避。",
   "note": "婴幼儿建议直接回避；成人外用也先咨询药师。注意与“萘丸（卫生球）”区分——萘丸是明确禁用的。",
   "controversy": true,
   "sources": [
    "S5",
    "S6",
    "S8"
   ]
  },
  {
   "id": "eucalyptus",
   "name": "尤加利树精油",
   "en": "Eucalyptus oil",
   "aliases": [],
   "category": "household",
   "risk": "caution",
   "summary": "台湾国民健康署不推荐使用。",
   "detail": "预防蚕豆症发作的官方建议中明确“不推荐使用尤加利树精油”。",
   "note": "",
   "controversy": false,
   "sources": [
    "S8"
   ]
  },
  {
   "id": "hair_dye",
   "name": "染发剂与人工色素",
   "en": "Hair dye / artificial colorants",
   "aliases": [],
   "category": "household",
   "risk": "caution",
   "summary": "科普资料提示回避。",
   "detail": "科普中国将部分染发剂、人工色素列为应避免的氧化性物质；证据有限，保守回避为宜。",
   "note": "",
   "controversy": true,
   "sources": [
    "S5"
   ]
  },
  {
   "id": "honey",
   "name": "蜂蜜",
   "en": "Honey",
   "aliases": [],
   "category": "food",
   "risk": "caution",
   "summary": "个别资料提示谨慎（证据有限）。",
   "detail": "协和医生提到部分蜂蜜可能含类蚕豆嘧啶成分，建议咨询医生后食用。主流清单并不限制蜂蜜，且1岁以下婴儿本就不应食用蜂蜜（肉毒风险）。",
   "note": "该条证据较弱，列入仅供家长参考，不必过度紧张。",
   "controversy": true,
   "sources": [
    "S3"
   ]
  },
  {
   "id": "penicillins",
   "name": "青霉素类抗生素",
   "en": "Penicillins",
   "aliases": [
    "阿莫西林",
    "氨苄西林",
    "青霉素",
    "阿莫西林克拉维酸钾",
    "augmentin"
   ],
   "category": "antibiotic_other",
   "risk": "safe",
   "summary": "未列入任何禁用名单，常规剂量一般可用。",
   "detail": "国内外G6PD禁忌分级中均不包含青霉素类（前提是本人无青霉素过敏）。细菌感染时它通常是医生会优先选择的 safe 选项。",
   "note": "过敏者禁用；具体遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S8"
   ]
  },
  {
   "id": "cephalosporins",
   "name": "头孢菌素类抗生素",
   "en": "Cephalosporins",
   "aliases": [
    "头孢克洛",
    "头孢地尼",
    "头孢羟氨苄",
    "头孢丙烯",
    "希刻劳",
    "头孢呋辛"
   ],
   "category": "antibiotic_other",
   "risk": "safe",
   "summary": "未列入任何禁用名单，常规剂量一般可用。",
   "detail": "国内外G6PD禁忌分级均未列入头孢类（前提是本人无相关过敏史）。",
   "note": "过敏者禁用；具体遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S8"
   ]
  },
  {
   "id": "macrolides",
   "name": "大环内酯类抗生素",
   "en": "Macrolides",
   "aliases": [
    "阿奇霉素",
    "红霉素",
    "克拉霉素",
    "希舒美"
   ],
   "category": "antibiotic_other",
   "risk": "safe",
   "summary": "未列入任何禁用名单，常规剂量一般可用。",
   "detail": "支原体感染等场景的常用药，国内外G6PD禁忌分级均未列入。",
   "note": "具体遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S8"
   ]
  },
  {
   "id": "metronidazole",
   "name": "甲硝唑/替硝唑",
   "en": "Metronidazole / Tinidazole",
   "aliases": [
    "甲硝唑",
    "替硝唑",
    "灭滴灵"
   ],
   "category": "antibiotic_other",
   "risk": "safe",
   "summary": "未列入经典禁用名单，一般可用。",
   "detail": "注意与“硝基呋喃类”（呋喃妥因、呋喃唑酮、呋喃西林）区分：后者明确禁用，甲硝唑属硝基咪唑类，不在国内外禁用名单中。",
   "note": "为保守起见，首次使用如发现尿色加深等异常，及时就医并告知病史。",
   "controversy": true,
   "sources": [
    "S7",
    "S8"
   ]
  },
  {
   "id": "vitamin_k1",
   "name": "维生素K1（植物甲萘醌）",
   "en": "Vitamin K1 / Phytomenadione",
   "aliases": [
    "叶绿醌",
    "VK1"
   ],
   "category": "other_drug",
   "risk": "safe",
   "summary": "新生儿出生常规补充剂，与禁用的K3不同。",
   "detail": "国内外G6PD禁忌分级均未列入维生素K1；新生儿出生后常规补充K1预防出血，不在回避范围。禁用/慎用名单针对的是合成维生素K3（甲萘醌）。",
   "note": "如有疑虑，用药前再与医生确认。",
   "controversy": false,
   "sources": [
    "S7"
   ]
  },
  {
   "id": "infection",
   "name": "感染诱因",
   "en": "Infections as triggers",
   "aliases": [
    "肝炎",
    "巨细胞病毒",
    "伤寒",
    "肺炎",
    "上呼吸道感染",
    "流感"
   ],
   "category": "infection",
   "risk": "info",
   "summary": "感染本身就是常见溶血诱因，不可忽视。",
   "detail": "肝炎病毒、巨细胞病毒、伤寒、肺炎等感染是G6PD缺乏者急性溶血的常见诱因。防感染与防错药同等重要。",
   "note": "少去人多密闭场所、勤洗手、按时接种疫苗；感染期间密切观察面色与尿色。",
   "controversy": false,
   "sources": [
    "S2",
    "S3"
   ]
  },
  {
   "id": "neonatal_jaundice",
   "name": "新生儿黄疸",
   "en": "Neonatal hyperbilirubinemia",
   "aliases": [
    "核黄疸",
    "胆红素脑病"
   ],
   "category": "infection",
   "risk": "info",
   "summary": "G6PD缺乏患儿更易出现中重度新生儿黄疸。",
   "detail": "多发生于出生后2~4天，也可提前至24小时内，容易引起胆红素脑病。患儿出生后应尽早进行G6PD筛查。",
   "note": "黄疸出现早、消退慢、程度重，务必告知新生儿科医生排查G6PD。",
   "controversy": false,
   "sources": [
    "S2",
    "S8"
   ]
  },
  {
   "id": "genetics",
   "name": "遗传特点",
   "en": "Inheritance pattern",
   "aliases": [
    "X连锁",
    "产前咨询",
    "携带者"
   ],
   "category": "infection",
   "risk": "info",
   "summary": "X连锁不完全显性遗传，男性远多于女性。",
   "detail": "儿子患病必从母亲遗传；女儿患病可从父母任一方遗传。我国南方（广东、广西、海南、云南、贵州、四川等）高发。备孕家庭可做产前咨询与筛查。",
   "note": "育龄人群可在遗传咨询门诊评估子代风险。",
   "controversy": false,
   "sources": [
    "S2",
    "S5"
   ]
  },
  {
   "id": "toluidine-blue",
   "name": "甲苯胺蓝",
   "en": "Toluidine blue",
   "aliases": [
    "tolonium chloride",
    "天青染料",
    "toluidine blue O"
   ],
   "category": "other_drug",
   "risk": "forbidden",
   "summary": "与亚甲蓝同类的氧化性染色剂/药物，可能诱发溶血。",
   "detail": "常与亚甲蓝并列列入 G6PD 禁用清单；用于部分诊断染色或局部止血场景，使用前务必告知蚕豆病史。",
   "note": "若遇必须使用的情况，与医生确认替代方案。",
   "controversy": false,
   "sources": [
    "S7"
   ]
  },
  {
   "id": "phenolphthalein",
   "name": "酚酞",
   "en": "Phenolphthalein",
   "aliases": [
    "果导",
    "果导片"
   ],
   "category": "other_drug",
   "risk": "caution",
   "summary": "旧式刺激性泻药，部分历史资料列为 G6PD 慎用。",
   "detail": "酚酞（如果导）属老式泻药，已在多国退市；既往资料将其列入 G6PD 慎用/回避范围，现有制剂已少见。",
   "note": "证据有限且药品已较罕见，若使用含酚酞产品请咨询医生。",
   "controversy": true,
   "sources": [
    "S1"
   ]
  }
 ]
};

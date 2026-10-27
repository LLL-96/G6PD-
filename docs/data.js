// 本文件由 tools/build_web_data.py 自动生成，请勿手改；请修改 data/items.json 后重新生成。
const G6PD_DATA = {
 "meta": {
  "title": "G6PD缺乏症（蚕豆病）禁忌速查数据库",
  "version": "0.2.3",
  "updated": "2026-10-27",
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
   ],
   "icon": "💊",
   "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27120%27%20height%3D%27120%27%20viewBox%3D%270%200%20120%20120%27%3E%3Crect%20x%3D%272%27%20y%3D%272%27%20width%3D%27116%27%20height%3D%27116%27%20rx%3D%2718%27%20fill%3D%27%23fdecea%27%20stroke%3D%27%23c62828%27%20stroke-opacity%3D%270.25%27%2F%3E%3Ctext%20x%3D%2760%27%20y%3D%2770%27%20font-size%3D%2754%27%20text-anchor%3D%27middle%27%3E%F0%9F%92%8A%3C%2Ftext%3E%3Ctext%20x%3D%2760%27%20y%3D%27104%27%20font-size%3D%2713%27%20text-anchor%3D%27middle%27%20fill%3D%27%23c62828%27%20font-family%3D%27PingFang%20SC%2CMicrosoft%20YaHei%2Csans-serif%27%3E%E9%98%BF%E5%8F%B8%E5%8C%B9%E6%9E%97%3C%2Ftext%3E%3C%2Fsvg%3E",
   "use": "解热、镇痛、抗炎；小剂量还用于抗血小板、预防心脑血管血栓",
   "py": [
    "asipilin",
    "yixianshuiyangsuan",
    "baiasipilin",
    "fufangasipilin",
    "bamier"
   ],
   "pyi": [
    "aspl",
    "yxsys",
    "baspl",
    "ffaspl",
    "bme"
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
   ],
   "icon": "💊",
   "use": "强效退烧、止痛（现已限制使用）",
   "py": [
    "annaijin",
    "nuowajing",
    "luowaerjing"
   ],
   "pyi": [
    "anj",
    "nwj",
    "lwej"
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
   ],
   "icon": "💊",
   "use": "退烧、止痛（多见于复方制剂）",
   "py": [
    "anjibilin",
    "anbilin"
   ],
   "pyi": [
    "ajbl",
    "abl"
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
   ],
   "icon": "💊",
   "use": "退烧、止痛（老药，多已淘汰）",
   "py": [
    "feinaxiding",
    "duiyixiananjibenyimi"
   ],
   "pyi": [
    "fnxd",
    "dyxajbym"
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
   ],
   "icon": "💊",
   "use": "强效抗炎镇痛（风湿、痛风，现已少用）",
   "py": [
    "baotaisong",
    "butatong"
   ],
   "pyi": [
    "bts",
    "btt"
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
   ],
   "ingredients": [
    "磺胺甲噁唑",
    "甲氧苄啶"
   ],
   "icon": "💊",
   "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27120%27%20height%3D%27120%27%20viewBox%3D%270%200%20120%20120%27%3E%3Crect%20x%3D%272%27%20y%3D%272%27%20width%3D%27116%27%20height%3D%27116%27%20rx%3D%2718%27%20fill%3D%27%23fdecea%27%20stroke%3D%27%23c62828%27%20stroke-opacity%3D%270.25%27%2F%3E%3Ctext%20x%3D%2760%27%20y%3D%2770%27%20font-size%3D%2754%27%20text-anchor%3D%27middle%27%3E%F0%9F%92%8A%3C%2Ftext%3E%3Ctext%20x%3D%2760%27%20y%3D%27104%27%20font-size%3D%2713%27%20text-anchor%3D%27middle%27%20fill%3D%27%23c62828%27%20font-family%3D%27PingFang%20SC%2CMicrosoft%20YaHei%2Csans-serif%27%3E%E5%A4%8D%E6%96%B9%E6%96%B0%E8%AF%BA%E6%98%8E%3C%2Ftext%3E%3C%2Fsvg%3E",
   "use": "磺胺类抗菌药（尿路、呼吸道、肠道感染），即复方新诺明/SMZ",
   "py": [
    "fufanghuanganjiaezuo",
    "fufangxinnuoming",
    "huanganjiaezuo",
    "baiyanjing"
   ],
   "pyi": [
    "ffhajez",
    "ffxnm",
    "hajez",
    "byj"
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
   ],
   "icon": "💊",
   "use": "磺胺类抗菌药（流脑、一般细菌感染）",
   "py": [
    "huanganmiding",
    "huanganmidingyin"
   ],
   "pyi": [
    "hamd",
    "hamdy"
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
   ],
   "icon": "💊",
   "use": "磺胺类抗菌药（尿路感染）",
   "py": [
    "huanganyiezuo",
    "jundeqing"
   ],
   "pyi": [
    "hayez",
    "jdq"
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
   ],
   "icon": "💊",
   "use": "磺胺类，眼科滴眼液（结膜炎）",
   "py": [
    "huangancuxian",
    "huanganyixian",
    "banmayanyaoshui"
   ],
   "pyi": [
    "hacx",
    "hayx",
    "bmyys"
   ],
   "debate": "作为滴眼液局部用药全身吸收极少；但磺胺类整体列为禁用，本库取保守口径。"
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
   ],
   "icon": "💊",
   "use": "磺胺类抗菌药（肠道/溃疡性结肠炎相关）",
   "py": [
    "huanganbiding"
   ],
   "pyi": [
    "habd"
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
   ],
   "icon": "💊",
   "use": "肠道磺胺药（肠道感染）",
   "py": [
    "huangangua",
    "huanganmi"
   ],
   "pyi": [
    "hag",
    "ham"
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
   ],
   "icon": "💊",
   "use": "尿路感染抗菌药",
   "py": [
    "funantuoyin",
    "funantanding",
    "xiaojifunantuoyin"
   ],
   "pyi": [
    "fnty",
    "fntd",
    "xjfnty"
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
   ],
   "icon": "💊",
   "use": "肠道感染/痢疾抗菌药（痢特灵）",
   "py": [
    "funanzuotong",
    "liteling"
   ],
   "pyi": [
    "fnzt",
    "ltl"
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
   ],
   "icon": "💊",
   "use": "外用消毒（伤口、皮肤感染）",
   "py": [
    "funanxilin",
    "funanxing",
    "xiaojifunanzong"
   ],
   "pyi": [
    "fnxl",
    "fnx",
    "xjfnz"
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
   ],
   "icon": "💊",
   "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27120%27%20height%3D%27120%27%20viewBox%3D%270%200%20120%20120%27%3E%3Crect%20x%3D%272%27%20y%3D%272%27%20width%3D%27116%27%20height%3D%27116%27%20rx%3D%2718%27%20fill%3D%27%23fdecea%27%20stroke%3D%27%23c62828%27%20stroke-opacity%3D%270.25%27%2F%3E%3Ctext%20x%3D%2760%27%20y%3D%2770%27%20font-size%3D%2754%27%20text-anchor%3D%27middle%27%3E%F0%9F%92%8A%3C%2Ftext%3E%3Ctext%20x%3D%2760%27%20y%3D%27104%27%20font-size%3D%2713%27%20text-anchor%3D%27middle%27%20fill%3D%27%23c62828%27%20font-family%3D%27PingFang%20SC%2CMicrosoft%20YaHei%2Csans-serif%27%3E%E4%BC%AF%E6%B0%A8%E5%96%B9%3C%2Ftext%3E%3C%2Fsvg%3E",
   "use": "抗疟药，根治间日疟复发、杀灭配子体",
   "py": [
    "boankui",
    "boankuilin",
    "linsuanboankui"
   ],
   "pyi": [
    "bak",
    "bakl",
    "lsbak"
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
   ],
   "icon": "💊",
   "use": "抗疟药（扑疟母星）",
   "py": [
    "pamakui",
    "punvemuxing"
   ],
   "pyi": [
    "pmk",
    "pnmx"
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
   ],
   "icon": "💊",
   "use": "抗疟药（现已少用）",
   "py": [
    "adiping",
    "mipalin",
    "nvediping"
   ],
   "pyi": [
    "adp",
    "mpl",
    "ndp"
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
   ],
   "icon": "💊",
   "use": "解毒、染色剂（亚硝酸盐中毒解毒；也用于染色）",
   "py": [
    "yajialan",
    "meilan",
    "cijialan"
   ],
   "pyi": [
    "yjl",
    "ml",
    "cjl"
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
   ],
   "icon": "⚪",
   "use": "喹诺酮类抗菌药（尿路感染）",
   "py": [
    "naidingsuan",
    "naidingtongsuan"
   ],
   "pyi": [
    "nds",
    "ndts"
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
   ],
   "icon": "💊",
   "use": "尿路镇痛药（缓解尿痛，尿液会变橙）",
   "py": [
    "feinabiding",
    "niaotongning",
    "benoudanbian"
   ],
   "pyi": [
    "fnbd",
    "ntn",
    "bodba"
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
   ],
   "icon": "💊",
   "use": "退烧、止痛（老药，已淘汰）",
   "py": [
    "yixianbenan",
    "tuirebing"
   ],
   "pyi": [
    "yxba",
    "trb"
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
   ],
   "icon": "💊",
   "use": "广谱抗生素（伤寒、眼部感染；现少用）",
   "py": [
    "lvmeisu",
    "lvsimeisu"
   ],
   "pyi": [
    "lms",
    "lsms"
   ],
   "debate": "国内资料将其列为 G6PD 禁用；部分国际资料认为风险较低。本库取保守口径（禁用）。"
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
   ],
   "icon": "💊",
   "use": "抗麻风药；也用于疱疹样皮炎",
   "py": [
    "anbenfeng",
    "eranerbenfeng",
    "diduice"
   ],
   "pyi": [
    "abf",
    "eaebf",
    "ddc"
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
   ],
   "icon": "💊",
   "use": "降尿酸酶（肿瘤溶解综合征）",
   "py": [
    "labulimei",
    "aili"
   ],
   "pyi": [
    "lblm",
    "al"
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
    "油炸蚕豆",
    "佛豆",
    "川豆",
    "南豆",
    "蚕豆花粉",
    "蚕豆花",
    "蚕豆芽"
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
   ],
   "icon": "🫘",
   "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27120%27%20height%3D%27120%27%20viewBox%3D%270%200%20120%20120%27%3E%3Crect%20x%3D%272%27%20y%3D%272%27%20width%3D%27116%27%20height%3D%27116%27%20rx%3D%2718%27%20fill%3D%27%23eaf6eb%27%20stroke%3D%27%232e7d32%27%20stroke-opacity%3D%270.25%27%2F%3E%3Ctext%20x%3D%2760%27%20y%3D%2770%27%20font-size%3D%2754%27%20text-anchor%3D%27middle%27%3E%F0%9F%AB%98%3C%2Ftext%3E%3Ctext%20x%3D%2760%27%20y%3D%27104%27%20font-size%3D%2713%27%20text-anchor%3D%27middle%27%20fill%3D%27%232e7d32%27%20font-family%3D%27PingFang%20SC%2CMicrosoft%20YaHei%2Csans-serif%27%3E%E8%9A%95%E8%B1%86%3C%2Ftext%3E%3C%2Fsvg%3E",
   "use": "食物（鲜/干蚕豆，及豆瓣酱、兰花豆等制品）",
   "py": [
    "candoujicandouzhipin",
    "hudou",
    "luohandou",
    "lanhuadou",
    "guaiweihudou",
    "candousu",
    "candoujiang",
    "doubanjiang",
    "youzhacandou",
    "fudou",
    "chuandou"
   ],
   "pyi": [
    "cdjcdzp",
    "hd",
    "lhd",
    "gwhd",
    "cds",
    "cdj",
    "dbj",
    "yzcd",
    "fd",
    "cd"
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
    "mothballs",
    "萘"
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
   ],
   "icon": "⚪",
   "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27120%27%20height%3D%27120%27%20viewBox%3D%270%200%20120%20120%27%3E%3Crect%20x%3D%272%27%20y%3D%272%27%20width%3D%27116%27%20height%3D%27116%27%20rx%3D%2718%27%20fill%3D%27%23eef2f7%27%20stroke%3D%27%23455a64%27%20stroke-opacity%3D%270.25%27%2F%3E%3Ctext%20x%3D%2760%27%20y%3D%2770%27%20font-size%3D%2754%27%20text-anchor%3D%27middle%27%3E%E2%9A%AA%3C%2Ftext%3E%3Ctext%20x%3D%2760%27%20y%3D%27104%27%20font-size%3D%2713%27%20text-anchor%3D%27middle%27%20fill%3D%27%23455a64%27%20font-family%3D%27PingFang%20SC%2CMicrosoft%20YaHei%2Csans-serif%27%3E%E6%A8%9F%E8%84%91%E4%B8%B8%2F%E8%90%98%3C%2Ftext%3E%3C%2Fsvg%3E",
   "use": "衣柜防蛀防虫（挥发性气体）",
   "py": [
    "naizhangnaowanweishengqiu",
    "zhangnaowan",
    "weishengqiu",
    "chouwan",
    "naiwan",
    "nai"
   ],
   "pyi": [
    "nznwwsq",
    "znw",
    "wsq",
    "cw",
    "nw",
    "n"
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
   ],
   "icon": "🟣",
   "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27120%27%20height%3D%27120%27%20viewBox%3D%270%200%20120%20120%27%3E%3Crect%20x%3D%272%27%20y%3D%272%27%20width%3D%27116%27%20height%3D%27116%27%20rx%3D%2718%27%20fill%3D%27%23f3e8fb%27%20stroke%3D%27%236a1b9a%27%20stroke-opacity%3D%270.25%27%2F%3E%3Ctext%20x%3D%2760%27%20y%3D%2770%27%20font-size%3D%2754%27%20text-anchor%3D%27middle%27%3E%F0%9F%9F%A3%3C%2Ftext%3E%3Ctext%20x%3D%2760%27%20y%3D%27104%27%20font-size%3D%2713%27%20text-anchor%3D%27middle%27%20fill%3D%27%236a1b9a%27%20font-family%3D%27PingFang%20SC%2CMicrosoft%20YaHei%2Csans-serif%27%3E%E7%B4%AB%E8%8D%AF%E6%B0%B4%3C%2Ftext%3E%3C%2Fsvg%3E",
   "use": "皮肤/黏膜消毒（外用）",
   "py": [
    "longdanziziyaoshui",
    "ziyaoshui",
    "jiazi",
    "jiejingzi"
   ],
   "pyi": [
    "ldzzys",
    "zys",
    "jz",
    "jjz"
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
   ],
   "icon": "⚠️",
   "use": "工业溶剂、化工原料（吸入或皮肤接触）",
   "py": [
    "benjifangxiangzurongji",
    "ben",
    "jiabenjiechu",
    "youqixiliao"
   ],
   "pyi": [
    "bjfxzrj",
    "b",
    "jbjc",
    "yqxl"
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
   ],
   "icon": "⚠️",
   "use": "毒物、环境污染物",
   "py": [
    "shenpishuanghanshenwuran",
    "pishuang",
    "sanyanghuaershen"
   ],
   "pyi": [
    "spshswr",
    "ps",
    "syhes"
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
   ],
   "icon": "⚠️",
   "use": "炸药、工业化学品",
   "py": [
    "sanxiaojijiaben",
    "zhayao"
   ],
   "pyi": [
    "sxjjb",
    "zy"
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
   ],
   "icon": "⚠️",
   "use": "化工原料、化学试剂",
   "py": [
    "benjing",
    "benjilianan"
   ],
   "pyi": [
    "bj",
    "bjla"
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
   ],
   "icon": "🟡",
   "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27120%27%20height%3D%27120%27%20viewBox%3D%270%200%20120%20120%27%3E%3Crect%20x%3D%272%27%20y%3D%272%27%20width%3D%27116%27%20height%3D%27116%27%20rx%3D%2718%27%20fill%3D%27%23fff7e0%27%20stroke%3D%27%23b26a00%27%20stroke-opacity%3D%270.25%27%2F%3E%3Ctext%20x%3D%2760%27%20y%3D%2770%27%20font-size%3D%2754%27%20text-anchor%3D%27middle%27%3E%F0%9F%9F%A1%3C%2Ftext%3E%3Ctext%20x%3D%2760%27%20y%3D%27104%27%20font-size%3D%2713%27%20text-anchor%3D%27middle%27%20fill%3D%27%23b26a00%27%20font-family%3D%27PingFang%20SC%2CMicrosoft%20YaHei%2Csans-serif%27%3E%E9%BB%84%E8%BF%9E%3C%2Ftext%3E%3C%2Fsvg%3E",
   "use": "清热燥湿、泻火解毒（中药）",
   "py": [
    "huanglianchuanlian",
    "chuanlian",
    "weilian",
    "jizhaolian",
    "huangliansu",
    "xiaobojian"
   ],
   "pyi": [
    "hlcl",
    "cl",
    "wl",
    "jzl",
    "hls",
    "xbj"
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
   ],
   "icon": "🌸",
   "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27120%27%20height%3D%27120%27%20viewBox%3D%270%200%20120%20120%27%3E%3Crect%20x%3D%272%27%20y%3D%272%27%20width%3D%27116%27%20height%3D%27116%27%20rx%3D%2718%27%20fill%3D%27%23fff7e0%27%20stroke%3D%27%23b26a00%27%20stroke-opacity%3D%270.25%27%2F%3E%3Ctext%20x%3D%2760%27%20y%3D%2770%27%20font-size%3D%2754%27%20text-anchor%3D%27middle%27%3E%F0%9F%8C%BC%3C%2Ftext%3E%3Ctext%20x%3D%2760%27%20y%3D%27104%27%20font-size%3D%2713%27%20text-anchor%3D%27middle%27%20fill%3D%27%23b26a00%27%20font-family%3D%27PingFang%20SC%2CMicrosoft%20YaHei%2Csans-serif%27%3E%E9%87%91%E9%93%B6%E8%8A%B1%3C%2Ftext%3E%3C%2Fsvg%3E",
   "use": "清热解毒（中药，感冒、咽痛）",
   "py": [
    "jinyinhua",
    "shuanghua",
    "rendonghua"
   ],
   "pyi": [
    "jyh",
    "sh",
    "rdh"
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
   ],
   "icon": "🟡",
   "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27120%27%20height%3D%27120%27%20viewBox%3D%270%200%20120%20120%27%3E%3Crect%20x%3D%272%27%20y%3D%272%27%20width%3D%27116%27%20height%3D%27116%27%20rx%3D%2718%27%20fill%3D%27%23fff7e0%27%20stroke%3D%27%23b26a00%27%20stroke-opacity%3D%270.25%27%2F%3E%3Ctext%20x%3D%2760%27%20y%3D%2770%27%20font-size%3D%2754%27%20text-anchor%3D%27middle%27%3E%F0%9F%9F%A1%3C%2Ftext%3E%3Ctext%20x%3D%2760%27%20y%3D%27104%27%20font-size%3D%2713%27%20text-anchor%3D%27middle%27%20fill%3D%27%23b26a00%27%20font-family%3D%27PingFang%20SC%2CMicrosoft%20YaHei%2Csans-serif%27%3E%E7%89%9B%E9%BB%84%3C%2Ftext%3E%3C%2Fsvg%3E",
   "use": "清热解毒、凉开（中成药成分）",
   "py": [
    "niuhuang",
    "tianranniuhuang",
    "rengongniuhuang",
    "tiwaipeiyuniuhuang"
   ],
   "pyi": [
    "nh",
    "trnh",
    "rgnh",
    "twpynh"
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
   ],
   "icon": "🌿",
   "use": "安神定惊、明目（中药）",
   "py": [
    "zhenzhuzhenzhumozhenzhufen",
    "zhenzhumo",
    "zhenzhufen",
    "zhenzhumu",
    "zhubei"
   ],
   "pyi": [
    "zzzzmzzf",
    "zzm",
    "zzf",
    "zb"
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
   ],
   "icon": "🌿",
   "use": "解暑生津、止咳（中药）",
   "py": [
    "lameihua",
    "lamei",
    "huangmeihua",
    "tiekuaizihua"
   ],
   "pyi": [
    "lmh",
    "lm",
    "hmh",
    "tkzh"
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
   ],
   "icon": "🧴",
   "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27120%27%20height%3D%27120%27%20viewBox%3D%270%200%20120%20120%27%3E%3Crect%20x%3D%272%27%20y%3D%272%27%20width%3D%27116%27%20height%3D%27116%27%20rx%3D%2718%27%20fill%3D%27%23eaf6eb%27%20stroke%3D%27%232e7d32%27%20stroke-opacity%3D%270.25%27%2F%3E%3Ctext%20x%3D%2760%27%20y%3D%2770%27%20font-size%3D%2754%27%20text-anchor%3D%27middle%27%3E%F0%9F%8C%BF%3C%2Ftext%3E%3Ctext%20x%3D%2760%27%20y%3D%27104%27%20font-size%3D%2713%27%20text-anchor%3D%27middle%27%20fill%3D%27%232e7d32%27%20font-family%3D%27PingFang%20SC%2CMicrosoft%20YaHei%2Csans-serif%27%3E%E8%96%84%E8%8D%B7%3C%2Ftext%3E%3C%2Fsvg%3E",
   "use": "疏风散热、止痒（中药/外用）",
   "py": [
    "bohebohenaobohechun",
    "bohenao",
    "bohechun"
   ],
   "pyi": [
    "bhbhnbhc",
    "bhn",
    "bhc"
   ],
   "debate": "部分资料将薄荷列为禁忌；也有资料认为外用或食品中少量风险低。本库取保守口径（禁用）。"
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
   ],
   "icon": "🌿",
   "use": "清热解毒（中药，感冒、疮疡）",
   "py": [
    "lianqiao",
    "qingqiao",
    "laoqiao",
    "lianzhao"
   ],
   "pyi": [
    "lq",
    "qq",
    "lz"
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
   ],
   "icon": "🌿",
   "use": "开窍醒神、清热止痛（外用/中成药）",
   "py": [
    "bingpian",
    "hechengbingpian",
    "longnao",
    "aipian"
   ],
   "pyi": [
    "bp",
    "hcbp",
    "ln",
    "ap"
   ],
   "debate": "含冰片的中成药较多，部分资料列为禁忌，证据等级不一。本库取保守口径。"
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
   ],
   "icon": "🌿",
   "use": "清热明目、平肝（中药）",
   "py": [
    "xiongdan",
    "xiongdanfen",
    "jindan"
   ],
   "pyi": [
    "xd",
    "xdf",
    "jd"
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
   ],
   "icon": "💊",
   "use": "抗疟药（疟疾治疗）",
   "py": [
    "kuining",
    "jinjinashuang",
    "kuiningshui"
   ],
   "pyi": [
    "kn",
    "jjns",
    "kns"
   ],
   "debate": "国内多部资料列为禁忌/慎用；国外部分资料列为低风险。本库取保守口径（慎用）。"
  },
  {
   "id": "chloroquine",
   "name": "氯喹",
   "en": "Chloroquine",
   "aliases": [
    "氯喹啉"
   ],
   "category": "antimalarial",
   "risk": "forbidden",
   "summary": "氯喹是抗疟药（4-氨基喹啉类）。国内多家指南将其列为 G6PD 绝对禁用：可诱发急性溶血。",
   "detail": "与羟氯喹不同，氯喹在 G6PD 人群中溶血风险更高，安徽省卫健委等国内临床指南多列为绝对禁用。疟疾治疗请改用青蒿素类；类风湿/红斑狼疮用药请由医生评估替代方案。",
   "note": "用药前务必主动告知蚕豆病史；切勿与伯氨喹、非那西丁等氧化性药物同用。",
   "controversy": true,
   "sources": [
    "S1",
    "S7"
   ],
   "icon": "💊",
   "use": "抗疟药；也曾用于类风湿、红斑狼疮",
   "py": [
    "lvkui",
    "lvkuilin"
   ],
   "pyi": [
    "lk",
    "lkl"
   ],
   "debate": "国内多家指南列为绝对禁用；国际部分资料认为治疗剂量相对安全。本库取保守口径（禁用），抗疟用药请遵医嘱。"
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
   ],
   "icon": "💊",
   "use": "喹诺酮类抗生素（呼吸道、尿路感染）",
   "py": [
    "zuoyangfushaxing",
    "zuoke",
    "lailixin",
    "kelebituo"
   ],
   "pyi": [
    "zyfsx",
    "zk",
    "llx",
    "klbt"
   ],
   "debate": "国内部分资料列为慎用；国际资料多视为低风险。本库取保守口径。"
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
   ],
   "icon": "💊",
   "use": "喹诺酮类抗生素（尿路、肠道感染）",
   "py": [
    "huanbingshaxing",
    "xipule",
    "xifuhuan"
   ],
   "pyi": [
    "hbsx",
    "xpl",
    "xfh"
   ],
   "debate": "国内部分资料列为慎用；国际资料多视为低风险。本库取保守口径。"
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
   ],
   "icon": "💊",
   "use": "喹诺酮类抗生素（肠道、尿路感染）",
   "py": [
    "nuofushaxing",
    "fupaisuan",
    "lichunluo"
   ],
   "pyi": [
    "nfsx",
    "fps",
    "lcl"
   ],
   "debate": "国内部分资料列为慎用；国际资料多视为低风险。本库取保守口径。"
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
   ],
   "icon": "💊",
   "use": "喹诺酮类抗生素（呼吸道、尿路、眼部感染）",
   "py": [
    "yangfushaxing",
    "fuqinsuan",
    "tailibituo"
   ],
   "pyi": [
    "yfsx",
    "fqs",
    "tlbt"
   ],
   "debate": "国内部分资料列为慎用；国际资料多视为低风险。本库取保守口径。"
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
   ],
   "icon": "💊",
   "use": "喹诺酮类抗生素（呼吸道感染）",
   "py": [
    "moxishaxing",
    "baifule"
   ],
   "pyi": [
    "mxsx",
    "bfl"
   ],
   "debate": "国内部分资料列为慎用；国际资料多视为低风险。本库取保守口径。"
  },
  {
   "id": "acetaminophen",
   "name": "对乙酰氨基酚",
   "en": "Acetaminophen / Paracetamol",
   "aliases": [
    "扑热息痛",
    "泰诺林",
    "必理通",
    "paracetamol",
    "百服咛"
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
   ],
   "icon": "💊",
   "use": "退烧、止痛（感冒发热、头痛、牙痛、肌肉痛）",
   "py": [
    "duiyixiananjifen",
    "purexitong",
    "tainuolin",
    "bilitong",
    "baifuning"
   ],
   "pyi": [
    "dyxajf",
    "prxt",
    "tnl",
    "blt",
    "bfn"
   ],
   "debate": "多数指南视为 G6PD 首选退烧药；极少数资料提示大剂量需注意。常规剂量可用。"
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
   ],
   "icon": "💊",
   "use": "退烧、止痛、抗炎（发热、头痛、关节痛、痛经）",
   "py": [
    "buluofen",
    "fenbidei",
    "meilin",
    "tuoen"
   ],
   "pyi": [
    "blf",
    "fbd",
    "ml",
    "te"
   ],
   "debate": "一派认为常规剂量相对安全（多国儿科常用）；另一派认为 NSAID 需谨慎。本库取保守口径（慎用），退烧可优先对乙酰氨基酚。"
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
   ],
   "icon": "💊",
   "use": "维生素C（大剂量，抗氧化/辅助）",
   "py": [
    "dajiliangweishengsu",
    "weishengsu",
    "wei",
    "kanghuaixuesuan"
   ],
   "pyi": [
    "djlwss",
    "wss",
    "w",
    "khxs"
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
   "risk": "forbidden",
   "summary": "合成水溶性维生素K3（甲萘醌）为明确氧化性诱发物，禁用。",
   "detail": "维生素K3（甲萘醌/Menadione）为合成水溶性形式，可在 G6PD 缺乏者中诱发急性氧化性溶血，是公认的蚕豆病禁忌。新生儿及婴幼儿常规补充的是维生素K1（植物甲萘醌），不在禁用名单。",
   "note": "就诊或用药时务必认准“K1”与“K3”的区别，不清楚就问医生或药师。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "icon": "⚪",
   "use": "维生素K（促凝血、新生儿出血预防）",
   "py": [
    "weishengsujianaikun",
    "jianaikun",
    "yaliusuanqingnajianaikun"
   ],
   "pyi": [
    "wssjnk",
    "jnk",
    "ylsqnjnk"
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
   "summary": "属于抗结核一线药。G6PD 缺乏者使用存在个别溶血报告或证据有限，出于安全建议谨慎使用（非绝对禁用）。",
   "detail": "异烟肼（雷米封）是抗结核一线药。好大夫等资料将其列为 G6PD 慎用（偶见溶血报告）。本工具按“谨慎使用”处理；抗结核/抗癫痫方案以专科医生处方为准。",
   "note": "需在医生监护下使用，用药期间留意尿色变深、皮肤/眼睛发黄等溶血迹象。",
   "controversy": true,
   "sources": [
    "S3",
    "S7"
   ],
   "icon": "💊",
   "use": "抗结核药",
   "py": [
    "yiyanjing",
    "leimifeng"
   ],
   "pyi": [
    "yyj",
    "lmf"
   ],
   "debate": "仅有零散个案或证据有限，并非绝对禁用；本库取保守口径，抗结核请遵医嘱。"
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
   "summary": "属于促尿酸排泄药。G6PD 缺乏者使用存在个别溶血报告或证据有限，出于安全建议谨慎使用（非绝对禁用）。",
   "detail": "丙磺舒是促进尿酸排泄药。部分资料（好大夫、39 健康网）将其列为慎用/禁用。本工具按“谨慎使用”处理；抗结核/抗癫痫方案以专科医生处方为准。",
   "note": "需在医生监护下使用，用药期间留意尿色变深、皮肤/眼睛发黄等溶血迹象。",
   "controversy": true,
   "sources": [
    "S4",
    "S7"
   ],
   "icon": "💊",
   "use": "促尿酸排泄药（痛风）",
   "py": [
    "binghuangshu",
    "suobenhuangan"
   ],
   "pyi": [
    "bhs",
    "sbha"
   ],
   "debate": "仅有零散个案或证据有限，并非绝对禁用；本库取保守口径，痛风用药请医生评估。"
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
   ],
   "icon": "💊",
   "use": "强效静脉降压（高血压急症）",
   "py": [
    "xiaopuna",
    "yaxiaojitieqinghuana"
   ],
   "pyi": [
    "xpn",
    "yxjtqhn"
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
   ],
   "icon": "💊",
   "use": "硝酸酯类，扩张冠脉（心绞痛）",
   "py": [
    "xiaosuanyishanlizhi",
    "xiaoxintong",
    "yishuji"
   ],
   "pyi": [
    "xsyslz",
    "xxt",
    "ysj"
   ],
   "debate": "部分资料列为慎用（大剂量/长期）；请心内科评估。"
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
   ],
   "icon": "💊",
   "use": "硝酸酯类（心绞痛急救与预防）",
   "py": [
    "xiaosuanganyou",
    "naijiaoning",
    "xiaosuanganyoupian"
   ],
   "pyi": [
    "xsgy",
    "njn",
    "xsgyp"
   ],
   "debate": "部分资料列为慎用（大剂量/长期）；心绞痛急救不应因 G6PD 延误。"
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
   ],
   "icon": "💊",
   "use": "磺酰脲类降糖药（2 型糖尿病）",
   "py": [
    "gelieqite",
    "dameikang",
    "lieke"
   ],
   "pyi": [
    "glqt",
    "dmk",
    "lk"
   ],
   "debate": "磺酰脲类在部分资料列为慎用，证据不一；本库取保守口径，糖尿病用药请内分泌科评估。"
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
   ],
   "icon": "💊",
   "use": "磺酰脲类降糖药（2 型糖尿病）",
   "py": [
    "geliebenniao",
    "youjiangtang",
    "daanliao"
   ],
   "pyi": [
    "glbn",
    "yjt",
    "dal"
   ],
   "debate": "磺酰脲类在部分资料列为慎用，证据不一；本库取保守口径，糖尿病用药请内分泌科评估。"
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
   ],
   "icon": "💊",
   "use": "磺酰脲类降糖药（2 型糖尿病）",
   "py": [
    "geliemeiniao",
    "yamoli",
    "wansuping"
   ],
   "pyi": [
    "glmn",
    "yml",
    "wsp"
   ],
   "debate": "磺酰脲类在部分资料列为慎用，证据不一；本库取保守口径，糖尿病用药请内分泌科评估。"
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
   ],
   "icon": "💊",
   "use": "抗疟药；也用于弓形虫感染",
   "py": [
    "yianmiding",
    "xinveding",
    "dalapilin"
   ],
   "pyi": [
    "yamd",
    "xnd",
    "dlpl"
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
   ],
   "icon": "🌸",
   "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27120%27%20height%3D%27120%27%20viewBox%3D%270%200%20120%20120%27%3E%3Crect%20x%3D%272%27%20y%3D%272%27%20width%3D%27116%27%20height%3D%27116%27%20rx%3D%2718%27%20fill%3D%27%23fff7e0%27%20stroke%3D%27%23b26a00%27%20stroke-opacity%3D%270.25%27%2F%3E%3Ctext%20x%3D%2760%27%20y%3D%2770%27%20font-size%3D%2754%27%20text-anchor%3D%27middle%27%3E%F0%9F%8C%B8%3C%2Ftext%3E%3Ctext%20x%3D%2760%27%20y%3D%27104%27%20font-size%3D%2713%27%20text-anchor%3D%27middle%27%20fill%3D%27%23b26a00%27%20font-family%3D%27PingFang%20SC%2CMicrosoft%20YaHei%2Csans-serif%27%3E%E6%B0%B4%E4%BB%99%3C%2Ftext%3E%3C%2Fsvg%3E",
   "use": "抗痛风药（急性痛风）",
   "py": [
    "qiushuixianjian",
    "qiushuixiansu"
   ],
   "pyi": [
    "qsxj",
    "qsxs"
   ],
   "debate": "证据有限，个别资料列为慎用；痛风急性期请医生权衡。"
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
   ],
   "icon": "💊",
   "use": "抗组胺药（过敏、晕车、止痒）",
   "py": [
    "benhailaming",
    "bennajun"
   ],
   "pyi": [
    "bhlm",
    "bnj"
   ],
   "debate": "第一代抗组胺药，部分资料列为慎用；二代抗组胺通常更安全。"
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
   ],
   "icon": "💊",
   "use": "抗帕金森病药",
   "py": [
    "zuoxuanduoba"
   ],
   "pyi": [
    "zxdb"
   ],
   "debate": "证据有限，部分资料列为慎用；帕金森用药请神经科评估。"
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
   ],
   "icon": "💊",
   "use": "抗心律失常药",
   "py": [
    "kuiniding",
    "liusuankuiniding"
   ],
   "pyi": [
    "knd",
    "lsknd"
   ],
   "debate": "部分资料列为慎用；抗心律失常用药请心内科评估。"
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
   "summary": "属于抗癫痫药。G6PD 缺乏者使用存在个别溶血报告或证据有限，出于安全建议谨慎使用（非绝对禁用）。",
   "detail": "苯妥英钠是抗癫痫药。部分资料（好大夫等）将其列为 G6PD 相对安全但需慎用，有个别溶血报告。本工具按“谨慎使用”处理；抗结核/抗癫痫方案以专科医生处方为准。",
   "note": "需在医生监护下使用，用药期间留意尿色变深、皮肤/眼睛发黄等溶血迹象。",
   "controversy": true,
   "sources": [
    "S7"
   ],
   "icon": "💊",
   "use": "抗癫痫药",
   "py": [
    "bentuoying",
    "dalunding",
    "bentuoyingna"
   ],
   "pyi": [
    "bty",
    "dld",
    "btyn"
   ],
   "debate": "仅有零散个案或证据有限，并非绝对禁用；本库取保守口径，用前请医生评估。"
  },
  {
   "id": "compound_cold_med",
   "name": "复方感冒药/复方解热镇痛药",
   "en": "Compound cold & antipyretic medicines",
   "aliases": [
    "感冒灵颗粒",
    "复方锌布颗粒",
    "999感冒灵"
   ],
   "category": "analgesic",
   "risk": "caution",
   "summary": "最大的隐蔽雷区：成分复杂，需逐项核对。",
   "detail": "复方制剂常同时含：对乙酰氨基酚（与单方退烧药叠加过量风险）、咖啡因、马来酸氯苯那敏，以及金银花、连翘、薄荷等中药禁忌成分。给蚕豆病患者使用前必须逐条核对成分表。",
   "note": "以下为常见复方感冒药的代表性成分，具体以所购药品说明书为准。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "ingredients": [
    "对乙酰氨基酚",
    "马来酸氯苯那敏",
    "伪麻黄碱",
    "咖啡因",
    "人工牛黄"
   ],
   "icon": "💊",
   "use": "缓解感冒症状（含多种成分，需逐一核对）",
   "py": [
    "fufangganmaoyaofufangjierezhentongyao",
    "ganmaolingkeli",
    "fufangxinbukeli",
    "ganmaoling"
   ],
   "pyi": [
    "ffgmyffjrzty",
    "gmlkl",
    "ffxbkl",
    "gml"
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
   ],
   "icon": "🧴",
   "use": "外用止痛（肌肉、关节酸痛）",
   "py": [
    "shuiyangsuanjiazhidongqingyou",
    "dongqingyou",
    "donglvyou"
   ],
   "pyi": [
    "sysjzdqy",
    "dqy",
    "dly"
   ],
   "debate": "外用可经皮吸收少量；部分资料列为慎用，避免大面积或破损皮肤使用。"
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
    "止痒膏",
    "万金油",
    "白花油",
    "薄荷膏"
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
   ],
   "icon": "🧴",
   "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27120%27%20height%3D%27120%27%20viewBox%3D%270%200%20120%20120%27%3E%3Crect%20x%3D%272%27%20y%3D%272%27%20width%3D%27116%27%20height%3D%27116%27%20rx%3D%2718%27%20fill%3D%27%23e8f1fb%27%20stroke%3D%27%231565c0%27%20stroke-opacity%3D%270.25%27%2F%3E%3Ctext%20x%3D%2760%27%20y%3D%2770%27%20font-size%3D%2754%27%20text-anchor%3D%27middle%27%3E%F0%9F%A7%B4%3C%2Ftext%3E%3Ctext%20x%3D%2760%27%20y%3D%27104%27%20font-size%3D%2713%27%20text-anchor%3D%27middle%27%20fill%3D%27%231565c0%27%20font-family%3D%27PingFang%20SC%2CMicrosoft%20YaHei%2Csans-serif%27%3E%E9%A3%8E%E6%B2%B9%E7%B2%BE%2F%E6%B8%85%E5%87%89%E6%B2%B9%3C%2Ftext%3E%3C%2Fsvg%3E",
   "use": "外用止痒、清凉（清凉油、风油精类）",
   "py": [
    "hanbohenaozhangnaodewaiyongzhiji",
    "qingliangyou",
    "fengyoujing",
    "wubidi",
    "tuiretiebufen",
    "zhiyanggao",
    "wanjinyou",
    "baihuayou",
    "bohegao"
   ],
   "pyi": [
    "hbhnzndwyzj",
    "qly",
    "fyj",
    "wbd",
    "trtbf",
    "zyg",
    "wjy",
    "bhy",
    "bhg"
   ],
   "debate": "外用是否经皮吸收到足以溶血存在分歧；避免大面积、破损皮肤及婴幼儿面部使用。"
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
   ],
   "icon": "🧴",
   "use": "精油（香薰、外用）",
   "py": [
    "youjialishujingyou"
   ],
   "pyi": [
    "yjlsjy"
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
   ],
   "icon": "🧴",
   "use": "染发、着色（含对苯二胺等）",
   "py": [
    "ranfajiyurengongsesu"
   ],
   "pyi": [
    "rfjyrgss"
   ],
   "debate": "含对苯二胺等氧化性成分，科普资料建议回避；染发请做皮肤测试并保持通风。"
  },
  {
   "id": "honey",
   "name": "蜂蜜",
   "en": "Honey",
   "aliases": [],
   "category": "food",
   "risk": "safe",
   "summary": "属于食品，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，常规情况下可用。",
   "detail": "国内外权威指南（台大医院、安徽省卫健委等）均未将其列为 G6PD 溶血风险药物；具体用药仍遵医嘱，并主动告知蚕豆病史。",
   "note": "1 岁以下婴儿禁食蜂蜜（肉毒杆菌风险，与蚕豆病无关）；其他人群正常食用。",
   "controversy": false,
   "sources": [
    "S3"
   ],
   "icon": "🍽️",
   "use": "食物（调味、冲饮）",
   "py": [
    "fengmi"
   ],
   "pyi": [
    "fm"
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
   ],
   "icon": "💊",
   "use": "β-内酰胺类抗生素（细菌感染）",
   "py": [
    "qingmeisuleikangshengsu",
    "amoxilin",
    "anbianxilin",
    "qingmeisu",
    "amoxilinkelaweisuanjia"
   ],
   "pyi": [
    "qmslkss",
    "amxl",
    "abxl",
    "qms",
    "amxlklwsj"
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
   ],
   "icon": "💊",
   "use": "头孢类抗生素（细菌感染）",
   "py": [
    "toubaojunsuleikangshengsu",
    "toubaokeluo",
    "toubaodini",
    "toubaoqianganbian",
    "toubaobingxi",
    "xikelao",
    "toubaofuxin"
   ],
   "pyi": [
    "tbjslkss",
    "tbkl",
    "tbdn",
    "tbqab",
    "tbbx",
    "xkl",
    "tbfx"
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
   ],
   "icon": "💊",
   "use": "大环内酯类抗生素（呼吸道、支原体感染）",
   "py": [
    "dahuanneizhileikangshengsu",
    "aqimeisu",
    "hongmeisu",
    "kelameisu",
    "xishumei"
   ],
   "pyi": [
    "dhnzlkss",
    "aqms",
    "hms",
    "klms",
    "xsm"
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
   ],
   "icon": "💊",
   "use": "抗厌氧菌、抗滴虫（牙周、肠道、妇科感染）",
   "py": [
    "jiaxiaozuotixiaozuo",
    "jiaxiaozuo",
    "tixiaozuo",
    "miediling"
   ],
   "pyi": [
    "jxztxz",
    "jxz",
    "txz",
    "mdl"
   ],
   "debate": "未列入多数经典 G6PD 禁用名单，一般可用；个别资料提示慎用。"
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
   ],
   "icon": "⚪",
   "use": "维生素K（促凝血、新生儿出血）",
   "py": [
    "weishengsuzhiwujianaikun",
    "yelvkun"
   ],
   "pyi": [
    "wsszwjnk",
    "ylk"
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
   ],
   "icon": "🦠",
   "use": "科普：感染/发热本身可诱发溶血",
   "py": [
    "ganranyouyin",
    "ganyan",
    "juxibaobingdu",
    "shanghan",
    "feiyan",
    "shanghuxidaoganran",
    "liugan"
   ],
   "pyi": [
    "gryy",
    "gy",
    "jxbbd",
    "sh",
    "fy",
    "shxdgr",
    "lg"
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
   ],
   "icon": "🦠",
   "use": "科普：新生儿黄疸与 G6PD 缺乏相关",
   "py": [
    "xinshengerhuangdan",
    "hehuangdan",
    "danhongsunaobing"
   ],
   "pyi": [
    "xsehd",
    "hhd",
    "dhsnb"
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
   ],
   "icon": "🦠",
   "use": "科普：X 连锁遗传特点",
   "py": [
    "yichuantedian",
    "liansuo",
    "chanqianzixun",
    "xiedaizhe"
   ],
   "pyi": [
    "yctd",
    "ls",
    "cqzx",
    "xdz"
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
   ],
   "icon": "💊",
   "use": "染色剂、解毒（正铁血红蛋白血症）",
   "py": [
    "jiabenanlan",
    "tianqingranliao"
   ],
   "pyi": [
    "jbal",
    "tqrl"
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
   "risk": "safe",
   "summary": "属于泻药（多已退市），目前未列入 G6PD（蚕豆病）禁忌/慎用名单，常规情况下可用。",
   "detail": "国内外权威指南（台大医院、安徽省卫健委等）均未将其列为 G6PD 溶血风险药物；具体用药仍遵医嘱，并主动告知蚕豆病史。",
   "note": "国内已停用；便秘优先用乳果糖等更安全的缓泻剂。",
   "controversy": false,
   "sources": [
    "S1"
   ],
   "icon": "💊",
   "use": "刺激性泻药（便秘，现已少用）",
   "py": [
    "fentai",
    "guodao",
    "guodaopian"
   ],
   "pyi": [
    "ft",
    "gd",
    "gdp"
   ]
  },
  {
   "id": "pudilan",
   "name": "蒲地蓝",
   "en": "Pudilan",
   "aliases": [
    "蒲地蓝消炎",
    "蒲地蓝消炎口服液",
    "蒲地蓝消炎片"
   ],
   "category": "tcm",
   "risk": "caution",
   "summary": "中成药（成分复杂），建议核对成分表并咨询医生。",
   "detail": "清热解毒类中成药，常含黄芩、金银花、连翘等；其中金银花、连翘属本库回避中药，服用前务必核对成分表。",
   "note": "中成药大多由多味中药组成，难以逐一判定；凡含本库已列回避成分（黄连/金银花/牛黄/连翘/薄荷/冰片/熊胆/腊梅花/珍珠等）者，按国内口径回避。",
   "controversy": true,
   "sources": [
    "S1",
    "S3"
   ],
   "icon": "🌿",
   "use": "清热解毒（中成药，咽炎、扁桃体炎）",
   "py": [
    "pudilan",
    "pudilanxiaoyan",
    "pudilanxiaoyankoufuye",
    "pudilanxiaoyanpian"
   ],
   "pyi": [
    "pdl",
    "pdlxy",
    "pdlxykfy",
    "pdlxyp"
   ],
   "ingredients": [
    "蒲公英",
    "苦地丁",
    "板蓝根",
    "黄芩"
   ]
  },
  {
   "id": "lanqin",
   "name": "蓝芩",
   "en": "Lanqin",
   "aliases": [
    "蓝芩口服液",
    "蓝芩颗粒"
   ],
   "category": "tcm",
   "risk": "caution",
   "summary": "中成药（成分复杂），建议核对成分表并咨询医生。",
   "detail": "清热解毒类中成药，多含板蓝根、黄芩、栀子等，成分复杂，G6PD 患儿建议核对成分并咨询医生。",
   "note": "中成药大多由多味中药组成，难以逐一判定；凡含本库已列回避成分（黄连/金银花/牛黄/连翘/薄荷/冰片/熊胆/腊梅花/珍珠等）者，按国内口径回避。",
   "controversy": true,
   "sources": [
    "S1",
    "S3"
   ],
   "icon": "🌿",
   "use": "清热解毒（中成药，咽炎）",
   "py": [
    "lanqin",
    "lanqinkoufuye",
    "lanqinkeli"
   ],
   "pyi": [
    "lq",
    "lqkfy",
    "lqkl"
   ],
   "ingredients": [
    "板蓝根",
    "黄芩",
    "栀子",
    "黄柏",
    "胖大海"
   ]
  },
  {
   "id": "banlangen",
   "name": "板蓝根",
   "en": "Banlangen / Isatis root",
   "aliases": [
    "板蓝根颗粒",
    "复方板蓝根"
   ],
   "category": "tcm",
   "risk": "caution",
   "summary": "中成药（成分复杂），建议核对成分表并咨询医生。",
   "detail": "常见清热解毒中成药；虽部分资料认为相对温和，但成分复杂，G6PD 患儿使用建议咨询医生。",
   "note": "中成药大多由多味中药组成，难以逐一判定；凡含本库已列回避成分（黄连/金银花/牛黄/连翘/薄荷/冰片/熊胆/腊梅花/珍珠等）者，按国内口径回避。",
   "controversy": true,
   "sources": [
    "S1",
    "S3"
   ],
   "icon": "🌿",
   "use": "清热解毒（感冒、咽痛）",
   "py": [
    "banlangen",
    "banlangenkeli",
    "fufangbanlangen"
   ],
   "pyi": [
    "blg",
    "blgkl",
    "ffblg"
   ]
  },
  {
   "id": "lianhua",
   "name": "连花清瘟",
   "en": "Lianhua Qingwen",
   "aliases": [
    "连花清瘟胶囊",
    "连花清瘟颗粒"
   ],
   "category": "tcm",
   "risk": "caution",
   "summary": "中成药（成分复杂），建议核对成分表并咨询医生。",
   "detail": "常见清热解毒中成药，含连翘、金银花、薄荷脑等；其中连翘、金银花属本库回避中药，服用前核对成分表。",
   "note": "中成药大多由多味中药组成，难以逐一判定；凡含本库已列回避成分（黄连/金银花/牛黄/连翘/薄荷/冰片/熊胆/腊梅花/珍珠等）者，按国内口径回避。",
   "controversy": true,
   "sources": [
    "S1",
    "S3"
   ],
   "icon": "🌿",
   "use": "清瘟解毒（中成药，感冒、流感）",
   "py": [
    "lianhuaqingwen",
    "lianhuaqingwenjiaonang",
    "lianhuaqingwenkeli"
   ],
   "pyi": [
    "lhqw",
    "lhqwjn",
    "lhqwkl"
   ],
   "ingredients": [
    "连翘",
    "金银花",
    "炙麻黄",
    "苦杏仁",
    "石膏",
    "板蓝根",
    "绵马贯众",
    "鱼腥草",
    "广藿香",
    "大黄",
    "红景天",
    "薄荷脑",
    "甘草"
   ],
   "debate": "中成药复方，成分表含连翘、金银花、薄荷脑等本库禁用药材；不同厂家配方有差异，请核对成分表。"
  },
  {
   "id": "xiaochaihu",
   "name": "小柴胡颗粒",
   "en": "Xiaochaihu",
   "aliases": [
    "小柴胡"
   ],
   "category": "tcm",
   "risk": "caution",
   "summary": "中成药（成分复杂），建议核对成分表并咨询医生。",
   "detail": "和解类中成药，成分含柴胡、黄芩、姜半夏等，成分复杂，G6PD 患儿建议咨询医生后使用。",
   "note": "中成药大多由多味中药组成，难以逐一判定；凡含本库已列回避成分（黄连/金银花/牛黄/连翘/薄荷/冰片/熊胆/腊梅花/珍珠等）者，按国内口径回避。",
   "controversy": true,
   "sources": [
    "S1",
    "S3"
   ],
   "icon": "🌿",
   "use": "和解少阳（感冒、发热）",
   "py": [
    "xiaochaihukeli",
    "xiaochaihu"
   ],
   "pyi": [
    "xchkl",
    "xch"
   ]
  },
  {
   "id": "xiaoershaoqiao",
   "name": "小儿豉翘清热颗粒",
   "en": "Xiao'er Shaoqiao",
   "aliases": [
    "豉翘",
    "小儿豉翘"
   ],
   "category": "tcm",
   "risk": "caution",
   "summary": "中成药（成分复杂），建议核对成分表并咨询医生。",
   "detail": "儿科常用清热颗粒，含连翘、薄荷、淡豆豉等；连翘、薄荷属本库回避中药，服用前核对成分表。",
   "note": "中成药大多由多味中药组成，难以逐一判定；凡含本库已列回避成分（黄连/金银花/牛黄/连翘/薄荷/冰片/熊胆/腊梅花/珍珠等）者，按国内口径回避。",
   "controversy": true,
   "sources": [
    "S1",
    "S3"
   ],
   "icon": "🌿",
   "use": "疏风清热（小儿感冒）",
   "py": [
    "xiaoershiqiaoqingrekeli",
    "shiqiao",
    "xiaoershiqiao"
   ],
   "pyi": [
    "xesqqrkl",
    "sq",
    "xesq"
   ],
   "ingredients": [
    "连翘",
    "薄荷",
    "荆芥",
    "淡豆豉",
    "牛蒡子",
    "柴胡",
    "黄芩",
    "赤芍",
    "槟榔",
    "厚朴",
    "大黄"
   ],
   "debate": "中成药复方，成分含连翘、薄荷等本库禁用药材；请核对成分表。"
  },
  {
   "id": "ganmaoqingre",
   "name": "感冒清热颗粒",
   "en": "Ganmao Qingre",
   "aliases": [
    "感冒清热",
    "感冒清热冲剂"
   ],
   "category": "tcm",
   "risk": "caution",
   "summary": "中成药（成分复杂），建议核对成分表并咨询医生。",
   "detail": "疏风散寒类中成药，成分含荆芥、薄荷、防风等；薄荷属本库回避中药，服用前核对成分表。",
   "note": "中成药大多由多味中药组成，难以逐一判定；凡含本库已列回避成分（黄连/金银花/牛黄/连翘/薄荷/冰片/熊胆/腊梅花/珍珠等）者，按国内口径回避。",
   "controversy": true,
   "sources": [
    "S1",
    "S3"
   ],
   "icon": "🌿",
   "use": "疏风散寒（风寒感冒）",
   "py": [
    "ganmaoqingrekeli",
    "ganmaoqingre",
    "ganmaoqingrechongji"
   ],
   "pyi": [
    "gmqrkl",
    "gmqr",
    "gmqrcj"
   ],
   "ingredients": [
    "荆芥穗",
    "薄荷",
    "防风",
    "柴胡",
    "紫苏叶",
    "葛根",
    "桔梗",
    "苦杏仁",
    "白芷",
    "苦地丁",
    "芦根"
   ],
   "debate": "中成药复方，成分含薄荷等本库禁用药材；请核对成分表。"
  },
  {
   "id": "jizhi",
   "name": "急支糖浆",
   "en": "Jizhi Tangjiang",
   "aliases": [
    "急支"
   ],
   "category": "tcm",
   "risk": "caution",
   "summary": "中成药（成分复杂），建议核对成分表并咨询医生。",
   "detail": "止咳化痰中成药，含鱼腥草、金荞麦、麻黄等，成分复杂，G6PD 患儿建议咨询医生。",
   "note": "中成药大多由多味中药组成，难以逐一判定；凡含本库已列回避成分（黄连/金银花/牛黄/连翘/薄荷/冰片/熊胆/腊梅花/珍珠等）者，按国内口径回避。",
   "controversy": true,
   "sources": [
    "S1",
    "S3"
   ],
   "icon": "🌿",
   "use": "清热化痰止咳（咳嗽）",
   "py": [
    "jizhitangjiang",
    "jizhi"
   ],
   "pyi": [
    "jztj",
    "jz"
   ]
  },
  {
   "id": "beibipingba",
   "name": "蜜炼川贝枇杷膏",
   "en": "Beibipingba Gao",
   "aliases": [
    "川贝枇杷膏",
    "枇杷膏"
   ],
   "category": "tcm",
   "risk": "info",
   "summary": "中成药（成分复杂），建议核对成分表并咨询医生。",
   "detail": "润肺止咳膏剂，成分复杂（多含川贝、枇杷叶、蜂蜜等），G6PD 患儿建议核对成分并咨询医生。",
   "note": "中成药大多由多味中药组成，难以逐一判定；凡含本库已列回避成分（黄连/金银花/牛黄/连翘/薄荷/冰片/熊胆/腊梅花/珍珠等）者，按国内口径回避。",
   "controversy": true,
   "sources": [
    "S1",
    "S3"
   ],
   "icon": "🌿",
   "use": "润肺化痰止咳",
   "py": [
    "milianchuanbeipipagao",
    "chuanbeipipagao",
    "pipagao"
   ],
   "pyi": [
    "mlcbppg",
    "cbppg",
    "ppg"
   ]
  },
  {
   "id": "kangbingdu",
   "name": "抗病毒口服液",
   "en": "Kangbingdu",
   "aliases": [
    "抗病毒",
    "抗病毒颗粒"
   ],
   "category": "tcm",
   "risk": "info",
   "summary": "中成药（成分复杂），建议核对成分表并咨询医生。",
   "detail": "清热解毒类中成药，成分复杂，G6PD 患儿建议咨询医生后使用。",
   "note": "中成药大多由多味中药组成，难以逐一判定；凡含本库已列回避成分（黄连/金银花/牛黄/连翘/薄荷/冰片/熊胆/腊梅花/珍珠等）者，按国内口径回避。",
   "controversy": true,
   "sources": [
    "S1",
    "S3"
   ],
   "icon": "🌿",
   "use": "清热祛湿（感冒、流感）",
   "py": [
    "kangbingdukoufuye",
    "kangbingdu",
    "kangbingdukeli"
   ],
   "pyi": [
    "kbdkfy",
    "kbd",
    "kbdkl"
   ],
   "ingredients": [
    "板蓝根",
    "石膏",
    "芦根",
    "生地黄",
    "郁金",
    "知母",
    "石菖蒲",
    "广藿香",
    "连翘"
   ],
   "debate": "中成药复方，成分含连翘等本库禁用药材；请核对成分表。"
  },
  {
   "id": "loratadine",
   "name": "氯雷他定",
   "en": "Loratadine",
   "aliases": [
    "开瑞坦",
    "克敏能"
   ],
   "category": "other_drug",
   "risk": "safe",
   "summary": "第二代抗组胺药。",
   "detail": "第二代抗组胺药，非 G6PD 诱发物，常规剂量一般可用。",
   "note": "证据说明：上述多为非经典 G6PD 诱发物；如合并其他疾病或多种用药，仍请遵医嘱。",
   "controversy": false,
   "sources": [
    "S2",
    "S7"
   ],
   "icon": "💊",
   "use": "抗组胺药（过敏性鼻炎、荨麻疹）",
   "py": [
    "lvleitading",
    "kairuitan",
    "keminneng"
   ],
   "pyi": [
    "lltd",
    "krt",
    "kmn"
   ]
  },
  {
   "id": "cetirizine",
   "name": "西替利嗪",
   "en": "Cetirizine",
   "aliases": [
    "仙特明",
    "迪皿"
   ],
   "category": "other_drug",
   "risk": "safe",
   "summary": "第二代抗组胺药。",
   "detail": "第二代抗组胺药，非 G6PD 诱发物，常规剂量一般可用。",
   "note": "证据说明：上述多为非经典 G6PD 诱发物；如合并其他疾病或多种用药，仍请遵医嘱。",
   "controversy": false,
   "sources": [
    "S2",
    "S7"
   ],
   "icon": "💊",
   "use": "抗组胺药（过敏性鼻炎、荨麻疹）",
   "py": [
    "xitiliqin",
    "xianteming",
    "dimin"
   ],
   "pyi": [
    "xtlq",
    "xtm",
    "dm"
   ]
  },
  {
   "id": "montelukast",
   "name": "孟鲁司特",
   "en": "Montelukast",
   "aliases": [
    "顺尔宁"
   ],
   "category": "other_drug",
   "risk": "safe",
   "summary": "白三烯受体拮抗剂（平喘/抗过敏）。",
   "detail": "白三烯受体拮抗剂（平喘/抗过敏），非 G6PD 诱发物，常规剂量一般可用。",
   "note": "证据说明：上述多为非经典 G6PD 诱发物；如合并其他疾病或多种用药，仍请遵医嘱。",
   "controversy": false,
   "sources": [
    "S2"
   ],
   "icon": "💊",
   "use": "白三烯受体拮抗剂（哮喘、过敏性鼻炎）",
   "py": [
    "menglusite",
    "shunerning"
   ],
   "pyi": [
    "mlst",
    "sen"
   ]
  },
  {
   "id": "ambroxol",
   "name": "氨溴索",
   "en": "Ambroxol",
   "aliases": [
    "沐舒坦",
    "盐酸氨溴索"
   ],
   "category": "other_drug",
   "risk": "safe",
   "summary": "祛痰药。",
   "detail": "祛痰药，非 G6PD 诱发物，常规剂量一般可用。",
   "note": "证据说明：上述多为非经典 G6PD 诱发物；如合并其他疾病或多种用药，仍请遵医嘱。",
   "controversy": false,
   "sources": [
    "S2",
    "S7"
   ],
   "icon": "💊",
   "use": "祛痰药（痰多黏稠）",
   "py": [
    "anxiusuo",
    "mushutan",
    "yansuananxiusuo"
   ],
   "pyi": [
    "axs",
    "mst",
    "ysaxs"
   ]
  },
  {
   "id": "yitanjing",
   "name": "易坦静",
   "en": "Yitanjing",
   "aliases": [
    "氨溴特罗",
    "氨溴特罗口服溶液"
   ],
   "category": "other_drug",
   "risk": "safe",
   "summary": "含氨溴索+克仑特罗的复方祛痰平喘口服液；两者均非已知 G6PD 诱发物。",
   "detail": "含氨溴索+克仑特罗的复方祛痰平喘口服液；两者均非已知 G6PD 诱发物，一般可用，按医嘱。",
   "note": "证据说明：上述多为非经典 G6PD 诱发物；如合并其他疾病或多种用药，仍请遵医嘱。",
   "controversy": false,
   "sources": [
    "S2"
   ],
   "icon": "💊",
   "use": "复方祛痰药（氨溴索+克仑特罗，儿童咳嗽痰多）",
   "py": [
    "yitanjing",
    "anxiuteluo",
    "anxiuteluokoufurongye"
   ],
   "pyi": [
    "ytj",
    "axtl",
    "axtlkfry"
   ]
  },
  {
   "id": "smecta",
   "name": "蒙脱石散",
   "en": "Smectite / Diosmectite",
   "aliases": [
    "思密达",
    "蒙脱石"
   ],
   "category": "other_drug",
   "risk": "safe",
   "summary": "止泻吸附剂。",
   "detail": "止泻吸附剂，不被吸收，非 G6PD 诱发物，腹泻时可按医嘱使用。",
   "note": "证据说明：上述多为非经典 G6PD 诱发物；如合并其他疾病或多种用药，仍请遵医嘱。",
   "controversy": false,
   "sources": [
    "S2"
   ],
   "icon": "💊",
   "use": "止泻、保护肠黏膜",
   "py": [
    "mengtuoshisan",
    "simida",
    "mengtuoshi"
   ],
   "pyi": [
    "mtss",
    "smd",
    "mts"
   ]
  },
  {
   "id": "mami",
   "name": "妈咪爱",
   "en": "Medilac-Vita",
   "aliases": [
    "枯草杆菌二联活菌",
    "益生菌颗粒"
   ],
   "category": "other_drug",
   "risk": "info",
   "summary": "益生菌制剂。",
   "detail": "益生菌制剂，非 G6PD 诱发物，一般可用。",
   "note": "证据有限/存在个别报道，需医生评估。",
   "controversy": false,
   "sources": [
    "S2"
   ],
   "icon": "💊",
   "use": "益生菌（调节肠道菌群，儿童）",
   "py": [
    "mamiai",
    "kucaoganjunerlianhuojun",
    "yishengjunkeli"
   ],
   "pyi": [
    "mma",
    "kcgjelhj",
    "ysjkl"
   ]
  },
  {
   "id": "probiotic",
   "name": "益生菌",
   "en": "Probiotics",
   "aliases": [
    "乳酸菌",
    "双歧杆菌",
    "合生元"
   ],
   "category": "other_drug",
   "risk": "info",
   "summary": "肠道微生态制剂。",
   "detail": "肠道微生态制剂，非 G6PD 诱发物，一般可用。",
   "note": "证据有限/存在个别报道，需医生评估。",
   "controversy": false,
   "sources": [
    "S2"
   ],
   "icon": "💊",
   "use": "调节肠道菌群",
   "py": [
    "yishengjun",
    "rusuanjun",
    "shuangqiganjun",
    "heshengyuan"
   ],
   "pyi": [
    "ysj",
    "rsj",
    "sqgj",
    "hsy"
   ]
  },
  {
   "id": "calciumglu",
   "name": "葡萄糖酸钙",
   "en": "Calcium gluconate",
   "aliases": [
    "钙",
    "葡萄糖钙"
   ],
   "category": "other_drug",
   "risk": "safe",
   "summary": "补钙/抗过敏辅助。",
   "detail": "补钙/抗过敏辅助，非 G6PD 诱发物，常规剂量一般可用。",
   "note": "证据说明：上述多为非经典 G6PD 诱发物；如合并其他疾病或多种用药，仍请遵医嘱。",
   "controversy": false,
   "sources": [
    "S2"
   ],
   "icon": "💊",
   "use": "补钙、抗过敏辅助",
   "py": [
    "putaotangsuangai",
    "gai",
    "putaotanggai"
   ],
   "pyi": [
    "pttsg",
    "g",
    "pttg"
   ]
  },
  {
   "id": "vitd",
   "name": "维生素D",
   "en": "Vitamin D",
   "aliases": [
    "维D",
    "星鲨",
    "D3"
   ],
   "category": "other_drug",
   "risk": "safe",
   "summary": "常规营养补充。",
   "detail": "常规营养补充，非 G6PD 诱发物，一般可用。",
   "note": "证据说明：上述多为非经典 G6PD 诱发物；如合并其他疾病或多种用药，仍请遵医嘱。",
   "controversy": false,
   "sources": [
    "S2"
   ],
   "icon": "💊",
   "use": "补充维生素D（促进钙吸收）",
   "py": [
    "weishengsu",
    "wei",
    "xingsha"
   ],
   "pyi": [
    "wss",
    "w",
    "xs"
   ]
  },
  {
   "id": "calpol",
   "name": "炉甘石",
   "en": "Calamine",
   "aliases": [
    "炉甘石洗剂"
   ],
   "category": "other_drug",
   "risk": "safe",
   "summary": "外用止痒收敛剂。",
   "detail": "外用止痒收敛剂，不被吸收，非 G6PD 诱发物，可安全外用。",
   "note": "证据说明：上述多为非经典 G6PD 诱发物；如合并其他疾病或多种用药，仍请遵医嘱。",
   "controversy": false,
   "sources": [
    "S2"
   ],
   "icon": "💊",
   "use": "外用止痒收敛（痱子、蚊虫叮咬）",
   "py": [
    "luganshi",
    "luganshixiji"
   ],
   "pyi": [
    "lgs",
    "lgsxj"
   ]
  },
  {
   "id": "zincoxide",
   "name": "氧化锌",
   "en": "Zinc oxide",
   "aliases": [
    "氧化锌软膏",
    "护臀霜"
   ],
   "category": "other_drug",
   "risk": "safe",
   "summary": "外用保护剂。",
   "detail": "外用保护剂，不被吸收，非 G6PD 诱发物，可安全外用。",
   "note": "证据说明：上述多为非经典 G6PD 诱发物；如合并其他疾病或多种用药，仍请遵医嘱。",
   "controversy": false,
   "sources": [
    "S2"
   ],
   "icon": "💊",
   "use": "外用收敛保护（尿布疹、皮肤）",
   "py": [
    "yanghuaxin",
    "yanghuaxinruangao",
    "hutunshuang"
   ],
   "pyi": [
    "yhx",
    "yhxrg",
    "hts"
   ]
  },
  {
   "id": "hydrocort",
   "name": "氢化可的松",
   "en": "Hydrocortisone",
   "aliases": [
    "氢化可的松乳膏"
   ],
   "category": "other_drug",
   "risk": "safe",
   "summary": "外用糖皮质激素。",
   "detail": "外用糖皮质激素，局部吸收少，非 G6PD 诱发物，可外用。",
   "note": "证据说明：上述多为非经典 G6PD 诱发物；如合并其他疾病或多种用药，仍请遵医嘱。",
   "controversy": false,
   "sources": [
    "S2",
    "S7"
   ],
   "icon": "💊",
   "use": "糖皮质激素（外用/口服，抗炎抗过敏）",
   "py": [
    "qinghuakedisong",
    "qinghuakedisongrugao"
   ],
   "pyi": [
    "qhkds",
    "qhkdsrg"
   ]
  },
  {
   "id": "mupirocin",
   "name": "莫匹罗星",
   "en": "Mupirocin",
   "aliases": [
    "百多邦"
   ],
   "category": "other_drug",
   "risk": "safe",
   "summary": "外用抗生素（针对革兰氏阳性菌）。",
   "detail": "外用抗生素（针对革兰氏阳性菌），不被吸收，非 G6PD 诱发物，可安全外用。",
   "note": "证据说明：上述多为非经典 G6PD 诱发物；如合并其他疾病或多种用药，仍请遵医嘱。",
   "controversy": false,
   "sources": [
    "S2"
   ],
   "icon": "💊",
   "use": "外用抗菌（皮肤感染）",
   "py": [
    "mopiluoxing",
    "baiduobang"
   ],
   "pyi": [
    "mplx",
    "bdb"
   ]
  },
  {
   "id": "iodophor",
   "name": "碘伏",
   "en": "Povidone-iodine",
   "aliases": [
    "碘伏消毒液",
    "安尔碘"
   ],
   "category": "other_drug",
   "risk": "safe",
   "summary": "外用消毒剂。",
   "detail": "外用消毒剂，皮肤黏膜消毒，非 G6PD 诱发物，可安全外用。",
   "note": "证据说明：上述多为非经典 G6PD 诱发物；如合并其他疾病或多种用药，仍请遵医嘱。",
   "controversy": false,
   "sources": [
    "S2"
   ],
   "icon": "🧴",
   "use": "外用消毒",
   "py": [
    "dianfu",
    "dianfuxiaoduye",
    "anerdian"
   ],
   "pyi": [
    "df",
    "dfxdy",
    "aed"
   ]
  },
  {
   "id": "alcohol",
   "name": "酒精",
   "en": "Ethanol / Alcohol",
   "aliases": [
    "乙醇",
    "75%酒精",
    "医用酒精"
   ],
   "category": "other_drug",
   "risk": "info",
   "summary": "外用消毒剂。",
   "detail": "外用消毒剂，不被吸收，非 G6PD 诱发物，可用于皮肤消毒。",
   "note": "证据有限/存在个别报道，需医生评估。",
   "controversy": false,
   "sources": [
    "S2"
   ],
   "icon": "🧴",
   "use": "外用消毒、溶剂",
   "py": [
    "jiujing",
    "yichun",
    "yiyongjiujing"
   ],
   "pyi": [
    "jj",
    "yc",
    "yyjj"
   ]
  },
  {
   "id": "miconazole",
   "name": "达克宁",
   "en": "Miconazole",
   "aliases": [
    "咪康唑",
    "硝酸咪康唑"
   ],
   "category": "other_drug",
   "risk": "safe",
   "summary": "外用抗真菌药（脚气/股癣）。",
   "detail": "外用抗真菌药（脚气/股癣），局部吸收少，非 G6PD 诱发物，可安全外用。",
   "note": "证据说明：上述多为非经典 G6PD 诱发物；如合并其他疾病或多种用药，仍请遵医嘱。",
   "controversy": false,
   "sources": [
    "S2",
    "S7"
   ],
   "icon": "💊",
   "use": "抗真菌外用（咪康唑，皮肤/妇科）",
   "py": [
    "dakening",
    "mikangzuo",
    "xiaosuanmikangzuo"
   ],
   "pyi": [
    "dkn",
    "mkz",
    "xsmkz"
   ]
  },
  {
   "id": "ceftriaxone",
   "name": "头孢曲松",
   "en": "Ceftriaxone",
   "aliases": [
    "罗氏芬",
    "头孢三嗪"
   ],
   "category": "other_drug",
   "risk": "safe",
   "summary": "第三代头孢菌素。",
   "detail": "第三代头孢菌素，非 G6PD 诱发物，常规剂量一般可用（与青霉素类一致）。",
   "note": "证据说明：上述多为非经典 G6PD 诱发物；如合并其他疾病或多种用药，仍请遵医嘱。",
   "controversy": false,
   "sources": [
    "S2",
    "S7"
   ],
   "icon": "💊",
   "use": "三代头孢（重症感染）",
   "py": [
    "toubaoqusong",
    "luoshifen",
    "toubaosanqin"
   ],
   "pyi": [
    "tbqs",
    "lsf",
    "tbsq"
   ]
  },
  {
   "id": "salbutamol",
   "name": "沙丁胺醇",
   "en": "Salbutamol",
   "aliases": [
    "舒喘灵",
    "万托林"
   ],
   "category": "other_drug",
   "risk": "info",
   "summary": "β2 受体激动剂（平喘）。",
   "detail": "β2 受体激动剂（平喘），非 G6PD 诱发物，喘息时按医嘱使用。",
   "note": "证据有限/存在个别报道，需医生评估。",
   "controversy": false,
   "sources": [
    "S2",
    "S7"
   ],
   "icon": "💊",
   "use": "β2 激动剂（哮喘、喘息急救）",
   "py": [
    "shadinganchun",
    "shuchuanling",
    "wantuolin"
   ],
   "pyi": [
    "sdac",
    "scl",
    "wtl"
   ]
  },
  {
   "id": "budesonide",
   "name": "布地奈德",
   "en": "Budesonide",
   "aliases": [
    "普米克",
    "雷诺考特"
   ],
   "category": "other_drug",
   "risk": "info",
   "summary": "吸入/鼻用糖皮质激素（平喘/鼻炎）。",
   "detail": "吸入/鼻用糖皮质激素（平喘/鼻炎），局部作用，非 G6PD 诱发物，按医嘱使用。",
   "note": "证据有限/存在个别报道，需医生评估。",
   "controversy": false,
   "sources": [
    "S2",
    "S7"
   ],
   "icon": "💊",
   "use": "吸入糖皮质激素（哮喘、鼻炎）",
   "py": [
    "budinaide",
    "pumike",
    "leinuokaote"
   ],
   "pyi": [
    "bdnd",
    "pmk",
    "lnkt"
   ]
  },
  {
   "id": "gentamicin",
   "name": "庆大霉素",
   "en": "Gentamicin",
   "aliases": [
    "硫酸庆大霉素"
   ],
   "category": "other_drug",
   "risk": "safe",
   "summary": "属于氨基糖苷类抗生素，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，常规情况下可用。",
   "detail": "国内外权威指南（台大医院、安徽省卫健委等）均未将其列为 G6PD 溶血风险药物；具体用药仍遵医嘱，并主动告知蚕豆病史。氨基糖苷类（庆大/阿米卡星/链霉素等）均不在 G6PD 禁忌名单。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S2",
    "S7"
   ],
   "icon": "💊",
   "use": "氨基糖苷类（感染、肠道）",
   "py": [
    "qingdameisu",
    "liusuanqingdameisu"
   ],
   "pyi": [
    "qdms",
    "lsqdms"
   ]
  },
  {
   "id": "changning",
   "name": "肠炎宁",
   "en": "Changning",
   "aliases": [
    "肠炎宁糖浆",
    "肠炎宁片"
   ],
   "category": "tcm",
   "risk": "caution",
   "summary": "中成药（成分复杂），建议核对成分表并咨询医生。",
   "detail": "常用于腹泻的中成药，成分复杂（多含地锦草、黄毛耳草等），G6PD 患儿建议咨询医生后使用。",
   "note": "中成药多由多味中药组成，凡含本库已列回避成分者按国内口径回避。",
   "controversy": true,
   "sources": [
    "S1",
    "S3"
   ],
   "icon": "🌿",
   "use": "清热利湿（腹泻、肠炎）",
   "py": [
    "changyanning",
    "changyanningtangjiang",
    "changyanningpian"
   ],
   "pyi": [
    "cyn",
    "cyntj",
    "cynp"
   ]
  },
  {
   "id": "jianwei",
   "name": "健胃消食片",
   "en": "Jianwei Xiaoshi",
   "aliases": [
    "健胃消食",
    "江中健胃消食片"
   ],
   "category": "tcm",
   "risk": "info",
   "summary": "健胃类中成药，成分相对温和，仍建议核对成分。",
   "detail": "含太子参、陈皮、山药、炒麦芽、山楂等，成分相对温和；G6PD 患儿如要使用建议核对成分并咨询医生。",
   "note": "中成药成分复杂，凡含本库已列回避成分者按国内口径回避。",
   "controversy": true,
   "sources": [
    "S1",
    "S3"
   ],
   "icon": "🌿",
   "use": "健胃消食（消化不良）",
   "py": [
    "jianweixiaoshipian",
    "jianweixiaoshi",
    "jiangzhongjianweixiaoshipian"
   ],
   "pyi": [
    "jwxsp",
    "jwxs",
    "jzjwxsp"
   ]
  },
  {
   "id": "xiaoerfeike",
   "name": "小儿肺咳颗粒",
   "en": "Xiao'er Feike",
   "aliases": [
    "小儿肺咳"
   ],
   "category": "tcm",
   "risk": "caution",
   "summary": "儿科止咳中成药（成分复杂），建议核对成分表。",
   "detail": "含北沙参、茯苓、黄芩、百部、枇杷叶等多味中药，成分复杂，G6PD 患儿建议核对成分并咨询医生。",
   "note": "中成药多由多味中药组成，凡含本库已列回避成分者按国内口径回避。",
   "controversy": true,
   "sources": [
    "S1",
    "S3"
   ],
   "icon": "🌿",
   "use": "健脾止咳（小儿咳嗽）",
   "py": [
    "xiaoerfeikekeli",
    "xiaoerfeike"
   ],
   "pyi": [
    "xefkkl",
    "xefk"
   ]
  },
  {
   "name": "双氯芬酸",
   "en": "Diclofenac",
   "risk": "caution",
   "category": "analgesic",
   "aliases": [
    "扶他林",
    "戴芬",
    "英太青"
   ],
   "summary": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用。",
   "detail": "NSAID 类解热镇痛药。虽然不像阿司匹林那样是明确禁忌，但个别病例报告与溶血相关，且蚕豆病急性期、发热或感染时应避免使用；不建议自行服用，需医生评估。",
   "controversy": false,
   "sources": [
    "S4",
    "S7"
   ],
   "id": "双氯芬酸",
   "note": "",
   "icon": "💊",
   "use": "抗炎镇痛（关节痛、肌肉痛、痛经、外伤痛）",
   "py": [
    "shuanglvfensuan",
    "futalin",
    "daifen",
    "yingtaiqing"
   ],
   "pyi": [
    "slfs",
    "ftl",
    "df",
    "ytq"
   ]
  },
  {
   "name": "洛索洛芬",
   "en": "Loxoprofen",
   "risk": "caution",
   "category": "analgesic",
   "aliases": [
    "乐松"
   ],
   "summary": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用。",
   "detail": "NSAID 类解热镇痛药。虽然不像阿司匹林那样是明确禁忌，但个别病例报告与溶血相关，且蚕豆病急性期、发热或感染时应避免使用；不建议自行服用，需医生评估。",
   "controversy": false,
   "sources": [
    "S4",
    "S7"
   ],
   "id": "洛索洛芬",
   "note": "",
   "icon": "💊",
   "use": "抗炎镇痛（关节炎、腰痛、术后痛）",
   "py": [
    "luosuoluofen",
    "lesong"
   ],
   "pyi": [
    "lslf",
    "ls"
   ]
  },
  {
   "name": "萘普生",
   "en": "Naproxen",
   "risk": "caution",
   "category": "analgesic",
   "aliases": [
    "萘普生钠"
   ],
   "summary": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用。",
   "detail": "NSAID 类解热镇痛药。虽然不像阿司匹林那样是明确禁忌，但个别病例报告与溶血相关，且蚕豆病急性期、发热或感染时应避免使用；不建议自行服用，需医生评估。",
   "controversy": false,
   "sources": [
    "S4",
    "S7"
   ],
   "id": "萘普生",
   "note": "",
   "icon": "⚪",
   "use": "抗炎镇痛（关节炎、痛经、头痛）",
   "py": [
    "naipusheng",
    "naipushengna"
   ],
   "pyi": [
    "nps",
    "npsn"
   ]
  },
  {
   "name": "美洛昔康",
   "en": "Meloxicam",
   "risk": "caution",
   "category": "analgesic",
   "aliases": [
    "莫比可"
   ],
   "summary": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用。",
   "detail": "NSAID 类解热镇痛药。虽然不像阿司匹林那样是明确禁忌，但个别病例报告与溶血相关，且蚕豆病急性期、发热或感染时应避免使用；不建议自行服用，需医生评估。",
   "controversy": false,
   "sources": [
    "S4",
    "S7"
   ],
   "id": "美洛昔康",
   "note": "",
   "icon": "💊",
   "use": "抗炎镇痛（骨关节炎、类风湿）",
   "py": [
    "meiluoxikang",
    "mobike"
   ],
   "pyi": [
    "mlxk",
    "mbk"
   ]
  },
  {
   "name": "塞来昔布",
   "en": "Celecoxib",
   "risk": "caution",
   "category": "analgesic",
   "aliases": [
    "西乐葆"
   ],
   "summary": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用。",
   "detail": "NSAID 类解热镇痛药。虽然不像阿司匹林那样是明确禁忌，但个别病例报告与溶血相关，且蚕豆病急性期、发热或感染时应避免使用；不建议自行服用，需医生评估。",
   "controversy": false,
   "sources": [
    "S4",
    "S7"
   ],
   "id": "塞来昔布",
   "note": "",
   "icon": "💊",
   "use": "抗炎镇痛（关节炎，胃肠道刺激相对较小）",
   "py": [
    "sailaixibu",
    "xiyuebao"
   ],
   "pyi": [
    "slxb",
    "xyb"
   ]
  },
  {
   "name": "吲哚美辛",
   "en": "Indometacin",
   "risk": "caution",
   "category": "analgesic",
   "aliases": [
    "消炎痛"
   ],
   "summary": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用。",
   "detail": "NSAID 类解热镇痛药。虽然不像阿司匹林那样是明确禁忌，但个别病例报告与溶血相关，且蚕豆病急性期、发热或感染时应避免使用；不建议自行服用，需医生评估。",
   "controversy": false,
   "sources": [
    "S4",
    "S7"
   ],
   "id": "吲哚美辛",
   "note": "",
   "icon": "💊",
   "use": "强效抗炎镇痛（关节炎、痛风）",
   "py": [
    "yinduomeixin",
    "xiaoyantong"
   ],
   "pyi": [
    "ydmx",
    "xyt"
   ]
  },
  {
   "name": "依托考昔",
   "en": "Etoricoxib",
   "risk": "caution",
   "category": "analgesic",
   "aliases": [
    "安康信"
   ],
   "summary": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用。",
   "detail": "NSAID 类解热镇痛药。虽然不像阿司匹林那样是明确禁忌，但个别病例报告与溶血相关，且蚕豆病急性期、发热或感染时应避免使用；不建议自行服用，需医生评估。",
   "controversy": false,
   "sources": [
    "S4",
    "S7"
   ],
   "id": "依托考昔",
   "note": "",
   "icon": "💊",
   "use": "抗炎镇痛（关节炎、急性痛风）",
   "py": [
    "yituokaoxi",
    "ankangxin"
   ],
   "pyi": [
    "ytkx",
    "akx"
   ]
  },
  {
   "name": "氟比洛芬",
   "en": "Flurbiprofen",
   "risk": "caution",
   "category": "analgesic",
   "aliases": [
    "氟比洛芬酯"
   ],
   "summary": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用。",
   "detail": "NSAID 类解热镇痛药。虽然不像阿司匹林那样是明确禁忌，但个别病例报告与溶血相关，且蚕豆病急性期、发热或感染时应避免使用；不建议自行服用，需医生评估。",
   "controversy": false,
   "sources": [
    "S4",
    "S7"
   ],
   "id": "氟比洛芬",
   "note": "",
   "icon": "💊",
   "use": "抗炎镇痛（关节炎、术后/外伤痛）",
   "py": [
    "fubiluofen",
    "fubiluofenzhi"
   ],
   "pyi": [
    "fblf",
    "fblfz"
   ]
  },
  {
   "name": "哌拉西林他唑巴坦",
   "en": "Piperacillin/Tazobactam",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "特治星"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "哌拉西林他唑巴坦",
   "note": "",
   "icon": "💊",
   "use": "广谱青霉素复合制剂（重症感染）",
   "py": [
    "pailaxilintazuobatan",
    "tezhixing"
   ],
   "pyi": [
    "plxltzbt",
    "tzx"
   ]
  },
  {
   "name": "青霉素V",
   "en": "Phenoxymethylpenicillin",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "青霉素Ⅴ钾"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "青霉素V",
   "note": "",
   "icon": "💊",
   "use": "青霉素类（轻中度细菌感染）",
   "py": [
    "qingmeisu",
    "qingmeisujia"
   ],
   "pyi": [
    "qms",
    "qmsj"
   ]
  },
  {
   "name": "头孢克肟",
   "en": "Cefixime",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "世福素",
    "立克舒"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "头孢克肟",
   "note": "",
   "icon": "💊",
   "use": "三代头孢（呼吸道、尿路感染）",
   "py": [
    "toubaokewo",
    "shifusu",
    "likeshu"
   ],
   "pyi": [
    "tbkw",
    "sfs",
    "lks"
   ]
  },
  {
   "name": "头孢拉定",
   "en": "Cefradine",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "泛捷复",
    "先锋Ⅵ"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "头孢拉定",
   "note": "",
   "icon": "💊",
   "use": "一代头孢（呼吸道、皮肤感染）",
   "py": [
    "toubaolading",
    "fanjiefu",
    "xianfeng"
   ],
   "pyi": [
    "tbld",
    "fjf",
    "xf"
   ]
  },
  {
   "name": "头孢氨苄",
   "en": "Cefalexin",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "先锋Ⅳ",
    "头孢Ⅳ号"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "头孢氨苄",
   "note": "",
   "icon": "💊",
   "use": "一代头孢（呼吸道、尿路、皮肤感染）",
   "py": [
    "toubaoanbian",
    "xianfeng",
    "toubaohao"
   ],
   "pyi": [
    "tbab",
    "xf",
    "tbh"
   ]
  },
  {
   "name": "头孢他啶",
   "en": "Ceftazidime",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "复达欣",
    "凯复定"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "头孢他啶",
   "note": "",
   "icon": "💊",
   "use": "三代头孢（重症、院内感染）",
   "py": [
    "toubaotading",
    "fudaxin",
    "kaifuding"
   ],
   "pyi": [
    "tbtd",
    "fdx",
    "kfd"
   ]
  },
  {
   "name": "头孢哌酮舒巴坦",
   "en": "Cefoperazone/Sulbactam",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "舒普深"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "头孢哌酮舒巴坦",
   "note": "",
   "icon": "💊",
   "use": "三代头孢复合制剂（重症感染）",
   "py": [
    "toubaopaitongshubatan",
    "shupushen"
   ],
   "pyi": [
    "tbptsbt",
    "sps"
   ]
  },
  {
   "name": "罗红霉素",
   "en": "Roxithromycin",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "罗力得"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "罗红霉素",
   "note": "",
   "icon": "💊",
   "use": "大环内酯类（呼吸道、支原体感染）",
   "py": [
    "luohongmeisu",
    "luolide"
   ],
   "pyi": [
    "lhms",
    "lld"
   ]
  },
  {
   "name": "阿米卡星",
   "en": "Amikacin",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "丁胺卡那霉素"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "阿米卡星",
   "note": "",
   "icon": "💊",
   "use": "氨基糖苷类抗生素（重症感染）",
   "py": [
    "amikaxing",
    "dingankanameisu"
   ],
   "pyi": [
    "amkx",
    "daknms"
   ]
  },
  {
   "name": "妥布霉素",
   "en": "Tobramycin",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "托百士(眼用)"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "妥布霉素",
   "note": "",
   "icon": "💊",
   "use": "氨基糖苷类（重症感染、滴眼）",
   "py": [
    "tuobumeisu",
    "tuobaishiyanyong"
   ],
   "pyi": [
    "tbms",
    "tbsyy"
   ]
  },
  {
   "name": "链霉素",
   "en": "Streptomycin",
   "risk": "caution",
   "category": "antibiotic_other",
   "aliases": [],
   "summary": "属于氨基糖苷类抗生素。G6PD 缺乏者使用存在个别溶血报告或证据有限，出于安全建议谨慎使用（非绝对禁用）。",
   "detail": "链霉素是氨基糖苷类抗生素。好大夫、科普中国等资料将其列为 G6PD 慎用（偶见溶血报告）；同类的庆大霉素等多数氨基糖苷类未见明确禁忌。",
   "controversy": true,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "链霉素",
   "note": "需在医生监护下使用，用药期间留意尿色变深、皮肤/眼睛发黄等溶血迹象。",
   "icon": "💊",
   "use": "氨基糖苷类（结核、鼠疫等）",
   "py": [
    "lianmeisu"
   ],
   "pyi": [
    "lms"
   ],
   "debate": "仅有零散个案或证据有限，并非绝对禁用；本库取保守口径，用前请医生评估。"
  },
  {
   "name": "多西环素",
   "en": "Doxycycline",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "强力霉素",
    "多西环素"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "多西环素",
   "note": "",
   "icon": "💊",
   "use": "四环素类（支原体、衣原体、痤疮）",
   "py": [
    "duoxihuansu",
    "qianglimeisu"
   ],
   "pyi": [
    "dxhs",
    "qlms"
   ]
  },
  {
   "name": "米诺环素",
   "en": "Minocycline",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "美满霉素"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "米诺环素",
   "note": "",
   "icon": "💊",
   "use": "四环素类（痤疮、支原体感染）",
   "py": [
    "minuohuansu",
    "meimanmeisu"
   ],
   "pyi": [
    "mnhs",
    "mmms"
   ]
  },
  {
   "name": "四环素",
   "en": "Tetracycline",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "四环素",
   "note": "",
   "icon": "💊",
   "use": "四环素类（支原体、衣原体感染）",
   "py": [
    "sihuansu"
   ],
   "pyi": [
    "shs"
   ]
  },
  {
   "name": "克林霉素",
   "en": "Clindamycin",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "氯洁霉素",
    "克林霉素磷酸酯"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "克林霉素",
   "note": "",
   "icon": "💊",
   "use": "林可胺类（厌氧菌、皮肤/骨感染）",
   "py": [
    "kelinmeisu",
    "lvjiemeisu",
    "kelinmeisulinsuanzhi"
   ],
   "pyi": [
    "klms",
    "ljms",
    "klmslsz"
   ]
  },
  {
   "name": "万古霉素",
   "en": "Vancomycin",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "稳可信"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "万古霉素",
   "note": "",
   "icon": "💊",
   "use": "糖肽类（耐药革兰阳性菌重症感染）",
   "py": [
    "wangumeisu",
    "wenkexin"
   ],
   "pyi": [
    "wgms",
    "wkx"
   ]
  },
  {
   "name": "利奈唑胺",
   "en": "Linezolid",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "斯沃"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "利奈唑胺",
   "note": "",
   "icon": "💊",
   "use": "噁唑烷酮类（耐药革兰阳性菌感染）",
   "py": [
    "linaizuoan",
    "siwo"
   ],
   "pyi": [
    "lnza",
    "sw"
   ]
  },
  {
   "name": "替考拉宁",
   "en": "Teicoplanin",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "他格适"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "替考拉宁",
   "note": "",
   "icon": "💊",
   "use": "糖肽类（革兰阳性菌感染）",
   "py": [
    "tikaolaning",
    "tageshi"
   ],
   "pyi": [
    "tkln",
    "tgs"
   ]
  },
  {
   "name": "奥司他韦",
   "en": "Oseltamivir",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "达菲",
    "可威"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "奥司他韦",
   "note": "",
   "icon": "💊",
   "use": "抗流感病毒药（甲型/乙型流感）",
   "py": [
    "aositawei",
    "dafei",
    "kewei"
   ],
   "pyi": [
    "astw",
    "df",
    "kw"
   ]
  },
  {
   "name": "阿昔洛韦",
   "en": "Acyclovir",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "无环鸟苷",
    "舒维疗"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "阿昔洛韦",
   "note": "",
   "icon": "💊",
   "use": "抗疱疹病毒（疱疹、水痘）",
   "py": [
    "axiluowei",
    "wuhuanniaogan",
    "shuweiliao"
   ],
   "pyi": [
    "axlw",
    "whng",
    "swl"
   ]
  },
  {
   "name": "伐昔洛韦",
   "en": "Valacyclovir",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "维德思"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "伐昔洛韦",
   "note": "",
   "icon": "💊",
   "use": "抗疱疹病毒（带状疱疹、生殖器疱疹）",
   "py": [
    "faxiluowei",
    "weidesi"
   ],
   "pyi": [
    "fxlw",
    "wds"
   ]
  },
  {
   "name": "更昔洛韦",
   "en": "Ganciclovir",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "赛美维"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "更昔洛韦",
   "note": "",
   "icon": "💊",
   "use": "抗巨细胞病毒",
   "py": [
    "gengxiluowei",
    "saimeiwei"
   ],
   "pyi": [
    "gxlw",
    "smw"
   ]
  },
  {
   "name": "泛昔洛韦",
   "en": "Famciclovir",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "泛昔洛韦",
   "note": "",
   "icon": "💊",
   "use": "抗疱疹病毒",
   "py": [
    "fanxiluowei"
   ],
   "pyi": [
    "fxlw"
   ]
  },
  {
   "name": "利巴韦林",
   "en": "Ribavirin",
   "risk": "caution",
   "category": "antibiotic_other",
   "aliases": [
    "病毒唑"
   ],
   "summary": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用。",
   "detail": "利巴韦林有诱发溶血的报道（尤其大剂量或特定人群），且具明确致畸性；蚕豆病者应避免使用，必须使用时由医生严格评估并监测。",
   "controversy": false,
   "sources": [
    "S4",
    "S7"
   ],
   "id": "利巴韦林",
   "note": "",
   "icon": "💊",
   "use": "广谱抗病毒（呼吸道合胞病毒等）",
   "py": [
    "libaweilin",
    "bingduzuo"
   ],
   "pyi": [
    "lbwl",
    "bdz"
   ]
  },
  {
   "name": "氟康唑",
   "en": "Fluconazole",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "大扶康",
    "三联"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "氟康唑",
   "note": "",
   "icon": "💊",
   "use": "抗真菌药（念珠菌、隐球菌）",
   "py": [
    "fukangzuo",
    "dafukang",
    "sanlian"
   ],
   "pyi": [
    "fkz",
    "dfk",
    "sl"
   ]
  },
  {
   "name": "伊曲康唑",
   "en": "Itraconazole",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "斯皮仁诺"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "伊曲康唑",
   "note": "",
   "icon": "💊",
   "use": "抗真菌药（皮肤/甲真菌、系统性真菌感染）",
   "py": [
    "yiqukangzuo",
    "sipirennuo"
   ],
   "pyi": [
    "yqkz",
    "sprn"
   ]
  },
  {
   "name": "酮康唑",
   "en": "Ketoconazole",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "里素劳"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "酮康唑",
   "note": "",
   "icon": "💊",
   "use": "抗真菌药（外用/口服，口服受肝毒性限制）",
   "py": [
    "tongkangzuo",
    "lisulao"
   ],
   "pyi": [
    "tkz",
    "lsl"
   ]
  },
  {
   "name": "制霉菌素",
   "en": "Nystatin",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "制霉素"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "制霉菌素",
   "note": "",
   "icon": "💊",
   "use": "抗真菌药（口腔、肠道念珠菌）",
   "py": [
    "zhimeijunsu",
    "zhimeisu"
   ],
   "pyi": [
    "zmjs",
    "zms"
   ]
  },
  {
   "name": "特比萘芬",
   "en": "Terbinafine",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "兰美抒",
    "疗霉舒"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "特比萘芬",
   "note": "",
   "icon": "⚪",
   "use": "抗真菌药（皮肤癣、甲癣）",
   "py": [
    "tebinaifen",
    "lanmeishu",
    "liaomeishu"
   ],
   "pyi": [
    "tbnf",
    "lms"
   ]
  },
  {
   "name": "克霉唑",
   "en": "Clotrimazole",
   "risk": "safe",
   "category": "antibiotic_other",
   "aliases": [
    "克霉唑阴道片"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "克霉唑",
   "note": "",
   "icon": "💊",
   "use": "抗真菌药（外用，皮肤/妇科念珠菌）",
   "py": [
    "kemeizuo",
    "kemeizuoyindaopian"
   ],
   "pyi": [
    "kmz",
    "kmzydp"
   ]
  },
  {
   "name": "氯苯那敏",
   "en": "Chlorphenamine",
   "risk": "safe",
   "category": "neuro",
   "aliases": [
    "扑尔敏",
    "马来酸氯苯那敏",
    "马来酸氯苯那敏片"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "氯苯那敏",
   "note": "",
   "icon": "💊",
   "use": "抗组胺药（过敏、感冒流涕）",
   "py": [
    "lvbennamin",
    "puermin",
    "malaisuanlvbennamin",
    "malaisuanlvbennaminpian"
   ],
   "pyi": [
    "lbnm",
    "pem",
    "mlslbnm",
    "mlslbnmp"
   ]
  },
  {
   "name": "地氯雷他定",
   "en": "Desloratadine",
   "risk": "safe",
   "category": "neuro",
   "aliases": [
    "恩理思",
    "芙必叮"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "地氯雷他定",
   "note": "",
   "icon": "💊",
   "use": "抗组胺药（过敏性鼻炎、荨麻疹）",
   "py": [
    "dilvleitading",
    "enlisi",
    "fubiding"
   ],
   "pyi": [
    "dlltd",
    "els",
    "fbd"
   ]
  },
  {
   "name": "非索非那定",
   "en": "Fexofenadine",
   "risk": "safe",
   "category": "neuro",
   "aliases": [
    "阿乐迈",
    "毕研通"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "非索非那定",
   "note": "",
   "icon": "💊",
   "use": "抗组胺药（过敏性鼻炎、荨麻疹）",
   "py": [
    "feisuofeinading",
    "alemai",
    "biyantong"
   ],
   "pyi": [
    "fsfnd",
    "alm",
    "byt"
   ]
  },
  {
   "name": "依巴斯汀",
   "en": "Ebastine",
   "risk": "safe",
   "category": "neuro",
   "aliases": [
    "开思亭"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "依巴斯汀",
   "note": "",
   "icon": "💊",
   "use": "抗组胺药（过敏性鼻炎、荨麻疹）",
   "py": [
    "yibasiting",
    "kaisiting"
   ],
   "pyi": [
    "ybst",
    "kst"
   ]
  },
  {
   "name": "咪唑斯汀",
   "en": "Mizolastine",
   "risk": "safe",
   "category": "neuro",
   "aliases": [
    "皿治林"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "咪唑斯汀",
   "note": "",
   "icon": "💊",
   "use": "抗组胺药（过敏性鼻炎、荨麻疹）",
   "py": [
    "mizuositing",
    "minzhilin"
   ],
   "pyi": [
    "mzst",
    "mzl"
   ]
  },
  {
   "name": "赛庚啶",
   "en": "Cyproheptadine",
   "risk": "safe",
   "category": "neuro",
   "aliases": [
    "赛庚啶片"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "赛庚啶",
   "note": "",
   "icon": "💊",
   "use": "抗组胺药（过敏，也可增进食欲）",
   "py": [
    "saigengding",
    "saigengdingpian"
   ],
   "pyi": [
    "sgd",
    "sgdp"
   ]
  },
  {
   "name": "异丙嗪",
   "en": "Promethazine",
   "risk": "safe",
   "category": "neuro",
   "aliases": [
    "非那根"
   ],
   "summary": "属于抗组胺/止吐药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，常规情况下可用。",
   "detail": "国内外权威指南（台大医院、安徽省卫健委等）均未将其列为 G6PD 溶血风险药物；具体用药仍遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S4",
    "S7"
   ],
   "id": "异丙嗪",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿等溶血迹象，异常及时就医。",
   "icon": "💊",
   "use": "抗组胺/镇静药（过敏、晕动、术前）",
   "py": [
    "yibingqin",
    "feinagen"
   ],
   "pyi": [
    "ybq",
    "fng"
   ]
  },
  {
   "name": "氨茶碱",
   "en": "Aminophylline",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "茶碱缓释片(同族)"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "氨茶碱",
   "note": "",
   "icon": "💊",
   "use": "支气管扩张药（哮喘、慢阻肺）",
   "py": [
    "anchajian",
    "chajianhuanshipiantongzu"
   ],
   "pyi": [
    "acj",
    "cjhsptz"
   ]
  },
  {
   "name": "茶碱",
   "en": "Theophylline",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "茶碱",
   "note": "",
   "icon": "💊",
   "use": "支气管扩张药（哮喘、慢阻肺）",
   "py": [
    "chajian"
   ],
   "pyi": [
    "cj"
   ]
  },
  {
   "name": "乙酰半胱氨酸",
   "en": "Acetylcysteine",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "痰易净",
    "富露施"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "乙酰半胱氨酸",
   "note": "",
   "icon": "💊",
   "use": "祛痰、解毒（痰液溶解；对乙酰氨基酚中毒）",
   "py": [
    "yixianbanguangansuan",
    "tanyijing",
    "fulushi"
   ],
   "pyi": [
    "yxbgas",
    "tyj",
    "fls"
   ]
  },
  {
   "name": "右美沙芬",
   "en": "Dextromethorphan",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "氢溴酸右美沙芬",
    "美可糖浆"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "右美沙芬",
   "note": "",
   "icon": "💊",
   "use": "中枢镇咳药（干咳）",
   "py": [
    "youmeishafen",
    "qingxiusuanyoumeishafen",
    "meiketangjiang"
   ],
   "pyi": [
    "ymsf",
    "qxsymsf",
    "mktj"
   ]
  },
  {
   "name": "异丙托溴铵",
   "en": "Ipratropium",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "爱全乐"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "异丙托溴铵",
   "note": "",
   "icon": "💊",
   "use": "抗胆碱支气管扩张药（哮喘、慢阻肺）",
   "py": [
    "yibingtuoxiuan",
    "aiquanle"
   ],
   "pyi": [
    "ybtxa",
    "aql"
   ]
  },
  {
   "name": "噻托溴铵",
   "en": "Tiotropium",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "思力华"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "噻托溴铵",
   "note": "",
   "icon": "💊",
   "use": "长效抗胆碱药（慢阻肺）",
   "py": [
    "saituoxiuan",
    "silihua"
   ],
   "pyi": [
    "stxa",
    "slh"
   ]
  },
  {
   "name": "倍氯米松",
   "en": "Beclometasone",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "必可酮",
    "伯克纳"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "倍氯米松",
   "note": "",
   "icon": "💊",
   "use": "吸入糖皮质激素（哮喘）",
   "py": [
    "beilvmisong",
    "biketong",
    "bokena"
   ],
   "pyi": [
    "blms",
    "bkt",
    "bkn"
   ]
  },
  {
   "name": "氟替卡松",
   "en": "Fluticasone",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "辅舒酮",
    "辅舒良"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "氟替卡松",
   "note": "",
   "icon": "💊",
   "use": "吸入/鼻用糖皮质激素（哮喘、鼻炎）",
   "py": [
    "futikasong",
    "fushutong",
    "fushuliang"
   ],
   "pyi": [
    "ftks",
    "fst",
    "fsl"
   ]
  },
  {
   "name": "沙美特罗",
   "en": "Salmeterol",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "舒利迭(合用)"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "沙美特罗",
   "note": "",
   "icon": "💊",
   "use": "长效β2激动剂（哮喘、慢阻肺）",
   "py": [
    "shameiteluo",
    "shulidieheyong"
   ],
   "pyi": [
    "smtl",
    "sldhy"
   ]
  },
  {
   "name": "复方甘草片",
   "en": "Compound Liquorice Tablets",
   "risk": "caution",
   "category": "other_drug",
   "aliases": [
    "复方甘草合剂"
   ],
   "summary": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用。",
   "detail": "含甘草流浸膏、阿片粉及樟脑等成分，复方制剂成分复杂；虽非典型氧化性诱发物，但蚕豆病者建议慎用或改用单一成分止咳药，并咨询药师。",
   "controversy": false,
   "sources": [
    "S4",
    "S7"
   ],
   "id": "复方甘草片",
   "note": "",
   "ingredients": [
    "甘草流浸膏",
    "阿片粉",
    "樟脑"
   ],
   "icon": "💊",
   "use": "镇咳祛痰（含甘草、阿片粉）",
   "py": [
    "fufanggancaopian",
    "fufanggancaoheji"
   ],
   "pyi": [
    "ffgcp",
    "ffgchj"
   ]
  },
  {
   "name": "奥美拉唑",
   "en": "Omeprazole",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "洛赛克",
    "奥克"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该消化/胃肠药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；长期或大剂量使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "奥美拉唑",
   "note": "",
   "icon": "💊",
   "use": "质子泵抑制剂（胃酸过多、溃疡、反流）",
   "py": [
    "aomeilazuo",
    "luosaike",
    "aoke"
   ],
   "pyi": [
    "amlz",
    "lsk",
    "ak"
   ]
  },
  {
   "name": "泮托拉唑",
   "en": "Pantoprazole",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "潘妥洛克"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该消化/胃肠药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；长期或大剂量使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "泮托拉唑",
   "note": "",
   "icon": "💊",
   "use": "质子泵抑制剂（胃酸、溃疡）",
   "py": [
    "pantuolazuo",
    "pantuoluoke"
   ],
   "pyi": [
    "ptlz",
    "ptlk"
   ]
  },
  {
   "name": "雷贝拉唑",
   "en": "Rabeprazole",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "波利特"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该消化/胃肠药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；长期或大剂量使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "雷贝拉唑",
   "note": "",
   "icon": "💊",
   "use": "质子泵抑制剂（胃酸、溃疡）",
   "py": [
    "leibeilazuo",
    "bolite"
   ],
   "pyi": [
    "lblz",
    "blt"
   ]
  },
  {
   "name": "兰索拉唑",
   "en": "Lansoprazole",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "达克普隆"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该消化/胃肠药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；长期或大剂量使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "兰索拉唑",
   "note": "",
   "icon": "💊",
   "use": "质子泵抑制剂（胃酸、溃疡）",
   "py": [
    "lansuolazuo",
    "dakepulong"
   ],
   "pyi": [
    "lslz",
    "dkpl"
   ]
  },
  {
   "name": "埃索美拉唑",
   "en": "Esomeprazole",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "耐信"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该消化/胃肠药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；长期或大剂量使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "埃索美拉唑",
   "note": "",
   "icon": "💊",
   "use": "质子泵抑制剂（胃酸、溃疡）",
   "py": [
    "aisuomeilazuo",
    "naixin"
   ],
   "pyi": [
    "asmlz",
    "nx"
   ]
  },
  {
   "name": "铝碳酸镁",
   "en": "Hydrotalcite",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "达喜"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该消化/胃肠药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；长期或大剂量使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "铝碳酸镁",
   "note": "",
   "icon": "💊",
   "use": "抗酸、胃黏膜保护（胃酸过多）",
   "py": [
    "lvtansuanmei",
    "daxi"
   ],
   "pyi": [
    "ltsm",
    "dx"
   ]
  },
  {
   "name": "西咪替丁",
   "en": "Cimetidine",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "泰胃美"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该消化/胃肠药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；长期或大剂量使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "西咪替丁",
   "note": "",
   "icon": "💊",
   "use": "H2 受体拮抗剂（胃酸过多）",
   "py": [
    "ximitiding",
    "taiweimei"
   ],
   "pyi": [
    "xmtd",
    "twm"
   ]
  },
  {
   "name": "雷尼替丁",
   "en": "Ranitidine",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "善胃得"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该消化/胃肠药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；长期或大剂量使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "雷尼替丁",
   "note": "",
   "icon": "💊",
   "use": "H2 受体拮抗剂（胃酸过多）",
   "py": [
    "leinitiding",
    "shanweide"
   ],
   "pyi": [
    "lntd",
    "swd"
   ]
  },
  {
   "name": "法莫替丁",
   "en": "Famotidine",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "高舒达",
    "信法丁"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该消化/胃肠药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；长期或大剂量使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "法莫替丁",
   "note": "",
   "icon": "💊",
   "use": "H2 受体拮抗剂（胃酸过多）",
   "py": [
    "famotiding",
    "gaoshuda",
    "xinfading"
   ],
   "pyi": [
    "fmtd",
    "gsd",
    "xfd"
   ]
  },
  {
   "name": "多潘立酮",
   "en": "Domperidone",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "吗丁啉",
    "恒邦"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该消化/胃肠药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；长期或大剂量使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "多潘立酮",
   "note": "",
   "icon": "💊",
   "use": "促动力、止吐（腹胀、恶心）",
   "py": [
    "duopanlitong",
    "madinglin",
    "hengbang"
   ],
   "pyi": [
    "dplt",
    "mdl",
    "hb"
   ]
  },
  {
   "name": "莫沙必利",
   "en": "Mosapride",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "加斯清"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该消化/胃肠药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；长期或大剂量使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "莫沙必利",
   "note": "",
   "icon": "💊",
   "use": "促动力（消化不良、腹胀）",
   "py": [
    "moshabili",
    "jiasiqing"
   ],
   "pyi": [
    "msbl",
    "jsq"
   ]
  },
  {
   "name": "乳果糖",
   "en": "Lactulose",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "杜密克"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该消化/胃肠药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；长期或大剂量使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "乳果糖",
   "note": "",
   "icon": "💊",
   "use": "渗透性泻药（便秘、肝性脑病）",
   "py": [
    "ruguotang",
    "dumike"
   ],
   "pyi": [
    "rgt",
    "dmk"
   ]
  },
  {
   "name": "开塞露",
   "en": "Glycerin Enema",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "甘油栓"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该消化/胃肠药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；长期或大剂量使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "开塞露",
   "note": "",
   "icon": "💊",
   "use": "外用通便（便秘）",
   "py": [
    "kaisailu",
    "ganyoushuan"
   ],
   "pyi": [
    "ksl",
    "gys"
   ]
  },
  {
   "name": "口服补液盐",
   "en": "Oral Rehydration Salts",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "ORS",
    "博叶"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该消化/胃肠药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；长期或大剂量使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "口服补液盐",
   "note": "",
   "icon": "💊",
   "use": "补充水分和电解质（腹泻脱水）",
   "py": [
    "koufubuyeyan",
    "boye"
   ],
   "pyi": [
    "kfbyy",
    "by"
   ]
  },
  {
   "name": "硫糖铝",
   "en": "Sucralfate",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "胃溃宁"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该消化/胃肠药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；长期或大剂量使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "硫糖铝",
   "note": "",
   "icon": "💊",
   "use": "胃黏膜保护（溃疡）",
   "py": [
    "liutanglv",
    "weikuining"
   ],
   "pyi": [
    "ltl",
    "wkn"
   ]
  },
  {
   "name": "胶体果胶铋",
   "en": "Colloidal Bismuth Pectin",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "果胶铋"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该消化/胃肠药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；长期或大剂量使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "胶体果胶铋",
   "note": "",
   "icon": "💊",
   "use": "胃黏膜保护（溃疡、幽门螺杆菌）",
   "py": [
    "jiaotiguojiaobi",
    "guojiaobi"
   ],
   "pyi": [
    "jtgjb",
    "gjb"
   ]
  },
  {
   "name": "复方消化酶",
   "en": "Compound Digestive Enzyme",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "达吉",
    "慷彼申"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该消化/胃肠药不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；长期或大剂量使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "复方消化酶",
   "note": "",
   "icon": "💊",
   "use": "助消化（消化不良）",
   "py": [
    "fufangxiaohuamei",
    "daji",
    "kangbishen"
   ],
   "pyi": [
    "ffxhm",
    "dj",
    "kbs"
   ],
   "ingredients": [
    "胃蛋白酶",
    "木瓜蛋白酶",
    "淀粉酶",
    "熊去氧胆酸"
   ]
  },
  {
   "name": "普萘洛尔",
   "en": "Propranolol",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "心得安"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "普萘洛尔",
   "note": "",
   "icon": "⚪",
   "use": "β受体阻滞剂（降压、减慢心率、甲亢/偏头痛）",
   "py": [
    "punailuoer",
    "xindean"
   ],
   "pyi": [
    "pnle",
    "xda"
   ]
  },
  {
   "name": "美托洛尔",
   "en": "Metoprolol",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "倍他乐克"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "美托洛尔",
   "note": "",
   "icon": "💊",
   "use": "β受体阻滞剂（降压、心绞痛、心律失常）",
   "py": [
    "meituoluoer",
    "beitaleke"
   ],
   "pyi": [
    "mtle",
    "btlk"
   ]
  },
  {
   "name": "比索洛尔",
   "en": "Bisoprolol",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "康忻",
    "博苏"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "比索洛尔",
   "note": "",
   "icon": "💊",
   "use": "β受体阻滞剂（降压、心衰、心绞痛）",
   "py": [
    "bisuoluoer",
    "kangxin",
    "bosu"
   ],
   "pyi": [
    "bsle",
    "kx",
    "bs"
   ]
  },
  {
   "name": "阿替洛尔",
   "en": "Atenolol",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "氨酰心安"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "阿替洛尔",
   "note": "",
   "icon": "💊",
   "use": "β受体阻滞剂（降压、心绞痛）",
   "py": [
    "atiluoer",
    "anxianxinan"
   ],
   "pyi": [
    "atle",
    "axxa"
   ]
  },
  {
   "name": "氨氯地平",
   "en": "Amlodipine",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "络活喜",
    "压氏达"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "氨氯地平",
   "note": "",
   "icon": "💊",
   "use": "钙通道阻滞剂（降压、心绞痛）",
   "py": [
    "anlvdiping",
    "luohuoxi",
    "yashida"
   ],
   "pyi": [
    "aldp",
    "lhx",
    "ysd"
   ]
  },
  {
   "name": "硝苯地平",
   "en": "Nifedipine",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "心痛定",
    "拜新同"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "硝苯地平",
   "note": "",
   "icon": "💊",
   "use": "钙通道阻滞剂（降压、心绞痛）",
   "py": [
    "xiaobendiping",
    "xintongding",
    "baixintong"
   ],
   "pyi": [
    "xbdp",
    "xtd",
    "bxt"
   ]
  },
  {
   "name": "非洛地平",
   "en": "Felodipine",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "波依定"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "非洛地平",
   "note": "",
   "icon": "💊",
   "use": "钙通道阻滞剂（降压）",
   "py": [
    "feiluodiping",
    "boyiding"
   ],
   "pyi": [
    "fldp",
    "byd"
   ]
  },
  {
   "name": "缬沙坦",
   "en": "Valsartan",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "代文"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "缬沙坦",
   "note": "",
   "icon": "💊",
   "use": "ARB 类降压药（高血压、心衰）",
   "py": [
    "xieshatan",
    "daiwen"
   ],
   "pyi": [
    "xst",
    "dw"
   ]
  },
  {
   "name": "氯沙坦",
   "en": "Losartan",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "科素亚"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "氯沙坦",
   "note": "",
   "icon": "💊",
   "use": "ARB 类降压药（高血压、痛风合并高血压）",
   "py": [
    "lvshatan",
    "kesuya"
   ],
   "pyi": [
    "lst",
    "ksy"
   ]
  },
  {
   "name": "厄贝沙坦",
   "en": "Irbesartan",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "安博维"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "厄贝沙坦",
   "note": "",
   "icon": "💊",
   "use": "ARB 类降压药（高血压、糖尿病肾病）",
   "py": [
    "ebeishatan",
    "anbowei"
   ],
   "pyi": [
    "ebst",
    "abw"
   ]
  },
  {
   "name": "卡托普利",
   "en": "Captopril",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "开博通"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "卡托普利",
   "note": "",
   "icon": "💊",
   "use": "ACEI 类降压药（高血压、心衰）",
   "py": [
    "katuopuli",
    "kaibotong"
   ],
   "pyi": [
    "ktpl",
    "kbt"
   ]
  },
  {
   "name": "依那普利",
   "en": "Enalapril",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "依苏",
    "悦宁定"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "依那普利",
   "note": "",
   "icon": "💊",
   "use": "ACEI 类降压药（高血压、心衰）",
   "py": [
    "yinapuli",
    "yisu",
    "yueningding"
   ],
   "pyi": [
    "ynpl",
    "ys",
    "ynd"
   ]
  },
  {
   "name": "培哚普利",
   "en": "Perindopril",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "雅施达"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "培哚普利",
   "note": "",
   "icon": "💊",
   "use": "ACEI 类降压药（高血压、心衰）",
   "py": [
    "peiduopuli",
    "yashida"
   ],
   "pyi": [
    "pdpl",
    "ysd"
   ]
  },
  {
   "name": "呋塞米",
   "en": "Furosemide",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "速尿",
    "呋喃苯胺酸"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "呋塞米",
   "note": "",
   "icon": "💊",
   "use": "袢利尿剂（水肿、心衰、降压）",
   "py": [
    "fusaimi",
    "suniao",
    "funanbenansuan"
   ],
   "pyi": [
    "fsm",
    "sn",
    "fnbas"
   ]
  },
  {
   "name": "氢氯噻嗪",
   "en": "Hydrochlorothiazide",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "双氢克尿噻"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "氢氯噻嗪",
   "note": "",
   "icon": "💊",
   "use": "噻嗪类利尿剂（降压、水肿）",
   "py": [
    "qinglvsaiqin",
    "shuangqingkeniaosai"
   ],
   "pyi": [
    "qlsq",
    "sqkns"
   ]
  },
  {
   "name": "螺内酯",
   "en": "Spironolactone",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "安体舒通"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "螺内酯",
   "note": "",
   "icon": "💊",
   "use": "保钾利尿剂（心衰、水肿、醛固酮增多）",
   "py": [
    "luoneizhi",
    "antishutong"
   ],
   "pyi": [
    "lnz",
    "atst"
   ]
  },
  {
   "name": "地高辛",
   "en": "Digoxin",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "地高辛",
   "note": "",
   "icon": "💊",
   "use": "强心苷（心衰、房颤控制心率）",
   "py": [
    "digaoxin"
   ],
   "pyi": [
    "dgx"
   ]
  },
  {
   "name": "阿托伐他汀",
   "en": "Atorvastatin",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "立普妥"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "阿托伐他汀",
   "note": "",
   "icon": "💊",
   "use": "他汀类降脂药（高血脂、预防心血管事件）",
   "py": [
    "atuofatating",
    "liputuo"
   ],
   "pyi": [
    "atftt",
    "lpt"
   ]
  },
  {
   "name": "瑞舒伐他汀",
   "en": "Rosuvastatin",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "可定"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "瑞舒伐他汀",
   "note": "",
   "icon": "💊",
   "use": "他汀类降脂药（高血脂）",
   "py": [
    "ruishufatating",
    "keding"
   ],
   "pyi": [
    "rsftt",
    "kd"
   ]
  },
  {
   "name": "辛伐他汀",
   "en": "Simvastatin",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "舒降之"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "辛伐他汀",
   "note": "",
   "icon": "💊",
   "use": "他汀类降脂药（高血脂）",
   "py": [
    "xinfatating",
    "shujiangzhi"
   ],
   "pyi": [
    "xftt",
    "sjz"
   ]
  },
  {
   "name": "氯吡格雷",
   "en": "Clopidogrel",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "波立维",
    "泰嘉"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "氯吡格雷",
   "note": "",
   "icon": "💊",
   "use": "抗血小板药（防血栓、支架术后）",
   "py": [
    "lvbigelei",
    "boliwei",
    "taijia"
   ],
   "pyi": [
    "lbgl",
    "blw",
    "tj"
   ]
  },
  {
   "name": "华法林",
   "en": "Warfarin",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "苄丙酮香豆素"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "华法林",
   "note": "",
   "icon": "💊",
   "use": "抗凝药（房颤、血栓、瓣膜术后）",
   "py": [
    "huafalin",
    "bianbingtongxiangdousu"
   ],
   "pyi": [
    "hfl",
    "bbtxds"
   ]
  },
  {
   "name": "普罗帕酮",
   "en": "Propafenone",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "心律平"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "普罗帕酮",
   "note": "",
   "icon": "💊",
   "use": "抗心律失常药",
   "py": [
    "puluopatong",
    "xinlvping"
   ],
   "pyi": [
    "plpt",
    "xlp"
   ]
  },
  {
   "name": "维拉帕米",
   "en": "Verapamil",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "异搏定"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "维拉帕米",
   "note": "",
   "icon": "💊",
   "use": "钙拮抗剂（心律失常、降压、心绞痛）",
   "py": [
    "weilapami",
    "yiboding"
   ],
   "pyi": [
    "wlpm",
    "ybd"
   ]
  },
  {
   "name": "地尔硫卓",
   "en": "Diltiazem",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "合心爽",
    "恬尔心"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该心血管药物不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；慢性病患者请继续遵专科医嘱用药，勿自行停药。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "地尔硫卓",
   "note": "",
   "icon": "💊",
   "use": "钙拮抗剂（心绞痛、心律失常、降压）",
   "py": [
    "dierliuzhuo",
    "hexinshuang",
    "tianerxin"
   ],
   "pyi": [
    "delz",
    "hxs",
    "tex"
   ]
  },
  {
   "name": "胺碘酮",
   "en": "Amiodarone",
   "risk": "safe",
   "category": "cardiovascular",
   "aliases": [
    "可达龙",
    "乙胺碘呋酮"
   ],
   "summary": "属于抗心律失常药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，常规情况下可用。",
   "detail": "国内外权威指南（台大医院、安徽省卫健委等）均未将其列为 G6PD 溶血风险药物；具体用药仍遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S4",
    "S7"
   ],
   "id": "胺碘酮",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿等溶血迹象，异常及时就医。",
   "icon": "💊",
   "use": "抗心律失常药",
   "py": [
    "andiantong",
    "kedalong",
    "yiandianfutong"
   ],
   "pyi": [
    "adt",
    "kdl",
    "yadft"
   ]
  },
  {
   "name": "二甲双胍",
   "en": "Metformin",
   "risk": "safe",
   "category": "metabolic",
   "aliases": [
    "格华止",
    "美迪康"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "二甲双胍",
   "note": "",
   "icon": "💊",
   "use": "双胍类降糖药（2 型糖尿病一线用药）",
   "py": [
    "erjiashuanggua",
    "gehuazhi",
    "meidikang"
   ],
   "pyi": [
    "ejsg",
    "ghz",
    "mdk"
   ]
  },
  {
   "name": "阿卡波糖",
   "en": "Acarbose",
   "risk": "safe",
   "category": "metabolic",
   "aliases": [
    "拜糖平",
    "卡博平"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "阿卡波糖",
   "note": "",
   "icon": "💊",
   "use": "α-糖苷酶抑制剂（降低餐后血糖）",
   "py": [
    "akabotang",
    "baitangping",
    "kaboping"
   ],
   "pyi": [
    "akbt",
    "btp",
    "kbp"
   ]
  },
  {
   "name": "瑞格列奈",
   "en": "Repaglinide",
   "risk": "safe",
   "category": "metabolic",
   "aliases": [
    "诺和龙"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "瑞格列奈",
   "note": "",
   "icon": "💊",
   "use": "格列奈类降糖药（控制餐后血糖）",
   "py": [
    "ruigelienai",
    "nuohelong"
   ],
   "pyi": [
    "rgln",
    "nhl"
   ]
  },
  {
   "name": "吡格列酮",
   "en": "Pioglitazone",
   "risk": "safe",
   "category": "metabolic",
   "aliases": [
    "艾可拓"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "吡格列酮",
   "note": "",
   "icon": "💊",
   "use": "噻唑烷二酮类降糖药（改善胰岛素抵抗）",
   "py": [
    "bigelietong",
    "aiketuo"
   ],
   "pyi": [
    "bglt",
    "akt"
   ]
  },
  {
   "name": "胰岛素",
   "en": "Insulin",
   "risk": "safe",
   "category": "metabolic",
   "aliases": [
    "重组人胰岛素",
    "甘精胰岛素",
    "门冬胰岛素"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "胰岛素",
   "note": "",
   "icon": "💊",
   "use": "降糖（1 型/2 型糖尿病）",
   "py": [
    "yidaosu",
    "chongzurenyidaosu",
    "ganjingyidaosu",
    "mendongyidaosu"
   ],
   "pyi": [
    "yds",
    "czryds",
    "gjyds",
    "mdyds"
   ]
  },
  {
   "name": "左甲状腺素",
   "en": "Levothyroxine",
   "risk": "safe",
   "category": "metabolic",
   "aliases": [
    "优甲乐",
    "雷替斯"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "左甲状腺素",
   "note": "",
   "icon": "💊",
   "use": "补充甲状腺激素（甲状腺功能减退）",
   "py": [
    "zuojiazhuangxiansu",
    "youjiale",
    "leitisi"
   ],
   "pyi": [
    "zjzxs",
    "yjl",
    "lts"
   ]
  },
  {
   "name": "泼尼松",
   "en": "Prednisone",
   "risk": "safe",
   "category": "metabolic",
   "aliases": [
    "强的松"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "泼尼松",
   "note": "",
   "icon": "💊",
   "use": "糖皮质激素（抗炎、免疫抑制）",
   "py": [
    "ponisong",
    "qiangdesong"
   ],
   "pyi": [
    "pns",
    "qds"
   ]
  },
  {
   "name": "甲泼尼龙",
   "en": "Methylprednisolone",
   "risk": "safe",
   "category": "metabolic",
   "aliases": [
    "甲强龙",
    "美卓乐"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "甲泼尼龙",
   "note": "",
   "icon": "💊",
   "use": "糖皮质激素（抗炎、免疫抑制）",
   "py": [
    "jiaponilong",
    "jiaqianglong",
    "meizhuole"
   ],
   "pyi": [
    "jpnl",
    "jql",
    "mzl"
   ]
  },
  {
   "name": "地塞米松",
   "en": "Dexamethasone",
   "risk": "safe",
   "category": "metabolic",
   "aliases": [
    "氟美松"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "地塞米松",
   "note": "",
   "icon": "💊",
   "use": "糖皮质激素（抗炎、抗过敏）",
   "py": [
    "disaimisong",
    "fumeisong"
   ],
   "pyi": [
    "dsms",
    "fms"
   ]
  },
  {
   "name": "阿仑膦酸钠",
   "en": "Alendronate",
   "risk": "safe",
   "category": "metabolic",
   "aliases": [
    "福善美"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "阿仑膦酸钠",
   "note": "",
   "icon": "💊",
   "use": "双膦酸盐（骨质疏松）",
   "py": [
    "alunlinsuanna",
    "fushanmei"
   ],
   "pyi": [
    "allsn",
    "fsm"
   ]
  },
  {
   "name": "别嘌醇",
   "en": "Allopurinol",
   "risk": "caution",
   "category": "metabolic",
   "aliases": [
    "痛风立克",
    "别嘌呤醇"
   ],
   "summary": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用。",
   "detail": "别嘌醇含硫脲结构，个别病例报告与溶血及严重过敏相关；蚕豆病者降尿酸应谨慎，由医生权衡利弊，必要时换用非布司他并监测。",
   "controversy": false,
   "sources": [
    "S4",
    "S7"
   ],
   "id": "别嘌醇",
   "note": "",
   "icon": "💊",
   "use": "降尿酸药（痛风）",
   "py": [
    "biepiaochun",
    "tongfenglike",
    "biepiaolingchun"
   ],
   "pyi": [
    "bpc",
    "tflk",
    "bplc"
   ]
  },
  {
   "name": "维生素B1",
   "en": "Vitamin B1",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "硫胺素"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该维生素/补充剂不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；避免盲目大剂量补充。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "维生素B1",
   "note": "",
   "icon": "💊",
   "use": "维生素B1（营养、神经）",
   "py": [
    "weishengsu",
    "liuansu"
   ],
   "pyi": [
    "wss",
    "las"
   ]
  },
  {
   "name": "维生素B2",
   "en": "Vitamin B2",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "核黄素"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该维生素/补充剂不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；避免盲目大剂量补充。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "维生素B2",
   "note": "",
   "icon": "💊",
   "use": "维生素B2（营养、口角炎）",
   "py": [
    "weishengsu",
    "hehuangsu"
   ],
   "pyi": [
    "wss",
    "hhs"
   ]
  },
  {
   "name": "维生素B6",
   "en": "Vitamin B6",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "吡哆醇"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该维生素/补充剂不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；避免盲目大剂量补充。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "维生素B6",
   "note": "",
   "icon": "💊",
   "use": "维生素B6（营养、止吐、神经）",
   "py": [
    "weishengsu",
    "biduochun"
   ],
   "pyi": [
    "wss",
    "bdc"
   ]
  },
  {
   "name": "维生素B12",
   "en": "Vitamin B12",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "钴胺素",
    "甲钴胺"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该维生素/补充剂不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；避免盲目大剂量补充。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "维生素B12",
   "note": "",
   "icon": "💊",
   "use": "维生素B12（营养、贫血、神经）",
   "py": [
    "weishengsu",
    "guansu",
    "jiaguan"
   ],
   "pyi": [
    "wss",
    "gas",
    "jga"
   ]
  },
  {
   "name": "叶酸",
   "en": "Folic Acid",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "叶酸片"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该维生素/补充剂不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；避免盲目大剂量补充。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "叶酸",
   "note": "",
   "icon": "💊",
   "use": "叶酸（备孕、贫血）",
   "py": [
    "yesuan",
    "yesuanpian"
   ],
   "pyi": [
    "ys",
    "ysp"
   ]
  },
  {
   "name": "维生素E",
   "en": "Vitamin E",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "生育酚"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该维生素/补充剂不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；避免盲目大剂量补充。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "维生素E",
   "note": "",
   "icon": "💊",
   "use": "维生素E（抗氧化、营养）",
   "py": [
    "weishengsu",
    "shengyufen"
   ],
   "pyi": [
    "wss",
    "syf"
   ]
  },
  {
   "name": "复合维生素",
   "en": "Multivitamin",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "多维元素片",
    "善存",
    "金施尔康"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该维生素/补充剂不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；避免盲目大剂量补充。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "复合维生素",
   "note": "",
   "icon": "💊",
   "use": "多种维生素补充",
   "py": [
    "fuheweishengsu",
    "duoweiyuansupian",
    "shancun",
    "jinshierkang"
   ],
   "pyi": [
    "fhwss",
    "dwysp",
    "sc",
    "jsek"
   ]
  },
  {
   "name": "葡萄糖酸锌",
   "en": "Zinc Gluconate",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "葡萄糖酸锌口服液"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该维生素/补充剂不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；避免盲目大剂量补充。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "葡萄糖酸锌",
   "note": "",
   "icon": "💊",
   "use": "补锌（营养、腹泻辅助）",
   "py": [
    "putaotangsuanxin",
    "putaotangsuanxinkoufuye"
   ],
   "pyi": [
    "pttsx",
    "pttsxkfy"
   ]
  },
  {
   "name": "铁剂",
   "en": "Iron Supplement",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "硫酸亚铁",
    "富马酸亚铁",
    "右旋糖酐铁",
    "蛋白琥珀酸铁"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该维生素/补充剂不属于已知 G6PD 氧化性诱发物，常规剂量下一般可用；避免盲目大剂量补充。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "铁剂",
   "note": "",
   "icon": "💊",
   "use": "补铁（缺铁性贫血）",
   "py": [
    "tieji",
    "liusuanyatie",
    "fumasuanyatie",
    "youxuantanggantie",
    "danbaihuposuantie"
   ],
   "pyi": [
    "tj",
    "lsyt",
    "fmsyt",
    "yxtgt",
    "dbhpst"
   ]
  },
  {
   "name": "流感疫苗",
   "en": "Influenza Vaccine",
   "risk": "safe",
   "category": "vaccine",
   "aliases": [],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "疫苗本身不诱发 G6PD 溶血，多数权威资料将其列入可接种范围。少数儿童接种后可能发热，而发热/感染可加重溶血风险；接种后注意补水、监测尿色，出现浓茶色尿立即就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "流感疫苗",
   "note": "",
   "icon": "💉",
   "use": "预防流感",
   "py": [
    "liuganyimiao"
   ],
   "pyi": [
    "lgym"
   ]
  },
  {
   "name": "乙肝疫苗",
   "en": "Hepatitis B Vaccine",
   "risk": "safe",
   "category": "vaccine",
   "aliases": [],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "疫苗本身不诱发 G6PD 溶血，多数权威资料将其列入可接种范围。少数儿童接种后可能发热，而发热/感染可加重溶血风险；接种后注意补水、监测尿色，出现浓茶色尿立即就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "乙肝疫苗",
   "note": "",
   "icon": "💉",
   "use": "预防乙型肝炎",
   "py": [
    "yiganyimiao"
   ],
   "pyi": [
    "ygym"
   ]
  },
  {
   "name": "百白破疫苗",
   "en": "DTP Vaccine",
   "risk": "safe",
   "category": "vaccine",
   "aliases": [],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "疫苗本身不诱发 G6PD 溶血，多数权威资料将其列入可接种范围。少数儿童接种后可能发热，而发热/感染可加重溶血风险；接种后注意补水、监测尿色，出现浓茶色尿立即就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "百白破疫苗",
   "note": "",
   "icon": "💉",
   "use": "预防百日咳、白喉、破伤风",
   "py": [
    "baibaipoyimiao"
   ],
   "pyi": [
    "bbpym"
   ]
  },
  {
   "name": "麻疹疫苗",
   "en": "Measles Vaccine",
   "risk": "safe",
   "category": "vaccine",
   "aliases": [],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "疫苗本身不诱发 G6PD 溶血，多数权威资料将其列入可接种范围。少数儿童接种后可能发热，而发热/感染可加重溶血风险；接种后注意补水、监测尿色，出现浓茶色尿立即就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "麻疹疫苗",
   "note": "",
   "icon": "💉",
   "use": "预防麻疹",
   "py": [
    "mazhenyimiao"
   ],
   "pyi": [
    "mzym"
   ]
  },
  {
   "name": "水痘疫苗",
   "en": "Varicella Vaccine",
   "risk": "safe",
   "category": "vaccine",
   "aliases": [],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "疫苗本身不诱发 G6PD 溶血，多数权威资料将其列入可接种范围。少数儿童接种后可能发热，而发热/感染可加重溶血风险；接种后注意补水、监测尿色，出现浓茶色尿立即就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "水痘疫苗",
   "note": "",
   "icon": "💉",
   "use": "预防水痘",
   "py": [
    "shuidouyimiao"
   ],
   "pyi": [
    "sdym"
   ]
  },
  {
   "name": "肺炎球菌疫苗",
   "en": "Pneumococcal Vaccine",
   "risk": "safe",
   "category": "vaccine",
   "aliases": [],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "疫苗本身不诱发 G6PD 溶血，多数权威资料将其列入可接种范围。少数儿童接种后可能发热，而发热/感染可加重溶血风险；接种后注意补水、监测尿色，出现浓茶色尿立即就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "肺炎球菌疫苗",
   "note": "",
   "icon": "💉",
   "use": "预防肺炎链球菌感染",
   "py": [
    "feiyanqiujunyimiao"
   ],
   "pyi": [
    "fyqjym"
   ]
  },
  {
   "name": "HPV疫苗",
   "en": "HPV Vaccine",
   "risk": "safe",
   "category": "vaccine",
   "aliases": [],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "疫苗本身不诱发 G6PD 溶血，多数权威资料将其列入可接种范围。少数儿童接种后可能发热，而发热/感染可加重溶血风险；接种后注意补水、监测尿色，出现浓茶色尿立即就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "HPV疫苗",
   "note": "",
   "icon": "💉",
   "use": "预防人乳头瘤病毒（宫颈癌等）",
   "py": [
    "yimiao"
   ],
   "pyi": [
    "ym"
   ]
  },
  {
   "name": "新冠疫苗",
   "en": "COVID-19 Vaccine",
   "risk": "safe",
   "category": "vaccine",
   "aliases": [],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "疫苗本身不诱发 G6PD 溶血，多数权威资料将其列入可接种范围。少数儿童接种后可能发热，而发热/感染可加重溶血风险；接种后注意补水、监测尿色，出现浓茶色尿立即就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "新冠疫苗",
   "note": "",
   "icon": "💉",
   "use": "预防新型冠状病毒感染",
   "py": [
    "xinguanyimiao"
   ],
   "pyi": [
    "xgym"
   ]
  },
  {
   "name": "卡介苗",
   "en": "BCG Vaccine",
   "risk": "safe",
   "category": "vaccine",
   "aliases": [],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "疫苗本身不诱发 G6PD 溶血，多数权威资料将其列入可接种范围。少数儿童接种后可能发热，而发热/感染可加重溶血风险；接种后注意补水、监测尿色，出现浓茶色尿立即就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "卡介苗",
   "note": "",
   "icon": "💉",
   "use": "预防结核（儿童）",
   "py": [
    "kajiemiao"
   ],
   "pyi": [
    "kjm"
   ]
  },
  {
   "name": "脊髓灰质炎疫苗",
   "en": "Polio Vaccine",
   "risk": "safe",
   "category": "vaccine",
   "aliases": [],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "疫苗本身不诱发 G6PD 溶血，多数权威资料将其列入可接种范围。少数儿童接种后可能发热，而发热/感染可加重溶血风险；接种后注意补水、监测尿色，出现浓茶色尿立即就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "脊髓灰质炎疫苗",
   "note": "",
   "icon": "💉",
   "use": "预防小儿麻痹",
   "py": [
    "jisuihuizhiyanyimiao"
   ],
   "pyi": [
    "jshzyym"
   ]
  },
  {
   "name": "轮状病毒疫苗",
   "en": "Rotavirus Vaccine",
   "risk": "safe",
   "category": "vaccine",
   "aliases": [],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "疫苗本身不诱发 G6PD 溶血，多数权威资料将其列入可接种范围。少数儿童接种后可能发热，而发热/感染可加重溶血风险；接种后注意补水、监测尿色，出现浓茶色尿立即就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "轮状病毒疫苗",
   "note": "",
   "icon": "💉",
   "use": "预防轮状病毒腹泻",
   "py": [
    "lunzhuangbingduyimiao"
   ],
   "pyi": [
    "lzbdym"
   ]
  },
  {
   "name": "麻腮风疫苗",
   "en": "MMR Vaccine",
   "risk": "safe",
   "category": "vaccine",
   "aliases": [],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "疫苗本身不诱发 G6PD 溶血，多数权威资料将其列入可接种范围。少数儿童接种后可能发热，而发热/感染可加重溶血风险；接种后注意补水、监测尿色，出现浓茶色尿立即就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "麻腮风疫苗",
   "note": "",
   "icon": "💉",
   "use": "预防麻疹、腮腺炎、风疹",
   "py": [
    "masaifengyimiao"
   ],
   "pyi": [
    "msfym"
   ]
  },
  {
   "name": "红霉素软膏",
   "en": "Erythromycin Ointment",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该外用/局部制剂全身吸收少，不属于已知 G6PD 氧化性诱发物，一般可用；大面积破损皮肤使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "红霉素软膏",
   "note": "",
   "icon": "💊",
   "use": "外用抗菌（皮肤、眼部感染）",
   "py": [
    "hongmeisuruangao"
   ],
   "pyi": [
    "hmsrg"
   ]
  },
  {
   "name": "阿昔洛韦乳膏",
   "en": "Aciclovir Cream",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "无环鸟苷乳膏"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该外用/局部制剂全身吸收少，不属于已知 G6PD 氧化性诱发物，一般可用；大面积破损皮肤使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "阿昔洛韦乳膏",
   "note": "",
   "icon": "💊",
   "use": "外用抗病毒（疱疹）",
   "py": [
    "axiluoweirugao",
    "wuhuanniaoganrugao"
   ],
   "pyi": [
    "axlwrg",
    "whngrg"
   ]
  },
  {
   "name": "氟轻松",
   "en": "Fluocinolone",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "肤轻松"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该外用/局部制剂全身吸收少，不属于已知 G6PD 氧化性诱发物，一般可用；大面积破损皮肤使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "氟轻松",
   "note": "",
   "icon": "💊",
   "use": "外用糖皮质激素（皮炎、湿疹）",
   "py": [
    "fuqingsong"
   ],
   "pyi": [
    "fqs"
   ]
  },
  {
   "name": "醋酸地塞米松乳膏",
   "en": "Dexamethasone Acetate Cream",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "皮炎平(含)"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该外用/局部制剂全身吸收少，不属于已知 G6PD 氧化性诱发物，一般可用；大面积破损皮肤使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "醋酸地塞米松乳膏",
   "note": "",
   "icon": "💊",
   "use": "外用糖皮质激素（皮炎、湿疹）",
   "py": [
    "cusuandisaimisongrugao",
    "piyanpinghan"
   ],
   "pyi": [
    "csdsmsrg",
    "pyph"
   ]
  },
  {
   "name": "尿素软膏",
   "en": "Urea Ointment",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "尿素维E乳膏"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该外用/局部制剂全身吸收少，不属于已知 G6PD 氧化性诱发物，一般可用；大面积破损皮肤使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "尿素软膏",
   "note": "",
   "icon": "💊",
   "use": "外用保湿、软化角质（干裂、鱼鳞病）",
   "py": [
    "niaosuruangao",
    "niaosuweirugao"
   ],
   "pyi": [
    "nsrg",
    "nswrg"
   ]
  },
  {
   "name": "维A酸乳膏",
   "en": "Tretinoin Cream",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "迪维",
    "维特明"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该外用/局部制剂全身吸收少，不属于已知 G6PD 氧化性诱发物，一般可用；大面积破损皮肤使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "维A酸乳膏",
   "note": "",
   "icon": "💊",
   "use": "外用维A酸（痤疮、角化）",
   "py": [
    "weisuanrugao",
    "diwei",
    "weiteming"
   ],
   "pyi": [
    "wsrg",
    "dw",
    "wtm"
   ]
  },
  {
   "name": "鱼石脂",
   "en": "Ichthammol",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "鱼石脂软膏"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该外用/局部制剂全身吸收少，不属于已知 G6PD 氧化性诱发物，一般可用；大面积破损皮肤使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "鱼石脂",
   "note": "",
   "icon": "💊",
   "use": "外用（疖肿、消炎）",
   "py": [
    "yushizhi",
    "yushizhiruangao"
   ],
   "pyi": [
    "ysz",
    "yszrg"
   ]
  },
  {
   "name": "水杨酸软膏",
   "en": "Salicylic Acid Ointment",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该外用/局部制剂全身吸收少，不属于已知 G6PD 氧化性诱发物，一般可用；大面积破损皮肤使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "水杨酸软膏",
   "note": "",
   "icon": "💊",
   "use": "外用角质剥脱（银屑病、鸡眼）",
   "py": [
    "shuiyangsuanruangao"
   ],
   "pyi": [
    "sysrg"
   ]
  },
  {
   "name": "创可贴",
   "en": "Adhesive Bandage",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "苯扎氯铵贴"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该外用/局部制剂全身吸收少，不属于已知 G6PD 氧化性诱发物，一般可用；大面积破损皮肤使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "创可贴",
   "note": "",
   "icon": "💊",
   "use": "创面覆盖、止血",
   "py": [
    "chuangketie",
    "benzhalvantie"
   ],
   "pyi": [
    "ckt",
    "bzlat"
   ]
  },
  {
   "name": "红霉素眼膏",
   "en": "Erythromycin Eye Ointment",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该外用/局部制剂全身吸收少，不属于已知 G6PD 氧化性诱发物，一般可用；大面积破损皮肤使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "红霉素眼膏",
   "note": "",
   "icon": "💊",
   "use": "眼部抗菌（结膜炎）",
   "py": [
    "hongmeisuyangao"
   ],
   "pyi": [
    "hmsyg"
   ]
  },
  {
   "name": "妥布霉素滴眼液",
   "en": "Tobramycin Eye Drops",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "托百士"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该外用/局部制剂全身吸收少，不属于已知 G6PD 氧化性诱发物，一般可用；大面积破损皮肤使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "妥布霉素滴眼液",
   "note": "",
   "icon": "💊",
   "use": "眼部抗菌（结膜炎）",
   "py": [
    "tuobumeisudiyanye",
    "tuobaishi"
   ],
   "pyi": [
    "tbmsdyy",
    "tbs"
   ]
  },
  {
   "name": "色甘酸钠滴眼液",
   "en": "Sodium Cromoglicate Eye Drops",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "宁敏"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该外用/局部制剂全身吸收少，不属于已知 G6PD 氧化性诱发物，一般可用；大面积破损皮肤使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "色甘酸钠滴眼液",
   "note": "",
   "icon": "💊",
   "use": "抗过敏滴眼（过敏性结膜炎）",
   "py": [
    "segansuannadiyanye",
    "ningmin"
   ],
   "pyi": [
    "sgsndyy",
    "nm"
   ]
  },
  {
   "name": "玻璃酸钠滴眼液",
   "en": "Sodium Hyaluronate Eye Drops",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "润舒",
    "爱丽"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该外用/局部制剂全身吸收少，不属于已知 G6PD 氧化性诱发物，一般可用；大面积破损皮肤使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "玻璃酸钠滴眼液",
   "note": "",
   "icon": "💊",
   "use": "人工泪液（眼干）",
   "py": [
    "bolisuannadiyanye",
    "runshu",
    "aili"
   ],
   "pyi": [
    "blsndyy",
    "rs",
    "al"
   ]
  },
  {
   "name": "金霉素眼膏",
   "en": "Chlortetracycline Eye Ointment",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该外用/局部制剂全身吸收少，不属于已知 G6PD 氧化性诱发物，一般可用；大面积破损皮肤使用请遵医嘱。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "金霉素眼膏",
   "note": "",
   "icon": "💊",
   "use": "眼部抗菌（结膜炎）",
   "py": [
    "jinmeisuyangao"
   ],
   "pyi": [
    "jmsyg"
   ]
  },
  {
   "name": "氯霉素滴眼液",
   "en": "Chloramphenicol Eye Drops",
   "risk": "caution",
   "category": "other_drug",
   "aliases": [
    "润舒(含氯霉素)"
   ],
   "summary": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用。",
   "detail": "氯霉素全身用药在 G6PD 缺乏症中明确禁用；滴眼液局部吸收少，风险相对低，但婴幼儿及长期使用者建议咨询医生，优先选其他抗菌滴眼液。",
   "controversy": false,
   "sources": [
    "S4",
    "S7"
   ],
   "id": "氯霉素滴眼液",
   "note": "",
   "icon": "💊",
   "use": "眼部抗菌（结膜炎）",
   "py": [
    "lvmeisudiyanye",
    "runshuhanlvmeisu"
   ],
   "pyi": [
    "lmsdyy",
    "rshlms"
   ]
  },
  {
   "name": "生理性海水鼻喷雾",
   "en": "Saline Nasal Spray",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "生理盐水喷鼻",
    "诺斯清"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该鼻用/局部制剂全身吸收少，不属于已知 G6PD 氧化性诱发物，一般可用。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "生理性海水鼻喷雾",
   "note": "",
   "icon": "💊",
   "use": "鼻腔冲洗、保湿",
   "py": [
    "shenglixinghaishuibipenwu",
    "shengliyanshuipenbi",
    "nuosiqing"
   ],
   "pyi": [
    "slxhsbpw",
    "slyspb",
    "nsq"
   ]
  },
  {
   "name": "糠酸莫米松鼻喷雾",
   "en": "Mometasone Nasal Spray",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "内舒拿"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该鼻用/局部制剂全身吸收少，不属于已知 G6PD 氧化性诱发物，一般可用。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "糠酸莫米松鼻喷雾",
   "note": "",
   "icon": "💊",
   "use": "鼻用糖皮质激素（过敏性鼻炎）",
   "py": [
    "kangsuanmomisongbipenwu",
    "neishuna"
   ],
   "pyi": [
    "ksmmsbpw",
    "nsn"
   ]
  },
  {
   "name": "氮卓斯汀鼻喷雾",
   "en": "Azelastine Nasal Spray",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "爱赛平"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "该鼻用/局部制剂全身吸收少，不属于已知 G6PD 氧化性诱发物，一般可用。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "氮卓斯汀鼻喷雾",
   "note": "",
   "icon": "💊",
   "use": "鼻用抗组胺（过敏性鼻炎）",
   "py": [
    "danzhuositingbipenwu",
    "aisaiping"
   ],
   "pyi": [
    "dzstbpw",
    "asp"
   ]
  },
  {
   "name": "地西泮",
   "en": "Diazepam",
   "risk": "safe",
   "category": "neuro",
   "aliases": [
    "安定"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "地西泮",
   "note": "",
   "icon": "💊",
   "use": "苯二氮䓬类（抗焦虑、镇静、抗惊厥）",
   "py": [
    "dixipan",
    "anding"
   ],
   "pyi": [
    "dxp",
    "ad"
   ]
  },
  {
   "name": "艾司唑仑",
   "en": "Estazolam",
   "risk": "safe",
   "category": "neuro",
   "aliases": [
    "舒乐安定"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "艾司唑仑",
   "note": "",
   "icon": "💊",
   "use": "苯二氮䓬类（失眠、抗焦虑）",
   "py": [
    "aisizuolun",
    "shuleanding"
   ],
   "pyi": [
    "aszl",
    "slad"
   ]
  },
  {
   "name": "唑吡坦",
   "en": "Zolpidem",
   "risk": "safe",
   "category": "neuro",
   "aliases": [
    "思诺思",
    "思梦还"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "唑吡坦",
   "note": "",
   "icon": "💊",
   "use": "镇静催眠药（失眠）",
   "py": [
    "zuobitan",
    "sinuosi",
    "simenghai"
   ],
   "pyi": [
    "zbt",
    "sns",
    "smh"
   ]
  },
  {
   "name": "舍曲林",
   "en": "Sertraline",
   "risk": "safe",
   "category": "neuro",
   "aliases": [
    "左洛复",
    "郁乐复"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "舍曲林",
   "note": "",
   "icon": "💊",
   "use": "SSRI 抗抑郁药（抑郁、焦虑、强迫）",
   "py": [
    "shequlin",
    "zuoluofu",
    "yulefu"
   ],
   "pyi": [
    "sql",
    "zlf",
    "ylf"
   ]
  },
  {
   "name": "氟西汀",
   "en": "Fluoxetine",
   "risk": "safe",
   "category": "neuro",
   "aliases": [
    "百忧解"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "氟西汀",
   "note": "",
   "icon": "💊",
   "use": "SSRI 抗抑郁药（抑郁、强迫）",
   "py": [
    "fuxiting",
    "baiyoujie"
   ],
   "pyi": [
    "fxt",
    "byj"
   ]
  },
  {
   "name": "帕罗西汀",
   "en": "Paroxetine",
   "risk": "safe",
   "category": "neuro",
   "aliases": [
    "赛乐特",
    "乐友"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "帕罗西汀",
   "note": "",
   "icon": "💊",
   "use": "SSRI 抗抑郁药（抑郁、焦虑）",
   "py": [
    "paluoxiting",
    "sailete",
    "leyou"
   ],
   "pyi": [
    "plxt",
    "slt",
    "ly"
   ]
  },
  {
   "name": "米氮平",
   "en": "Mirtazapine",
   "risk": "safe",
   "category": "neuro",
   "aliases": [
    "瑞美隆"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "米氮平",
   "note": "",
   "icon": "💊",
   "use": "抗抑郁药（抑郁，兼改善睡眠/食欲）",
   "py": [
    "midanping",
    "ruimeilong"
   ],
   "pyi": [
    "mdp",
    "rml"
   ]
  },
  {
   "name": "奥氮平",
   "en": "Olanzapine",
   "risk": "safe",
   "category": "neuro",
   "aliases": [
    "再普乐",
    "欧兰宁"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "奥氮平",
   "note": "",
   "icon": "💊",
   "use": "抗精神病药（精神分裂、双相）",
   "py": [
    "aodanping",
    "zaipule",
    "oulanning"
   ],
   "pyi": [
    "adp",
    "zpl",
    "oln"
   ]
  },
  {
   "name": "喹硫平",
   "en": "Quetiapine",
   "risk": "safe",
   "category": "neuro",
   "aliases": [
    "思瑞康"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "喹硫平",
   "note": "",
   "icon": "💊",
   "use": "抗精神病药（精神分裂、双相）",
   "py": [
    "kuiliuping",
    "siruikang"
   ],
   "pyi": [
    "klp",
    "srk"
   ]
  },
  {
   "name": "加巴喷丁",
   "en": "Gabapentin",
   "risk": "safe",
   "category": "neuro",
   "aliases": [
    "纽诺汀"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "加巴喷丁",
   "note": "",
   "icon": "💊",
   "use": "抗癫痫、神经痛药",
   "py": [
    "jiabapending",
    "niunuoting"
   ],
   "pyi": [
    "jbpd",
    "nnt"
   ]
  },
  {
   "name": "普瑞巴林",
   "en": "Pregabalin",
   "risk": "safe",
   "category": "neuro",
   "aliases": [
    "乐瑞卡"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "普瑞巴林",
   "note": "",
   "icon": "💊",
   "use": "神经痛、抗癫痫、抗焦虑",
   "py": [
    "puruibalin",
    "leruika"
   ],
   "pyi": [
    "prbl",
    "lrk"
   ]
  },
  {
   "name": "丙戊酸钠",
   "en": "Sodium Valproate",
   "risk": "safe",
   "category": "neuro",
   "aliases": [
    "德巴金",
    "丙戊酸镁"
   ],
   "summary": "属于抗癫痫/情绪稳定药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，常规情况下可用。",
   "detail": "国内外权威指南（台大医院、安徽省卫健委等）均未将其列为 G6PD 溶血风险药物；具体用药仍遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S4",
    "S7"
   ],
   "id": "丙戊酸钠",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿等溶血迹象，异常及时就医。",
   "icon": "💊",
   "use": "抗癫痫、双相情感障碍",
   "py": [
    "bingwusuanna",
    "debajin",
    "bingwusuanmei"
   ],
   "pyi": [
    "bwsn",
    "dbj",
    "bwsm"
   ]
  },
  {
   "name": "卡马西平",
   "en": "Carbamazepine",
   "risk": "caution",
   "category": "neuro",
   "aliases": [
    "得理多",
    "卡马西平缓释片"
   ],
   "summary": "属于抗癫痫药。G6PD 缺乏者使用存在个别溶血报告或证据有限，出于安全建议谨慎使用（非绝对禁用）。",
   "detail": "卡马西平是抗癫痫药。部分资料将其列为 G6PD 相对安全但需慎用，有个别溶血报告。本工具按“谨慎使用”处理；抗结核/抗癫痫方案以专科医生处方为准。",
   "controversy": true,
   "sources": [
    "S4",
    "S7"
   ],
   "id": "卡马西平",
   "note": "需在医生监护下使用，用药期间留意尿色变深、皮肤/眼睛发黄等溶血迹象。",
   "icon": "💊",
   "use": "抗癫痫、三叉神经痛",
   "py": [
    "kamaxiping",
    "deliduo",
    "kamaxipinghuanshipian"
   ],
   "pyi": [
    "kmxp",
    "dld",
    "kmxphsp"
   ],
   "debate": "仅有零散个案或证据有限，并非绝对禁用；本库取保守口径，用前请医生评估。"
  },
  {
   "name": "碘海醇",
   "en": "Iohexol",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "欧乃派克"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "碘对比剂/钡剂本身不诱发 G6PD 溶血，增强造影前告知病史即可；检查后多饮水促进排泄。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "碘海醇",
   "note": "",
   "icon": "💊",
   "use": "造影剂（CT、血管造影）",
   "py": [
    "dianhaichun",
    "ounaipaike"
   ],
   "pyi": [
    "dhc",
    "onpk"
   ]
  },
  {
   "name": "碘普罗胺",
   "en": "Iopromide",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "优维显"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "碘对比剂/钡剂本身不诱发 G6PD 溶血，增强造影前告知病史即可；检查后多饮水促进排泄。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "碘普罗胺",
   "note": "",
   "icon": "💊",
   "use": "造影剂（CT、血管造影）",
   "py": [
    "dianpuluoan",
    "youweixian"
   ],
   "pyi": [
    "dpla",
    "ywx"
   ]
  },
  {
   "name": "硫酸钡",
   "en": "Barium Sulfate",
   "risk": "safe",
   "category": "other_drug",
   "aliases": [
    "钡餐"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "碘对比剂/钡剂本身不诱发 G6PD 溶血，增强造影前告知病史即可；检查后多饮水促进排泄。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "硫酸钡",
   "note": "",
   "icon": "💊",
   "use": "造影剂（胃肠钡餐）",
   "py": [
    "liusuanbei",
    "beican"
   ],
   "pyi": [
    "lsb",
    "bc"
   ]
  },
  {
   "name": "黄体酮",
   "en": "Progesterone",
   "risk": "safe",
   "category": "metabolic",
   "aliases": [
    "孕酮",
    "地屈孕酮"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "黄体酮",
   "note": "",
   "icon": "💊",
   "use": "孕激素（保胎、调经、激素替代）",
   "py": [
    "huangtitong",
    "yuntong",
    "diquyuntong"
   ],
   "pyi": [
    "htt",
    "yt",
    "dqyt"
   ]
  },
  {
   "name": "雌激素",
   "en": "Estrogen",
   "risk": "safe",
   "category": "metabolic",
   "aliases": [
    "戊酸雌二醇",
    "结合雌激素"
   ],
   "summary": "非氧化性药物，目前无明确诱发 G6PD 溶血的证据，常规剂量下一般可用。",
   "detail": "蚕豆病并非对全部药物都禁忌。该药不属于已知氧化性诱发物，多部权威『低危/相对安全』药物清单将其列入。用药仍须遵医嘱，并主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S7",
    "S1"
   ],
   "id": "雌激素",
   "note": "",
   "icon": "💊",
   "use": "雌激素（激素替代、避孕）",
   "py": [
    "cijisu",
    "wusuancierchun",
    "jiehecijisu"
   ],
   "pyi": [
    "cjs",
    "wscec",
    "jhcjs"
   ]
  },
  {
   "name": "复方口服避孕药",
   "en": "Combined Oral Contraceptive",
   "risk": "info",
   "category": "metabolic",
   "aliases": [
    "短效避孕药",
    "妈富隆",
    "达英35"
   ],
   "summary": "与 G6PD 相关的一般性提示。",
   "detail": "含雌激素/孕激素的复方避孕药一般不属于 G6PD 氧化性诱发物，多数资料视为可用；个体耐受不同，使用前咨询医师或药师。",
   "controversy": false,
   "sources": [
    "S4",
    "S7"
   ],
   "id": "复方口服避孕药",
   "note": "",
   "icon": "💊",
   "use": "避孕",
   "py": [
    "fufangkoufubiyunyao",
    "duanxiaobiyunyao",
    "mafulong",
    "daying"
   ],
   "pyi": [
    "ffkfbyy",
    "dxbyy",
    "mfl",
    "dy"
   ],
   "ingredients": [
    "炔雌醇",
    "孕激素"
   ]
  },
  {
   "name": "海娜/指甲花",
   "en": "Henna (Lawsonia inermis)",
   "risk": "caution",
   "category": "plant",
   "aliases": [
    "指甲花",
    "海娜粉",
    "散沫花",
    "mehndi"
   ],
   "summary": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用或避免。",
   "detail": "海娜含萘醌类色素（lawsone），已有多篇儿童急性溶血个案报道与 G6PD 缺乏相关；蚕豆病者应避免用于染发、手绘等皮肤接触，尤其婴幼儿。",
   "controversy": true,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "海娜/指甲花",
   "note": "",
   "icon": "🎨",
   "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27120%27%20height%3D%27120%27%20viewBox%3D%270%200%20120%20120%27%3E%3Crect%20x%3D%272%27%20y%3D%272%27%20width%3D%27116%27%20height%3D%27116%27%20rx%3D%2718%27%20fill%3D%27%23fff0e6%27%20stroke%3D%27%23b8791b%27%20stroke-opacity%3D%270.25%27%2F%3E%3Ctext%20x%3D%2760%27%20y%3D%2770%27%20font-size%3D%2754%27%20text-anchor%3D%27middle%27%3E%F0%9F%8E%A8%3C%2Ftext%3E%3Ctext%20x%3D%2760%27%20y%3D%27104%27%20font-size%3D%2713%27%20text-anchor%3D%27middle%27%20fill%3D%27%23b8791b%27%20font-family%3D%27PingFang%20SC%2CMicrosoft%20YaHei%2Csans-serif%27%3E%E6%B5%B7%E5%A8%9C%2F%E6%8C%87%E7%94%B2%E8%8A%B1%3C%2Ftext%3E%3C%2Fsvg%3E",
   "use": "植物（染发、纹身原料）",
   "py": [
    "hainazhijiahua",
    "zhijiahua",
    "hainafen",
    "sanmohua"
   ],
   "pyi": [
    "hnzjh",
    "zjh",
    "hnf",
    "smh"
   ]
  },
  {
   "name": "红花",
   "en": "Safflower (Carthamus tinctorius)",
   "risk": "caution",
   "category": "plant",
   "aliases": [
    "草红花",
    "红蓝花",
    "刺红花"
   ],
   "summary": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用或避免。",
   "detail": "红花黄色素具一定氧化潜力，部分资料将其列入蚕豆病慎用；作为活血化瘀中药使用时应由医生评估。",
   "controversy": true,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "红花",
   "note": "",
   "icon": "🌸",
   "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27120%27%20height%3D%27120%27%20viewBox%3D%270%200%20120%20120%27%3E%3Crect%20x%3D%272%27%20y%3D%272%27%20width%3D%27116%27%20height%3D%27116%27%20rx%3D%2718%27%20fill%3D%27%23fdecea%27%20stroke%3D%27%23c62828%27%20stroke-opacity%3D%270.25%27%2F%3E%3Ctext%20x%3D%2760%27%20y%3D%2770%27%20font-size%3D%2754%27%20text-anchor%3D%27middle%27%3E%F0%9F%8C%BA%3C%2Ftext%3E%3Ctext%20x%3D%2760%27%20y%3D%27104%27%20font-size%3D%2713%27%20text-anchor%3D%27middle%27%20fill%3D%27%23c62828%27%20font-family%3D%27PingFang%20SC%2CMicrosoft%20YaHei%2Csans-serif%27%3E%E7%BA%A2%E8%8A%B1%3C%2Ftext%3E%3C%2Fsvg%3E",
   "use": "中药（活血化瘀）；也是红花油原料",
   "py": [
    "honghua",
    "caohonghua",
    "honglanhua",
    "cihonghua"
   ],
   "pyi": [
    "hh",
    "chh",
    "hlh"
   ]
  },
  {
   "name": "银杏/白果",
   "en": "Ginkgo (Ginkgo biloba)",
   "risk": "caution",
   "category": "plant",
   "aliases": [
    "白果",
    "公孙树",
    "银杏叶提取物"
   ],
   "summary": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用或避免。",
   "detail": "银杏叶提取物有个别溶血相关报道；白果（银杏果）主要风险为神经毒性，但蚕豆病者食用/用药仍建议谨慎，儿童尤甚。",
   "controversy": true,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "银杏/白果",
   "note": "",
   "icon": "🍂",
   "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27120%27%20height%3D%27120%27%20viewBox%3D%270%200%20120%20120%27%3E%3Crect%20x%3D%272%27%20y%3D%272%27%20width%3D%27116%27%20height%3D%27116%27%20rx%3D%2718%27%20fill%3D%27%23fff7e0%27%20stroke%3D%27%23b26a00%27%20stroke-opacity%3D%270.25%27%2F%3E%3Ctext%20x%3D%2760%27%20y%3D%2770%27%20font-size%3D%2754%27%20text-anchor%3D%27middle%27%3E%F0%9F%8D%82%3C%2Ftext%3E%3Ctext%20x%3D%2760%27%20y%3D%27104%27%20font-size%3D%2713%27%20text-anchor%3D%27middle%27%20fill%3D%27%23b26a00%27%20font-family%3D%27PingFang%20SC%2CMicrosoft%20YaHei%2Csans-serif%27%3E%E9%93%B6%E6%9D%8F%2F%E7%99%BD%E6%9E%9C%3C%2Ftext%3E%3C%2Fsvg%3E",
   "use": "植物/食材（白果需煮熟并限量）",
   "py": [
    "yinxingbaiguo",
    "baiguo",
    "gongsunshu",
    "yinxingyetiquwu"
   ],
   "pyi": [
    "yxbg",
    "bg",
    "gss",
    "yxytqw"
   ]
  },
  {
   "name": "丹参",
   "en": "Salvia miltiorrhiza",
   "risk": "caution",
   "category": "plant",
   "aliases": [
    "紫丹参",
    "赤参"
   ],
   "summary": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用或避免。",
   "detail": "丹参酮、丹酚酸兼具抗氧化与个别氧化争议，作为心血管常用中药，蚕豆病者使用建议咨询医生。",
   "controversy": true,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "丹参",
   "note": "",
   "icon": "🌱",
   "use": "中药（活血化瘀）",
   "py": [
    "danshen",
    "zidanshen",
    "chican"
   ],
   "pyi": [
    "ds",
    "zds",
    "cc"
   ]
  },
  {
   "name": "鱼腥草",
   "en": "Houttuynia cordata",
   "risk": "caution",
   "category": "plant",
   "aliases": [
    "折耳根",
    "蕺菜"
   ],
   "summary": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用或避免。",
   "detail": "含挥发油与多种活性成分，部分资料提示蚕豆病者慎用；作为野菜或注射液使用时注意个体反应。",
   "controversy": true,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "鱼腥草",
   "note": "",
   "icon": "🌱",
   "use": "中药/野菜（清热解毒）",
   "py": [
    "yuxingcao",
    "zheergen",
    "jicai"
   ],
   "pyi": [
    "yxc",
    "zeg",
    "jc"
   ]
  },
  {
   "name": "茵栀黄",
   "en": "Yinzhihuang (herbal)",
   "risk": "caution",
   "category": "plant",
   "aliases": [
    "茵栀黄口服液",
    "茵栀黄颗粒",
    "茵栀黄注射液"
   ],
   "summary": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用或避免。",
   "detail": "用于新生儿黄疸的中成药（茵陈、栀子、黄芩、金银花等），蚕豆病新生儿用药需由医生评估利弊，不自行使用。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "茵栀黄",
   "note": "",
   "icon": "🌱",
   "use": "中药（利湿退黄，曾用于新生儿黄疸）",
   "py": [
    "yinzhihuang",
    "yinzhihuangkoufuye",
    "yinzhihuangkeli",
    "yinzhihuangzhusheye"
   ],
   "pyi": [
    "yzh",
    "yzhkfy",
    "yzhkl",
    "yzhzsy"
   ]
  },
  {
   "name": "红花油",
   "en": "Red flower oil",
   "risk": "caution",
   "category": "household",
   "aliases": [
    "正红花油",
    "万花油"
   ],
   "summary": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用或避免。",
   "detail": "常含红花、冬青油（水杨酸甲酯）、樟脑等成分，外用亦建议蚕豆病者慎用，避免大面积使用。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "红花油",
   "note": "",
   "icon": "🌸",
   "use": "外用活血止痛（扭伤、酸痛）",
   "py": [
    "honghuayou",
    "zhenghonghuayou",
    "wanhuayou"
   ],
   "pyi": [
    "hhy",
    "zhhy",
    "why"
   ]
  },
  {
   "name": "指甲油/美甲产品",
   "en": "Nail polish / Artificial nails",
   "risk": "caution",
   "category": "household",
   "aliases": [
    "指甲油",
    "美甲",
    "甲油胶",
    "光疗胶"
   ],
   "summary": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用或避免。",
   "detail": "含甲苯、甲醛、邻苯二甲酸酯等有机溶剂，长期或大量接触建议谨慎；优先选成分标注清晰的产品。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "指甲油/美甲产品",
   "note": "",
   "icon": "🧴",
   "use": "美甲（含有机溶剂）",
   "py": [
    "zhijiayoumeijiachanpin",
    "zhijiayou",
    "meijia",
    "jiayoujiao",
    "guangliaojiao"
   ],
   "pyi": [
    "zjymjcp",
    "zjy",
    "mj",
    "jyj",
    "glj"
   ]
  },
  {
   "name": "高锰酸钾",
   "en": "Potassium permanganate",
   "risk": "caution",
   "category": "household",
   "aliases": [
    "PP粉",
    "灰锰氧"
   ],
   "summary": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用或避免。",
   "detail": "强氧化剂，外用于消毒/坐浴须严格按说明稀释；误服或高浓度有风险，妥善保管远离儿童。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "高锰酸钾",
   "note": "",
   "icon": "🟣",
   "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27120%27%20height%3D%27120%27%20viewBox%3D%270%200%20120%20120%27%3E%3Crect%20x%3D%272%27%20y%3D%272%27%20width%3D%27116%27%20height%3D%27116%27%20rx%3D%2718%27%20fill%3D%27%23f3e8fb%27%20stroke%3D%27%236a1b9a%27%20stroke-opacity%3D%270.25%27%2F%3E%3Ctext%20x%3D%2760%27%20y%3D%2770%27%20font-size%3D%2754%27%20text-anchor%3D%27middle%27%3E%F0%9F%9F%A3%3C%2Ftext%3E%3Ctext%20x%3D%2760%27%20y%3D%27104%27%20font-size%3D%2713%27%20text-anchor%3D%27middle%27%20fill%3D%27%236a1b9a%27%20font-family%3D%27PingFang%20SC%2CMicrosoft%20YaHei%2Csans-serif%27%3E%E9%AB%98%E9%94%B0%E9%85%B8%E9%92%BE%3C%2Ftext%3E%3C%2Fsvg%3E",
   "use": "外用消毒、坐浴（需稀释）",
   "py": [
    "gaomengsuanjia",
    "fen",
    "huimengyang"
   ],
   "pyi": [
    "gmsj",
    "f",
    "hmy"
   ]
  },
  {
   "name": "香薰/精油（薄荷脑·樟脑类）",
   "en": "Aromatherapy oils (menthol/camphor)",
   "risk": "caution",
   "category": "household",
   "aliases": [
    "精油",
    "香薰",
    "薄荷精油",
    "樟脑精油",
    "尤加利精油"
   ],
   "summary": "可能具氧化应激风险或证据有限，需在医生/药师评估后慎用或避免。",
   "detail": "含薄荷脑、樟脑、桉叶油等的精油对 G6PD 缺乏者具风险，尤其避免婴幼儿吸入/涂抹；普通薰衣草、甜橙等相对温和但大面积使用仍建议谨慎。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "香薰/精油（薄荷脑·樟脑类）",
   "note": "",
   "icon": "🧴",
   "use": "香薰、扩香",
   "py": [
    "xiangxunjingyoubohenaozhangnaolei",
    "jingyou",
    "xiangxun",
    "bohejingyou",
    "zhangnaojingyou",
    "youjialijingyou"
   ],
   "pyi": [
    "xxjybhnznl",
    "jy",
    "xx",
    "bhjy",
    "znjy",
    "yjljy"
   ]
  },
  {
   "name": "夹竹桃",
   "en": "Oleander (Nerium oleander)",
   "risk": "info",
   "category": "plant",
   "aliases": [
    "夹竹桃叶",
    "柳叶桃"
   ],
   "summary": "观赏/家养植物；主要风险是自身毒性，非 G6PD 溶血。",
   "detail": "该植物主要风险并非 G6PD 溶血，而是自身毒性（误食/接触可中毒）；蚕豆病患儿亦应避免接触与误食，出现口唇麻木、呕吐、心慌等立即就医。 具体毒性：含强心苷，极少量即可致严重心律失常甚至死亡，全株剧毒。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "夹竹桃",
   "note": "",
   "icon": "🌸",
   "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27120%27%20height%3D%27120%27%20viewBox%3D%270%200%20120%20120%27%3E%3Crect%20x%3D%272%27%20y%3D%272%27%20width%3D%27116%27%20height%3D%27116%27%20rx%3D%2718%27%20fill%3D%27%23fdeef2%27%20stroke%3D%27%23c2185b%27%20stroke-opacity%3D%270.25%27%2F%3E%3Ctext%20x%3D%2760%27%20y%3D%2770%27%20font-size%3D%2754%27%20text-anchor%3D%27middle%27%3E%F0%9F%8C%B8%3C%2Ftext%3E%3Ctext%20x%3D%2760%27%20y%3D%27104%27%20font-size%3D%2713%27%20text-anchor%3D%27middle%27%20fill%3D%27%23c2185b%27%20font-family%3D%27PingFang%20SC%2CMicrosoft%20YaHei%2Csans-serif%27%3E%E5%A4%B9%E7%AB%B9%E6%A1%83%3C%2Ftext%3E%3C%2Fsvg%3E",
   "use": "观赏植物（全株有毒，主要非 G6PD 风险）",
   "py": [
    "jiazhutao",
    "jiazhutaoye",
    "liuyetao"
   ],
   "pyi": [
    "jzt",
    "jzty",
    "lyt"
   ]
  },
  {
   "name": "水仙",
   "en": "Daffodil / Narcissus",
   "risk": "info",
   "category": "plant",
   "aliases": [
    "水仙花",
    "凌波仙子"
   ],
   "summary": "观赏/家养植物；主要风险是自身毒性，非 G6PD 溶血。",
   "detail": "该植物主要风险并非 G6PD 溶血，而是自身毒性（误食/接触可中毒）；蚕豆病患儿亦应避免接触与误食，出现口唇麻木、呕吐、心慌等立即就医。 具体毒性：鳞茎含石蒜碱等生物碱，误食致呕吐、腹泻、惊厥。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "水仙",
   "note": "",
   "icon": "🌸",
   "use": "观赏植物（鳞茎有毒）",
   "py": [
    "shuixian",
    "shuixianhua",
    "lingboxianzi"
   ],
   "pyi": [
    "sx",
    "sxh",
    "lbxz"
   ]
  },
  {
   "name": "石蒜",
   "en": "Lycoris radiata",
   "risk": "info",
   "category": "plant",
   "aliases": [
    "红花石蒜",
    "彼岸花"
   ],
   "summary": "观赏/家养植物；主要风险是自身毒性，非 G6PD 溶血。",
   "detail": "该植物主要风险并非 G6PD 溶血，而是自身毒性（误食/接触可中毒）；蚕豆病患儿亦应避免接触与误食，出现口唇麻木、呕吐、心慌等立即就医。 具体毒性：含石蒜碱、加兰他敏类生物碱，误食致呕吐、惊厥。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "石蒜",
   "note": "",
   "icon": "🌱",
   "use": "观赏植物（有毒）",
   "py": [
    "shisuan",
    "honghuashisuan",
    "bianhua"
   ],
   "pyi": [
    "ss",
    "hhss",
    "bah"
   ]
  },
  {
   "name": "郁金香",
   "en": "Tulip",
   "risk": "info",
   "category": "plant",
   "aliases": [
    "郁金香花"
   ],
   "summary": "观赏/家养植物；主要风险是自身毒性，非 G6PD 溶血。",
   "detail": "该植物主要风险并非 G6PD 溶血，而是自身毒性（误食/接触可中毒）；蚕豆病患儿亦应避免接触与误食，出现口唇麻木、呕吐、心慌等立即就医。 具体毒性：鳞茎含郁金香苷，接触致「郁金香指」皮炎，误食不适。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "郁金香",
   "note": "",
   "icon": "🌱",
   "use": "观赏植物（球茎有轻微毒性）",
   "py": [
    "yujinxiang",
    "yujinxianghua"
   ],
   "pyi": [
    "yjx",
    "yjxh"
   ]
  },
  {
   "name": "滴水观音/海芋",
   "en": "Alocasia / Elephant ear",
   "risk": "info",
   "category": "plant",
   "aliases": [
    "海芋",
    "广东狼毒"
   ],
   "summary": "观赏/家养植物；主要风险是自身毒性，非 G6PD 溶血。",
   "detail": "该植物主要风险并非 G6PD 溶血，而是自身毒性（误食/接触可中毒）；蚕豆病患儿亦应避免接触与误食，出现口唇麻木、呕吐、心慌等立即就医。 具体毒性：汁液含草酸钙针晶，误食/沾肤致剧烈刺痛、肿胀。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "滴水观音/海芋",
   "note": "",
   "icon": "🌱",
   "use": "观赏植物（汁液有毒）",
   "py": [
    "dishuiguanyinhaiyu",
    "haiyu",
    "guangdonglangdu"
   ],
   "pyi": [
    "dsgyhy",
    "hy",
    "gdld"
   ]
  },
  {
   "name": "绿萝/黄金葛",
   "en": "Pothos / Epipremnum",
   "risk": "info",
   "category": "plant",
   "aliases": [
    "黄金葛"
   ],
   "summary": "观赏/家养植物；主要风险是自身毒性，非 G6PD 溶血。",
   "detail": "该植物主要风险并非 G6PD 溶血，而是自身毒性（误食/接触可中毒）；蚕豆病患儿亦应避免接触与误食，出现口唇麻木、呕吐、心慌等立即就医。 具体毒性：含草酸钙针晶，宠物与幼儿误食致口腔灼伤。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "绿萝/黄金葛",
   "note": "",
   "icon": "🌱",
   "use": "观赏植物（汁液有刺激性）",
   "py": [
    "lvluohuangjinge",
    "huangjinge"
   ],
   "pyi": [
    "llhjg",
    "hjg"
   ]
  },
  {
   "name": "万年青/黛粉叶",
   "en": "Dieffenbachia",
   "risk": "info",
   "category": "plant",
   "aliases": [
    "黛粉叶",
    "粗肋草"
   ],
   "summary": "观赏/家养植物；主要风险是自身毒性，非 G6PD 溶血。",
   "detail": "该植物主要风险并非 G6PD 溶血，而是自身毒性（误食/接触可中毒）；蚕豆病患儿亦应避免接触与误食，出现口唇麻木、呕吐、心慌等立即就医。 具体毒性：含草酸钙针晶，误食致口腔肿胀、流涎。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "万年青/黛粉叶",
   "note": "",
   "icon": "🌱",
   "use": "观赏植物（汁液有毒）",
   "py": [
    "wannianqingdaifenye",
    "daifenye",
    "culecao"
   ],
   "pyi": [
    "wnqdfy",
    "dfy",
    "clc"
   ]
  },
  {
   "name": "曼陀罗",
   "en": "Datura / Thorn apple",
   "risk": "info",
   "category": "plant",
   "aliases": [
    "洋金花",
    "醉仙桃"
   ],
   "summary": "观赏/家养植物；主要风险是自身毒性，非 G6PD 溶血。",
   "detail": "该植物主要风险并非 G6PD 溶血，而是自身毒性（误食/接触可中毒）；蚕豆病患儿亦应避免接触与误食，出现口唇麻木、呕吐、心慌等立即就医。 具体毒性：含莨菪碱类，误食致幻觉、口干、高热、昏迷，剧毒。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "曼陀罗",
   "note": "",
   "icon": "🌱",
   "use": "野生/观赏植物（全株有毒）",
   "py": [
    "mantuoluo",
    "yangjinhua",
    "zuixiantao"
   ],
   "pyi": [
    "mtl",
    "yjh",
    "zxt"
   ]
  },
  {
   "name": "蓖麻",
   "en": "Castor bean (Ricinus)",
   "risk": "info",
   "category": "plant",
   "aliases": [
    "蓖麻子"
   ],
   "summary": "观赏/家养植物；主要风险是自身毒性，非 G6PD 溶血。",
   "detail": "该植物主要风险并非 G6PD 溶血，而是自身毒性（误食/接触可中毒）；蚕豆病患儿亦应避免接触与误食，出现口唇麻木、呕吐、心慌等立即就医。 具体毒性：种子含蓖麻毒蛋白（ricin），微量即可致肝肾功能衰竭，剧毒。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "蓖麻",
   "note": "",
   "icon": "🌱",
   "use": "植物（种子含蓖麻毒素）",
   "py": [
    "bima",
    "bimazi"
   ],
   "pyi": [
    "bm",
    "bmz"
   ]
  },
  {
   "name": "相思豆/相思子",
   "en": "Abrus precatorius / Rosary pea",
   "risk": "info",
   "category": "plant",
   "aliases": [
    "鸡母珠",
    "美人豆"
   ],
   "summary": "观赏/家养植物；主要风险是自身毒性，非 G6PD 溶血。",
   "detail": "该植物主要风险并非 G6PD 溶血，而是自身毒性（误食/接触可中毒）；蚕豆病患儿亦应避免接触与误食，出现口唇麻木、呕吐、心慌等立即就医。 具体毒性：种子含相思豆毒蛋白（abrin），嚼碎吞下可致死，剧毒。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "相思豆/相思子",
   "note": "",
   "icon": "🌱",
   "use": "植物（种子有毒）",
   "py": [
    "xiangsidouxiangsizi",
    "jimuzhu",
    "meirendou"
   ],
   "pyi": [
    "xsdxsz",
    "jmz",
    "mrd"
   ]
  },
  {
   "name": "苏铁/铁树",
   "en": "Cycas",
   "risk": "info",
   "category": "plant",
   "aliases": [
    "铁树",
    "凤尾蕉"
   ],
   "summary": "观赏/家养植物；主要风险是自身毒性，非 G6PD 溶血。",
   "detail": "该植物主要风险并非 G6PD 溶血，而是自身毒性（误食/接触可中毒）；蚕豆病患儿亦应避免接触与误食，出现口唇麻木、呕吐、心慌等立即就医。 具体毒性：种子与茎髓含苏铁苷，长期/大量致肝损伤，有致癌风险。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "苏铁/铁树",
   "note": "",
   "icon": "🌱",
   "use": "观赏植物（种子有毒）",
   "py": [
    "sutietieshu",
    "tieshu",
    "fengweijiao"
   ],
   "pyi": [
    "stts",
    "ts",
    "fwj"
   ]
  },
  {
   "name": "马缨丹/五色梅",
   "en": "Lantana",
   "risk": "info",
   "category": "plant",
   "aliases": [
    "五色梅",
    "七变花"
   ],
   "summary": "观赏/家养植物；主要风险是自身毒性，非 G6PD 溶血。",
   "detail": "该植物主要风险并非 G6PD 溶血，而是自身毒性（误食/接触可中毒）；蚕豆病患儿亦应避免接触与误食，出现口唇麻木、呕吐、心慌等立即就医。 具体毒性：叶与未熟果含马缨丹烯，误食致肝损伤、光敏。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "马缨丹/五色梅",
   "note": "",
   "icon": "🌱",
   "use": "观赏植物（有毒）",
   "py": [
    "mayingdanwusemei",
    "wusemei",
    "qibianhua"
   ],
   "pyi": [
    "mydwsm",
    "wsm",
    "qbh"
   ]
  },
  {
   "name": "含羞草",
   "en": "Mimosa / Sensitive plant",
   "risk": "info",
   "category": "plant",
   "aliases": [
    "知羞草"
   ],
   "summary": "观赏/家养植物；主要风险是自身毒性，非 G6PD 溶血。",
   "detail": "该植物主要风险并非 G6PD 溶血，而是自身毒性（误食/接触可中毒）；蚕豆病患儿亦应避免接触与误食，出现口唇麻木、呕吐、心慌等立即就医。 具体毒性：含含羞草碱，长期接触/饲养可能致脱发、影响甲状腺。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "含羞草",
   "note": "",
   "icon": "🌱",
   "use": "观赏植物（含含羞草碱）",
   "py": [
    "hanxiucao",
    "zhixiucao"
   ],
   "pyi": [
    "hxc",
    "zxc"
   ]
  },
  {
   "name": "罂粟/虞美人",
   "en": "Poppy (Papaver)",
   "risk": "info",
   "category": "plant",
   "aliases": [
    "虞美人",
    "鸦片花"
   ],
   "summary": "观赏/家养植物；主要风险是自身毒性，非 G6PD 溶血。",
   "detail": "该植物主要风险并非 G6PD 溶血，而是自身毒性（误食/接触可中毒）；蚕豆病患儿亦应避免接触与误食，出现口唇麻木、呕吐、心慌等立即就医。 具体毒性：含吗啡类生物碱，非法种植；果实/汁液具成瘾与中毒风险。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "罂粟/虞美人",
   "note": "",
   "icon": "🌱",
   "use": "观赏植物（罂粟含生物碱）",
   "py": [
    "yingsuyumeiren",
    "yumeiren",
    "yapianhua"
   ],
   "pyi": [
    "ysymr",
    "ymr",
    "yph"
   ]
  },
  {
   "name": "油漆/涂料（含苯系溶剂）",
   "en": "Paint / Coatings (benzene solvents)",
   "risk": "caution",
   "category": "occupational",
   "aliases": [
    "油漆",
    "涂料",
    "乳胶漆(含溶剂)",
    "木器漆"
   ],
   "summary": "与 G6PD 相关的一般性提示。",
   "detail": "油漆、稀释剂常含苯、甲苯、二甲苯等芳香族溶剂，长期吸入可损害造血系统；作业人员注意通风与防护，孕妇及儿童远离施工现场。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "油漆/涂料（含苯系溶剂）",
   "note": "",
   "icon": "⚠️",
   "use": "装修、工业涂装",
   "py": [
    "youqituliaohanbenxirongji",
    "youqi",
    "tuliao",
    "rujiaoqihanrongji",
    "muqiqi"
   ],
   "pyi": [
    "yqtlhbxrj",
    "yq",
    "tl",
    "rjqhrj",
    "mqq"
   ]
  },
  {
   "name": "对苯二胺（染发剂成分/PPD）",
   "en": "p-Phenylenediamine (PPD)",
   "risk": "caution",
   "category": "occupational",
   "aliases": [
    "PPD",
    "染发剂成分",
    "乌尔丝"
   ],
   "summary": "与 G6PD 相关的一般性提示。",
   "detail": "对苯二胺是氧化型染发剂主要成分，可致严重接触性皮炎，少数个案报道溶血；染发前做皮肤试验，蚕豆病者慎用，避免染发剂接触头皮破损处。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "对苯二胺（染发剂成分/PPD）",
   "note": "",
   "icon": "⚠️",
   "use": "染发剂主要成分",
   "py": [
    "duibeneranranfajichengfen",
    "ranfajichengfen",
    "wuersi"
   ],
   "pyi": [
    "dbearfjcf",
    "rfjcf",
    "wes"
   ]
  },
  {
   "name": "橡胶防老剂（防老剂D/4010NA等）",
   "en": "Rubber antioxidants",
   "risk": "caution",
   "category": "occupational",
   "aliases": [
    "防老剂D",
    "防老剂甲",
    "4010NA",
    "IPPD",
    "防老剂A"
   ],
   "summary": "与 G6PD 相关的一般性提示。",
   "detail": "橡胶制品（轮胎、胶管、手套）常用芳胺类防老剂（如防老剂D、4010NA），部分具氧化应激与泌尿/血液系统风险；相关行业人员注意防护。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "橡胶防老剂（防老剂D/4010NA等）",
   "note": "",
   "icon": "⚠️",
   "use": "橡胶工业添加剂",
   "py": [
    "xiangjiaofanglaojifanglaojideng",
    "fanglaoji",
    "fanglaojijia"
   ],
   "pyi": [
    "xjfljfljd",
    "flj",
    "fljj"
   ]
  },
  {
   "name": "苯胺及其衍生物",
   "en": "Aniline & derivatives",
   "risk": "caution",
   "category": "occupational",
   "aliases": [
    "苯胺",
    "邻甲苯胺",
    "对氯苯胺",
    "联苯胺"
   ],
   "summary": "与 G6PD 相关的一般性提示。",
   "detail": "苯胺类芳香胺可诱发高铁血红蛋白血症与氧化溶血，属职业性血液毒物；接触后注意监测尿色与血象。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "苯胺及其衍生物",
   "note": "",
   "icon": "⚠️",
   "use": "染料、化工原料",
   "py": [
    "benanjiqiyanshengwu",
    "benan",
    "linjiabenan",
    "duilvbenan",
    "lianbenan"
   ],
   "pyi": [
    "bajqysw",
    "ba",
    "ljba",
    "dlba",
    "lba"
   ]
  },
  {
   "name": "氢醌/对苯二酚",
   "en": "Hydroquinone",
   "risk": "caution",
   "category": "occupational",
   "aliases": [
    "对苯二酚",
    "氢醌",
    "照相显影剂"
   ],
   "summary": "与 G6PD 相关的一般性提示。",
   "detail": "氢醌为强氧化剂，皮肤外用（美白）与职业接触在 G6PD 缺乏者中有溶血风险；避免大面积/长期外用含氢醌产品。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "氢醌/对苯二酚",
   "note": "",
   "icon": "⚠️",
   "use": "美白、摄影显影、化工原料",
   "py": [
    "qingkunduibenerfen",
    "duibenerfen",
    "qingkun",
    "zhaoxiangxianyingji"
   ],
   "pyi": [
    "qkdbef",
    "dbef",
    "qk",
    "zxxyj"
   ]
  },
  {
   "name": "硝基苯",
   "en": "Nitrobenzene",
   "risk": "caution",
   "category": "occupational",
   "aliases": [
    "硝基苯",
    "密斑油"
   ],
   "summary": "与 G6PD 相关的一般性提示。",
   "detail": "硝基苯可经皮肤吸收致高铁血红蛋白血症与溶血，属职业中毒物；注意防护。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "硝基苯",
   "note": "",
   "icon": "⚠️",
   "use": "化工原料、溶剂",
   "py": [
    "xiaojiben",
    "mibanyou"
   ],
   "pyi": [
    "xjb",
    "mby"
   ]
  },
  {
   "name": "天那水/香蕉水（稀释剂）",
   "en": "Thinner / Banana oil",
   "risk": "caution",
   "category": "occupational",
   "aliases": [
    "天那水",
    "香蕉水",
    "松香水",
    "油漆稀释剂"
   ],
   "summary": "与 G6PD 相关的一般性提示。",
   "detail": "含甲苯、二甲苯、丙酮等，挥发气体长期吸入损害神经与造血；施工通风、戴口罩。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "天那水/香蕉水（稀释剂）",
   "note": "",
   "icon": "⚠️",
   "use": "油漆稀释剂",
   "py": [
    "tiannashuixiangjiaoshuixishiji",
    "tiannashui",
    "xiangjiaoshui",
    "songxiangshui",
    "youqixishiji"
   ],
   "pyi": [
    "tnsxjsxsj",
    "tns",
    "xjs",
    "sxs",
    "yqxsj"
   ]
  },
  {
   "name": "农药/杀虫剂（百草枯/有机磷等）",
   "en": "Pesticides / Insecticides",
   "risk": "info",
   "category": "occupational",
   "aliases": [
    "百草枯",
    "有机磷",
    "敌敌畏",
    "杀虫剂"
   ],
   "summary": "与 G6PD 相关的一般性提示。",
   "detail": "农药主要风险是急性中毒（百草枯致肺纤维化、有机磷致胆碱能危象），并非 G6PD 溶血；但任何中毒都应在正规医院处理，就诊时主动告知蚕豆病史。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "农药/杀虫剂（百草枯/有机磷等）",
   "note": "",
   "icon": "⚠️",
   "use": "农业杀虫",
   "py": [
    "nongyaoshachongjibaicaokuyoujilindeng",
    "baicaoku",
    "youjilin",
    "didiwei",
    "shachongji"
   ],
   "pyi": [
    "nyscjbckyjld",
    "bck",
    "yjl",
    "ddw",
    "scj"
   ]
  },
  {
   "name": "印刷油墨",
   "en": "Printing ink",
   "risk": "info",
   "category": "occupational",
   "aliases": [
    "油墨",
    "印刷油",
    "报纸油墨"
   ],
   "summary": "与 G6PD 相关的一般性提示。",
   "detail": "油墨含溶剂与少量重金属，长期职业接触注意通风防护；主要风险非 G6PD 溶血。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "id": "印刷油墨",
   "note": "",
   "icon": "⚠️",
   "use": "印刷、包装",
   "py": [
    "yinshuayoumo",
    "youmo",
    "yinshuayou",
    "baozhiyoumo"
   ],
   "pyi": [
    "ysym",
    "ym",
    "ysy",
    "bzym"
   ]
  },
  {
   "id": "ped_analgesic",
   "name": "小儿氨酚黄那敏颗粒",
   "en": "Pediatric Paracetamol/CPM",
   "risk": "caution",
   "category": "other_drug",
   "aliases": [
    "小儿氨酚黄那敏",
    "护彤"
   ],
   "ingredients": [
    "对乙酰氨基酚",
    "马来酸氯苯那敏",
    "人工牛黄"
   ],
   "summary": "小儿常用复方感冒药，成分须逐条核对。",
   "detail": "本品为中西药复方，下方已按成分逐条比对禁忌库；具体以说明书为准，用药前咨询医师或药师。",
   "note": "含人工牛黄（牛黄在 G6PD 禁忌名单中）。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "icon": "💊",
   "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27120%27%20height%3D%27120%27%20viewBox%3D%270%200%20120%20120%27%3E%3Crect%20x%3D%272%27%20y%3D%272%27%20width%3D%27116%27%20height%3D%27116%27%20rx%3D%2718%27%20fill%3D%27%23eaf6eb%27%20stroke%3D%27%232e7d32%27%20stroke-opacity%3D%270.25%27%2F%3E%3Ctext%20x%3D%2760%27%20y%3D%2770%27%20font-size%3D%2754%27%20text-anchor%3D%27middle%27%3E%F0%9F%92%8A%3C%2Ftext%3E%3Ctext%20x%3D%2760%27%20y%3D%27104%27%20font-size%3D%2713%27%20text-anchor%3D%27middle%27%20fill%3D%27%232e7d32%27%20font-family%3D%27PingFang%20SC%2CMicrosoft%20YaHei%2Csans-serif%27%3E%E5%B0%8F%E5%84%BF%E6%B0%A8%E9%85%9A%E9%BB%84%E9%82%A3%E6%95%8F%3C%2Ftext%3E%3C%2Fsvg%3E",
   "use": "儿童复方感冒药（退烧+抗过敏+缓解鼻塞）",
   "py": [
    "xiaoeranfenhuangnaminkeli",
    "xiaoeranfenhuangnamin",
    "hutong"
   ],
   "pyi": [
    "xeafhnmkl",
    "xeafhnm",
    "ht"
   ]
  },
  {
   "id": "amantadine_complex",
   "name": "氨酚烷胺类（快克/感康）",
   "en": "Paracetamol/Amantadine",
   "risk": "caution",
   "category": "other_drug",
   "aliases": [
    "快克",
    "感康",
    "氨酚烷胺胶囊",
    "复方氨酚烷胺片"
   ],
   "ingredients": [
    "对乙酰氨基酚",
    "盐酸金刚烷胺",
    "咖啡因",
    "马来酸氯苯那敏",
    "人工牛黄"
   ],
   "summary": "复方感冒药，成分须逐条核对。",
   "detail": "本品为复方，下方已按成分逐条比对禁忌库；具体以说明书为准，用药前咨询医师或药师。",
   "note": "含人工牛黄（牛黄在 G6PD 禁忌名单中）。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "icon": "💊",
   "use": "复方感冒药（退烧+抗病毒+抗过敏）",
   "py": [
    "anfenwananleikuaikegankang",
    "kuaike",
    "gankang",
    "anfenwananjiaonang",
    "fufanganfenwananpian"
   ],
   "pyi": [
    "afwalkkgk",
    "kk",
    "gk",
    "afwajn",
    "ffafwap"
   ]
  },
  {
   "id": "tylenol_complex",
   "name": "酚麻美敏（泰诺）",
   "en": "Tylenol Cold (APAP/PSE/DM/CPM)",
   "risk": "caution",
   "category": "other_drug",
   "aliases": [
    "泰诺",
    "酚麻美敏片",
    "泰诺感冒片"
   ],
   "ingredients": [
    "对乙酰氨基酚",
    "伪麻黄碱",
    "氢溴酸右美沙芬",
    "马来酸氯苯那敏"
   ],
   "summary": "复方感冒药，成分须逐条核对。",
   "detail": "本品为复方，下方已按成分逐条比对禁忌库；具体以说明书为准，用药前咨询医师或药师。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "note": "",
   "icon": "💊",
   "use": "复方感冒药（退烧+止咳+缓解鼻塞）",
   "py": [
    "fenmameimintainuo",
    "tainuo",
    "fenmameiminpian",
    "tainuoganmaopian"
   ],
   "pyi": [
    "fmmmtn",
    "tn",
    "fmmmp",
    "tngmp"
   ]
  },
  {
   "id": "vitc_yin",
   "name": "维C银翘片",
   "en": "VC Yinqiao tablet",
   "risk": "caution",
   "category": "other_drug",
   "aliases": [
    "维C银翘",
    "VC银翘片"
   ],
   "ingredients": [
    "对乙酰氨基酚",
    "维生素C",
    "马来酸氯苯那敏",
    "金银花",
    "连翘"
   ],
   "summary": "复方中成药，含西药成分，须逐条核对禁忌。",
   "detail": "本品为中西药复方，下方已按成分逐条比对禁忌库；具体以说明书为准，用药前咨询医师或药师。",
   "note": "金银花、连翘在 G6PD 禁忌名单中，含这些成分的复方须特别留意。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "icon": "💊",
   "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27120%27%20height%3D%27120%27%20viewBox%3D%270%200%20120%20120%27%3E%3Crect%20x%3D%272%27%20y%3D%272%27%20width%3D%27116%27%20height%3D%27116%27%20rx%3D%2718%27%20fill%3D%27%23fff7e0%27%20stroke%3D%27%23b26a00%27%20stroke-opacity%3D%270.25%27%2F%3E%3Ctext%20x%3D%2760%27%20y%3D%2770%27%20font-size%3D%2754%27%20text-anchor%3D%27middle%27%3E%F0%9F%92%8A%3C%2Ftext%3E%3Ctext%20x%3D%2760%27%20y%3D%27104%27%20font-size%3D%2713%27%20text-anchor%3D%27middle%27%20fill%3D%27%23b26a00%27%20font-family%3D%27PingFang%20SC%2CMicrosoft%20YaHei%2Csans-serif%27%3E%E7%BB%B4C%E9%93%B6%E7%BF%98%E7%89%87%3C%2Ftext%3E%3C%2Fsvg%3E",
   "use": "中成药复方感冒药（含维生素C、银翘）",
   "py": [
    "weiyinqiaopian",
    "weiyinqiao",
    "yinqiaopian"
   ],
   "pyi": [
    "wyqp",
    "wyq",
    "yqp"
   ]
  },
  {
   "id": "baijiahei",
   "name": "白加黑",
   "en": "Baijiahei (day/night)",
   "risk": "caution",
   "category": "other_drug",
   "aliases": [
    "氨酚伪麻美芬片",
    "氨酚美芬伪麻片"
   ],
   "ingredients": [
    "对乙酰氨基酚",
    "盐酸伪麻黄碱",
    "氢溴酸右美沙芬",
    "苯海拉明"
   ],
   "summary": "复方感冒药（日/夜片），成分须逐条核对。",
   "detail": "本品为复方，下方已按成分逐条比对禁忌库；具体以说明书为准，用药前咨询医师或药师。",
   "controversy": false,
   "sources": [
    "S1",
    "S4",
    "S7"
   ],
   "note": "",
   "icon": "💊",
   "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27120%27%20height%3D%27120%27%20viewBox%3D%270%200%20120%20120%27%3E%3Crect%20x%3D%272%27%20y%3D%272%27%20width%3D%27116%27%20height%3D%27116%27%20rx%3D%2718%27%20fill%3D%27%23e8f1fb%27%20stroke%3D%27%231565c0%27%20stroke-opacity%3D%270.25%27%2F%3E%3Ctext%20x%3D%2760%27%20y%3D%2770%27%20font-size%3D%2754%27%20text-anchor%3D%27middle%27%3E%F0%9F%92%8A%3C%2Ftext%3E%3Ctext%20x%3D%2760%27%20y%3D%27104%27%20font-size%3D%2713%27%20text-anchor%3D%27middle%27%20fill%3D%27%231565c0%27%20font-family%3D%27PingFang%20SC%2CMicrosoft%20YaHei%2Csans-serif%27%3E%E7%99%BD%E5%8A%A0%E9%BB%91%3C%2Ftext%3E%3C%2Fsvg%3E",
   "use": "复方感冒药（日用/夜用）",
   "py": [
    "baijiahei",
    "anfenweimameifenpian",
    "anfenmeifenweimapian"
   ],
   "pyi": [
    "bjh",
    "afwmmfp",
    "afmfwmp"
   ]
  },
  {
   "id": "gap_苯唑西林",
   "name": "苯唑西林",
   "risk": "safe",
   "category": "antibiotic_other",
   "summary": "属于青霉素类（耐酶），目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "耐酶青霉素（金黄色葡萄球菌感染）",
   "py": [
    "benzuoxilin"
   ],
   "pyi": [
    "bzxl"
   ]
  },
  {
   "id": "gap_美洛西林",
   "name": "美洛西林",
   "risk": "safe",
   "category": "antibiotic_other",
   "summary": "属于青霉素类（广谱），目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "广谱青霉素（重症感染）",
   "py": [
    "meiluoxilin"
   ],
   "pyi": [
    "mlxl"
   ]
  },
  {
   "id": "gap_头孢唑林",
   "name": "头孢唑林",
   "risk": "safe",
   "category": "antibiotic_other",
   "summary": "属于头孢菌素（一代），目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "一代头孢（手术预防、皮肤感染）",
   "py": [
    "toubaozuolin"
   ],
   "pyi": [
    "tbzl"
   ]
  },
  {
   "id": "gap_头孢西丁",
   "name": "头孢西丁",
   "risk": "safe",
   "category": "antibiotic_other",
   "summary": "属于头孢菌素（二代/头霉素），目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "头霉素类（厌氧菌、混合感染）",
   "py": [
    "toubaoxiding"
   ],
   "pyi": [
    "tbxd"
   ]
  },
  {
   "id": "gap_头孢孟多",
   "name": "头孢孟多",
   "risk": "safe",
   "category": "antibiotic_other",
   "summary": "属于头孢菌素（二代），目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "二代头孢（呼吸道、皮肤感染）",
   "py": [
    "toubaomengduo"
   ],
   "pyi": [
    "tbmd"
   ]
  },
  {
   "id": "gap_头孢硫脒",
   "name": "头孢硫脒",
   "risk": "safe",
   "category": "antibiotic_other",
   "summary": "属于头孢菌素（一代），目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "一代头孢（呼吸道、皮肤感染）",
   "py": [
    "toubaoliumi"
   ],
   "pyi": [
    "tblm"
   ]
  },
  {
   "id": "gap_乙酰螺旋霉素",
   "name": "乙酰螺旋霉素",
   "risk": "safe",
   "category": "antibiotic_other",
   "summary": "属于大环内酯类，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "大环内酯类（呼吸道、口腔感染）",
   "py": [
    "yixianluoxuanmeisu"
   ],
   "pyi": [
    "yxlxms"
   ]
  },
  {
   "id": "gap_麦迪霉素",
   "name": "麦迪霉素",
   "risk": "safe",
   "category": "antibiotic_other",
   "summary": "属于大环内酯类，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "大环内酯类（呼吸道、皮肤感染）",
   "py": [
    "maidimeisu"
   ],
   "pyi": [
    "mdms"
   ]
  },
  {
   "id": "gap_依替米星",
   "name": "依替米星",
   "risk": "safe",
   "category": "antibiotic_other",
   "summary": "属于氨基糖苷类，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "氨基糖苷类（呼吸道、尿路感染）",
   "py": [
    "yitimixing"
   ],
   "pyi": [
    "ytmx"
   ]
  },
  {
   "id": "gap_奈替米星",
   "name": "奈替米星",
   "risk": "safe",
   "category": "antibiotic_other",
   "summary": "属于氨基糖苷类，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "氨基糖苷类（重症感染）",
   "py": [
    "naitimixing"
   ],
   "pyi": [
    "ntmx"
   ]
  },
  {
   "id": "gap_土霉素",
   "name": "土霉素",
   "risk": "safe",
   "category": "antibiotic_other",
   "summary": "属于四环素类，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "四环素类（肠道、皮肤感染）",
   "py": [
    "tumeisu"
   ],
   "pyi": [
    "tms"
   ]
  },
  {
   "id": "gap_洛美沙星",
   "name": "洛美沙星",
   "risk": "safe",
   "category": "antibiotic_other",
   "summary": "属于氟喹诺酮类，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "喹诺酮类（尿路、呼吸道感染）",
   "py": [
    "luomeishaxing"
   ],
   "pyi": [
    "lmsx"
   ]
  },
  {
   "id": "gap_奥硝唑",
   "name": "奥硝唑",
   "risk": "safe",
   "category": "antibiotic_other",
   "summary": "属于硝基咪唑类，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗厌氧菌、抗滴虫（妇科、口腔、肠道感染）",
   "py": [
    "aoxiaozuo"
   ],
   "pyi": [
    "axz"
   ]
  },
  {
   "id": "gap_吡罗昔康",
   "name": "吡罗昔康",
   "risk": "caution",
   "category": "analgesic",
   "summary": "吡罗昔康属非甾体抗炎药（NSAID）。",
   "detail": "NSAID 可能抑制血小板、个别人群存在氧化应激顾虑，部分 G6PD 资料将其列为慎用。",
   "note": "急性发作期或感染发热时，优先咨询医生；可用对乙酰氨基酚作为更稳妥的退热选择。",
   "controversy": true,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "长效抗炎镇痛（关节炎）",
   "py": [
    "biluoxikang"
   ],
   "pyi": [
    "blxk"
   ]
  },
  {
   "id": "gap_尼美舒利",
   "name": "尼美舒利",
   "risk": "caution",
   "category": "analgesic",
   "summary": "尼美舒利属非甾体抗炎药（NSAID），儿童使用受限。",
   "detail": "与多数 NSAID 类似，存在氧化应激顾虑，部分资料列为慎用；且儿童应用本身受限制。",
   "note": "退热止痛优先选对乙酰氨基酚；尼美舒利不建议用于儿童。",
   "controversy": true,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗炎镇痛（曾用于儿童退烧，现已限制）",
   "py": [
    "nimeishuli"
   ],
   "pyi": [
    "nmsl"
   ]
  },
  {
   "id": "gap_瑞巴派特",
   "name": "瑞巴派特",
   "risk": "safe",
   "category": "analgesic",
   "summary": "瑞巴派特是胃黏膜保护剂，非 NSAID。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7"
   ],
   "aliases": [],
   "use": "胃黏膜保护剂（胃溃疡、胃炎）",
   "py": [
    "ruibapaite"
   ],
   "pyi": [
    "rbpt"
   ]
  },
  {
   "id": "gap_金刚烷胺",
   "name": "金刚烷胺",
   "risk": "safe",
   "category": "antiviral",
   "summary": "属于抗病毒药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗病毒/抗帕金森（甲型流感、帕金森）",
   "py": [
    "jingangwanan"
   ],
   "pyi": [
    "jgwa"
   ]
  },
  {
   "id": "gap_干扰素",
   "name": "干扰素",
   "risk": "safe",
   "category": "antiviral",
   "summary": "属于抗病毒药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "免疫调节、抗病毒（乙肝、丙肝等）",
   "py": [
    "ganraosu"
   ],
   "pyi": [
    "grs"
   ]
  },
  {
   "id": "gap_恩替卡韦",
   "name": "恩替卡韦",
   "risk": "safe",
   "category": "antiviral",
   "summary": "属于抗病毒药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗乙肝病毒",
   "py": [
    "entikawei"
   ],
   "pyi": [
    "etkw"
   ]
  },
  {
   "id": "gap_替诺福韦",
   "name": "替诺福韦",
   "risk": "safe",
   "category": "antiviral",
   "summary": "属于抗病毒药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗乙肝/艾滋病毒",
   "py": [
    "tinuofuwei"
   ],
   "pyi": [
    "tnfw"
   ]
  },
  {
   "id": "gap_拉米夫定",
   "name": "拉米夫定",
   "risk": "safe",
   "category": "antiviral",
   "summary": "属于抗病毒药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗乙肝/艾滋病毒",
   "py": [
    "lamifuding"
   ],
   "pyi": [
    "lmfd"
   ]
  },
  {
   "id": "gap_阿德福韦酯",
   "name": "阿德福韦酯",
   "risk": "safe",
   "category": "antiviral",
   "summary": "属于抗病毒药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗乙肝病毒",
   "py": [
    "adefuweizhi"
   ],
   "pyi": [
    "adfwz"
   ]
  },
  {
   "id": "gap_替比夫定",
   "name": "替比夫定",
   "risk": "safe",
   "category": "antiviral",
   "summary": "属于抗病毒药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗乙肝病毒",
   "py": [
    "tibifuding"
   ],
   "pyi": [
    "tbfd"
   ]
  },
  {
   "id": "gap_两性霉素B",
   "name": "两性霉素B",
   "risk": "safe",
   "category": "antifungal",
   "summary": "属于多烯类抗真菌，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗真菌药（重症系统性真菌感染）",
   "py": [
    "liangxingmeisu"
   ],
   "pyi": [
    "lxms"
   ]
  },
  {
   "id": "gap_伏立康唑",
   "name": "伏立康唑",
   "risk": "safe",
   "category": "antifungal",
   "summary": "属于三唑类抗真菌，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗真菌药（侵袭性曲霉等）",
   "py": [
    "fulikangzuo"
   ],
   "pyi": [
    "flkz"
   ]
  },
  {
   "id": "gap_卡泊芬净",
   "name": "卡泊芬净",
   "risk": "safe",
   "category": "antifungal",
   "summary": "属于棘白菌素类抗真菌，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗真菌药（念珠菌、曲霉）",
   "py": [
    "kapofenjing"
   ],
   "pyi": [
    "kpfj"
   ]
  },
  {
   "id": "gap_酮替芬",
   "name": "酮替芬",
   "risk": "safe",
   "category": "antihistamine",
   "summary": "酮替芬是抗组胺/抗过敏药。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7"
   ],
   "aliases": [],
   "use": "抗组胺、肥大细胞稳定（过敏、哮喘预防）",
   "py": [
    "tongtifen"
   ],
   "pyi": [
    "ttf"
   ]
  },
  {
   "id": "gap_司他斯汀",
   "name": "司他斯汀",
   "risk": "safe",
   "category": "antihistamine",
   "summary": "司他斯汀是抗组胺药。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7"
   ],
   "aliases": [],
   "use": "抗组胺药（过敏性鼻炎、荨麻疹）",
   "py": [
    "sitasiting"
   ],
   "pyi": [
    "stst"
   ]
  },
  {
   "id": "gap_替米沙坦",
   "name": "替米沙坦",
   "risk": "safe",
   "category": "cardiovascular",
   "summary": "属于心血管用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "ARB 类降压药（高血压）",
   "py": [
    "timishatan"
   ],
   "pyi": [
    "tmst"
   ]
  },
  {
   "id": "gap_坎地沙坦",
   "name": "坎地沙坦",
   "risk": "safe",
   "category": "cardiovascular",
   "summary": "属于心血管用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "ARB 类降压药（高血压、心衰）",
   "py": [
    "kandishatan"
   ],
   "pyi": [
    "kdst"
   ]
  },
  {
   "id": "gap_福辛普利",
   "name": "福辛普利",
   "risk": "safe",
   "category": "cardiovascular",
   "summary": "属于心血管用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "ACEI 类降压药（高血压、心衰）",
   "py": [
    "fuxinpuli"
   ],
   "pyi": [
    "fxpl"
   ]
  },
  {
   "id": "gap_赖诺普利",
   "name": "赖诺普利",
   "risk": "safe",
   "category": "cardiovascular",
   "summary": "属于心血管用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "ACEI 类降压药（高血压、心衰）",
   "py": [
    "lainuopuli"
   ],
   "pyi": [
    "lnpl"
   ]
  },
  {
   "id": "gap_吲达帕胺",
   "name": "吲达帕胺",
   "risk": "safe",
   "category": "cardiovascular",
   "summary": "属于心血管用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "利尿类降压药",
   "py": [
    "yindapaan"
   ],
   "pyi": [
    "ydpa"
   ]
  },
  {
   "id": "gap_托拉塞米",
   "name": "托拉塞米",
   "risk": "safe",
   "category": "cardiovascular",
   "summary": "属于心血管用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "袢利尿剂（水肿、心衰）",
   "py": [
    "tuolasaimi"
   ],
   "pyi": [
    "tlsm"
   ]
  },
  {
   "id": "gap_曲美他嗪",
   "name": "曲美他嗪",
   "risk": "safe",
   "category": "cardiovascular",
   "summary": "属于心血管用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗心绞痛药（改善心肌代谢）",
   "py": [
    "qumeitaqin"
   ],
   "pyi": [
    "qmtq"
   ]
  },
  {
   "id": "gap_尼可地尔",
   "name": "尼可地尔",
   "risk": "safe",
   "category": "cardiovascular",
   "summary": "属于心血管用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗心绞痛药（扩张冠状动脉）",
   "py": [
    "nikedier"
   ],
   "pyi": [
    "nkde"
   ]
  },
  {
   "id": "gap_非诺贝特",
   "name": "非诺贝特",
   "risk": "safe",
   "category": "cardiovascular",
   "summary": "属于心血管用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "贝特类降脂药（高甘油三酯）",
   "py": [
    "feinuobeite"
   ],
   "pyi": [
    "fnbt"
   ]
  },
  {
   "id": "gap_普罗布考",
   "name": "普罗布考",
   "risk": "safe",
   "category": "cardiovascular",
   "summary": "属于心血管用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "降脂、抗氧化药",
   "py": [
    "puluobukao"
   ],
   "pyi": [
    "plbk"
   ]
  },
  {
   "id": "gap_藻酸双酯钠",
   "name": "藻酸双酯钠",
   "risk": "safe",
   "category": "cardiovascular",
   "summary": "属于心血管用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "降脂、抗凝辅助用药",
   "py": [
    "zaosuanshuangzhina"
   ],
   "pyi": [
    "zsszn"
   ]
  },
  {
   "id": "gap_决奈达隆",
   "name": "决奈达隆",
   "risk": "safe",
   "category": "cardiovascular",
   "summary": "属于心血管用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗心律失常药（房颤）",
   "py": [
    "juenaidalong"
   ],
   "pyi": [
    "jndl"
   ]
  },
  {
   "id": "gap_伊布利特",
   "name": "伊布利特",
   "risk": "safe",
   "category": "cardiovascular",
   "summary": "属于心血管用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗心律失常药（房颤复律）",
   "py": [
    "yibulite"
   ],
   "pyi": [
    "yblt"
   ]
  },
  {
   "id": "gap_格列吡嗪",
   "name": "格列吡嗪",
   "risk": "safe",
   "category": "metabolic",
   "summary": "属于内分泌/代谢用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "磺酰脲类降糖药（2 型糖尿病）",
   "py": [
    "geliebiqin"
   ],
   "pyi": [
    "glbq"
   ]
  },
  {
   "id": "gap_西格列汀",
   "name": "西格列汀",
   "risk": "safe",
   "category": "metabolic",
   "summary": "属于内分泌/代谢用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "DPP-4 抑制剂（2 型糖尿病）",
   "py": [
    "xigelieting"
   ],
   "pyi": [
    "xglt"
   ]
  },
  {
   "id": "gap_沙格列汀",
   "name": "沙格列汀",
   "risk": "safe",
   "category": "metabolic",
   "summary": "属于内分泌/代谢用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "DPP-4 抑制剂（2 型糖尿病）",
   "py": [
    "shagelieting"
   ],
   "pyi": [
    "sglt"
   ]
  },
  {
   "id": "gap_达格列净",
   "name": "达格列净",
   "risk": "safe",
   "category": "metabolic",
   "summary": "属于内分泌/代谢用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "SGLT2 抑制剂（2 型糖尿病，兼顾心肾保护）",
   "py": [
    "dageliejing"
   ],
   "pyi": [
    "dglj"
   ]
  },
  {
   "id": "gap_利拉鲁肽",
   "name": "利拉鲁肽",
   "risk": "safe",
   "category": "metabolic",
   "summary": "属于内分泌/代谢用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "GLP-1 受体激动剂（2 型糖尿病、减重）",
   "py": [
    "lilalutai"
   ],
   "pyi": [
    "lllt"
   ]
  },
  {
   "id": "gap_甲巯咪唑",
   "name": "甲巯咪唑",
   "risk": "safe",
   "category": "metabolic",
   "summary": "属于内分泌/代谢用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗甲状腺药（甲状腺功能亢进）",
   "py": [
    "jiaqiumizuo"
   ],
   "pyi": [
    "jqmz"
   ]
  },
  {
   "id": "gap_丙硫氧嘧啶",
   "name": "丙硫氧嘧啶",
   "risk": "safe",
   "category": "metabolic",
   "summary": "属于内分泌/代谢用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗甲状腺药（甲亢）",
   "py": [
    "bingliuyangmiding"
   ],
   "pyi": [
    "blymd"
   ]
  },
  {
   "id": "gap_卡比马唑",
   "name": "卡比马唑",
   "risk": "safe",
   "category": "metabolic",
   "summary": "属于内分泌/代谢用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗甲状腺药（甲亢）",
   "py": [
    "kabimazuo"
   ],
   "pyi": [
    "kbmz"
   ]
  },
  {
   "id": "gap_非布司他",
   "name": "非布司他",
   "risk": "safe",
   "category": "metabolic",
   "summary": "属于内分泌/代谢用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "降尿酸药（痛风）",
   "py": [
    "feibusita"
   ],
   "pyi": [
    "fbst"
   ]
  },
  {
   "id": "gap_苯溴马隆",
   "name": "苯溴马隆",
   "risk": "safe",
   "category": "metabolic",
   "summary": "属于内分泌/代谢用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "促尿酸排泄药（痛风）",
   "py": [
    "benxiumalong"
   ],
   "pyi": [
    "bxml"
   ]
  },
  {
   "id": "gap_碳酸氢钠",
   "name": "碳酸氢钠",
   "risk": "safe",
   "category": "metabolic",
   "summary": "属于内分泌/代谢用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗酸、碱化尿液",
   "py": [
    "tansuanqingna"
   ],
   "pyi": [
    "tsqn"
   ]
  },
  {
   "id": "gap_碳酸钙",
   "name": "碳酸钙",
   "risk": "safe",
   "category": "metabolic",
   "summary": "属于内分泌/代谢用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "补钙",
   "py": [
    "tansuangai"
   ],
   "pyi": [
    "tsg"
   ]
  },
  {
   "id": "gap_骨化三醇",
   "name": "骨化三醇",
   "risk": "safe",
   "category": "metabolic",
   "summary": "属于内分泌/代谢用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "活性维生素D（钙磷代谢、骨质疏松）",
   "py": [
    "guhuasanchun"
   ],
   "pyi": [
    "ghsc"
   ]
  },
  {
   "id": "gap_阿法骨化醇",
   "name": "阿法骨化醇",
   "risk": "safe",
   "category": "metabolic",
   "summary": "属于内分泌/代谢用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "活性维生素D（骨质疏松、肾性骨病）",
   "py": [
    "afaguhuachun"
   ],
   "pyi": [
    "afghc"
   ]
  },
  {
   "id": "gap_溴己新",
   "name": "溴己新",
   "risk": "safe",
   "category": "respiratory",
   "summary": "属于呼吸系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "祛痰药（痰多黏稠）",
   "py": [
    "xiujixin"
   ],
   "pyi": [
    "xjx"
   ]
  },
  {
   "id": "gap_羧甲司坦",
   "name": "羧甲司坦",
   "risk": "safe",
   "category": "respiratory",
   "summary": "属于呼吸系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "祛痰药（痰液黏稠）",
   "py": [
    "suojiasitan"
   ],
   "pyi": [
    "sjst"
   ]
  },
  {
   "id": "gap_特布他林",
   "name": "特布他林",
   "risk": "safe",
   "category": "respiratory",
   "summary": "属于呼吸系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "β2 激动剂（支气管哮喘、喘息）",
   "py": [
    "tebutalin"
   ],
   "pyi": [
    "tbtl"
   ]
  },
  {
   "id": "gap_可待因",
   "name": "可待因",
   "risk": "safe",
   "category": "respiratory",
   "summary": "属于呼吸系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "中枢镇咳药（干咳，有成瘾性）",
   "py": [
    "kedaiyin"
   ],
   "pyi": [
    "kdy"
   ]
  },
  {
   "id": "gap_喷托维林",
   "name": "喷托维林",
   "risk": "safe",
   "category": "respiratory",
   "summary": "属于呼吸系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "镇咳药（干咳）",
   "py": [
    "pentuoweilin"
   ],
   "pyi": [
    "ptwl"
   ]
  },
  {
   "id": "gap_桉柠蒎",
   "name": "桉柠蒎",
   "risk": "safe",
   "category": "respiratory",
   "summary": "属于呼吸系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "祛痰、促排（痰多）",
   "py": [
    "anningpai"
   ],
   "pyi": [
    "anp"
   ]
  },
  {
   "id": "gap_枸橼酸铋钾",
   "name": "枸橼酸铋钾",
   "risk": "safe",
   "category": "gastrointestinal",
   "summary": "属于消化系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "胃黏膜保护、根除幽门螺杆菌",
   "py": [
    "juyuansuanbijia"
   ],
   "pyi": [
    "jysbj"
   ]
  },
  {
   "id": "gap_伊托必利",
   "name": "伊托必利",
   "risk": "safe",
   "category": "gastrointestinal",
   "summary": "属于消化系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "促胃肠动力（消化不良、腹胀）",
   "py": [
    "yituobili"
   ],
   "pyi": [
    "ytbl"
   ]
  },
  {
   "id": "gap_甲氧氯普胺",
   "name": "甲氧氯普胺",
   "risk": "safe",
   "category": "gastrointestinal",
   "summary": "属于消化系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "止吐、促动力（恶心呕吐）",
   "py": [
    "jiayanglvpuan"
   ],
   "pyi": [
    "jylpa"
   ]
  },
  {
   "id": "gap_昂丹司琼",
   "name": "昂丹司琼",
   "risk": "safe",
   "category": "gastrointestinal",
   "summary": "属于消化系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "止吐（化疗、术后呕吐）",
   "py": [
    "angdansiqiong"
   ],
   "pyi": [
    "adsq"
   ]
  },
  {
   "id": "gap_格拉司琼",
   "name": "格拉司琼",
   "risk": "safe",
   "category": "gastrointestinal",
   "summary": "属于消化系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "止吐（化疗、术后呕吐）",
   "py": [
    "gelasiqiong"
   ],
   "pyi": [
    "glsq"
   ]
  },
  {
   "id": "gap_洛哌丁胺",
   "name": "洛哌丁胺",
   "risk": "safe",
   "category": "gastrointestinal",
   "summary": "属于消化系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "止泻药（急慢性腹泻）",
   "py": [
    "luopaidingan"
   ],
   "pyi": [
    "lpda"
   ]
  },
  {
   "id": "gap_地衣芽孢杆菌",
   "name": "地衣芽孢杆菌",
   "risk": "safe",
   "category": "gastrointestinal",
   "summary": "属于消化系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "益生菌（调节肠道菌群）",
   "py": [
    "diyiyabaoganjun"
   ],
   "pyi": [
    "dyybgj"
   ]
  },
  {
   "id": "gap_胰酶",
   "name": "胰酶",
   "risk": "safe",
   "category": "gastrointestinal",
   "summary": "属于消化系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "消化酶（胰腺外分泌不足）",
   "py": [
    "yimei"
   ],
   "pyi": [
    "ym"
   ]
  },
  {
   "id": "gap_多酶片",
   "name": "多酶片",
   "risk": "safe",
   "category": "gastrointestinal",
   "summary": "属于消化系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "助消化（消化不良）",
   "py": [
    "duomeipian"
   ],
   "pyi": [
    "dmp"
   ],
   "ingredients": [
    "胃蛋白酶",
    "胰酶",
    "淀粉酶"
   ]
  },
  {
   "id": "gap_熊去氧胆酸",
   "name": "熊去氧胆酸",
   "risk": "safe",
   "category": "gastrointestinal",
   "summary": "属于消化系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "利胆药（胆结石、胆汁淤积）",
   "py": [
    "xiongquyangdansuan"
   ],
   "pyi": [
    "xqyds"
   ]
  },
  {
   "id": "gap_丁二磺酸腺苷蛋氨酸",
   "name": "丁二磺酸腺苷蛋氨酸",
   "risk": "safe",
   "category": "gastrointestinal",
   "summary": "属于消化系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "保肝利胆（胆汁淤积）",
   "py": [
    "dingerhuangsuanxiangandanansuan"
   ],
   "pyi": [
    "dehsxgdas"
   ]
  },
  {
   "id": "gap_甘草酸二铵",
   "name": "甘草酸二铵",
   "risk": "safe",
   "category": "gastrointestinal",
   "summary": "属于消化系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "保肝药（肝炎）",
   "py": [
    "gancaosuaneran"
   ],
   "pyi": [
    "gcsea"
   ]
  },
  {
   "id": "gap_水飞蓟素",
   "name": "水飞蓟素",
   "risk": "safe",
   "category": "gastrointestinal",
   "summary": "属于消化系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "保肝药（肝损伤辅助）",
   "py": [
    "shuifeijisu"
   ],
   "pyi": [
    "sfjs"
   ]
  },
  {
   "id": "gap_联苯双酯",
   "name": "联苯双酯",
   "risk": "safe",
   "category": "gastrointestinal",
   "summary": "属于消化系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "保肝降酶药",
   "py": [
    "lianbenshuangzhi"
   ],
   "pyi": [
    "lbsz"
   ]
  },
  {
   "id": "gap_双环醇",
   "name": "双环醇",
   "risk": "safe",
   "category": "gastrointestinal",
   "summary": "属于消化系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "保肝降酶药",
   "py": [
    "shuanghuanchun"
   ],
   "pyi": [
    "shc"
   ]
  },
  {
   "id": "gap_聚乙二醇4000",
   "name": "聚乙二醇4000",
   "risk": "safe",
   "category": "gastrointestinal",
   "summary": "属于消化系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "渗透性泻药（便秘）",
   "py": [
    "juyierchun"
   ],
   "pyi": [
    "jyec"
   ]
  },
  {
   "id": "gap_复方聚乙二醇电解质",
   "name": "复方聚乙二醇电解质",
   "risk": "safe",
   "category": "gastrointestinal",
   "summary": "属于消化系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "肠道清洁（肠镜前准备）",
   "py": [
    "fufangjuyierchundianjiezhi"
   ],
   "pyi": [
    "ffjyecdjz"
   ],
   "ingredients": [
    "聚乙二醇4000",
    "氯化钠",
    "氯化钾",
    "碳酸氢钠"
   ]
  },
  {
   "id": "gap_阿普唑仑",
   "name": "阿普唑仑",
   "risk": "safe",
   "category": "neuro",
   "summary": "属于神经/精神类用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "苯二氮䓬类（抗焦虑、惊恐障碍）",
   "py": [
    "apuzuolun"
   ],
   "pyi": [
    "apzl"
   ]
  },
  {
   "id": "gap_氯硝西泮",
   "name": "氯硝西泮",
   "risk": "safe",
   "category": "neuro",
   "summary": "属于神经/精神类用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "苯二氮䓬类（抗癫痫、惊恐障碍）",
   "py": [
    "lvxiaoxipan"
   ],
   "pyi": [
    "lxxp"
   ]
  },
  {
   "id": "gap_劳拉西泮",
   "name": "劳拉西泮",
   "risk": "safe",
   "category": "neuro",
   "summary": "属于神经/精神类用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "苯二氮䓬类（抗焦虑、镇静）",
   "py": [
    "laolaxipan"
   ],
   "pyi": [
    "llxp"
   ]
  },
  {
   "id": "gap_佐匹克隆",
   "name": "佐匹克隆",
   "risk": "safe",
   "category": "neuro",
   "summary": "属于神经/精神类用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "镇静催眠药（失眠）",
   "py": [
    "zuopikelong"
   ],
   "pyi": [
    "zpkl"
   ]
  },
  {
   "id": "gap_咪达唑仑",
   "name": "咪达唑仑",
   "risk": "safe",
   "category": "neuro",
   "summary": "属于神经/精神类用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "苯二氮䓬类（镇静、麻醉诱导）",
   "py": [
    "midazuolun"
   ],
   "pyi": [
    "mdzl"
   ]
  },
  {
   "id": "gap_苯巴比妥",
   "name": "苯巴比妥",
   "risk": "safe",
   "category": "neuro",
   "summary": "属于神经/精神类用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗癫痫、镇静药",
   "py": [
    "benbabituo"
   ],
   "pyi": [
    "bbbt"
   ]
  },
  {
   "id": "gap_左乙拉西坦",
   "name": "左乙拉西坦",
   "risk": "safe",
   "category": "neuro",
   "summary": "属于神经/精神类用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗癫痫药",
   "py": [
    "zuoyilaxitan"
   ],
   "pyi": [
    "zylxt"
   ]
  },
  {
   "id": "gap_拉莫三嗪",
   "name": "拉莫三嗪",
   "risk": "safe",
   "category": "neuro",
   "summary": "属于神经/精神类用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗癫痫、双相情感障碍",
   "py": [
    "lamosanqin"
   ],
   "pyi": [
    "lmsq"
   ]
  },
  {
   "id": "gap_西酞普兰",
   "name": "西酞普兰",
   "risk": "safe",
   "category": "neuro",
   "summary": "属于神经/精神类用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "SSRI 抗抑郁药",
   "py": [
    "xitaipulan"
   ],
   "pyi": [
    "xtpl"
   ]
  },
  {
   "id": "gap_艾司西酞普兰",
   "name": "艾司西酞普兰",
   "risk": "safe",
   "category": "neuro",
   "summary": "属于神经/精神类用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "SSRI 抗抑郁药",
   "py": [
    "aisixitaipulan"
   ],
   "pyi": [
    "asxtpl"
   ]
  },
  {
   "id": "gap_利培酮",
   "name": "利培酮",
   "risk": "safe",
   "category": "neuro",
   "summary": "属于神经/精神类用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗精神病药（精神分裂、双相）",
   "py": [
    "lipeitong"
   ],
   "pyi": [
    "lpt"
   ]
  },
  {
   "id": "gap_阿立哌唑",
   "name": "阿立哌唑",
   "risk": "safe",
   "category": "neuro",
   "summary": "属于神经/精神类用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗精神病药",
   "py": [
    "alipaizuo"
   ],
   "pyi": [
    "alpz"
   ]
  },
  {
   "id": "gap_氟哌啶醇",
   "name": "氟哌啶醇",
   "risk": "safe",
   "category": "neuro",
   "summary": "属于神经/精神类用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗精神病药、止吐",
   "py": [
    "fupaidingchun"
   ],
   "pyi": [
    "fpdc"
   ]
  },
  {
   "id": "gap_奋乃静",
   "name": "奋乃静",
   "risk": "safe",
   "category": "neuro",
   "summary": "属于神经/精神类用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗精神病药",
   "py": [
    "fennaijing"
   ],
   "pyi": [
    "fnj"
   ]
  },
  {
   "id": "gap_舒必利",
   "name": "舒必利",
   "risk": "safe",
   "category": "neuro",
   "summary": "属于神经/精神类用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗精神病药、止吐",
   "py": [
    "shubili"
   ],
   "pyi": [
    "sbl"
   ]
  },
  {
   "id": "gap_哌替啶",
   "name": "哌替啶",
   "risk": "safe",
   "category": "neuro",
   "summary": "属于神经/精神类用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "阿片类镇痛药（剧痛）",
   "py": [
    "paitiding"
   ],
   "pyi": [
    "ptd"
   ]
  },
  {
   "id": "gap_曲马多",
   "name": "曲马多",
   "risk": "safe",
   "category": "neuro",
   "summary": "属于神经/精神类用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "中枢性镇痛药（中重度疼痛）",
   "py": [
    "qumaduo"
   ],
   "pyi": [
    "qmd"
   ]
  },
  {
   "id": "gap_芬太尼",
   "name": "芬太尼",
   "risk": "safe",
   "category": "neuro",
   "summary": "属于神经/精神类用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "阿片类镇痛药（麻醉、剧痛）",
   "py": [
    "fentaini"
   ],
   "pyi": [
    "ftn"
   ]
  },
  {
   "id": "gap_羟考酮",
   "name": "羟考酮",
   "risk": "safe",
   "category": "neuro",
   "summary": "属于神经/精神类用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "阿片类镇痛药（癌痛、剧痛）",
   "py": [
    "qiangkaotong"
   ],
   "pyi": [
    "qkt"
   ]
  },
  {
   "id": "gap_罗通定",
   "name": "罗通定",
   "risk": "safe",
   "category": "neuro",
   "summary": "属于神经/精神类用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "镇痛、镇静药（头痛、痛经）",
   "py": [
    "luotongding"
   ],
   "pyi": [
    "ltd"
   ]
  },
  {
   "id": "gap_吗啡",
   "name": "吗啡",
   "risk": "safe",
   "category": "neuro",
   "summary": "吗啡是阿片类镇痛药。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。说明：阿片类主要风险为呼吸抑制/成瘾，与 G6PD 溶血无明确关联；个别文献提及罕见溶血，非禁忌。",
   "note": "镇痛由医生处方；术后/癌痛按医嘱使用。",
   "controversy": false,
   "sources": [
    "S7"
   ],
   "aliases": [],
   "use": "阿片类镇痛药（剧痛、癌痛）",
   "py": [
    "mafei"
   ],
   "pyi": [
    "mf"
   ]
  },
  {
   "id": "gap_氯丙嗪",
   "name": "氯丙嗪",
   "risk": "safe",
   "category": "neuro",
   "summary": "氯丙嗪是吩噻嗪类抗精神病药。",
   "detail": "氯丙嗪是吩噻嗪类抗精神病药。不在 G6PD 禁忌/慎用名单；其偶见的溶血多与免疫/个体因素相关，并非蚕豆病(氧化应激)机制，故按常规可用处理。主要风险为锥体外系反应与体位性低血压。",
   "note": "长期用药遵医嘱监测血象与锥体外系反应。",
   "controversy": true,
   "sources": [
    "S7"
   ],
   "aliases": [],
   "use": "抗精神病药，也用于止吐、镇静",
   "py": [
    "lvbingqin"
   ],
   "pyi": [
    "lbq"
   ]
  },
  {
   "id": "gap_氨酚羟考酮",
   "name": "氨酚羟考酮",
   "risk": "caution",
   "category": "neuro",
   "summary": "氨酚羟考酮 = 羟考酮 + 对乙酰氨基酚的复方制剂。",
   "detail": "羟考酮本身对 G6PD 无明确禁忌；但含对乙酰氨基酚，超量有肝损风险。复方成分需整体看待。",
   "note": "按处方剂量使用，勿与其他含对乙酰氨基酚药同服；用药前告知蚕豆病史。",
   "controversy": true,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "复方镇痛药（对乙酰氨基酚 + 羟考酮）",
   "py": [
    "anfenqiangkaotong"
   ],
   "pyi": [
    "afqkt"
   ]
  },
  {
   "id": "gap_炔雌醇",
   "name": "炔雌醇",
   "risk": "safe",
   "category": "hormone",
   "summary": "属于激素/内分泌用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "雌激素（避孕、激素替代，常配孕激素）",
   "py": [
    "guicichun"
   ],
   "pyi": [
    "gcc"
   ]
  },
  {
   "id": "gap_米非司酮",
   "name": "米非司酮",
   "risk": "safe",
   "category": "hormone",
   "summary": "属于激素/内分泌用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗孕激素（药物流产、紧急避孕、子宫肌瘤）",
   "py": [
    "mifeisitong"
   ],
   "pyi": [
    "mfst"
   ]
  },
  {
   "id": "gap_己烯雌酚",
   "name": "己烯雌酚",
   "risk": "safe",
   "category": "hormone",
   "summary": "属于激素/内分泌用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "雌激素（历史用药，现已限用）",
   "py": [
    "jixicifen"
   ],
   "pyi": [
    "jxcf"
   ]
  },
  {
   "id": "gap_替勃龙",
   "name": "替勃龙",
   "risk": "safe",
   "category": "hormone",
   "summary": "属于激素/内分泌用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "激素替代（更年期）",
   "py": [
    "tibolong"
   ],
   "pyi": [
    "tbl"
   ]
  },
  {
   "id": "gap_坦索罗辛",
   "name": "坦索罗辛",
   "risk": "safe",
   "category": "urinary",
   "summary": "属于泌尿系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "α受体阻滞剂（前列腺增生、辅助排石）",
   "py": [
    "tansuoluoxin"
   ],
   "pyi": [
    "tslx"
   ]
  },
  {
   "id": "gap_非那雄胺",
   "name": "非那雄胺",
   "risk": "safe",
   "category": "urinary",
   "summary": "属于泌尿系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "5α还原酶抑制剂（前列腺增生、脱发）",
   "py": [
    "feinaxiongan"
   ],
   "pyi": [
    "fnxa"
   ]
  },
  {
   "id": "gap_度他雄胺",
   "name": "度他雄胺",
   "risk": "safe",
   "category": "urinary",
   "summary": "属于泌尿系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "5α还原酶抑制剂（前列腺增生）",
   "py": [
    "dutaxiongan"
   ],
   "pyi": [
    "dtxa"
   ]
  },
  {
   "id": "gap_托特罗定",
   "name": "托特罗定",
   "risk": "safe",
   "category": "urinary",
   "summary": "属于泌尿系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗胆碱药（膀胱过度活动、尿频）",
   "py": [
    "tuoteluoding"
   ],
   "pyi": [
    "ttld"
   ]
  },
  {
   "id": "gap_索利那新",
   "name": "索利那新",
   "risk": "safe",
   "category": "urinary",
   "summary": "属于泌尿系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗胆碱药（膀胱过度活动）",
   "py": [
    "suolinaxin"
   ],
   "pyi": [
    "slnx"
   ]
  },
  {
   "id": "gap_黄酮哌酯",
   "name": "黄酮哌酯",
   "risk": "safe",
   "category": "urinary",
   "summary": "属于泌尿系统用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "泌尿解痉药（尿频尿急）",
   "py": [
    "huangtongpaizhi"
   ],
   "pyi": [
    "htpz"
   ]
  },
  {
   "id": "gap_肝素",
   "name": "肝素",
   "risk": "safe",
   "category": "other_drug",
   "summary": "属于血液/止血抗凝用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗凝药（防血栓）",
   "py": [
    "gansu"
   ],
   "pyi": [
    "gs"
   ]
  },
  {
   "id": "gap_利伐沙班",
   "name": "利伐沙班",
   "risk": "safe",
   "category": "other_drug",
   "summary": "属于血液/止血抗凝用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "新型口服抗凝药（防血栓、房颤）",
   "py": [
    "lifashaban"
   ],
   "pyi": [
    "lfsb"
   ]
  },
  {
   "id": "gap_达比加群",
   "name": "达比加群",
   "risk": "safe",
   "category": "other_drug",
   "summary": "属于血液/止血抗凝用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "新型口服抗凝药（房颤、血栓）",
   "py": [
    "dabijiaqun"
   ],
   "pyi": [
    "dbjq"
   ]
  },
  {
   "id": "gap_替格瑞洛",
   "name": "替格瑞洛",
   "risk": "safe",
   "category": "other_drug",
   "summary": "属于血液/止血抗凝用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗血小板药（急性冠脉、支架术后）",
   "py": [
    "tigeruiluo"
   ],
   "pyi": [
    "tgrl"
   ]
  },
  {
   "id": "gap_腺苷钴胺",
   "name": "腺苷钴胺",
   "risk": "safe",
   "category": "other_drug",
   "summary": "属于血液/止血抗凝用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "维生素B12 类（营养、神经）",
   "py": [
    "xianganguan"
   ],
   "pyi": [
    "xgga"
   ]
  },
  {
   "id": "gap_氨甲环酸",
   "name": "氨甲环酸",
   "risk": "safe",
   "category": "other_drug",
   "summary": "属于血液/止血抗凝用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "止血药（纤溶亢进性出血）",
   "py": [
    "anjiahuansuan"
   ],
   "pyi": [
    "ajhs"
   ]
  },
  {
   "id": "gap_氨甲苯酸",
   "name": "氨甲苯酸",
   "risk": "safe",
   "category": "other_drug",
   "summary": "属于血液/止血抗凝用药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "止血药",
   "py": [
    "anjiabensuan"
   ],
   "pyi": [
    "ajbs"
   ]
  },
  {
   "id": "gap_鱼油",
   "name": "鱼油",
   "risk": "safe",
   "category": "vitamin",
   "summary": "属于营养补充剂，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7"
   ],
   "aliases": [],
   "use": "营养补充（Omega-3）",
   "py": [
    "yuyou"
   ],
   "pyi": [
    "yy"
   ]
  },
  {
   "id": "gap_鱼肝油",
   "name": "鱼肝油",
   "risk": "safe",
   "category": "vitamin",
   "summary": "属于营养补充剂，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7"
   ],
   "aliases": [],
   "use": "营养补充（维生素 A/D）",
   "py": [
    "yuganyou"
   ],
   "pyi": [
    "ygy"
   ]
  },
  {
   "id": "gap_环孢素",
   "name": "环孢素",
   "risk": "safe",
   "category": "other_drug",
   "summary": "环孢素是钙调磷酸酶抑制剂（免疫抑制剂）。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。说明：主要风险为肾毒性/高血压，与 G6PD 溶血无明确关联。",
   "note": "器官移植/自身免疫病按医嘱长期使用并监测。",
   "controversy": false,
   "sources": [
    "S7"
   ],
   "aliases": [],
   "use": "免疫抑制剂（器官移植、自身免疫病）",
   "py": [
    "huanbaosu"
   ],
   "pyi": [
    "hbs"
   ]
  },
  {
   "id": "gap_他克莫司",
   "name": "他克莫司",
   "risk": "safe",
   "category": "other_drug",
   "summary": "他克莫司是免疫抑制剂。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。说明：主要风险为肾毒性/血糖升高，与 G6PD 溶血无明确关联。",
   "note": "按医嘱监测血药浓度。",
   "controversy": false,
   "sources": [
    "S7"
   ],
   "aliases": [],
   "use": "免疫抑制剂（移植、湿疹外用）",
   "py": [
    "takemosi"
   ],
   "pyi": [
    "tkms"
   ]
  },
  {
   "id": "gap_吗替麦考酚酯",
   "name": "吗替麦考酚酯",
   "risk": "safe",
   "category": "other_drug",
   "summary": "吗替麦考酚酯是免疫抑制剂。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。说明：主要风险为骨髓抑制/感染，与 G6PD 溶血无明确经典关联。",
   "note": "移植/免疫病按医嘱使用。",
   "controversy": false,
   "sources": [
    "S7"
   ],
   "aliases": [],
   "use": "免疫抑制剂（器官移植）",
   "py": [
    "matimaikaofenzhi"
   ],
   "pyi": [
    "mtmkfz"
   ]
  },
  {
   "id": "gap_来氟米特",
   "name": "来氟米特",
   "risk": "safe",
   "category": "other_drug",
   "summary": "来氟米特是抗风湿免疫调节药。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7"
   ],
   "aliases": [],
   "use": "免疫抑制剂（类风湿关节炎）",
   "py": [
    "laifumite"
   ],
   "pyi": [
    "lfmt"
   ]
  },
  {
   "id": "gap_硫唑嘌呤",
   "name": "硫唑嘌呤",
   "risk": "caution",
   "category": "other_drug",
   "summary": "硫唑嘌呤是抗代谢免疫抑制剂。",
   "detail": "硫唑嘌呤可抑制骨髓、偶见溶血报道，部分 G6PD 资料将其列为需谨慎的药物。",
   "note": "使用期间定期查血常规；主动告知蚕豆病史，由医生权衡获益风险。",
   "controversy": true,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "免疫抑制剂（移植、自身免疫病）",
   "py": [
    "liuzuopiaoling"
   ],
   "pyi": [
    "lzpl"
   ]
  },
  {
   "id": "gap_甲氨蝶呤",
   "name": "甲氨蝶呤",
   "risk": "caution",
   "category": "other_drug",
   "summary": "甲氨蝶呤是抗代谢药（抗肿瘤/抗风湿）。",
   "detail": "甲氨蝶呤主要风险为骨髓抑制与肝损；虽非 G6PD 经典禁忌，但免疫抑制状态下需谨慎。",
   "note": "严格按医嘱剂量；定期监测血象与肝肾功能。",
   "controversy": true,
   "sources": [
    "S7"
   ],
   "aliases": [],
   "use": "抗肿瘤/免疫抑制（类风湿、肿瘤）",
   "py": [
    "jiaandieling"
   ],
   "pyi": [
    "jadl"
   ]
  },
  {
   "id": "gap_雷公藤",
   "name": "雷公藤",
   "risk": "caution",
   "category": "tcm",
   "summary": "雷公藤（及雷公藤多苷）是中药免疫抑制剂。",
   "detail": "雷公藤有生殖、肝、骨髓等多系统毒性，G6PD 人群使用更需谨慎，且成分复杂。",
   "note": "务必在专科医生指导下使用，不自行服用；用药期监测血象与肝肾功能。",
   "controversy": true,
   "sources": [
    "S7",
    "S3"
   ],
   "aliases": [],
   "use": "祛风除湿、消肿止痛（类风湿，毒性较大）",
   "py": [
    "leigongteng"
   ],
   "pyi": [
    "lgt"
   ]
  },
  {
   "id": "gap_沙利度胺",
   "name": "沙利度胺",
   "risk": "caution",
   "category": "other_drug",
   "summary": "沙利度胺是免疫调节/镇静药。",
   "detail": "沙利度胺致畸性强、可致周围神经病变；虽非 G6PD 经典禁忌，但属严格管控药，需谨慎。",
   "note": "育龄期严格避孕；仅在医生处方与监测下使用。",
   "controversy": true,
   "sources": [
    "S7"
   ],
   "aliases": [],
   "use": "免疫调节/抗肿瘤（多发性骨髓瘤）",
   "py": [
    "shaliduan"
   ],
   "pyi": [
    "slda"
   ]
  },
  {
   "id": "gap_环磷酰胺",
   "name": "环磷酰胺",
   "risk": "caution",
   "category": "other_drug",
   "summary": "环磷酰胺是烷化剂（化疗/免疫抑制）。",
   "detail": "环磷酰胺可诱导氧化应激、有溶血个案报告，部分 G6PD 资料建议谨慎。",
   "note": "化疗/免疫病方案由医生制定；主动告知蚕豆病史并监测。",
   "controversy": true,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "化疗、免疫抑制",
   "py": [
    "huanlinxianan"
   ],
   "pyi": [
    "hlxa"
   ]
  },
  {
   "id": "gap_顺铂",
   "name": "顺铂",
   "risk": "safe",
   "category": "other_drug",
   "summary": "属于抗肿瘤化疗药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者可以接受肿瘤化疗；本药未列入蚕豆病禁忌名单。化疗方案由肿瘤科医生按病种与个体情况制定。",
   "note": "化疗期间主动告知蚕豆病史；出现黄疸、酱油色尿等及时报告医生。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "化疗（多种实体瘤）",
   "py": [
    "shunbo"
   ],
   "pyi": [
    "sb"
   ]
  },
  {
   "id": "gap_卡铂",
   "name": "卡铂",
   "risk": "safe",
   "category": "other_drug",
   "summary": "属于抗肿瘤化疗药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者可以接受肿瘤化疗；本药未列入蚕豆病禁忌名单。化疗方案由肿瘤科医生按病种与个体情况制定。",
   "note": "化疗期间主动告知蚕豆病史；出现黄疸、酱油色尿等及时报告医生。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "化疗（多种实体瘤）",
   "py": [
    "kabo"
   ],
   "pyi": [
    "kb"
   ]
  },
  {
   "id": "gap_紫杉醇",
   "name": "紫杉醇",
   "risk": "safe",
   "category": "other_drug",
   "summary": "属于抗肿瘤化疗药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者可以接受肿瘤化疗；本药未列入蚕豆病禁忌名单。化疗方案由肿瘤科医生按病种与个体情况制定。",
   "note": "化疗期间主动告知蚕豆病史；出现黄疸、酱油色尿等及时报告医生。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "化疗（乳腺癌、卵巢癌等）",
   "py": [
    "zishanchun"
   ],
   "pyi": [
    "zsc"
   ]
  },
  {
   "id": "gap_多西他赛",
   "name": "多西他赛",
   "risk": "safe",
   "category": "other_drug",
   "summary": "属于抗肿瘤化疗药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者可以接受肿瘤化疗；本药未列入蚕豆病禁忌名单。化疗方案由肿瘤科医生按病种与个体情况制定。",
   "note": "化疗期间主动告知蚕豆病史；出现黄疸、酱油色尿等及时报告医生。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "化疗（乳腺癌、肺癌等）",
   "py": [
    "duoxitasai"
   ],
   "pyi": [
    "dxts"
   ]
  },
  {
   "id": "gap_氟尿嘧啶",
   "name": "氟尿嘧啶",
   "risk": "safe",
   "category": "other_drug",
   "summary": "属于抗肿瘤化疗药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者可以接受肿瘤化疗；本药未列入蚕豆病禁忌名单。化疗方案由肿瘤科医生按病种与个体情况制定。",
   "note": "化疗期间主动告知蚕豆病史；出现黄疸、酱油色尿等及时报告医生。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "化疗（消化道肿瘤等）",
   "py": [
    "funiaomiding"
   ],
   "pyi": [
    "fnmd"
   ]
  },
  {
   "id": "gap_吉西他滨",
   "name": "吉西他滨",
   "risk": "safe",
   "category": "other_drug",
   "summary": "属于抗肿瘤化疗药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者可以接受肿瘤化疗；本药未列入蚕豆病禁忌名单。化疗方案由肿瘤科医生按病种与个体情况制定。",
   "note": "化疗期间主动告知蚕豆病史；出现黄疸、酱油色尿等及时报告医生。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "化疗（胰腺癌、肺癌等）",
   "py": [
    "jixitabin"
   ],
   "pyi": [
    "jxtb"
   ]
  },
  {
   "id": "gap_表柔比星",
   "name": "表柔比星",
   "risk": "safe",
   "category": "other_drug",
   "summary": "属于抗肿瘤化疗药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者可以接受肿瘤化疗；本药未列入蚕豆病禁忌名单。化疗方案由肿瘤科医生按病种与个体情况制定。",
   "note": "化疗期间主动告知蚕豆病史；出现黄疸、酱油色尿等及时报告医生。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "化疗（乳腺癌等）",
   "py": [
    "biaoroubixing"
   ],
   "pyi": [
    "brbx"
   ]
  },
  {
   "id": "gap_伊马替尼",
   "name": "伊马替尼",
   "risk": "safe",
   "category": "other_drug",
   "summary": "属于抗肿瘤化疗药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者可以接受肿瘤化疗；本药未列入蚕豆病禁忌名单。化疗方案由肿瘤科医生按病种与个体情况制定。",
   "note": "化疗期间主动告知蚕豆病史；出现黄疸、酱油色尿等及时报告医生。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "靶向药（慢粒白血病、胃肠道间质瘤）",
   "py": [
    "yimatini"
   ],
   "pyi": [
    "ymtn"
   ]
  },
  {
   "id": "gap_吉非替尼",
   "name": "吉非替尼",
   "risk": "safe",
   "category": "other_drug",
   "summary": "属于抗肿瘤化疗药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者可以接受肿瘤化疗；本药未列入蚕豆病禁忌名单。化疗方案由肿瘤科医生按病种与个体情况制定。",
   "note": "化疗期间主动告知蚕豆病史；出现黄疸、酱油色尿等及时报告医生。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "靶向药（EGFR 突变肺癌）",
   "py": [
    "jifeitini"
   ],
   "pyi": [
    "jftn"
   ]
  },
  {
   "id": "gap_培美曲塞",
   "name": "培美曲塞",
   "risk": "safe",
   "category": "other_drug",
   "summary": "属于抗肿瘤化疗药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者可以接受肿瘤化疗；本药未列入蚕豆病禁忌名单。化疗方案由肿瘤科医生按病种与个体情况制定。",
   "note": "化疗期间主动告知蚕豆病史；出现黄疸、酱油色尿等及时报告医生。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "化疗（肺癌、间皮瘤）",
   "py": [
    "peimeiqusai"
   ],
   "pyi": [
    "pmqs"
   ]
  },
  {
   "id": "gap_依托泊苷",
   "name": "依托泊苷",
   "risk": "safe",
   "category": "other_drug",
   "summary": "属于抗肿瘤化疗药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者可以接受肿瘤化疗；本药未列入蚕豆病禁忌名单。化疗方案由肿瘤科医生按病种与个体情况制定。",
   "note": "化疗期间主动告知蚕豆病史；出现黄疸、酱油色尿等及时报告医生。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "化疗（小细胞肺癌、淋巴瘤）",
   "py": [
    "yituopogan"
   ],
   "pyi": [
    "ytpg"
   ]
  },
  {
   "id": "gap_利福平",
   "name": "利福平",
   "risk": "safe",
   "category": "antibiotic_other",
   "summary": "属于抗结核药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗结核药（结核、麻风）",
   "py": [
    "lifuping"
   ],
   "pyi": [
    "lfp"
   ]
  },
  {
   "id": "gap_吡嗪酰胺",
   "name": "吡嗪酰胺",
   "risk": "safe",
   "category": "antibiotic_other",
   "summary": "属于抗结核药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗结核药",
   "py": [
    "biqinxianan"
   ],
   "pyi": [
    "bqxa"
   ]
  },
  {
   "id": "gap_对氨基水杨酸",
   "name": "对氨基水杨酸",
   "risk": "safe",
   "category": "antibiotic_other",
   "summary": "属于抗结核药，目前未列入 G6PD（蚕豆病）禁忌/慎用名单，按所属类别常规可用。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗结核药",
   "py": [
    "duianjishuiyangsuan"
   ],
   "pyi": [
    "dajsys"
   ]
  },
  {
   "id": "gap_小儿柴桂退热颗粒",
   "name": "小儿柴桂退热颗粒",
   "risk": "caution",
   "category": "tcm",
   "summary": "小儿柴桂退热颗粒是中成药/中成药制剂。",
   "detail": "中成药多含多种草本成分，目前缺少针对 G6PD 的系统安全性数据，部分成分（如含金银花、连翘、黄连、薄荷、樟脑等）存在理论顾虑。",
   "note": "用药前请核对说明书成分；含明确禁忌草本能不用则不用；不确定时咨询中医师/药师，并主动告知蚕豆病史。",
   "controversy": true,
   "sources": [
    "S3",
    "S5"
   ],
   "aliases": [],
   "use": "发汗解表（小儿发热）",
   "py": [
    "xiaoerchaiguituirekeli"
   ],
   "pyi": [
    "xecgtrkl"
   ],
   "ingredients": [
    "柴胡",
    "桂枝",
    "葛根",
    "黄芩",
    "白芍",
    "蝉蜕"
   ]
  },
  {
   "id": "gap_醒脾养儿颗粒",
   "name": "醒脾养儿颗粒",
   "risk": "caution",
   "category": "tcm",
   "summary": "醒脾养儿颗粒是中成药/中成药制剂。",
   "detail": "中成药多含多种草本成分，目前缺少针对 G6PD 的系统安全性数据，部分成分（如含金银花、连翘、黄连、薄荷、樟脑等）存在理论顾虑。",
   "note": "用药前请核对说明书成分；含明确禁忌草本能不用则不用；不确定时咨询中医师/药师，并主动告知蚕豆病史。",
   "controversy": true,
   "sources": [
    "S3",
    "S5"
   ],
   "aliases": [],
   "use": "醒脾开胃（小儿厌食）",
   "py": [
    "xingpiyangerkeli"
   ],
   "pyi": [
    "xpyekl"
   ]
  },
  {
   "id": "gap_小儿七星茶",
   "name": "小儿七星茶",
   "risk": "caution",
   "category": "tcm",
   "summary": "小儿七星茶是中成药/中成药制剂。",
   "detail": "中成药多含多种草本成分，目前缺少针对 G6PD 的系统安全性数据，部分成分（如含金银花、连翘、黄连、薄荷、樟脑等）存在理论顾虑。",
   "note": "用药前请核对说明书成分；含明确禁忌草本能不用则不用；不确定时咨询中医师/药师，并主动告知蚕豆病史。",
   "controversy": true,
   "sources": [
    "S3",
    "S5"
   ],
   "aliases": [],
   "use": "开胃消滞（小儿积食、夜啼）",
   "py": [
    "xiaoerqixingcha"
   ],
   "pyi": [
    "xeqxc"
   ]
  },
  {
   "id": "gap_健儿消食口服液",
   "name": "健儿消食口服液",
   "risk": "caution",
   "category": "tcm",
   "summary": "健儿消食口服液是中成药/中成药制剂。",
   "detail": "中成药多含多种草本成分，目前缺少针对 G6PD 的系统安全性数据，部分成分（如含金银花、连翘、黄连、薄荷、樟脑等）存在理论顾虑。",
   "note": "用药前请核对说明书成分；含明确禁忌草本能不用则不用；不确定时咨询中医师/药师，并主动告知蚕豆病史。",
   "controversy": true,
   "sources": [
    "S3",
    "S5"
   ],
   "aliases": [],
   "use": "健脾消食（小儿厌食）",
   "py": [
    "jianerxiaoshikoufuye"
   ],
   "pyi": [
    "jexskfy"
   ]
  },
  {
   "id": "gap_神曲消食口服液",
   "name": "神曲消食口服液",
   "risk": "caution",
   "category": "tcm",
   "summary": "神曲消食口服液是中成药/中成药制剂。",
   "detail": "中成药多含多种草本成分，目前缺少针对 G6PD 的系统安全性数据，部分成分（如含金银花、连翘、黄连、薄荷、樟脑等）存在理论顾虑。",
   "note": "用药前请核对说明书成分；含明确禁忌草本能不用则不用；不确定时咨询中医师/药师，并主动告知蚕豆病史。",
   "controversy": true,
   "sources": [
    "S3",
    "S5"
   ],
   "aliases": [],
   "use": "消食导滞（消化不良）",
   "py": [
    "shenquxiaoshikoufuye"
   ],
   "pyi": [
    "sqxskfy"
   ]
  },
  {
   "id": "gap_藿香正气水",
   "name": "藿香正气水",
   "risk": "caution",
   "category": "tcm",
   "summary": "藿香正气水是中成药/中成药制剂。",
   "detail": "中成药多含多种草本成分，目前缺少针对 G6PD 的系统安全性数据，部分成分（如含金银花、连翘、黄连、薄荷、樟脑等）存在理论顾虑。",
   "note": "用药前请核对说明书成分；含明确禁忌草本能不用则不用；不确定时咨询中医师/药师，并主动告知蚕豆病史。",
   "controversy": true,
   "sources": [
    "S3",
    "S5"
   ],
   "aliases": [],
   "use": "解表化湿（中暑、胃肠型感冒）",
   "py": [
    "huoxiangzhengqishui"
   ],
   "pyi": [
    "hxzqs"
   ]
  },
  {
   "id": "gap_参苓白术散",
   "name": "参苓白术散",
   "risk": "caution",
   "category": "tcm",
   "summary": "参苓白术散是中成药/中成药制剂。",
   "detail": "中成药多含多种草本成分，目前缺少针对 G6PD 的系统安全性数据，部分成分（如含金银花、连翘、黄连、薄荷、樟脑等）存在理论顾虑。",
   "note": "用药前请核对说明书成分；含明确禁忌草本能不用则不用；不确定时咨询中医师/药师，并主动告知蚕豆病史。",
   "controversy": true,
   "sources": [
    "S3",
    "S5"
   ],
   "aliases": [],
   "use": "健脾益气（脾虚泄泻）",
   "py": [
    "canlingbaizhusan"
   ],
   "pyi": [
    "clbzs"
   ]
  },
  {
   "id": "gap_归脾丸",
   "name": "归脾丸",
   "risk": "caution",
   "category": "tcm",
   "summary": "归脾丸是中成药/中成药制剂。",
   "detail": "中成药多含多种草本成分，目前缺少针对 G6PD 的系统安全性数据，部分成分（如含金银花、连翘、黄连、薄荷、樟脑等）存在理论顾虑。",
   "note": "用药前请核对说明书成分；含明确禁忌草本能不用则不用；不确定时咨询中医师/药师，并主动告知蚕豆病史。",
   "controversy": true,
   "sources": [
    "S3",
    "S5"
   ],
   "aliases": [],
   "use": "益气健脾养血（心脾两虚）",
   "py": [
    "guipiwan"
   ],
   "pyi": [
    "gpw"
   ]
  },
  {
   "id": "gap_六味地黄丸",
   "name": "六味地黄丸",
   "risk": "caution",
   "category": "tcm",
   "summary": "六味地黄丸是中成药/中成药制剂。",
   "detail": "中成药多含多种草本成分，目前缺少针对 G6PD 的系统安全性数据，部分成分（如含金银花、连翘、黄连、薄荷、樟脑等）存在理论顾虑。",
   "note": "用药前请核对说明书成分；含明确禁忌草本能不用则不用；不确定时咨询中医师/药师，并主动告知蚕豆病史。",
   "controversy": true,
   "sources": [
    "S3",
    "S5"
   ],
   "aliases": [],
   "use": "滋阴补肾",
   "py": [
    "liuweidihuangwan"
   ],
   "pyi": [
    "lwdhw"
   ]
  },
  {
   "id": "gap_逍遥丸",
   "name": "逍遥丸",
   "risk": "caution",
   "category": "tcm",
   "summary": "逍遥丸是中成药/中成药制剂。",
   "detail": "中成药多含多种草本成分，目前缺少针对 G6PD 的系统安全性数据，部分成分（如含金银花、连翘、黄连、薄荷、樟脑等）存在理论顾虑。",
   "note": "用药前请核对说明书成分；含明确禁忌草本能不用则不用；不确定时咨询中医师/药师，并主动告知蚕豆病史。",
   "controversy": true,
   "sources": [
    "S3",
    "S5"
   ],
   "aliases": [],
   "use": "疏肝健脾（肝郁脾虚）",
   "py": [
    "xiaoyaowan"
   ],
   "pyi": [
    "xyw"
   ]
  },
  {
   "id": "gap_金匮肾气丸",
   "name": "金匮肾气丸",
   "risk": "caution",
   "category": "tcm",
   "summary": "金匮肾气丸是中成药/中成药制剂。",
   "detail": "中成药多含多种草本成分，目前缺少针对 G6PD 的系统安全性数据，部分成分（如含金银花、连翘、黄连、薄荷、樟脑等）存在理论顾虑。",
   "note": "用药前请核对说明书成分；含明确禁忌草本能不用则不用；不确定时咨询中医师/药师，并主动告知蚕豆病史。",
   "controversy": true,
   "sources": [
    "S3",
    "S5"
   ],
   "aliases": [],
   "use": "温补肾阳",
   "py": [
    "jinkuishenqiwan"
   ],
   "pyi": [
    "jksqw"
   ]
  },
  {
   "id": "gap_玉屏风颗粒",
   "name": "玉屏风颗粒",
   "risk": "caution",
   "category": "tcm",
   "summary": "玉屏风颗粒是中成药/中成药制剂。",
   "detail": "中成药多含多种草本成分，目前缺少针对 G6PD 的系统安全性数据，部分成分（如含金银花、连翘、黄连、薄荷、樟脑等）存在理论顾虑。",
   "note": "用药前请核对说明书成分；含明确禁忌草本能不用则不用；不确定时咨询中医师/药师，并主动告知蚕豆病史。",
   "controversy": true,
   "sources": [
    "S3",
    "S5"
   ],
   "aliases": [],
   "use": "益气固表（易感冒、自汗）",
   "py": [
    "yupingfengkeli"
   ],
   "pyi": [
    "ypfkl"
   ]
  },
  {
   "id": "gap_萘敏维滴眼液",
   "name": "萘敏维滴眼液",
   "risk": "caution",
   "category": "topical",
   "summary": "萘敏维滴眼液含萘甲唑啉等减充血成分。",
   "detail": "主要风险为血管收缩剂相关的局部刺激/反跳；并非 G6PD 经典禁忌，但儿童与蚕豆病者局部用含'萘'成分制剂宜谨慎。",
   "note": "眼红/眼痒优先用人工泪液；确需使用请咨询药师。",
   "controversy": true,
   "sources": [
    "S7"
   ],
   "aliases": [],
   "use": "滴眼液（缓解眼干、充血，含萘甲唑啉）",
   "py": [
    "naiminweidiyanye"
   ],
   "pyi": [
    "nmwdyy"
   ]
  },
  {
   "id": "gap_夫西地酸乳膏",
   "name": "夫西地酸乳膏",
   "risk": "safe",
   "category": "topical",
   "summary": "夫西地酸是外用抗生素。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7"
   ],
   "aliases": [],
   "use": "外用抗菌（皮肤感染）",
   "py": [
    "fuxidisuanrugao"
   ],
   "pyi": [
    "fxdsrg"
   ]
  },
  {
   "id": "gap_阿达帕林凝胶",
   "name": "阿达帕林凝胶",
   "risk": "safe",
   "category": "topical",
   "summary": "阿达帕林是外用维A酸类（治痤疮）。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": false,
   "sources": [
    "S7"
   ],
   "aliases": [],
   "use": "外用维A酸（痤疮）",
   "py": [
    "adapalinningjiao"
   ],
   "pyi": [
    "adplnj"
   ]
  },
  {
   "id": "gap_云南白药",
   "name": "云南白药",
   "risk": "caution",
   "category": "tcm",
   "summary": "云南白药是复方中药制剂（散剂/气雾/膏剂等）。",
   "detail": "成分含多种草药且配方保密，缺少 G6PD 专项安全数据；外伤止血可用，内服/大面积使用宜谨慎。",
   "note": "外用止血可按说明书；口服制剂咨询药师；异常出血不止及时就医。",
   "controversy": true,
   "sources": [
    "S3",
    "S5"
   ],
   "aliases": [],
   "use": "止血化瘀、消肿止痛（外用/口服）",
   "py": [
    "yunnanbaiyao"
   ],
   "pyi": [
    "ynby"
   ]
  },
  {
   "id": "gap_湿润烧伤膏",
   "name": "湿润烧伤膏",
   "risk": "safe",
   "category": "topical",
   "summary": "湿润烧伤膏是外用中药制剂。",
   "detail": "G6PD 缺乏者使用本类药物未见明确溶血风险报告；具体用药请遵医嘱，并主动告知医生蚕豆病史。说明：外用烧伤创面，全身吸收有限；主要成分为中药油膏，未见 G6PD 禁忌报告。",
   "note": "用药期间留意有无皮肤/眼睛发黄、浓茶色尿、乏力等溶血迹象，异常及时就医。",
   "controversy": true,
   "sources": [
    "S3"
   ],
   "aliases": [],
   "use": "外用（烧烫伤、创面）",
   "py": [
    "shirunshaoshanggao"
   ],
   "pyi": [
    "srssg"
   ]
  },
  {
   "id": "gap_布洛芬栓",
   "name": "布洛芬栓",
   "risk": "caution",
   "category": "analgesic",
   "summary": "布洛芬栓是布洛芬的栓剂剂型。",
   "detail": "与口服布洛芬同为 NSAID，部分 G6PD 资料列为慎用，且存在使用分歧。",
   "note": "退热止痛优先对乙酰氨基酚；确需用布洛芬请咨询医生。",
   "controversy": true,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "退烧、止痛（栓剂，适合不能口服的儿童）",
   "py": [
    "buluofenshuan"
   ],
   "pyi": [
    "blfs"
   ]
  },
  {
   "id": "gap_对乙酰氨基酚栓",
   "name": "对乙酰氨基酚栓",
   "risk": "safe",
   "category": "analgesic",
   "summary": "对乙酰氨基酚栓是对乙酰氨基酚的栓剂剂型。",
   "detail": "对乙酰氨基酚是 G6PD 人群退热止痛的首选，栓剂仅为给药途径不同。",
   "note": "按体重/年龄给药，避免超量；24 小时不超过推荐次数。",
   "controversy": false,
   "sources": [
    "S1",
    "S2"
   ],
   "aliases": [],
   "use": "退烧、止痛（栓剂）",
   "py": [
    "duiyixiananjifenshuan"
   ],
   "pyi": [
    "dyxajfs"
   ]
  },
  {
   "id": "gap_双氯芬酸钠栓",
   "name": "双氯芬酸钠栓",
   "risk": "caution",
   "category": "analgesic",
   "summary": "双氯芬酸钠栓是双氯芬酸（NSAID）的栓剂。",
   "detail": "与双氯芬酸同为 NSAID，部分 G6PD 资料列为慎用。",
   "note": "镇痛优先对乙酰氨基酚；确需用请咨询医生。",
   "controversy": true,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "抗炎镇痛（栓剂）",
   "py": [
    "shuanglvfensuannashuan"
   ],
   "pyi": [
    "slfsns"
   ]
  },
  {
   "id": "gap_消炎痛栓",
   "name": "消炎痛栓",
   "risk": "caution",
   "category": "analgesic",
   "summary": "消炎痛栓即吲哚美辛栓（NSAID）。",
   "detail": "吲哚美辛属 NSAID，部分 G6PD 资料列为慎用。",
   "note": "镇痛优先对乙酰氨基酚；确需用请咨询医生。",
   "controversy": true,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "吲哚美辛栓，抗炎镇痛退烧（栓剂）",
   "py": [
    "xiaoyantongshuan"
   ],
   "pyi": [
    "xyts"
   ]
  },
  {
   "id": "gap_小儿布洛芬栓",
   "name": "小儿布洛芬栓",
   "risk": "caution",
   "category": "analgesic",
   "summary": "小儿布洛芬栓是儿童用布洛芬栓剂。",
   "detail": "与布洛芬同为 NSAID，部分 G6PD 资料列为慎用，且儿科使用存在分歧。",
   "note": "儿童退热首选对乙酰氨基酚；用布洛芬前咨询儿科医生。",
   "controversy": true,
   "sources": [
    "S7",
    "S2"
   ],
   "aliases": [],
   "use": "儿童退烧（栓剂）",
   "py": [
    "xiaoerbuluofenshuan"
   ],
   "pyi": [
    "xeblfs"
   ]
  },
  {
   "id": "antimalarial_hydroxychloroquine",
   "name": "羟氯喹",
   "risk": "safe",
   "category": "antimalarial",
   "summary": "羟氯喹是抗疟/免疫调节药（氯喹衍生物）。与氯喹不同，G6PD 人群中溶血风险低，多国指南视为相对安全。",
   "detail": "台大医院等机构将羟氯喹列为非高风险药物；G6PD 缺乏者如需抗疟或免疫抑制治疗，羟氯喹通常优于氯喹。仍建议用药前告知医生蚕豆病史。",
   "note": "与氯喹区分清楚：氯喹多列为禁用，羟氯喹相对安全；但澳洲皇家儿童医院(RCH)等少数资料将其列入“避免”，故用药前仍建议告知医生蚕豆病史、由医生评估。多数指南（台大医院等）视羟氯喹为相对安全。",
   "controversy": true,
   "sources": [
    "S6",
    "S7"
   ],
   "aliases": [
    "硫酸羟氯喹",
    "羟氯喹片"
   ],
   "use": "抗疟药；现主要用于类风湿关节炎、红斑狼疮",
   "py": [
    "qianglvkui",
    "liusuanqianglvkui",
    "qianglvkuipian"
   ],
   "pyi": [
    "qlk",
    "lsqlk",
    "qlkp"
   ],
   "debate": "与氯喹不同：多国资料认为羟氯喹溶血风险低、相对安全；国内部分资料仍偏保守。"
  },
  {
   "id": "gap2_甲氟喹",
   "name": "甲氟喹",
   "risk": "caution",
   "category": "antimalarial",
   "summary": "属于抗疟药。G6PD 缺乏者使用存在个别溶血报告或证据有限，出于安全建议谨慎使用（非绝对禁用）。",
   "detail": "甲氟喹（mefloquine）是抗疟药。RCH 等列为 G6PD 避免，NTUH 列慎用；疟疾预防/治疗请由医生评估，优先青蒿素类。本工具按“谨慎使用”处理，具体以医生处方为准。",
   "note": "需在医生监护下使用，用药期间留意尿色变深、皮肤/眼睛发黄等溶血迹象。",
   "controversy": true,
   "sources": [
    "S6",
    "S7"
   ],
   "aliases": [],
   "use": "抗疟药（疟疾预防与治疗）",
   "py": [
    "jiafukui"
   ],
   "pyi": [
    "jfk"
   ]
  },
  {
   "id": "gap2_吡哌酸",
   "name": "吡哌酸",
   "risk": "caution",
   "category": "antibiotic_other",
   "summary": "属于喹诺酮类抗菌药。G6PD 缺乏者使用存在个别溶血报告或证据有限，出于安全建议谨慎使用（非绝对禁用）。",
   "detail": "吡哌酸是喹诺酮类（哌啶酸类）抗菌药。台大医院将其列入 G6PD 高風險注意藥品，建议谨慎。本工具按“谨慎使用”处理，具体以医生处方为准。",
   "note": "需在医生监护下使用，用药期间留意尿色变深、皮肤/眼睛发黄等溶血迹象。",
   "controversy": true,
   "sources": [
    "S6",
    "S7"
   ],
   "aliases": [],
   "use": "喹诺酮类（肠道、尿路感染）",
   "py": [
    "bipaisuan"
   ],
   "pyi": [
    "bps"
   ],
   "debate": "国内部分资料列为慎用；国际资料多视为低风险。本库取保守口径。"
  },
  {
   "id": "gap2_美沙拉嗪",
   "name": "美沙拉嗪",
   "risk": "caution",
   "category": "gastrointestinal",
   "summary": "属于肠道抗炎/IBD 用药。G6PD 缺乏者使用存在个别溶血报告或证据有限，出于安全建议谨慎使用（非绝对禁用）。",
   "detail": "美沙拉嗪（5-氨基水杨酸）用于炎症性肠病，是柳氮磺吡啶的活性成分。台大医院列为注意药品，建议谨慎。本工具按“谨慎使用”处理，具体以医生处方为准。",
   "note": "需在医生监护下使用，用药期间留意尿色变深、皮肤/眼睛发黄等溶血迹象。",
   "controversy": true,
   "sources": [
    "S6",
    "S7"
   ],
   "aliases": [],
   "use": "抗炎药（溃疡性结肠炎）",
   "py": [
    "meishalaqin"
   ],
   "pyi": [
    "mslq"
   ]
  },
  {
   "id": "gap2_普鲁卡因胺",
   "name": "普鲁卡因胺",
   "risk": "caution",
   "category": "cardiovascular",
   "summary": "属于抗心律失常药。G6PD 缺乏者使用存在个别溶血报告或证据有限，出于安全建议谨慎使用（非绝对禁用）。",
   "detail": "普鲁卡因胺是抗心律失常药。RCH 将其列为 G6PD 避免（偶见溶血及自身抗体）。本工具按“谨慎使用”处理，具体以医生处方为准。",
   "note": "需在医生监护下使用，用药期间留意尿色变深、皮肤/眼睛发黄等溶血迹象。",
   "controversy": true,
   "sources": [
    "S6",
    "S7"
   ],
   "aliases": [],
   "use": "抗心律失常药",
   "py": [
    "pulukayinan"
   ],
   "pyi": [
    "plkya"
   ]
  },
  {
   "id": "gap2_肼苯哒嗪",
   "name": "肼苯哒嗪",
   "risk": "caution",
   "category": "cardiovascular",
   "summary": "属于降压/血管扩张药。G6PD 缺乏者使用存在个别溶血报告或证据有限，出于安全建议谨慎使用（非绝对禁用）。",
   "detail": "肼苯哒嗪是降压药。RCH 将其列为 G6PD 避免（偶见溶血）。本工具按“谨慎使用”处理，具体以医生处方为准。",
   "note": "需在医生监护下使用，用药期间留意尿色变深、皮肤/眼睛发黄等溶血迹象。",
   "controversy": true,
   "sources": [
    "S6",
    "S7"
   ],
   "aliases": [],
   "use": "血管扩张性降压药",
   "py": [
    "jingbendaqin"
   ],
   "pyi": [
    "jbdq"
   ]
  },
  {
   "id": "sulfa_sulfasalazine",
   "name": "柳氮磺吡啶",
   "risk": "forbidden",
   "category": "sulfa",
   "summary": "柳氮磺吡啶（磺胺沙拉嗪）是磺胺类抗炎药，用于溃疡性结肠炎、类风湿等。G6PD 明确禁忌，可诱发溶血。",
   "detail": "柳氮磺吡啶在体内分解为磺胺吡啶（致溶血成分）与美沙拉嗪；RCH、安徽省卫健委等权威资料均列为 G6PD 禁用/避免。IBD 患者请由医生改用不含磺胺的方案。",
   "note": "用药前务必主动告知蚕豆病史；溃疡性结肠炎/类风湿患者请与医生确认替代方案。",
   "controversy": false,
   "sources": [
    "S1",
    "S7"
   ],
   "aliases": [
    "磺胺沙拉嗪",
    "偶氮磺胺吡啶",
    "sulfasalazine",
    "SASP"
   ],
   "use": "抗炎药（溃疡性结肠炎、类风湿关节炎）",
   "py": [
    "liudanhuangbiding",
    "huanganshalaqin",
    "oudanhuanganbiding"
   ],
   "pyi": [
    "ldhbd",
    "haslq",
    "odhabd"
   ]
  },
  {
   "id": "cv_methyldopa",
   "name": "甲基多巴",
   "risk": "caution",
   "category": "cardiovascular",
   "summary": "甲基多巴是中枢性降压药。RCH 等资料将其列为 G6PD 避免（可致免疫性溶血）。",
   "detail": "甲基多巴可引起 Coombs 阳性免疫性溶血；RCH 将其列入 G6PD 需避免的药物。妊娠期高血压常用，但 G6PD 者应由医生评估替代（如拉贝洛尔、硝苯地平）。",
   "note": "用药期间监测血常规与溶血迹象；孕期用药遵医嘱。",
   "controversy": true,
   "sources": [
    "S6",
    "S7"
   ],
   "aliases": [
    "爱道美",
    "甲多巴",
    "methyldopa"
   ],
   "use": "中枢性降压药（常用于妊娠期高血压）",
   "py": [
    "jiajiduoba",
    "aidaomei",
    "jiaduoba"
   ],
   "pyi": [
    "jjdb",
    "adm",
    "jdb"
   ],
   "debate": "RCH 等资料列为避免（可致免疫性溶血）；妊娠期高血压请产科评估。"
  },
  {
   "id": "other_nitazoxanide",
   "name": "硝唑尼特",
   "risk": "caution",
   "category": "antibiotic_other",
   "summary": "硝唑尼特是硝基噻唑类抗寄生虫药，结构与硝基呋喃类相关，部分资料列为 G6PD 禁用/慎用。",
   "detail": "硝唑尼特含硝基噻唑结构，与硝基呋喃类（呋喃妥因等，禁用）作用机制相近，存在氧化应激顾虑；部分资料将其列为 G6PD 禁用。抗寄生虫治疗请由医生评估。",
   "note": "抗寄生虫用药前主动告知蚕豆病史。",
   "controversy": true,
   "sources": [
    "S7"
   ],
   "aliases": [
    "nitazoxanide",
    "硝唑尼特片"
   ],
   "use": "抗寄生虫/抗感染（隐孢子虫、肠道感染）",
   "py": [
    "xiaozuonite",
    "xiaozuonitepian"
   ],
   "pyi": [
    "xznt",
    "xzntp"
   ],
   "debate": "结构与硝基呋喃类相关，部分资料列为禁用/慎用。"
  },
  {
   "id": "abx_trimethoprim",
   "name": "甲氧苄啶",
   "risk": "caution",
   "category": "antibiotic_other",
   "summary": "甲氧苄啶（TMP）是抗菌增效剂，复方新诺明中的成分之一。部分资料列为 G6PD 慎用。",
   "detail": "甲氧苄啶常与磺胺甲噁唑组成复方新诺明（后者明确禁用）。TMP 单用虽溶血证据较少，但部分资料（好大夫等）列为慎用；与磺胺联用时一律按复方新诺明（禁用）处理。",
   "note": "复方新诺明（含磺胺甲噁唑）为禁用，请勿使用；单用 TMP 亦建议咨询医生。",
   "controversy": true,
   "sources": [
    "S1",
    "S7"
   ],
   "aliases": [
    "TMP",
    "三甲氧苄啶",
    "甲氧苄氨嘧啶"
   ],
   "use": "抗菌增效剂（常与磺胺类合用）",
   "py": [
    "jiayangbianding",
    "sanjiayangbianding",
    "jiayangbiananmiding"
   ],
   "pyi": [
    "jybd",
    "sjybd",
    "jybamd"
   ],
   "debate": "复方新诺明成分之一，部分资料列为慎用。"
  },
  {
   "id": "food_bitter_melon",
   "name": "苦瓜（凉瓜）",
   "risk": "caution",
   "category": "food",
   "summary": "苦瓜籽含 vicine 样物质，G6PD 人群食用（尤其籽、生食、野生苦瓜、浓缩汁）有溶血个案，建议慎食/避免。",
   "detail": "国际 G6PD 基金会将苦瓜列为“避免(Avoid)”；安徽省卫健委将其列入“需要警惕的食物”，并称野生苦瓜含天然氧化性成分、建议避免。风险主要来自苦瓜籽（vicine 样物质）、生食/凉拌、野生苦瓜及苦瓜汁/浓缩提取物；成熟苦瓜充分煮熟后少量食用风险相对较低。",
   "note": "吃前彻底去籽、充分煮熟、少量为宜；野生苦瓜、苦瓜汁/茶、苦瓜籽提取物建议避免；初次食用后留意有无酱油色尿、黄疸。",
   "controversy": true,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "凉瓜",
    "苦瓜籽",
    "苦瓜汁",
    "苦瓜茶",
    "野生苦瓜",
    "苦瓜干"
   ],
   "use": "蔬菜（清炒、煲汤）",
   "py": [
    "kugualianggua",
    "lianggua",
    "kuguazi",
    "kuguazhi",
    "kuguacha",
    "yeshengkugua",
    "kuguagan"
   ],
   "pyi": [
    "kglg",
    "lg",
    "kgz",
    "kgc",
    "yskg",
    "kgg"
   ],
   "debate": "苦瓜籽含 vicine 样物质，有溶血个案；果肉少量通常无碍，避免籽、生食与浓缩汁。"
  },
  {
   "id": "food_blueberry",
   "name": "蓝莓",
   "risk": "caution",
   "category": "food",
   "summary": "蓝莓含花青素等，极少数敏感 G6PD 个体可能诱发溶血，建议初次少量尝试或避免。",
   "detail": "安徽省卫健委提示：蓝莓极少数敏感个体可能诱发溶血，建议初次少量尝试后观察，或直接避免。日常少量食用通常问题不大，但蓝莓浓缩汁/大剂量补充剂宜谨慎。",
   "note": "初次吃先少量，观察有无酱油色尿、黄疸、乏力；避免大剂量蓝莓提取物/浓缩汁。",
   "controversy": true,
   "sources": [
    "S1"
   ],
   "aliases": [
    "蓝莓干",
    "蓝莓酱",
    "蓝莓汁"
   ],
   "use": "水果",
   "py": [
    "lanmei",
    "lanmeigan",
    "lanmeijiang",
    "lanmeizhi"
   ],
   "pyi": [
    "lm",
    "lmg",
    "lmj",
    "lmz"
   ],
   "debate": "极少数敏感个体个案，证据有限；可少量尝试，避免大量浓缩制品。"
  },
  {
   "id": "food_aloe",
   "name": "芦荟（食用）",
   "risk": "caution",
   "category": "food",
   "summary": "食用芦荟（芦荟汁/芦荟胶囊）部分资料列为 G6PD 慎食，证据有限；外用芦荟胶通常无碍。",
   "detail": "部分资料将食用芦荟列为 G6PD 慎食，但证据有限、存在分歧。芦荟含蒽醌类成分，大剂量口服有刺激性；外用护肤芦荟胶皮肤吸收少，一般无碍。",
   "note": "口服芦荟汁/芦荟胶囊建议咨询医生；外用芦荟胶正常使用。",
   "controversy": true,
   "sources": [
    "S5"
   ],
   "aliases": [
    "芦荟汁",
    "芦荟胶囊",
    "芦荟胶"
   ],
   "use": "食用/饮品原料",
   "py": [
    "luhuishiyong",
    "luhuizhi",
    "luhuijiaonang",
    "luhuijiao"
   ],
   "pyi": [
    "lhsy",
    "lhz",
    "lhjn",
    "lhj"
   ],
   "debate": "食用芦荟部分资料列为慎食，证据有限；外用芦荟胶通常无碍。"
  },
  {
   "id": "food_soybean",
   "name": "黄豆/大豆",
   "risk": "safe",
   "category": "food",
   "summary": "黄豆/大豆不是蚕豆，不含蚕豆嘧啶葡糖苷，G6PD 者可正常食用（豆浆、豆奶、豆腐均可）。",
   "detail": "安徽省卫健委明确：黄豆、绿豆等与蚕豆（Vicia faba）不是一回事，不含诱发溶血的蚕豆嘧啶葡糖苷，G6PD 缺乏者可正常食用。豆浆、豆奶、豆腐、豆制品均可。",
   "note": "普通大豆酱油不含蚕豆可放心；但购买前仍建议看配料表，确认未混入蚕豆成分。",
   "controversy": false,
   "sources": [
    "S1"
   ],
   "aliases": [
    "黄豆",
    "大豆",
    "豆浆",
    "豆奶",
    "豆腐",
    "豆制品"
   ],
   "use": "豆类食物（豆浆、豆腐原料）",
   "py": [
    "huangdoudadou",
    "huangdou",
    "dadou",
    "doujiang",
    "dounai",
    "doufu",
    "douzhipin"
   ],
   "pyi": [
    "hddd",
    "hd",
    "dd",
    "dj",
    "dn",
    "df",
    "dzp"
   ]
  },
  {
   "id": "food_mungbean",
   "name": "绿豆",
   "risk": "safe",
   "category": "food",
   "summary": "绿豆不是蚕豆，G6PD 者可正常食用（绿豆汤、绿豆糕均可）。",
   "detail": "安徽省卫健委明确：绿豆与蚕豆不是一回事，不含蚕豆嘧啶葡糖苷，G6PD 缺乏者可正常食用。",
   "note": "正常食用即可。",
   "controversy": false,
   "sources": [
    "S1"
   ],
   "aliases": [
    "绿豆汤",
    "绿豆糕",
    "绿豆沙",
    "绿豆粥"
   ],
   "use": "豆类食物（绿豆汤、绿豆糕）",
   "py": [
    "lvdou",
    "lvdoutang",
    "lvdougao",
    "lvdousha",
    "lvdouzhou"
   ],
   "pyi": [
    "ld",
    "ldt",
    "ldg",
    "lds",
    "ldz"
   ]
  },
  {
   "id": "gap_粉丝_凉粉",
   "name": "粉丝/凉粉",
   "risk": "caution",
   "category": "food",
   "summary": "粉丝/凉粉一般用绿豆或红薯淀粉；但部分含蚕豆淀粉，G6PD 者需看配料表确认。",
   "detail": "安徽省卫健委提示：蚕豆粉可能存在于粉丝、凉粉中。纯绿豆/红薯粉丝可放心；购买/点餐时确认不含“蚕豆”成分。",
   "note": "买前看配料表，确认未标“蚕豆”；不确定时少量或避免。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "粉丝",
    "凉粉",
    "粉条",
    "绿豆粉丝",
    "红薯粉丝"
   ],
   "use": "淀粉类食物（可能含豆类淀粉）",
   "py": [
    "fensiliangfen",
    "fensi",
    "liangfen",
    "fentiao",
    "lvdoufensi",
    "hongshufensi"
   ],
   "pyi": [
    "fslf",
    "fs",
    "lf",
    "ft",
    "ldfs",
    "hsfs"
   ]
  },
  {
   "id": "gap_酱油",
   "name": "酱油",
   "risk": "safe",
   "category": "food",
   "summary": "普通大豆酱油不含蚕豆，可放心；少数地方用蚕豆酿造，需看配料表。",
   "detail": "安徽省卫健委明确：普通大豆酱油不含蚕豆，可放心使用；但购买前务必读配料表，确认未标“蚕豆”或“蚕豆制品”。",
   "note": "买前扫一眼配料表；标“蚕豆酿造/蚕豆酱油”的避开。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "生抽",
    "老抽",
    "豆酱油"
   ],
   "use": "调味品（发酵豆制）",
   "py": [
    "jiangyou",
    "shengchou",
    "laochou",
    "doujiangyou"
   ],
   "pyi": [
    "jy",
    "sc",
    "lc",
    "djy"
   ]
  },
  {
   "id": "gap_薄荷糖_口香糖",
   "name": "薄荷糖/口香糖",
   "risk": "caution",
   "category": "food",
   "summary": "薄荷糖、口香糖常含薄荷脑，按薄荷类处理，少量通常无碍。",
   "detail": "薄荷（薄荷脑）在部分资料中被列为 G6PD 需避免；含薄荷脑的糖果/口香糖少量含服一般问题不大，但避免大量、长期含服，尤其儿童。",
   "note": "少量含服一般无碍；避免大量/长期含服。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "薄荷糖",
    "口香糖",
    "薄荷口香糖",
    "薄荷硬糖"
   ],
   "use": "零食（含薄荷脑）",
   "py": [
    "bohetangkouxiangtang",
    "bohetang",
    "kouxiangtang",
    "bohekouxiangtang",
    "boheyingtang"
   ],
   "pyi": [
    "bhtkxt",
    "bht",
    "kxt",
    "bhkxt",
    "bhyt"
   ]
  },
  {
   "id": "gap_牛奶",
   "name": "牛奶",
   "risk": "safe",
   "category": "food",
   "summary": "牛奶属牛奶/乳制品，与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "detail": "与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "note": "正常食用即可。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "纯牛奶",
    "乳制品",
    "酸奶"
   ],
   "use": "饮品/乳制品",
   "py": [
    "niunai",
    "chunniunai",
    "ruzhipin",
    "suannai"
   ],
   "pyi": [
    "nn",
    "cnn",
    "rzp",
    "sn"
   ]
  },
  {
   "id": "gap_鸡蛋",
   "name": "鸡蛋",
   "risk": "safe",
   "category": "food",
   "summary": "鸡蛋属鸡蛋，与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "detail": "与 G6PD（蚕豆病）溶血无明确关联，可正常食用。（鸡蛋过敏是另一回事，与蚕豆病无关；本条目仅就 G6PD 溶血而言。）",
   "note": "正常食用即可。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "蛋清",
    "蛋黄",
    "鸡蛋羹"
   ],
   "use": "食物",
   "py": [
    "jidan",
    "danqing",
    "danhuang",
    "jidangeng"
   ],
   "pyi": [
    "jd",
    "dq",
    "dh",
    "jdg"
   ]
  },
  {
   "id": "gap_海鲜",
   "name": "海鲜",
   "risk": "safe",
   "category": "food",
   "summary": "海鲜属海鲜，与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "detail": "与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "note": "正常食用即可。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "鱼",
    "虾",
    "蟹",
    "贝类",
    "海鱼"
   ],
   "use": "食物",
   "py": [
    "haixian",
    "yu",
    "xia",
    "xie",
    "beilei",
    "haiyu"
   ],
   "pyi": [
    "hx",
    "y",
    "x",
    "bl",
    "hy"
   ]
  },
  {
   "id": "gap_花生",
   "name": "花生",
   "risk": "safe",
   "category": "food",
   "summary": "花生属花生/坚果，与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "detail": "与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "note": "正常食用即可。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "花生米",
    "花生酱"
   ],
   "use": "坚果/零食",
   "py": [
    "huasheng",
    "huashengmi",
    "huashengjiang"
   ],
   "pyi": [
    "hs",
    "hsm",
    "hsj"
   ]
  },
  {
   "id": "gap_坚果",
   "name": "坚果",
   "risk": "safe",
   "category": "food",
   "summary": "坚果属坚果，与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "detail": "与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "note": "正常食用即可。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "核桃",
    "杏仁",
    "腰果",
    "开心果"
   ],
   "use": "零食",
   "py": [
    "jianguo",
    "hetao",
    "xingren",
    "yaoguo",
    "kaixinguo"
   ],
   "pyi": [
    "jg",
    "ht",
    "xr",
    "yg",
    "kxg"
   ]
  },
  {
   "id": "gap_巧克力",
   "name": "巧克力",
   "risk": "safe",
   "category": "food",
   "summary": "巧克力属巧克力，与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "detail": "与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "note": "正常食用即可。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "黑巧克力",
    "牛奶巧克力"
   ],
   "use": "零食",
   "py": [
    "qiaokeli",
    "heiqiaokeli",
    "niunaiqiaokeli"
   ],
   "pyi": [
    "qkl",
    "hqkl",
    "nnqkl"
   ]
  },
  {
   "id": "gap_咖啡",
   "name": "咖啡",
   "risk": "safe",
   "category": "food",
   "summary": "咖啡属咖啡，与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "detail": "与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "note": "正常食用即可。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "拿铁",
    "美式"
   ],
   "use": "饮品（含咖啡因）",
   "py": [
    "kafei",
    "natie",
    "meishi"
   ],
   "pyi": [
    "kf",
    "nt",
    "ms"
   ]
  },
  {
   "id": "gap_茶",
   "name": "茶",
   "risk": "safe",
   "category": "food",
   "summary": "茶属茶，与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "detail": "与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "note": "正常食用即可。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "绿茶",
    "红茶",
    "乌龙茶"
   ],
   "use": "饮品",
   "py": [
    "cha",
    "lvcha",
    "hongcha",
    "wulongcha"
   ],
   "pyi": [
    "c",
    "lc",
    "hc",
    "wlc"
   ]
  },
  {
   "id": "gap_腐乳",
   "name": "腐乳",
   "risk": "safe",
   "category": "food",
   "summary": "腐乳属腐乳，与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "detail": "与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "note": "正常食用即可。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "豆腐乳",
    "霉豆腐"
   ],
   "use": "发酵豆制品（调味）",
   "py": [
    "furu",
    "doufuru",
    "meidoufu"
   ],
   "pyi": [
    "fr",
    "dfr",
    "mdf"
   ]
  },
  {
   "id": "gap_豆芽",
   "name": "豆芽",
   "risk": "safe",
   "category": "food",
   "summary": "豆芽属豆芽，与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "detail": "与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "note": "正常食用即可。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "绿豆芽",
    "黄豆芽"
   ],
   "use": "蔬菜（豆类发芽）",
   "py": [
    "douya",
    "lvdouya",
    "huangdouya"
   ],
   "pyi": [
    "dy",
    "ldy",
    "hdy"
   ]
  },
  {
   "id": "gap_啤酒",
   "name": "啤酒",
   "risk": "safe",
   "category": "food",
   "summary": "啤酒属啤酒，与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "detail": "与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "note": "正常食用即可。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "适量饮酒"
   ],
   "use": "酒精饮品（可能含豆类/酵母）",
   "py": [
    "pijiu",
    "shiliangyinjiu"
   ],
   "pyi": [
    "pj",
    "slyj"
   ]
  },
  {
   "id": "gap_红酒",
   "name": "红酒",
   "risk": "safe",
   "category": "food",
   "summary": "红酒属红酒，与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "detail": "与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "note": "正常食用即可。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "葡萄酒"
   ],
   "use": "酒精饮品",
   "py": [
    "hongjiu",
    "putaojiu"
   ],
   "pyi": [
    "hj",
    "ptj"
   ]
  },
  {
   "id": "gap_味精",
   "name": "味精",
   "risk": "safe",
   "category": "food",
   "summary": "味精属调味品，与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "detail": "与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "note": "正常食用即可。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "谷氨酸钠",
    "鸡精"
   ],
   "use": "调味品（谷氨酸钠）",
   "py": [
    "weijing",
    "guansuanna",
    "jijing"
   ],
   "pyi": [
    "wj",
    "gasn",
    "jj"
   ]
  },
  {
   "id": "gap_芥末",
   "name": "芥末",
   "risk": "safe",
   "category": "food",
   "summary": "芥末属调味品，与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "detail": "与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "note": "正常食用即可。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "黄芥末",
    "青芥"
   ],
   "use": "调味品",
   "py": [
    "jiemo",
    "huangjiemo",
    "qingjie"
   ],
   "pyi": [
    "jm",
    "hjm",
    "qj"
   ]
  },
  {
   "id": "gap_芒果",
   "name": "芒果",
   "risk": "safe",
   "category": "food",
   "summary": "芒果属水果，与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "detail": "与 G6PD（蚕豆病）溶血无明确关联，可正常食用。（芒果/菠萝等可能引起普通过敏，但那是过敏反应，与蚕豆病溶血无关。）",
   "note": "正常食用即可。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "芒果干"
   ],
   "use": "水果",
   "py": [
    "mangguo",
    "mangguogan"
   ],
   "pyi": [
    "mg",
    "mgg"
   ]
  },
  {
   "id": "gap_菠萝",
   "name": "菠萝",
   "risk": "safe",
   "category": "food",
   "summary": "菠萝属水果，与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "detail": "与 G6PD（蚕豆病）溶血无明确关联，可正常食用。（芒果/菠萝等可能引起普通过敏，但那是过敏反应，与蚕豆病溶血无关。）",
   "note": "正常食用即可。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "凤梨"
   ],
   "use": "水果",
   "py": [
    "boluo",
    "fengli"
   ],
   "pyi": [
    "bl",
    "fl"
   ]
  },
  {
   "id": "gap_草莓",
   "name": "草莓",
   "risk": "safe",
   "category": "food",
   "summary": "草莓属水果，与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "detail": "与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "note": "正常食用即可。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [],
   "use": "水果",
   "py": [
    "caomei"
   ],
   "pyi": [
    "cm"
   ]
  },
  {
   "id": "gap_桑葚",
   "name": "桑葚",
   "risk": "safe",
   "category": "food",
   "summary": "桑葚属水果，与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "detail": "与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "note": "正常食用即可。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "桑椹"
   ],
   "use": "水果",
   "py": [
    "sangshen"
   ],
   "pyi": [
    "ss"
   ]
  },
  {
   "id": "gap_杨梅",
   "name": "杨梅",
   "risk": "safe",
   "category": "food",
   "summary": "杨梅属水果，与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "detail": "与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "note": "正常食用即可。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [],
   "use": "水果",
   "py": [
    "yangmei"
   ],
   "pyi": [
    "ym"
   ]
  },
  {
   "id": "gap_樱桃",
   "name": "樱桃",
   "risk": "safe",
   "category": "food",
   "summary": "樱桃属水果，与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "detail": "与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "note": "正常食用即可。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "车厘子"
   ],
   "use": "水果",
   "py": [
    "yingtao",
    "chelizi"
   ],
   "pyi": [
    "yt",
    "clz"
   ]
  },
  {
   "id": "gap_石榴",
   "name": "石榴",
   "risk": "safe",
   "category": "food",
   "summary": "石榴属水果，与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "detail": "与 G6PD（蚕豆病）溶血无明确关联，可正常食用。",
   "note": "正常食用即可。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "石榴汁"
   ],
   "use": "水果",
   "py": [
    "shiliu",
    "shiliuzhi"
   ],
   "pyi": [
    "sl",
    "slz"
   ]
  },
  {
   "id": "gap_洗衣液_洗衣粉",
   "name": "洗衣液/洗衣粉",
   "risk": "safe",
   "category": "household",
   "summary": "洗衣液/洗衣粉为日常用品，正常使用与 G6PD（蚕豆病）溶血无明确关联。",
   "detail": "正常使用与 G6PD（蚕豆病）溶血无明确关联。局部/日常接触不会引起 G6PD 溶血；注意勿误食、勿入眼。",
   "note": "正常使用即可；避免误食、入眼。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "洗衣液",
    "洗衣粉"
   ],
   "use": "衣物洗涤",
   "py": [
    "xiyiyexiyifen",
    "xiyiye",
    "xiyifen"
   ],
   "pyi": [
    "xyyxyf",
    "xyy",
    "xyf"
   ]
  },
  {
   "id": "gap_洗洁精",
   "name": "洗洁精",
   "risk": "safe",
   "category": "household",
   "summary": "洗洁精为日常用品，正常使用与 G6PD（蚕豆病）溶血无明确关联。",
   "detail": "正常使用与 G6PD（蚕豆病）溶血无明确关联。局部/日常接触不会引起 G6PD 溶血；注意勿误食、勿入眼。",
   "note": "正常使用即可；避免误食、入眼。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "洗洁精",
    "洗碗液"
   ],
   "use": "餐具洗涤",
   "py": [
    "xijiejing",
    "xiwanye"
   ],
   "pyi": [
    "xjj",
    "xwy"
   ]
  },
  {
   "id": "gap_漂白剂_84消毒液",
   "name": "漂白剂/84消毒液",
   "risk": "safe",
   "category": "household",
   "summary": "漂白剂/84消毒液为日常用品，正常使用与 G6PD（蚕豆病）溶血无明确关联。",
   "detail": "正常使用与 G6PD（蚕豆病）溶血无明确关联。局部/日常接触不会引起 G6PD 溶血；注意勿误食、勿入眼。",
   "note": "正常使用即可；避免误食、入眼。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "84消毒液",
    "漂白剂",
    "含氯消毒液"
   ],
   "use": "环境消毒、漂白",
   "py": [
    "piaobaijixiaoduye",
    "xiaoduye",
    "piaobaiji",
    "hanlvxiaoduye"
   ],
   "pyi": [
    "pbjxdy",
    "xdy",
    "pbj",
    "hlxdy"
   ]
  },
  {
   "id": "gap_香皂_沐浴露",
   "name": "香皂/沐浴露",
   "risk": "safe",
   "category": "household",
   "summary": "香皂/沐浴露为日常用品，正常使用与 G6PD（蚕豆病）溶血无明确关联。",
   "detail": "正常使用与 G6PD（蚕豆病）溶血无明确关联。局部/日常接触不会引起 G6PD 溶血；注意勿误食、勿入眼。",
   "note": "正常使用即可；避免误食、入眼。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "香皂",
    "肥皂",
    "沐浴露"
   ],
   "use": "洗浴清洁",
   "py": [
    "xiangzaomuyulu",
    "xiangzao",
    "feizao",
    "muyulu"
   ],
   "pyi": [
    "xzmyl",
    "xz",
    "fz",
    "myl"
   ]
  },
  {
   "id": "gap_洗发水_护发素",
   "name": "洗发水/护发素",
   "risk": "safe",
   "category": "household",
   "summary": "洗发水/护发素为日常用品，正常使用与 G6PD（蚕豆病）溶血无明确关联。",
   "detail": "正常使用与 G6PD（蚕豆病）溶血无明确关联。局部/日常接触不会引起 G6PD 溶血；注意勿误食、勿入眼。",
   "note": "正常使用即可；避免误食、入眼。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "洗发水",
    "护发素",
    "洗头水"
   ],
   "use": "洗发护发",
   "py": [
    "xifashuihufasu",
    "xifashui",
    "hufasu",
    "xitoushui"
   ],
   "pyi": [
    "xfshfs",
    "xfs",
    "hfs",
    "xts"
   ]
  },
  {
   "id": "gap_化妆品",
   "name": "化妆品",
   "risk": "safe",
   "category": "household",
   "summary": "化妆品为日常用品，正常使用与 G6PD（蚕豆病）溶血无明确关联。",
   "detail": "正常使用与 G6PD（蚕豆病）溶血无明确关联。局部/日常接触不会引起 G6PD 溶血；注意勿误食、勿入眼。",
   "note": "正常使用即可；避免误食、入眼。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "口红",
    "粉底",
    "眼影",
    "化妆"
   ],
   "use": "护肤、彩妆",
   "py": [
    "huazhuangpin",
    "kouhong",
    "fendi",
    "yanying",
    "huazhuang"
   ],
   "pyi": [
    "hzp",
    "kh",
    "fd",
    "yy",
    "hz"
   ]
  },
  {
   "id": "gap_香水",
   "name": "香水",
   "risk": "safe",
   "category": "household",
   "summary": "香水为日常用品，正常使用与 G6PD（蚕豆病）溶血无明确关联。",
   "detail": "正常使用与 G6PD（蚕豆病）溶血无明确关联。局部/日常接触不会引起 G6PD 溶血；注意勿误食、勿入眼。",
   "note": "正常使用即可；避免误食、入眼。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "香水",
    "香氛"
   ],
   "use": "香氛",
   "py": [
    "xiangshui",
    "xiangfen"
   ],
   "pyi": [
    "xs",
    "xf"
   ]
  },
  {
   "id": "gap_面膜_护手霜_防晒霜",
   "name": "面膜/护手霜/防晒霜",
   "risk": "safe",
   "category": "household",
   "summary": "面膜/护手霜/防晒霜为日常用品，正常使用与 G6PD（蚕豆病）溶血无明确关联。",
   "detail": "正常使用与 G6PD（蚕豆病）溶血无明确关联。局部/日常接触不会引起 G6PD 溶血；注意勿误食、勿入眼。",
   "note": "正常使用即可；避免误食、入眼。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "面膜",
    "护手霜",
    "防晒霜",
    "护肤品"
   ],
   "use": "护肤",
   "py": [
    "mianmohushoushuangfangshaishuang",
    "mianmo",
    "hushoushuang",
    "fangshaishuang",
    "hufupin"
   ],
   "pyi": [
    "mmhssfss",
    "mm",
    "hss",
    "fss",
    "hfp"
   ]
  },
  {
   "id": "gap_洗甲水_丙酮",
   "name": "洗甲水/丙酮",
   "risk": "safe",
   "category": "household",
   "summary": "洗甲水/丙酮为日常用品，正常使用与 G6PD（蚕豆病）溶血无明确关联。",
   "detail": "正常使用与 G6PD（蚕豆病）溶血无明确关联。局部/日常接触不会引起 G6PD 溶血；注意勿误食、勿入眼。",
   "note": "正常使用即可；避免误食、入眼。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "洗甲水",
    "丙酮",
    "卸甲水"
   ],
   "use": "卸甲（有机溶剂）",
   "py": [
    "xijiashuibingtong",
    "xijiashui",
    "bingtong",
    "xiejiashui"
   ],
   "pyi": [
    "xjsbt",
    "xjs",
    "bt"
   ]
  },
  {
   "id": "gap_爽身粉",
   "name": "爽身粉",
   "risk": "safe",
   "category": "household",
   "summary": "爽身粉为日常用品，正常使用与 G6PD（蚕豆病）溶血无明确关联。",
   "detail": "正常使用与 G6PD（蚕豆病）溶血无明确关联。局部/日常接触不会引起 G6PD 溶血；注意勿误食、勿入眼。",
   "note": "正常使用即可；避免误食、入眼。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "爽身粉",
    "痱子粉"
   ],
   "use": "爽身、吸汗（滑石粉类）",
   "py": [
    "shuangshenfen",
    "feizifen"
   ],
   "pyi": [
    "ssf",
    "fzf"
   ]
  },
  {
   "id": "gap_牙膏_漱口水",
   "name": "牙膏/漱口水",
   "risk": "caution",
   "category": "household",
   "summary": "多数牙膏、漱口水含薄荷脑，按薄荷类处理；日常刷牙漱口用量小，通常无碍。",
   "detail": "薄荷脑在部分资料中被列为需避免；牙膏/漱口水含薄荷脑但每次用量很小、且多漱出，一般无需回避，儿童避免吞咽。",
   "note": "按正常用量刷牙漱口，勿吞咽；对薄荷敏感者可换无薄荷配方。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "牙膏",
    "漱口水",
    "薄荷牙膏"
   ],
   "use": "口腔清洁",
   "py": [
    "yagaoshukoushui",
    "yagao",
    "shukoushui",
    "boheyagao"
   ],
   "pyi": [
    "ygsks",
    "yg",
    "sks",
    "bhyg"
   ]
  },
  {
   "id": "gap_花露水_驱蚊液",
   "name": "花露水/驱蚊液",
   "risk": "caution",
   "category": "household",
   "summary": "花露水、部分驱蚊液含薄荷脑/樟脑/避蚊胺，属 G6PD 慎用类。",
   "detail": "花露水常含薄荷脑、樟脑等，部分资料列为 G6PD 需避免；大面积皮肤涂抹可经皮吸收。儿童、婴幼儿尤其慎用。",
   "note": "少量局部使用；婴幼儿避免大面积涂抹；优先物理防蚊。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "花露水",
    "驱蚊液",
    "驱蚊水"
   ],
   "use": "驱蚊、止痒（含避蚊胺/薄荷脑）",
   "py": [
    "hualushuiquwenye",
    "hualushui",
    "quwenye",
    "quwenshui"
   ],
   "pyi": [
    "hlsqwy",
    "hls",
    "qwy",
    "qws"
   ]
  },
  {
   "id": "gap_蚊香_电蚊香",
   "name": "蚊香/电蚊香",
   "risk": "caution",
   "category": "household",
   "summary": "蚊香/电蚊香含拟除虫菊酯，部分樟脑型蚊香可能含萘或樟脑，G6PD 者建议慎用。",
   "detail": "普通拟除虫菊酯类蚊香正常使用风险低；但“樟脑型/含萘”蚊香需避免。房间应通风，婴幼儿避免长时间吸入。",
   "note": "选拟除虫菊酯类、注意通风；避免“樟脑/含萘”型；婴幼儿优先蚊帐。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "蚊香",
    "电蚊香",
    "盘蚊香",
    "蚊香液"
   ],
   "use": "驱蚊（含拟除虫菊酯）",
   "py": [
    "wenxiangdianwenxiang",
    "wenxiang",
    "dianwenxiang",
    "panwenxiang",
    "wenxiangye"
   ],
   "pyi": [
    "wxdwx",
    "wx",
    "dwx",
    "pwx",
    "wxy"
   ]
  },
  {
   "id": "gap_空气清新剂",
   "name": "空气清新剂",
   "risk": "caution",
   "category": "household",
   "summary": "部分空气清新剂含萘、对二氯苯或挥发性有机物，G6PD 者建议少用/不用。",
   "detail": "含“萘”“对二氯苯”的空气清新剂、防蛀块需避免；普通香氛类通风使用问题不大，但密闭空间长时间吸入不推荐。",
   "note": "选成分简单的；避免含萘/对二氯苯产品；保持通风。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "空气清新剂",
    "固体清新剂",
    "香薰蜡烛"
   ],
   "use": "除味、香氛",
   "py": [
    "kongqiqingxinji",
    "gutiqingxinji",
    "xiangxunlazhu"
   ],
   "pyi": [
    "kqqxj",
    "gtqxj",
    "xxlz"
   ]
  },
  {
   "id": "gap_钙片",
   "name": "钙片",
   "risk": "safe",
   "category": "vitamin",
   "summary": "钙片（碳酸钙/柠檬酸钙等）与 G6PD 溶血无明确关联，可正常补充。",
   "detail": "钙剂不在 G6PD 禁忌/慎用名单；按需补充即可（过量补钙另有其他问题，与蚕豆病无关）。",
   "note": "按推荐剂量补充。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "碳酸钙",
    "柠檬酸钙",
    "钙剂",
    "葡萄糖酸钙片"
   ],
   "use": "补钙",
   "py": [
    "gaipian",
    "tansuangai",
    "ningmengsuangai",
    "gaiji",
    "putaotangsuangaipian"
   ],
   "pyi": [
    "gp",
    "tsg",
    "nmsg",
    "gj",
    "pttsgp"
   ]
  },
  {
   "id": "gap_红药水",
   "name": "红药水",
   "risk": "safe",
   "category": "topical",
   "summary": "红药水（红汞）为外用消毒剂，与 G6PD 溶血无明确关联；含汞，现已少用。",
   "detail": "红药水为含汞外用消毒剂，G6PD 无需特别回避；但因含汞、且染色影响观察，现已少用，伤口消毒优先碘伏。",
   "note": "外用少量无碍；已少用，优先选碘伏。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "红汞",
    "汞溴红",
    "mercurochrome"
   ],
   "use": "外用消毒（汞溴红，现已少用）",
   "py": [
    "hongyaoshui",
    "honggong",
    "gongxiuhong"
   ],
   "pyi": [
    "hys",
    "hg",
    "gxh"
   ]
  },
  {
   "id": "gap_双氧水",
   "name": "双氧水",
   "risk": "caution",
   "category": "topical",
   "summary": "双氧水（过氧化氢）是氧化性消毒剂，外用小面积使用一般无碍，大面积/深部或误服需避免。",
   "detail": "过氧化氢为氧化剂，理论上大量进入血液可加重氧化应激；外用 3% 小面积冲洗创面一般安全，但避免大面积、深部腔道冲洗或误服。",
   "note": "小面积创面冲洗可用；避免大面积/深部/误服；优先碘伏。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "双氧水",
    "过氧化氢",
    "hydrogen peroxide"
   ],
   "use": "外用消毒、清洗伤口",
   "py": [
    "shuangyangshui",
    "guoyanghuaqing"
   ],
   "pyi": [
    "sys",
    "gyhq"
   ]
  },
  {
   "id": "gap_无极膏",
   "name": "无极膏",
   "risk": "caution",
   "category": "topical",
   "summary": "无极膏含薄荷脑、樟脑等，属 G6PD 慎用外用制剂。",
   "detail": "无极膏（复方薄荷脑软膏类）含薄荷脑、樟脑等成分，部分资料列为 G6PD 需避免；婴幼儿、大面积涂抹尤慎。",
   "note": "少量局部使用；婴幼儿避免大面积涂抹。",
   "controversy": false,
   "sources": [
    "S1",
    "S5"
   ],
   "aliases": [
    "无极膏",
    "复方薄荷脑软膏"
   ],
   "use": "外用止痒（蚊虫叮咬、皮炎）",
   "py": [
    "wujigao",
    "fufangbohenaoruangao"
   ],
   "pyi": [
    "wjg",
    "ffbhnrg"
   ]
  }
 ]
};

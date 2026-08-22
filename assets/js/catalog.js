/**
 * WISER ACC — Products & Machinery Catalog Data & Filtering (WiserCatalog Namespace)
 * Enhanced with Deep Engineering Specs, Technical Data Sheets & RFQ Integration
 */

const WiserCatalog = (() => {
  'use strict';

  
  const localizedCatalogData = {
  "zh": {
    "mach-washer-50kg": {
      "title": "全悬浮高速工业洗脱机 (350G)",
      "subtitle": "上海威士专利全悬浮气囊减震重型系列",
      "badge": "旗舰重型装备",
      "categoryTag": "上海威士机械",
      "highlights": [
        "350G 超高速强力离心脱水",
        "内外滚筒均采用 SUS 304/316L 医用级不锈钢",
        "微电脑智能 PLC 触控面板 (预置 30+ 组程序)",
        "重型气动空气弹簧悬挂避震 (吸收 98% 振动)"
      ]
    },
    "mach-barrier-washer": {
      "title": "医疗洁净室卫生隔离式洗脱机",
      "subtitle": "穿墙密闭防交叉感染洁净洗涤系统",
      "badge": "医疗洁净认证",
      "categoryTag": "上海威士机械",
      "highlights": [
        "穿墙式物理软密封，杜绝污染区交叉感染",
        "双门互锁隔离 (污染区进料 / 洁净区出料)",
        "支持 85°C–90°C 热化学高温消毒 PLC 控制",
        "滚筒自动定位与气动安全门锁"
      ]
    },
    "mach-tumble-dryer": {
      "title": "高效节能工业烘干机 (50kg / 100kg)",
      "subtitle": "全封闭循环风道与智能温控系统",
      "badge": "高效节能",
      "categoryTag": "上海威士机械",
      "highlights": [
        "轴向循环风道设计，热效率大幅提升 35%",
        "智能残余湿度自动侦测停机 (防止纤维过度烘损)",
        "SUS 304 镜面不锈钢冲孔内筒",
        "双层大面积可抽拉式毛绒收集滤网"
      ]
    },
    "mach-flatwork-ironer": {
      "title": "大口径槽式高速熨平机 (3.0m / 3.3m)",
      "subtitle": "镜面加热滚筒高光平整系列",
      "badge": "五星平烫标准",
      "categoryTag": "上海威士机械",
      "highlights": [
        "超大口径镜面加热滚筒，确保布草光泽平整",
        "导热油/蒸汽/天然气多元化高效供热",
        "无级变频智能调速，最高线速达 35 米/分钟",
        "高敏安全防夹挡板与急停联动保护"
      ]
    },
    "mach-sheet-folder": {
      "title": "高速四通道床单自动折叠机",
      "subtitle": "全自动光电对齐与精确横纵折叠系统",
      "badge": "高速自动化",
      "categoryTag": "上海威士机械",
      "highlights": [
        "横折 2 次 + 纵折 3 次，标准五折一次成型",
        "高精度红外光电传感器与气刀吹折系统",
        "单/双/四通道自由切换，支持不同规格混跑",
        "自动计数与气动堆垛机无缝联动"
      ]
    },
    "mach-towel-folder": {
      "title": "多功能自动毛巾折叠机",
      "subtitle": "高厚度毛巾与浴巾精确分类堆叠",
      "badge": "智能分拣",
      "categoryTag": "上海威士机械",
      "highlights": [
        "支持法式折、半折及三折等多种折叠模式",
        "智能测厚与长度识别，自动分流至不同堆垛口",
        "每小时高达 900–1200 条毛巾折叠吞吐量",
        "大幅减少人工折叠疲劳与人力成本"
      ]
    },
    "linen-bed-sheet-800t": {
      "title": "斯得福 800T 奢华五星酒店床单",
      "subtitle": "100% 顶级精梳长绒棉贡缎系列",
      "badge": "万豪/希尔顿标准",
      "categoryTag": "斯得福五星酒店布草",
      "highlights": [
        "800 根高密缎纹织造，丝滑柔顺触感",
        "OEKO-TEX 100 婴儿级国际安全认证",
        "经 300 次商业洗涤测试不起球不泛灰",
        "原厂预缩与抗撕裂强化工艺处理"
      ]
    },
    "linen-duvet-cover": {
      "title": "斯得福 600T 五星级提花被套",
      "subtitle": "高密奢华缎条客房专用系列",
      "badge": "超柔亲肤",
      "categoryTag": "斯得福五星酒店布草",
      "highlights": [
        "经典 2cm / 3cm 缎条高雅提花纹理",
        "隐形高强度纽扣与绑带双重固定设计",
        "高透气吸湿，重塑奢华酒店裸睡体验",
        "耐氯漂与耐高温商业熨烫定型"
      ]
    },
    "linen-bath-towel": {
      "title": "斯得福 750GSM 铂金奢华浴巾",
      "subtitle": "无捻超柔长绒棉吸水毛巾",
      "badge": "瞬间吸水",
      "categoryTag": "斯得福五星酒店布草",
      "highlights": [
        "750 GSM 加厚克重，触感蓬松厚实",
        "吸水速度小于 2 秒，超强吸水容积",
        "双针严密包边工艺，洗涤不易脱线",
        "通过耐洗色牢度与耐拉伸双重认证"
      ]
    },
    "linen-bathrobe": {
      "title": "斯得福 奢华丝绒割绒浴袍",
      "subtitle": "外层奢华割绒，内层亲肤毛圈",
      "badge": "总统套房定制",
      "categoryTag": "斯得福五星酒店布草",
      "highlights": [
        "双层复合面料：外层华贵割绒，内层舒适吸水",
        "和服领 / 连帽多款式可选，附赠加厚腰带",
        "五星级行政酒廊与 SPA 水疗专用标准",
        "抗皱耐磨，支持高强度工业洗脱烘"
      ]
    },
    "linen-table-cloth": {
      "title": "斯得福 宴会高密防泼水台布",
      "subtitle": "纳米级防污防油奢华餐厨布草",
      "badge": "宴会宴席专用",
      "categoryTag": "斯得福五星酒店布草",
      "highlights": [
        "表面纳米级抗污防泼水技术处理",
        "液体瞬间凝聚成珠，易洗快干",
        "多次商业洗涤后依然挺括不易起皱",
        "多色可选，支持酒店品牌提花定制"
      ]
    }
  },
  "th": {
    "mach-washer-50kg": {
      "title": "เครื่องซักสลัดอุตสาหกรรมความเร็วสูง (350G)",
      "subtitle": "ซีรีส์สปริงรองรับแรงสั่นสะเทือนแบบ Soft-Mount ของ Shanghai WISER",
      "badge": "รุ่นเรือธงสำหรับงานหนัก",
      "categoryTag": "เครื่องจักร Shanghai WISER",
      "highlights": [
        "แรงสลัดความเร็วสูง 350G ช่วยลดความชื้นและประหยัดพลังงานอบ",
        "ถังซักด้านในและนอกสเตนเลส SUS 304/316L ทนทานสูง",
        "หน้าจอสัมผัส PLC อัจฉริยะบันทึกได้กว่า 30 โปรแกรม",
        "ระบบสปริงลมซับแรงสั่นสะเทือนได้ถึง 98%"
      ]
    },
    "mach-barrier-washer": {
      "title": "เครื่องซักสลัดปลอดเชื้อทางการแพทย์ (Barrier Washer)",
      "subtitle": "ระบบป้องกันการติดเชื้อแบบฝาคู่ผ่านผนังสำหรับโรงพยาบาล",
      "badge": "รับรองมาตรฐานการแพทย์",
      "categoryTag": "เครื่องจักร Shanghai WISER",
      "highlights": [
        "กั้นแยกโซนผ้าสกปรกและผ้าสะอาดเพื่อป้องกันการปนเปื้อน 100%",
        "ประตูสองฝั่งควบคุมด้วยระบบอินเทอร์ล็อกอัจฉริยะ",
        "โปรแกรมฆ่าเชื้อด้วยความร้อนและสารเคมีที่ 85°C–90°C",
        "ระบบล็อกประตูและจัดตำแหน่งถังซักอัตโนมัติ"
      ]
    },
    "mach-tumble-dryer": {
      "title": "เครื่องอบผ้าอุตสาหกรรมประหยัดพลังงาน (50kg / 100kg)",
      "subtitle": "ระบบหมุนเวียนลมร้อนอัจฉริยะและควบคุมอุณหภูมิแม่นยำ",
      "badge": "ประหยัดพลังงานสูง",
      "categoryTag": "เครื่องจักร Shanghai WISER",
      "highlights": [
        "ทิศทางลมตามแนวแกนเพิ่มประสิทธิภาพความร้อนขึ้น 35%",
        "เซนเซอร์ตรวจจับความชื้นอัตโนมัติป้องกันผ้าเสียหาย",
        "ถังอบสเตนเลส SUS 304 ขัดเงาพิเศษถนอมเส้นใย",
        "แผ่นกรองฝุ่นขนาดใหญ่แบบลิ้นชักทำความสะอาดง่าย"
      ]
    },
    "mach-flatwork-ironer": {
      "title": "เครื่องรีดผ้าสายพานความเร็วสูงขนาดใหญ่ (3.0m / 3.3m)",
      "subtitle": "ลูกกลิ้งรีดสเตนเลสขัดเงาพิเศษสำหรับโรงแรมระดับ 5 ดาว",
      "badge": "มาตรฐานรีดเรียบ 5 ดาว",
      "categoryTag": "เครื่องจักร Shanghai WISER",
      "highlights": [
        "ลูกกลิ้งขนาดใหญ่ขัดเงาพิเศษคืนความเรียบเนียนให้ผ้าลินิน",
        "รองรับระบบความร้อนด้วยไอน้ำ น้ำมันร้อน หรือแก๊ส",
        "ปรับความเร็วด้วยอินเวอร์เตอร์ สูงสุด 35 เมตร/นาที",
        "ระบบเซฟตี้หยุดฉุกเฉินและแผงป้องกันมือ"
      ]
    },
    "mach-sheet-folder": {
      "title": "เครื่องพับผ้าปูที่นอนอัตโนมัติ 4 ช่องทาง",
      "subtitle": "ระบบพับตามยาวและตามขวางด้วยระบบลมเป่าความแม่นยำสูง",
      "badge": "ระบบอัตโนมัติความเร็วสูง",
      "categoryTag": "เครื่องจักร Shanghai WISER",
      "highlights": [
        "พับตามยาว 2 ครั้ง + พับตามขวาง 3 ครั้ง (มาตรฐาน 5 พับ)",
        "เซนเซอร์โฟโตอิเล็กทริกและระบบลมเป่าแม่นยำ",
        "สลับโหมด 1 / 2 / 4 ช่องทางรองรับผ้าหลายขนาด",
        "นับจำนวนและส่งต่อเข้าเครื่องเรียงผ้าอัตโนมัติ"
      ]
    },
    "mach-towel-folder": {
      "title": "เครื่องพับผ้าขนหนูอัตโนมัติอเนกประสงค์",
      "subtitle": "พับและจัดเรียงผ้าขนหนูหนาและผ้าเช็ดตัวอย่างแม่นยำ",
      "badge": "ระบบคัดแยกอัจฉริยะ",
      "categoryTag": "เครื่องจักร Shanghai WISER",
      "highlights": [
        "รองรับการพับแบบฝรั่งเศส พับครึ่ง และพับสามทบ",
        "วัดความหนาและความยาวเพื่อแยกกองผ้าอัตโนมัติ",
        "ความเร็วในการพับ 900–1,200 ชิ้นต่อชั่วโมง",
        "ลดแรงงานและเพิ่มความเป็นระเบียบเรียบร้อย"
      ]
    },
    "linen-bed-sheet-800t": {
      "title": "ผ้าปูที่นอนโรงแรมหรู 800 เส้นด้าย Sidefu",
      "subtitle": "ผ้าฝ้ายเส้นยาวพรีเมียม 100% ลายซาติน",
      "badge": "มาตรฐาน Marriott / Hilton",
      "categoryTag": "ผ้าลินินโรงแรม Sidefu",
      "highlights": [
        "ทอแน่น 800 เส้นด้าย สัมผัสนุ่มลื่นเงางามดุจแพรไหม",
        "มาตรฐานความปลอดภัย OEKO-TEX 100 Class 1",
        "ทนทานต่อการซักเชิงพาณิชย์มากกว่า 300 ครั้ง",
        "ผ่านกรรมวิธีป้องกันการหดตัวและทนต่อแรงดึง"
      ]
    },
    "linen-duvet-cover": {
      "title": "ปลอกผ้านวมหรู 600 เส้นด้าย Sidefu",
      "subtitle": "ลายริ้วซาติน 2 ซม. / 3 ซม. ระดับโรงแรม 5 ดาว",
      "badge": "นุ่มนวลเป็นพิเศษ",
      "categoryTag": "ผ้าลินินโรงแรม Sidefu",
      "highlights": [
        "ลายริ้วซาตินคลาสสิก หรูหรา มีระดับ",
        "กระดุมซ่อนและเชือกผูกมุมผ้าด้านในอย่างแน่นหนา",
        "ระบายอากาศได้ดีเยี่ยม สัมผัสนุ่มสบายผิว",
        "ทนต่อการซักฟอกคลอรีนและการรีดความร้อนสูง"
      ]
    },
    "linen-bath-towel": {
      "title": "ผ้าเช็ดตัวพรีเมียม 750 GSM Sidefu",
      "subtitle": "ผ้าฝ้ายเส้นยาวซับน้ำได้ดีเยี่ยม",
      "badge": "ซับน้ำรวดเร็ว",
      "categoryTag": "ผ้าลินินโรงแรม Sidefu",
      "highlights": [
        "น้ำหนักหนานุ่ม 750 GSM ให้สัมผัสหรูหรา",
        "ซับน้ำได้ทันทีในเวลาไม่ถึง 2 วินาที",
        "เย็บขอบคู่แน่นหนาป้องกันการหลุดลุ่ย",
        "สีทนทานไม่ซีดจางหลังการซักหลายร้อยครั้ง"
      ]
    },
    "linen-bathrobe": {
      "title": "เสื้อคลุมอาบน้ำผ้าเวลัวร์พรีเมียม Sidefu",
      "subtitle": "ด้านนอกผ้าเวลัวร์กำมะหยี่ ด้านในผ้าขนหนูซับน้ำ",
      "badge": "เกรดเพรสซิเดนท์สูท",
      "categoryTag": "ผ้าลินินโรงแรม Sidefu",
      "highlights": [
        "ผ้าสองชั้น: ด้านนอกนุ่มหรู ด้านในซับน้ำได้ดีเยี่ยม",
        "มีให้เลือกทั้งแบบคอกิโมโนและแบบมีหมวกฮู้ด",
        "มาตรฐานระดับเอ็กเซ็กคิวทีฟเลานจ์และสปาชั้นนำ",
        "ทนทานต่อการซักสลัดน้ำหนักในโรงซัก"
      ]
    },
    "linen-table-cloth": {
      "title": "ผ้าปูโต๊ะงานเลี้ยงกันน้ำ Sidefu",
      "subtitle": "เคลือบสารป้องกันคราบสกปรกและน้ำมันระดับนาโน",
      "badge": "สำหรับงานจัดเลี้ยงหรู",
      "categoryTag": "ผ้าลินินโรงแรม Sidefu",
      "highlights": [
        "เทคโนโลยีเคลือบสารป้องกันของเหลวซึมเปื้อน",
        "ของเหลวจะจับตัวเป็นหยดน้ำ เช็ดทำความสะอาดง่าย",
        "คงรูปทรงสวยงาม ไม่ยับง่ายหลังการซัก",
        "มีหลายสีให้เลือกพร้อมบริการทอลายโลโก้เฉพาะ"
      ]
    }
  }
};

  function getLocalizedProduct(p) {
    const lang = window.i18n ? window.i18n.getCurrentLanguage() : 'en';
    if (lang !== 'en' && localizedCatalogData[lang] && localizedCatalogData[lang][p.id]) {
      const loc = localizedCatalogData[lang][p.id];
      return {
        ...p,
        title: loc.title || p.title,
        subtitle: loc.subtitle || p.subtitle,
        badge: loc.badge || p.badge,
        highlights: loc.highlights || p.highlights
      };
    }
    return p;
  }

  const productsData = [
  // MACHINERY
  {
    id: 'mach-washer-50kg',
    modelCode: 'WAS-50',
    category: 'machinery',
    title: 'High-Spin Washer Extractor (350G)',
    subtitle: 'Shanghai WISER Fully-Suspended Soft Mount Series',
    badge: 'Flagship Heavy-Duty',
    badgeType: 'tech',
    image: 'assets/images/machinery/washer-extractor.jpg',
    capacity: '15kg / 30kg / 50kg / 100kg',
    highlights: ['350G High-Speed Extract Force', 'SUS 304/316L Stainless Steel Inner/Outer Drum', 'Programmable Smart PLC Touchscreen (30+ Cycles)', 'Heavy-Duty Pneumatic Air Spring Suspension (98% Shock Absorption)'],
    specs: {
      'Model Code': 'WISER WAS-50 Soft-Mount',
      'Rated Capacity': '50 kg (Dry Linen Weight)',
      'Drum Volume': '500 Liters (Diameter 1010mm x Depth 630mm)',
      'Extraction Speed / G-Force': '850 RPM / 350G High Extract',
      'Motor Power': '5.5 kW Delta Inverter Motor',
      'Heating Options': 'Direct Steam (0.4–0.6 MPa) or Electric (36 kW)',
      'Water Inlets': '3x DN32 (Cold, Hot, Recycled / Soft Water)',
      'Drainage Diameter': 'DN100 Gravity Valve',
      'Dimensions (W x D x H)': '1500 x 1650 x 1920 mm',
      'Net Weight': '1,950 kg (No anchor bolt foundation needed)',
      'Certifications': 'CE Machinery Directive 2006/42/EC, ISO 9001:2015'
    },
    utilities: {
      'Steam Consumption': '35–45 kg/cycle at 0.5 MPa',
      'Water Consumption': '12–15 L/kg linen (Eco-Wash Profile)',
      'Electrical Supply': '380V / 3-Phase / 50-60 Hz (3P+N+PE)',
      'Compressed Air': '0.6–0.7 MPa for pneumatic valves'
    },
    description: 'Engineered for high-throughput 5-star hotels and commercial central laundries. The soft-mount suspension absorbs 98% of dynamic vibrations, allowing installation on upper floors without heavy concrete foundation work.'
  },
  {
    id: 'mach-barrier-washer',
    modelCode: 'BARR-50',
    category: 'machinery',
    title: 'Medical Bio-Barrier Washer Extractor',
    subtitle: 'Hygienic Pass-Through Infection Control System',
    badge: 'Healthcare Certified',
    badgeType: 'hygiene',
    image: 'assets/images/machinery/barrier-washer.jpg',
    capacity: '30kg / 50kg / 100kg',
    highlights: ['Zero Cross-Contamination Wall Seal Isolation', 'Dual-Door Cleanroom Separation (Dirty Load / Clean Unload)', 'Thermal Chemical 85°C Disinfection PLC Controls', 'Automatic Drum Positioning & Pneumatic Lock'],
    specs: {
      'Model Code': 'WISER BARR-50 Hygienic Pass-Through',
      'Rated Capacity': '50 kg / 100 kg Medical Linen',
      'Cleanroom Rating': 'ISO 14644-1 Cleanroom Class 5–8 Certified',
      'Partitioning Method': '304 Stainless Wall-Sealing Flexible Gasket',
      'Extraction G-Force': '320G High-Speed Dewatering',
      'Disinfection Mode': 'Thermal Disinfection Programmable (A0 600–3000)',
      'Door Interlock': 'Dual Safety Pneumatic Interlock System',
      'Dimensions (W x D x H)': '1680 x 1750 x 1980 mm',
      'Net Weight': '2,200 kg',
      'Certifications': 'CE Medical Directive & ISO 13485 Standards'
    },
    utilities: {
      'Steam Supply': '0.4–0.6 MPa (High-Volume Disinfection Injection)',
      'Power Rating': '7.5 kW Variable Frequency Drive',
      'Water Connection': 'DN40 Dual Water Inlets (Demineralized Compatible)',
      'Drainage': 'Dual DN100 High-Velocity Dump Valves'
    },
    description: 'The global standard for hospital laundry hygiene. Installed through a partition wall to maintain absolute physical separation between soiled intake and sterile clean unloading zones.'
  },
  {
    id: 'mach-tumble-dryer',
    modelCode: 'DRY-50',
    category: 'machinery',
    title: 'Eco-Air Industrial Tumble Dryer',
    subtitle: 'High-Efficiency Axial Airflow Drying System',
    badge: 'Energy Saver 30%',
    badgeType: 'tech',
    image: 'assets/images/machinery/tumble-dryer.jpg',
    capacity: '25kg / 35kg / 50kg / 100kg',
    highlights: ['Combined Radial-Axial Airflow (30% Energy Savings)', 'Cool-Down Anti-Wrinkle & Anti-Spontaneous Combustion Cycle', 'Dual Precision Temperature Sensors (Inlet & Exhaust)', 'Extra-Large Mirror Stainless Loading Door with Safety Switch'],
    specs: {
      'Model Code': 'WISER DRY-50 Eco-Air',
      'Rated Capacity': '50 kg (100 Liters Dry Linen)',
      'Drum Volume / Dia': '980 Liters / 1120 mm Stainless Steel',
      'Heating Methods': 'Natural Gas (Low-NOx Burner) / Steam / Electric',
      'Blower Air Volume': '3,800 m³/h High Static Pressure Exhaust',
      'Moisture Sensor': 'Residual Moisture Auto-Stop (Zero Over-Drying)',
      'Dimensions (W x D x H)': '1320 x 1580 x 2150 mm',
      'Net Weight': '780 kg',
      'Certifications': 'CE European Directive, ISO 14001'
    },
    utilities: {
      'Gas Consumption': '3.2 m³/h (Natural Gas Option)',
      'Steam Consumption': '60 kg/h at 0.5 MPa (Steam Option)',
      'Electrical Motor': '1.5 kW Drum Drive + 1.1 kW Exhaust Blower',
      'Exhaust Duct Dia': 'DN250 mm Direct Venting'
    },
    description: 'Reduces drying cycle times to 25–35 minutes while conserving up to 30% thermal energy through targeted axial heat flow and thick thermal-insulated cabinet walls.'
  },
  {
    id: 'mach-flatwork-ironer',
    modelCode: 'IRN-3300',
    category: 'machinery',
    title: 'High-Speed Steam Flatwork Ironer',
    subtitle: 'Mirror-Polished Multi-Roller Chest/Cylinder System',
    badge: 'High Productivity',
    badgeType: 'tech',
    image: 'assets/images/machinery/flatwork-ironer.jpg',
    capacity: 'Roll Width: 3000mm – 3300mm (1 to 4 Rollers)',
    highlights: ['Infinitely Variable Speed 5 – 35 m/min', 'Mirror-Polished SUS 304 Heating Cylinder (Zero Drag)', 'Full Width Finger Protection Safety Guard & Emergency Cord', 'Multi-Zone Steam Chamber with High Heat Transfer Efficiency'],
    specs: {
      'Model Code': 'WISER IRN-3300-3R (3-Roller Model)',
      'Usable Ironing Width': '3,300 mm (King Hotel Sheets & Duvets)',
      'Roller Diameter': '800 mm per heating roller',
      'Ironing Speed': '8 – 35 meters per minute (Inverter Control)',
      'Steam Pressure': '0.6 – 0.9 MPa (High Temperature Evaporation)',
      'Feed Belts': 'Heat-Resistant Nomex Ironing Ribbons',
      'Dimensions (W x D x H)': '4250 x 3100 x 1750 mm',
      'Net Weight': '6,500 kg',
      'Certifications': 'CE Machinery Directive'
    },
    utilities: {
      'Steam Consumption': '180–220 kg/h at 0.7 MPa',
      'Power Requirement': '5.5 kW Inverter Main Drive + 1.5 kW Exhaust Fans',
      'Condensate Return': 'DN32 High-Pressure Steam Trap Return',
      'Exhaust Ventilation': '2x DN200 Moisture Removal Ducts'
    },
    description: 'Delivers a flawless, wrinkle-free mirror finish on 5-star hotel bed linens and tablecloths. High steam transfer efficiency ensures instant moisture evaporation at 30+ meters/min.'
  },
  {
    id: 'mach-sheet-folder',
    modelCode: 'SFT-400',
    category: 'machinery',
    title: 'Automated 4-Lane Sheet & Linen Folder',
    subtitle: 'High-Precision Lateral & Cross Folding Stacker',
    badge: 'Smart Automation',
    badgeType: 'tech',
    image: 'assets/images/machinery/sheet-folder.jpg',
    capacity: 'Max Width: 3300mm (1-Lane Large or 4-Lane Small mode)',
    highlights: ['2 Lateral Folds + 3 Cross Folds with High Precision', 'Ultra-Quiet Air-Jet Precise Pulse Folding Mechanism', 'Optical Thickness & Length Sensor System', 'Motorized Automatic Stack Discharge Conveyor'],
    specs: {
      'Model Code': 'WISER SFT-400 Intelligent Folder',
      'Max Working Width': '3,300 mm',
      'Folding Precision': '± 5 mm Electronic Air Jet Timing',
      'Lane Configurations': '1-Lane (King Sheets) / 2-Lane / 4-Lane (Pillowcases)',
      'Throughput': 'Up to 1,200 hotel bed sheets / hour',
      'PLC Display': '7-Inch Color Multi-Language Touchscreen',
      'Dimensions (W x D x H)': '4100 x 3600 x 1850 mm',
      'Net Weight': '2,400 kg',
      'Certifications': 'CE Standard'
    },
    utilities: {
      'Compressed Air': '0.6–0.8 MPa (Clean Dry Air, 350 L/min)',
      'Power Supply': '3.0 kW / 380V / 3-Phase',
      'Control Voltage': '24V DC Safe Low Voltage'
    },
    description: 'Synchronizes seamlessly with flatwork ironers to automatically fold, stack, and discharge large hotel sheets and tablecloths with zero manual labor.'
  },
  {
    id: 'mach-towel-folder',
    modelCode: 'TWL-900',
    category: 'machinery',
    title: 'Automated Towel Folding & Stacking Machine',
    subtitle: 'High-Speed French Fold & Auto-Sorter',
    badge: 'High Speed 900/hr',
    badgeType: 'tech',
    image: 'assets/images/machinery/towel-folder.jpg',
    capacity: 'Up to 900 Towels / Hour',
    highlights: ['French Fold, Half Fold & 1/3 Fold Programmable Modes', 'Automatic Infrared Length Measurement & Rejection of Stained Items', 'Configurable Stack Height (e.g. 5, 10, 15 pieces per stack)', 'One-Operator High Throughput Station'],
    specs: {
      'Model Code': 'WISER TWL-900 French-Fold Station',
      'Max Towel Size': '1200 x 2000 mm (Large Bath Sheets to Hand Towels)',
      'Throughput Speed': 'Up to 900 pieces / hour (One operator)',
      'Stack Output': 'Motorized Belt Return Conveyor (Left or Right side)',
      'PLC Interface': 'Customizable Hotel Preset Programs',
      'Dimensions (W x D x H)': '2200 x 2800 x 1650 mm',
      'Net Weight': '1,150 kg',
      'Certifications': 'CE Standard'
    },
    utilities: {
      'Air Consumption': '0.6 MPa (200 L/min)',
      'Electrical Load': '2.2 kW / 380V / 3-Phase'
    },
    description: 'Transforms hotel towel folding into an efficient, one-operator automated workflow. Measures towel dimensions dynamically and delivers uniform, compact stacks ready for delivery carts.'
  },

  // SIDEFU LINEN
  {
    id: 'linen-bed-sheet',
    modelCode: 'SDF-BED-600',
    category: 'linen',
    title: 'Sidefu 5-Star Hotel Bed Sheet Collection',
    subtitle: '400T – 1000T Long-Staple Egyptian & Xinjiang Cotton',
    badge: 'Sidefu Luxury',
    badgeType: 'luxury',
    image: 'assets/images/linen/bed-sheet.jpg',
    capacity: 'Single / Queen / King / Custom Presidential Suite Sizes',
    highlights: ['100% Combed Long-Staple Cotton (>38mm Fiber Length)', 'Mercerized Sateen Weave & Crisp Plain Weave', 'Tested for 300+ Industrial Wash Cycles', 'Silky Soft Hand-Feel, Zero Pilling & High Luster'],
    specs: {
      'Model Code': 'Sidefu Grand Master Bed Linen Series',
      'Thread Count Options': '400TC, 600TC, 800TC, 1000TC Ultra-Luxury',
      'Yarn Count': '60s / 80s / 100s / 120s High-Density Ring Spun',
      'Whiteness Index': 'CIE Whiteness > 85 (High Stability)',
      'Tensile Strength': 'Warp > 480 N, Weft > 410 N (Industrial Grade)',
      'Shrinkage Rate': '< 2.5% under 75°C Industrial Wash Standard',
      'Eco-Certification': 'OEKO-TEX Standard 100 Class 1 (Baby Skin Safe)'
    },
    utilities: {
      'Wash Care': 'Suitable for tunnel washers & high-spin 350G extractors',
      'Ironing Temp': 'Safe up to 180°C flatwork ironing temperature',
      'Chemical Fastness': 'High resistance to active oxygen & chlorine bleach'
    },
    description: 'Supplied directly to world-leading luxury hotel chains including Marriott, Hilton, and IHG. Engineered with premium mercerization for long-lasting silky sheen and exceptional durability.'
  },
  {
    id: 'linen-duvet-cover',
    modelCode: 'SDF-DUV-800',
    category: 'linen',
    title: 'Sidefu Sateen Striped Duvet Cover & Sets',
    subtitle: 'Classic 0.5cm / 1cm / 2cm Sateen Stripe Hospitality Standard',
    badge: '5-Star Approved',
    badgeType: 'luxury',
    image: 'assets/images/linen/duvet-cover.jpg',
    capacity: 'Twin / Full / Queen / King / Super King',
    highlights: ['Pre-Shrunk Sanforized Processing Finish', 'Durable Concealed Envelope Opening with Hand-Tied Corner Ties', '100% Hand-Inspection Quality Control', 'Color Fastness to Washing: Grade 4–5'],
    specs: {
      'Model Code': 'Sidefu Sateen Stripe Duvet Set',
      'Stripe Widths': '0.5 cm, 1.0 cm, 2.0 cm, 3.0 cm or Plain Sateen',
      'Fabric Density': '60x40 / 80x60 Luxury Grade Combed Cotton',
      'Closure Type': 'Hospitality Open Flap / High-Strength Reinforced Bartack',
      'Pillowcase Styles': 'Oxford Border (5cm hem) or Bag Style',
      'Eco-Certification': 'OEKO-TEX Standard 100'
    },
    utilities: {
      'Care Rating': 'Engineered for high-volume commercial flatwork ironers',
      'Wash Life': 'Over 300 commercial laundry cycles without pilling'
    },
    description: 'The signature look and feel of 5-star hotel suites. Retains smooth touch, crisp luster, and geometric stripe precision even after hundreds of commercial wash cycles.'
  },
  {
    id: 'linen-bath-towel',
    modelCode: 'SDF-TWL-650',
    category: 'linen',
    title: 'Sidefu Platinum Bath Linen Collection',
    subtitle: '650 GSM Combed Ring-Spun Cotton Hospitality Towels',
    badge: 'Ultra Absorbent',
    badgeType: 'luxury',
    image: 'assets/images/linen/bath-towel.jpg',
    capacity: 'Bath Towels (70x140cm, 80x160cm), Hand Towels, Face Towels, Bath Mats (900 GSM)',
    highlights: ['650 GSM Heavyweight Dense Plush Pile', 'Double-Stitched Reinforced Lock Hem (Zero Unraveling)', 'High-Absorption Spiral Loop Weave (<3s Instant Absorb)', 'Chlorine-Resistance & Low Linting Formulation'],
    specs: {
      'Model Code': 'Sidefu Platinum Series Bath Linen',
      'Weight Range': '550 GSM, 650 GSM, 750 GSM Heavy Luxury',
      'Yarn Type': '21s/2 & 32s/2 Double Spiral Ring-Spun Combed Cotton',
      'Absorption Speed': '< 3 Seconds Instant Water Soak (ASTM D4772)',
      'Whiteness & Brightness': 'Optically Brightened Hospitality White',
      'Eco-Certification': 'OEKO-TEX Standard 100'
    },
    utilities: {
      'Drying Profile': 'High tumble dryer fluff retention',
      'Durability': 'Double-stitched longitudinal hems prevent edge fraying'
    },
    description: 'Plush, thick, and exceptionally absorbent. Engineered specifically to withstand high-spin extraction and repeated industrial tumble drying without losing softness.'
  },
  {
    id: 'linen-bathrobe',
    modelCode: 'SDF-ROB-450',
    category: 'linen',
    title: 'Luxury Hotel Velour & Waffle Bathrobes',
    subtitle: 'Plush Micro-Velour Exterior with Absorbent Terry Lining',
    badge: 'Spa & Suite Grade',
    badgeType: 'luxury',
    image: 'assets/images/linen/bathrobe.jpg',
    capacity: 'Sizes: M, L, XL, XXL (Unisex)',
    highlights: ['Kimono / Shawl Collar Designs with Dual Belt Loops', 'Deep Patch Front Pockets & Reinforced Hanger Loop', 'Custom Hotel Monogram Embroidery Available', 'Luxuriously Soft Skin Touch for Presidential Suites & Spas'],
    specs: {
      'Model Code': 'Sidefu Executive Spa Robe',
      'Fabric Construction': 'Plush Cut-Velour Outside, Pure Cotton Terry Inside',
      'Fabric Weight': '400 GSM – 450 GSM Luxury Heavyweight',
      'Collar Options': 'Shawl Collar, Kimono Style, or Diamond Waffle Collar',
      'Color Options': 'Optic White, Charcoal, Slate Grey, Cream',
      'Eco-Certification': 'OEKO-TEX Standard 100'
    },
    utilities: {
      'Wash Care': 'Commercial gentle cycle 60°C tumble dry low'
    },
    description: 'Created for 5-star presidential suites, luxury wellness spas, and high-end resorts. Combines exterior velvet sophistication with deep interior water absorption.'
  },
  {
    id: 'linen-tableware',
    modelCode: 'SDF-TBL-300',
    category: 'linen',
    title: 'Sidefu Banquet & F&B Table Linen',
    subtitle: 'Stain-Resistant Fluorocarbon Coated Damask & Plain Weave',
    badge: 'F&B Grade',
    badgeType: 'luxury',
    image: 'assets/images/linen/table-linen.jpg',
    capacity: 'Round, Square, Rectangular, Buffet Skirtings & Napkins',
    highlights: ['Water & Oil Repellent Nano-Shield Finish', 'Heavyweight Anti-Wrinkle Elegant Drape', 'Vibrant Colorfastness to Food & Wine Stains', 'Easy Soil-Release Formulation for Lower Chemical Wash'],
    specs: {
      'Model Code': 'Sidefu Grand Banquet Linen',
      'Fabric Blend': '100% Combed Cotton or 65/35 Heavy Poly-Cotton Damask',
      'Weight': '220 – 300 GSM Heavyweight Structure',
      'Stain Treatment': 'Nano Fluorocarbon Repellent Surface Coating',
      'Edge Finish': 'Ultrasonic Laser Cut or Precision Mitered Corners',
      'Patterns': 'Satin Band, Damask Ivy Leaf, Plain Weave, Jacquard'
    },
    utilities: {
      'Ironing': 'High-speed flatwork ironer compatible with instant crease removal'
    },
    description: 'Engineered specifically for high-turnover hotel restaurants, grand ballrooms, and wedding banquet halls. Wine and oil stains wash out effortlessly at standard temperatures.'
  }
];

// Initialize Catalog on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog('all');
  initCatalogFilters();
  initProductSearch();
  handleUrlCategoryParam();
});

function handleUrlCategoryParam() {
  const urlParams = new URLSearchParams(window.location.search);
  const cat = urlParams.get('cat');
  if (cat && (cat === 'machinery' || cat === 'linen')) {
    const targetTab = document.querySelector(`.catalog-tab[data-category="${cat}"]`);
    if (targetTab) {
      document.querySelectorAll('.catalog-tab').forEach(t => {
        t.classList.remove('active', 'bg-slate-900', 'text-white');
        t.classList.add('bg-white', 'text-slate-700');
      });
      targetTab.classList.add('active', 'bg-slate-900', 'text-white');
      targetTab.classList.remove('bg-white', 'text-slate-700');
      renderCatalog(cat);
    }
  }
}

function renderCatalog(category = 'all', searchQuery = '') {
  const container = document.getElementById('products-grid');
  if (!container) return;

  const filtered = productsData.filter(item => {
    const matchesCategory = category === 'all' || item.category === category;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.modelCode && item.modelCode.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <p class="text-slate-400 text-lg">No products found matching your criteria.</p>
        <button onclick="renderCatalog('all')" class="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 font-medium">Reset Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const badgeClass = item.badgeType === 'luxury' ? 'luxury-badge' : item.badgeType === 'hygiene' ? 'hygiene-badge' : 'tech-badge';
    return `
      <div class="product-card bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
        <div>
          <!-- Image Header with Model Code Badge -->
          <div class="relative bg-slate-50 p-6 aspect-[16/10] border-b border-slate-100 flex items-center justify-center overflow-hidden">
            <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" class="max-h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute top-4 left-4">
              <span class="${badgeClass}">${item.badge}</span>
            </div>
            ${item.modelCode ? `
              <div class="absolute top-4 right-4 bg-navy-900/80 text-teal-300 font-mono text-[11px] font-bold px-2 py-0.5 rounded backdrop-blur-sm">
                ${item.modelCode}
              </div>
            ` : ''}
          </div>

          <!-- Body Content -->
          <div class="p-6">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                ${item.category === 'machinery' ? 'Shanghai WISER Machinery' : 'Sidefu 5-Star Hotel Linen'}
              </span>
            </div>
            <h3 class="text-xl font-bold text-navy-900 leading-tight mb-2 group-hover:text-ocean-500 transition-colors">
              ${item.title}
            </h3>
            <p class="text-xs text-slate-500 mb-4 line-clamp-2 leading-relaxed">
              ${item.subtitle}
            </p>

            <!-- Key Feature Bullets -->
            <ul class="space-y-1.5 mb-6 text-xs text-slate-600">
              ${item.highlights.slice(0, 3).map(h => `
                <li class="flex items-start gap-2">
                  <svg class="w-3.5 h-3.5 ${item.category === 'machinery' ? 'text-teal-500' : 'text-gold-500'} shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>${h}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="p-6 pt-0 flex flex-col gap-2.5">
          <div class="flex items-center gap-2.5">
            <a href="product-detail.html?id=${item.id}" class="flex-1 py-2.5 px-4 bg-navy-800 hover:bg-ocean-500 text-white rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 shadow-sm">
              <span>${window.i18n ? window.i18n.t('showcase.specCad') : 'Full Specifications &amp; CAD'}</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>
            <button onclick="openProductModal('${item.id}')" class="py-2.5 px-3 border border-slate-200 hover:border-slate-400 bg-slate-50 text-slate-700 rounded-xl text-xs font-semibold transition-all" title="Quick Spec Popup">
              ${window.i18n ? window.i18n.t('showcase.quickView') : 'Quick View'}
            </button>
          </div>
          <a href="contact.html?product=${encodeURIComponent(item.modelCode || item.title)}" class="w-full py-2 px-3 border border-slate-300 hover:border-ocean-500 text-slate-700 hover:text-ocean-600 rounded-xl text-xs font-bold transition-all text-center">
            ${window.i18n ? window.i18n.t('showcase.requestQuote') : 'Request Formal Quotation &rarr;'}
          </a>
        </div>
      </div>
    `;
  }).join('');
}

// Re-render catalog when language changes
window.addEventListener('languageChanged', () => {
  const container = document.getElementById('catalog-grid') || document.getElementById('products-grid');
  if (container) {
    renderCatalog();
  }
});

function initCatalogFilters() {
  const tabs = document.querySelectorAll('.catalog-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active', 'bg-slate-900', 'text-white');
        t.classList.add('bg-white', 'text-slate-700');
      });
      
      tab.classList.add('active', 'bg-slate-900', 'text-white');
      tab.classList.remove('bg-white', 'text-slate-700');

      const category = tab.dataset.category || 'all';
      const searchInput = document.getElementById('catalog-search');
      const query = searchInput ? searchInput.value : '';
      renderCatalog(category, query);
    });
  });
}

function initProductSearch() {
  const searchInput = document.getElementById('catalog-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const activeTab = document.querySelector('.catalog-tab.active');
    const category = activeTab ? activeTab.dataset.category : 'all';
    renderCatalog(category, e.target.value);
  });
}

  function openProductModal(id) {
    const product = productsData.find(p => p.id === id);
    if (!product) return;

    let modal = document.getElementById('product-spec-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'product-spec-modal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-opacity';
      document.body.appendChild(modal);
    }

    const badgeClass = product.badgeType === 'luxury' ? 'luxury-badge' : product.badgeType === 'hygiene' ? 'hygiene-badge' : 'tech-badge';

    modal.innerHTML = `
      <div class="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
        
        <!-- Modal Header Bar -->
        <div class="sticky top-0 bg-white/95 backdrop-blur px-6 py-4 border-b border-slate-100 flex justify-between items-center z-20">
          <div class="flex items-center gap-3">
            <span class="${badgeClass}">${product.badge}</span>
            ${product.modelCode ? `<span class="bg-navy-900 text-teal-300 font-mono text-xs font-bold px-2.5 py-1 rounded-md">MODEL: ${product.modelCode}</span>` : ''}
          </div>
          <button onclick="closeProductModal()" class="text-slate-400 hover:text-slate-800 p-2 rounded-full hover:bg-slate-100 transition-colors text-2xl font-bold leading-none" aria-label="Close modal">
            &times;
          </button>
        </div>

        <div class="p-6 md:p-8 space-y-8">
          <!-- Top Section: Visual & Overview -->
          <div class="grid md:grid-cols-12 gap-8 items-start">
            <div class="md:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200/80 flex flex-col items-center justify-center aspect-[4/3]">
              <img src="${product.image}" alt="${product.title}" loading="lazy" decoding="async" class="max-h-56 w-full object-contain mb-4" />
              <span class="text-[11px] font-mono text-slate-400 uppercase tracking-wider text-center">
                ${product.category === 'machinery' ? 'Shanghai WISER Authorized Factory Specification' : 'Sidefu 5-Star Hotel Supply Standard'}
              </span>
            </div>

            <div class="md:col-span-7 space-y-3">
              <span class="text-xs font-bold uppercase tracking-wider text-ocean-500">
                ${product.category === 'machinery' ? 'Heavy-Duty Industrial Equipment' : 'Hospitality Linen Division'}
              </span>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-navy-900 font-display leading-tight">${product.title}</h2>
              <p class="text-sm font-medium text-slate-600">${product.subtitle}</p>
              <p class="text-xs text-slate-600 leading-relaxed pt-2">${product.description}</p>

              <div class="pt-4 flex flex-wrap items-center gap-3">
                <a href="product-detail.html?id=${product.id}" class="py-3 px-6 bg-ocean-500 hover:bg-ocean-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg transition-all flex items-center gap-1.5">
                  <span>Dedicated Spec Page</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
                <a href="contact.html?product=${encodeURIComponent(product.modelCode || product.title)}" class="py-3 px-6 bg-navy-800 hover:bg-navy-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg transition-all">
                  Request RFQ &rarr;
                </a>
                <button onclick="downloadSpecPDF('${product.modelCode || product.title}')" class="py-3 px-5 border border-slate-300 hover:border-slate-800 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-2">
                  <svg class="w-4 h-4 text-ocean-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
                  Print Data Sheet
                </button>
              </div>
            </div>
          </div>

          <!-- Technical Specification Table Grid -->
          <div class="space-y-4">
            <h3 class="text-sm font-bold uppercase tracking-wider text-navy-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <svg class="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/></svg>
              Comprehensive Engineering Specifications
            </h3>
            <div class="grid sm:grid-cols-2 gap-3">
              ${Object.entries(product.specs).map(([key, val]) => `
                <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 flex justify-between items-center text-xs">
                  <span class="text-slate-500 font-medium">${key}</span>
                  <span class="text-navy-900 font-semibold font-mono text-right pl-2">${val}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Utility & Connection Requirements (if machinery) -->
          ${product.utilities ? `
            <div class="space-y-4">
              <h3 class="text-sm font-bold uppercase tracking-wider text-navy-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <svg class="w-4 h-4 text-ocean-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/></svg>
                Utility &amp; Infrastructure Requirements
              </h3>
              <div class="grid sm:grid-cols-2 gap-3">
                ${Object.entries(product.utilities).map(([key, val]) => `
                  <div class="bg-blue-50/50 p-3.5 rounded-xl border border-blue-100 flex justify-between items-center text-xs">
                    <span class="text-slate-600 font-medium">${key}</span>
                    <span class="text-navy-900 font-semibold text-right pl-2">${val}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Engineering Trust Footnote -->
          <div class="bg-slate-100 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-teal-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
              <span>Authorized by Shanghai WISER Machinery Co., Ltd. &amp; Sidefu Hotel Linen Strategic Partnership.</span>
            </div>
            <a href="contact.html?req=cad" class="text-ocean-600 font-bold hover:underline shrink-0">Request CAD Plant Layout Drawings &rarr;</a>
          </div>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
  }

  function closeProductModal() {
    const modal = document.getElementById('product-spec-modal');
    if (modal) modal.classList.add('hidden');
  }

  function downloadSpecPDF(productTitle) {
    if (window.showToast) {
      window.showToast(`Opening printable technical specification sheet for ${productTitle}...`, 'success');
    }
    window.print();
  }

  // Close modal on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
    }
  });

  function init() {
    renderCatalog('all');
    initCatalogFilters();
    initProductSearch();
    handleUrlCategoryParam();
  }

  return {
    init,
    renderCatalog,
    openProductModal,
    closeProductModal,
    downloadSpecPDF,
    productsData
  };
})();

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', WiserCatalog.init);

// Export for global access & inline HTML / dynamic detail page usage
window.WiserCatalog = WiserCatalog;
window.productsData = WiserCatalog.productsData;
window.openProductModal = WiserCatalog.openProductModal;
window.closeProductModal = WiserCatalog.closeProductModal;
window.downloadSpecPDF = WiserCatalog.downloadSpecPDF;
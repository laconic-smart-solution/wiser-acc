/**
 * WISER ACC — Project & Factory Lightbox Gallery (WiserGallery Namespace)
 * Enhanced with Live Multilingual Localization (EN, ZH, TH)
 */

const WiserGallery = (() => {
  'use strict';

  const baseGalleryItems = [
    {
      category: 'hospitality',
      title: '5-Star Luxury Island Resort OPL',
      location: 'Phuket & Samui Hospitality Group',
      image: 'assets/images/projects/hotel-project.jpg',
      summary: 'Turnkey 1,200 kg/day on-premise laundry with Sidefu 800T sateen linens and Shanghai WISER soft-mount machinery.'
    },
    {
      category: 'healthcare',
      title: 'Regional Healthcare Bio-Barrier Plant',
      location: 'Bangkok Medical Center',
      image: 'assets/images/projects/hospital-project.jpg',
      summary: 'Hygienic cleanroom pass-through barrier washer line ensuring strict 0% cross-contamination standards.'
    },
    {
      category: 'commercial',
      title: '20 Tons/Day Central Industrial Laundry',
      location: 'Industrial Estate Central Plant',
      image: 'assets/images/projects/commercial-plant.jpg',
      summary: 'High-speed automated continuous ironing and folding lines with automated shuttle conveyor system.'
    },
    {
      category: 'factory',
      title: 'Shanghai WISER Sample Factory Showroom',
      location: 'Shanghai Demonstration Facility',
      image: 'assets/images/factory/factory-floor.jpg',
      summary: 'High-precision assembly, live operational demonstration floor, and certified test stations.'
    },
    {
      category: 'factory',
      title: 'Dynamic Balancing & G-Force Rig',
      location: 'Quality Inspection Floor',
      image: 'assets/images/factory/balancing-test.jpg',
      summary: 'Every washer-extractor drum undergoes 100% laser dynamic balancing up to 350G extraction force.'
    }
  ];

  const localizedGallery = {
  "zh": [
    {
      "category": "hospitality",
      "title": "五星级海岛奢华度假村独立整厂洗衣房",
      "location": "普吉岛与苏梅岛奢华酒店集团",
      "summary": "日处理 1200kg 全套整厂独立洗衣房方案，全系配备斯得福 800T 贡缎面料与上海威士全悬浮洗脱机组。"
    },
    {
      "category": "healthcare",
      "title": "区域中心医院穿墙卫生隔离医用洗涤中心",
      "location": "曼谷综合医疗中心",
      "summary": "穿墙密闭物理隔离式医用洗涤生产线，严格符合 0% 交叉污染控制与 85°C 热化学高温消毒标准。"
    },
    {
      "category": "commercial",
      "title": "日处理 20 吨大型商业工业中央洗涤工厂",
      "location": "国家级工业园区中央洗涤厂",
      "summary": "超高速连续式全自动大口径槽烫生产线、四通道自动折叠机与穿梭式自动分拣输送流水线。"
    },
    {
      "category": "factory",
      "title": "上海威士机械官方海外样板工厂展示中心",
      "location": "上海威士机械示范展示基地",
      "summary": "高精度工业装备装配车间、整厂设备实机动态运转展示大厅及官方认证质量检测台。"
    },
    {
      "category": "factory",
      "title": "350G 激光动态平衡与离心脱水检测台",
      "location": "工厂质量控制与检验中心",
      "summary": "每台出厂洗脱机内筒均经过 100% 激光动态平衡校准与 350G 极限脱水运转稳定性测试。"
    }
  ],
  "th": [
    {
      "category": "hospitality",
      "title": "โรงซัก OPL ในรีสอร์ตหรูระดับ 5 ดาวบนเกาะ",
      "location": "กลุ่มโรงแรมภูเก็ตและเกาะสมุย",
      "summary": "โรงซักรีดแบบครบวงจรขนาด 1,200 กก./วัน พร้อมผ้าลินินซาติน 800T ของ Sidefu และเครื่องซักสลัด Shanghai WISER"
    },
    {
      "category": "healthcare",
      "title": "โรงซักผ้าปลอดเชื้อทางการแพทย์ระดับภูมิภาค",
      "location": "ศูนย์การแพทย์กรุงเทพ",
      "summary": "สายการผลิตเครื่องซักผ้าแบบฝาคู่ผ่านผนัง ป้องกันการปนเปื้อนข้าม 0% ตามมาตรฐานห้องคลีนรูมอย่างเคร่งครัด"
    },
    {
      "category": "commercial",
      "title": "โรงงานซักรีดอุตสาหกรรมขนาด 20 ตัน/วัน",
      "location": "โรงงานกลางในนิคมอุตสาหกรรม",
      "summary": "สายพานรีดผ้าและพับผ้าอัตโนมัติต่อเนื่องความเร็วสูง พร้อมระบบสายพานลำเลียงคัดแยกอัตโนมัติ"
    },
    {
      "category": "factory",
      "title": "โชว์รูมโรงงานตัวอย่าง Shanghai WISER",
      "location": "ศูนย์สาธิตและแสดงสินค้าเซี่ยงไฮ้",
      "summary": "การประกอบเครื่องจักรความแม่นยำสูง พื้นที่สาธิตการทำงานจริง และสถานีทดสอบคุณภาพมาตรฐาน"
    },
    {
      "category": "factory",
      "title": "แท่นทดสอบสมดุลไดนามิกและแรงสลัด 350G",
      "location": "ศูนย์ตรวจสอบคุณภาพโรงงาน",
      "summary": "ถังซักทุกชิ้นผ่านการตรวจสมดุลไดนามิกด้วยเลเซอร์ 100% ภายใต้แรงสลัดความเร็วสูง 350G"
    }
  ]
};

  function getLang() {
    return window.i18n ? window.i18n.getCurrentLanguage() : 'en';
  }

  function getItems() {
    const lang = getLang();
    if (lang !== 'en' && localizedGallery[lang]) {
      return baseGalleryItems.map((item, idx) => {
        const loc = localizedGallery[lang][idx];
        return {
          ...item,
          title: loc.title || item.title,
          location: loc.location || item.location,
          summary: loc.summary || item.summary
        };
      });
    }
    return baseGalleryItems;
  }

  function renderGallery(cat = 'all') {
    const container = document.getElementById('gallery-grid');
    if (!container) return;

    const items = getItems();
    const filtered = items.filter(item => cat === 'all' || item.category === cat);
    const btnText = getLang() === 'zh' ? '查看项目详情' : getLang() === 'th' ? 'ดูรายละเอียดโครงการ' : 'View Project Details';

    container.innerHTML = filtered.map((item, index) => `
      <div class="relative group overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 cursor-pointer shadow-lg reveal" onclick="openLightbox(${index})">
        <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" class="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6">
          <span class="text-xs font-bold uppercase tracking-wider text-teal-400 mb-1">${item.location}</span>
          <h3 class="text-lg font-bold text-white leading-snug font-display">${item.title}</h3>
          <p class="text-xs text-slate-300 mt-2 line-clamp-2">${item.summary}</p>
          <div class="mt-4 flex items-center text-xs font-semibold text-blue-400 group-hover:text-teal-300 transition-colors">
            <span>${btnText}</span>
            <svg class="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </div>
        </div>
      </div>
    `).join('');

    if (window.initScrollReveal) window.initScrollReveal();
  }

  function initGalleryTabs() {
    const tabs = document.querySelectorAll('.gallery-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active', 'bg-slate-900', 'text-white'));
        tabs.forEach(t => t.classList.add('bg-white', 'text-slate-700'));
        
        tab.classList.add('active', 'bg-slate-900', 'text-white');
        tab.classList.remove('bg-white', 'text-slate-700');

        renderGallery(tab.dataset.category || 'all');
      });
    });
  }

  function openLightbox(index) {
    const items = getItems();
    const item = items[index];
    if (!item) return;

    let modal = document.getElementById('gallery-lightbox');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'gallery-lightbox';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md';
      document.body.appendChild(modal);
    }

    const footnote = getLang() === 'zh' ? '上海威士官方授权项目交付案例' : getLang() === 'th' ? 'กรณีศึกษาโครงการที่ได้รับอนุญาตของ WISER ACC' : 'WISER ACC Authorized Deployment Case';
    const inquireBtn = getLang() === 'zh' ? '咨询类似项目方案' : getLang() === 'th' ? 'สอบถามเกี่ยวกับโครงการที่คล้ายกัน' : 'Inquire for Similar Project';

    modal.innerHTML = `
      <div class="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl p-6">
        <button onclick="closeLightbox()" class="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 text-2xl font-bold z-10">&times;</button>
        <div class="aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-950 mb-6 flex items-center justify-center">
          <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" class="max-h-full max-w-full object-contain" />
        </div>
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-teal-400">${item.location}</span>
          <h2 class="text-2xl font-bold text-white mt-1 font-display">${item.title}</h2>
          <p class="text-sm text-slate-300 mt-2 leading-relaxed">${item.summary}</p>
          <div class="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
            <span class="text-xs text-slate-500">${footnote}</span>
            <a href="contact.html?case=${encodeURIComponent(item.title)}" class="py-2 px-4 bg-ocean-500 hover:bg-ocean-600 text-white text-xs font-semibold rounded-lg">${inquireBtn}</a>
          </div>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
  }

  function closeLightbox() {
    const modal = document.getElementById('gallery-lightbox');
    if (modal) modal.classList.add('hidden');
  }

  function init() {
    renderGallery('all');
    initGalleryTabs();

    window.addEventListener('languageChanged', () => {
      const activeTab = document.querySelector('.gallery-tab.active');
      const activeCategory = activeTab ? activeTab.getAttribute('data-category') : 'all';
      renderGallery(activeCategory);
    });
  }

  return {
    init,
    renderGallery,
    openLightbox,
    closeLightbox,
    galleryItems: baseGalleryItems
  };
})();

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', WiserGallery.init);

// Export for global access & HTML onclick bindings
window.WiserGallery = WiserGallery;
window.openLightbox = WiserGallery.openLightbox;
window.closeLightbox = WiserGallery.closeLightbox;

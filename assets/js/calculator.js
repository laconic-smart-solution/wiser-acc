/**
 * WISER ACC — Interactive Laundry ROI & Capacity Estimator (WiserCalculator Namespace)
 * Enhanced with Full Multilingual Localization (EN, ZH, TH)
 */

const WiserCalculator = (() => {
  'use strict';

  const calcI18n = {
    zh: {
      roomsLabel: '客房总数 (间):',
      bedsLabel: '医院病床总数 (张):',
      targetKgLabel: '目标每日洗涤量 (kg/天):',
      oplLabel: '每日洗涤需求 (kg/天):',
      washers: {
        small: '1台 威士 50kg 全悬浮高速洗脱机',
        medium: '2台 威士 50kg 高速洗脱机 (或 1台 100kg)',
        large: '3台 威士 100kg 重型高速洗脱机',
        tunnel: '威士 60kg x 8-12 仓连续式洗涤龙机组'
      },
      dryers: {
        small: '1台 威士 50kg 节能型工业烘干机',
        medium: '2台 威士 50kg 循环风高效烘干机',
        large: '3台 威士 100kg 蒸汽高效烘干机组',
        passThrough: '穿梭式全自动连续出料穿墙烘干机组'
      },
      ironer: {
        small: '1台 威士 3000mm 单滚筒镜面槽烫机',
        medium: '1台 威士 3300mm 双滚筒蒸汽高速槽烫机',
        large: '1台 威士 3300mm 三滚筒高速熨平流水线',
        highSpeed: '超高速熨烫线 (35米/分) 配备自动送布机'
      },
      folders: {
        small: '手动整理 或 紧凑型毛巾折叠机',
        medium: '1台 威士 全自动四通道高速床单折叠机',
        large: '1台 四通道床单折叠机 + 1台 自动毛巾折叠机',
        multi: '2台 全自动四通道折叠机 + 2台 高速毛巾折叠机'
      },
      linenSuffix: '套 (斯得福五星级认证布草)',
      savings: '对比传统旧厂节省约 3,600 升/天水源及 25% 蒸汽能耗'
    },
    th: {
      roomsLabel: 'จำนวนห้องพัก (ห้อง):',
      bedsLabel: 'จำนวนเตียงผู้ป่วย (เตียง):',
      targetKgLabel: 'ปริมาณผ้าเป้าหมายต่อวัน (กก./วัน):',
      oplLabel: 'ความต้องการซักผ้าต่อวัน (กก./วัน):',
      washers: {
        small: '1x เครื่องซักสลัด WISER 50kg Soft-Mount',
        medium: '2x เครื่องซักสลัด WISER 50kg (หรือ 1x 100kg)',
        large: '3x เครื่องซักสลัด WISER 100kg สำหรับงานหนัก',
        tunnel: 'ระบบอุโมงค์ซักผ้าต่อเนื่อง (60 กก. x 8-12 ช่องซัก)'
      },
      dryers: {
        small: '1x เครื่องอบผ้า WISER 50kg Eco-Air',
        medium: '2x เครื่องอบผ้า WISER 50kg Eco-Air',
        large: '3x เครื่องอบผ้าไอน้ำ WISER 100kg',
        passThrough: 'เครื่องอบผ้าแบบผ่านผนังอัตโนมัติ'
      },
      ironer: {
        small: '1x เครื่องรีดผ้า WISER 3000mm ลูกกลิ้งเดี่ยว',
        medium: '1x เครื่องรีดผ้าไอน้ำ WISER 3300mm ลูกกลิ้งคู่',
        large: '1x สายการผลิตรีดผ้าความเร็วสูง WISER 3300mm 3 ลูกกลิ้ง',
        highSpeed: 'สายการผลิตรีดผ้าความเร็วสูง (35 ม./นาที) พร้อมเครื่องป้อนผ้าอัตโนมัติ'
      },
      folders: {
        small: 'พับด้วยมือ หรือเครื่องพับผ้าขนหนูขนาดกะทัดรัด',
        medium: '1x เครื่องพับผ้าปูที่นอนอัตโนมัติ WISER 4 ช่องทาง',
        large: '1x เครื่องพับผ้าปู 4 ช่องทาง + 1x เครื่องพับผ้าขนหนูอัตโนมัติ',
        multi: '2x เครื่องพับผ้าปูอัตโนมัติ + 2x เครื่องพับผ้าขนหนูอัตโนมัติ'
      },
      linenSuffix: 'ชุด (รับรองมาตรฐาน Sidefu 5 ดาว)',
      savings: 'ประหยัดน้ำประมาณ 3,600 ลิตร/วัน และประหยัดไอน้ำ 25% เมื่อเทียบกับโรงซักเดิม'
    },
    en: {
      roomsLabel: 'Number of Guest Rooms:',
      bedsLabel: 'Number of Hospital Beds:',
      targetKgLabel: 'Daily Target Volume (kg/day):',
      oplLabel: 'Daily Load Requirement (kg/day):',
      washers: {
        small: '1x WISER 50kg Soft-Mount Washer Extractor',
        medium: '2x WISER 50kg Washer Extractors (or 1x 100kg)',
        large: '3x WISER 100kg Washer Extractors',
        tunnel: 'Continuous Batch Tunnel Washer (60kg x 8-12 Compartments)'
      },
      dryers: {
        small: '1x WISER 50kg Eco-Air Tumble Dryer',
        medium: '2x WISER 50kg Eco-Air Dryers',
        large: '3x WISER 100kg Steam Tumble Dryers',
        passThrough: 'Pass-Through Automated Shuttle Dryers'
      },
      ironer: {
        small: '1x WISER 3000mm Single-Roller Ironer',
        medium: '1x WISER 3300mm Double-Roller Steam Ironer',
        large: '1x WISER 3300mm 3-Roller High-Speed Ironer Line',
        highSpeed: 'High-Speed Ironing Line (35m/min) + Auto-Feeders'
      },
      folders: {
        small: 'Manual or Compact Towel Folder',
        medium: '1x WISER Automated 4-Lane Sheet Folder',
        large: '1x 4-Lane Sheet Folder + 1x Auto Towel Folder',
        multi: '2x Automated Sheet Folders + 2x Towel Folders'
      },
      linenSuffix: 'Sets (Sidefu 5-Star Certified)',
      savings: '~3,600 L/day water & 25% steam savings vs legacy plants'
    }
  };

  function getLang() {
    return window.i18n ? window.i18n.getCurrentLanguage() : 'en';
  }

  function init() {
    const form = document.getElementById('laundry-calculator-form');
    if (!form) return;

    const propertyTypeSelect = document.getElementById('calc-property-type');
    const countInput = document.getElementById('calc-unit-count');
    const countLabel = document.getElementById('calc-count-label');
    const hoursSelect = document.getElementById('calc-work-hours');

    // Update label based on property type
    if (propertyTypeSelect && countLabel) {
      propertyTypeSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        const dict = calcI18n[getLang()] || calcI18n.en;
        if (val === 'hotel' || val === 'resort') {
          countLabel.textContent = dict.roomsLabel;
          countInput.value = countInput.value || '250';
        } else if (val === 'hospital') {
          countLabel.textContent = dict.bedsLabel;
          countInput.value = countInput.value || '350';
        } else if (val === 'commercial') {
          countLabel.textContent = dict.targetKgLabel;
          countInput.value = countInput.value || '4000';
        } else if (val === 'opl') {
          countLabel.textContent = dict.oplLabel;
          countInput.value = countInput.value || '800';
        }
        calculate();
      });
    }

    [countInput, hoursSelect].forEach(el => {
      if (el) el.addEventListener('input', calculate);
    });

    // Re-calculate when language changes
    window.addEventListener('languageChanged', () => {
      const dict = calcI18n[getLang()] || calcI18n.en;
      const propVal = propertyTypeSelect ? propertyTypeSelect.value : 'hotel';
      if (countLabel) {
        if (propVal === 'hospital') countLabel.textContent = dict.bedsLabel;
        else if (propVal === 'commercial') countLabel.textContent = dict.targetKgLabel;
        else if (propVal === 'opl') countLabel.textContent = dict.oplLabel;
        else countLabel.textContent = dict.roomsLabel;
      }
      calculate();
    });

    // Initial calculation run
    calculate();
  }

  function calculate() {
    const propertyType = document.getElementById('calc-property-type')?.value || 'hotel';
    const count = parseFloat(document.getElementById('calc-unit-count')?.value) || 250;
    const hours = parseFloat(document.getElementById('calc-work-hours')?.value) || 8;
    const dict = calcI18n[getLang()] || calcI18n.en;

    let dailyKg = 0;
    let linenSets = 0;

    if (propertyType === 'hotel') {
      // Avg 4.5kg per room per day
      dailyKg = count * 4.5;
      linenSets = count * 3; // 3 Par
    } else if (propertyType === 'resort') {
      // Avg 6.0kg per room per day
      dailyKg = count * 6.0;
      linenSets = count * 3.5;
    } else if (propertyType === 'hospital') {
      // Avg 3.8kg per bed per day
      dailyKg = count * 3.8;
      linenSets = count * 4; // 4 Par
    } else if (propertyType === 'commercial' || propertyType === 'opl') {
      dailyKg = count;
      linenSets = Math.round(count / 1.5);
    }

    const hourlyKg = Math.round(dailyKg / hours);

    // Determine recommended machine setup
    let recommendedWashers = '';
    let recommendedDryers = '';
    let recommendedIroner = '';
    let recommendedFolders = '';

    if (hourlyKg <= 60) {
      recommendedWashers = dict.washers.small;
      recommendedDryers = dict.dryers.small;
      recommendedIroner = dict.ironer.small;
      recommendedFolders = dict.folders.small;
    } else if (hourlyKg <= 150) {
      recommendedWashers = dict.washers.medium;
      recommendedDryers = dict.dryers.medium;
      recommendedIroner = dict.ironer.medium;
      recommendedFolders = dict.folders.medium;
    } else if (hourlyKg <= 300) {
      recommendedWashers = dict.washers.large;
      recommendedDryers = dict.dryers.large;
      recommendedIroner = dict.ironer.large;
      recommendedFolders = dict.folders.large;
    } else {
      recommendedWashers = dict.washers.tunnel;
      recommendedDryers = dict.dryers.passThrough;
      recommendedIroner = dict.ironer.highSpeed;
      recommendedFolders = dict.folders.multi;
    }

    // Render to DOM
    const outDaily = document.getElementById('calc-out-daily-kg');
    const outHourly = document.getElementById('calc-out-hourly-kg');
    const outWashers = document.getElementById('calc-out-washers');
    const outDryers = document.getElementById('calc-out-dryers');
    const outIroner = document.getElementById('calc-out-ironer');
    const outFolders = document.getElementById('calc-out-folders');
    const outLinenPar = document.getElementById('calc-out-linen-par');
    const outSavings = document.getElementById('calc-out-savings');
    const rfqBtn = document.getElementById('calc-transfer-rfq-btn');

    if (outDaily) outDaily.textContent = `${dailyKg.toLocaleString()} kg/day`;
    if (outHourly) outHourly.textContent = `${hourlyKg.toLocaleString()} kg/hr`;
    if (outWashers) outWashers.textContent = recommendedWashers;
    if (outDryers) outDryers.textContent = recommendedDryers;
    if (outIroner) outIroner.textContent = recommendedIroner;
    if (outFolders) outFolders.textContent = recommendedFolders;
    if (outLinenPar) outLinenPar.textContent = `${linenSets.toLocaleString()} ${dict.linenSuffix}`;
    if (outSavings) outSavings.textContent = dict.savings;

    if (rfqBtn) {
      const queryParams = new URLSearchParams({
        type: propertyType,
        units: count,
        hours: hours,
        dailyKg: dailyKg,
        washers: recommendedWashers,
        dryers: recommendedDryers,
        ironer: recommendedIroner,
        folders: recommendedFolders,
        linen: `${linenSets} Sets`
      });
      rfqBtn.href = `contact.html?${queryParams.toString()}`;
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { calculate, init };
})();
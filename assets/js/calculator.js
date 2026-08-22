/**
 * WISER ACC — Interactive Laundry ROI & Capacity Estimator (WiserCalculator Namespace)
 */

const WiserCalculator = (() => {
  'use strict';

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
        if (val === 'hotel' || val === 'resort') {
          countLabel.textContent = 'Number of Guest Rooms:';
          countInput.value = countInput.value || '200';
        } else if (val === 'hospital') {
          countLabel.textContent = 'Number of Hospital Beds:';
          countInput.value = countInput.value || '350';
        } else if (val === 'commercial') {
          countLabel.textContent = 'Daily Target Volume (kg/day):';
          countInput.value = countInput.value || '4000';
        } else if (val === 'opl') {
          countLabel.textContent = 'Daily Load Requirement (kg/day):';
          countInput.value = countInput.value || '800';
        }
        calculate();
      });
    }

    [countInput, hoursSelect].forEach(el => {
      if (el) el.addEventListener('input', calculate);
    });

    // Initial calculation run
    calculate();
  }

  function calculate() {
    const propertyType = document.getElementById('calc-property-type')?.value || 'hotel';
    const count = parseFloat(document.getElementById('calc-unit-count')?.value) || 200;
    const hours = parseFloat(document.getElementById('calc-work-hours')?.value) || 8;

    let dailyKg = 0;
    let linenSets = 0;

    if (propertyType === 'hotel') {
      // Avg 4.5kg per room per day (bedding + bath + F&B)
      dailyKg = count * 4.5;
      linenSets = count * 3; // 3 Par
    } else if (propertyType === 'resort') {
      // Avg 6.0kg per room per day (spa + pool towels + suite linens)
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
      recommendedWashers = '1x WISER 50kg Soft-Mount Washer Extractor';
      recommendedDryers = '1x WISER 50kg Eco-Air Tumble Dryer';
      recommendedIroner = '1x WISER 3000mm Single-Roller Ironer';
      recommendedFolders = 'Manual or Compact Towel Folder';
    } else if (hourlyKg <= 150) {
      recommendedWashers = '2x WISER 50kg Washer Extractors (or 1x 100kg)';
      recommendedDryers = '2x WISER 50kg Eco-Air Dryers';
      recommendedIroner = '1x WISER 3300mm Double-Roller Steam Ironer';
      recommendedFolders = '1x WISER Automated 4-Lane Sheet Folder';
    } else if (hourlyKg <= 300) {
      recommendedWashers = '3x WISER 100kg Washer Extractors';
      recommendedDryers = '3x WISER 100kg Steam Tumble Dryers';
      recommendedIroner = '1x WISER 3300mm 3-Roller High-Speed Ironer Line';
      recommendedFolders = '1x 4-Lane Sheet Folder + 1x Auto Towel Folder';
    } else {
      recommendedWashers = 'Continuous Batch Tunnel Washer (60kg x 8-12 Compartments)';
      recommendedDryers = 'Pass-Through Automated Shuttle Dryers';
      recommendedIroner = 'High-Speed Ironing Line (35m/min) + Auto-Feeders';
      recommendedFolders = '2x Automated Sheet Folders + 2x Towel Folders';
    }

    // Update DOM Outputs
    const outDailyKg = document.getElementById('calc-out-daily-kg');
    const outHourlyKg = document.getElementById('calc-out-hourly-kg');
    const outWashers = document.getElementById('calc-out-washers');
    const outDryers = document.getElementById('calc-out-dryers');
    const outIroner = document.getElementById('calc-out-ironer');
    const outFolders = document.getElementById('calc-out-folders');
    const outLinenPar = document.getElementById('calc-out-linen-par');
    const outWaterSavings = document.getElementById('calc-out-savings');

    if (outDailyKg) outDailyKg.textContent = dailyKg.toLocaleString() + ' kg/day';
    if (outHourlyKg) outHourlyKg.textContent = hourlyKg.toLocaleString() + ' kg/hr';
    if (outWashers) outWashers.textContent = recommendedWashers;
    if (outDryers) outDryers.textContent = recommendedDryers;
    if (outIroner) outIroner.textContent = recommendedIroner;
    if (outFolders) outFolders.textContent = recommendedFolders;
    if (outLinenPar) outLinenPar.textContent = linenSets.toLocaleString() + ' Sets (Sidefu 5-Star Certified)';
    if (outWaterSavings) outWaterSavings.textContent = '~' + Math.round(dailyKg * 3.2).toLocaleString() + ' L/day saved vs legacy plants';

    // Update Transfer RFQ Button URL
    const transferBtn = document.getElementById('calc-transfer-rfq-btn');
    if (transferBtn) {
      const rfqQuery = `contact.html?type=${encodeURIComponent(propertyType)}&daily=${dailyKg}&hourly=${hourlyKg}&setup=${encodeURIComponent(recommendedWashers + ' + ' + recommendedDryers + ' + ' + recommendedIroner)}`;
      transferBtn.setAttribute('href', rfqQuery);
    }
  }

  return {
    init,
    calculate
  };
})();

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', WiserCalculator.init);

// Export for global access
window.WiserCalculator = WiserCalculator;
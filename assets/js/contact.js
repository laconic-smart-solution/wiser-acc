/**
 * WISER ACC — Contact & RFQ Builder Form Handler (WiserContact Namespace)
 */

const WiserContact = (() => {
  'use strict';

  function parseUrlParameters() {
    const params = new URLSearchParams(window.location.search);
    
    const product = params.get('product');
    const facility = params.get('type') || params.get('facility');
    const daily = params.get('daily');
    const setup = params.get('setup');
    const caseStudy = params.get('case');
    const req = params.get('req');

    const productField = document.getElementById('rfq-product');
    const facilityField = document.getElementById('rfq-facility');
    const capacityField = document.getElementById('rfq-capacity');
    const notesField = document.getElementById('rfq-message');

    if (product && productField) {
      productField.value = product;
    }

    if (facility && facilityField) {
      facilityField.value = facility;
    }

    if (daily && capacityField) {
      if (parseInt(daily) <= 500) capacityField.value = 'under_500';
      else if (parseInt(daily) <= 1500) capacityField.value = '500_1500';
      else if (parseInt(daily) <= 3500) capacityField.value = '1500_3500';
      else if (parseInt(daily) <= 7500) capacityField.value = '3500_7500';
      else capacityField.value = 'above_7500';
    }

    if (notesField) {
      let msg = [];
      if (caseStudy) msg.push(`• Reference Project of Interest: ${caseStudy}`);
      if (product) msg.push(`• Selected Product Model: ${product}`);
      if (daily) msg.push(`• Target Daily Volume: ${daily} kg/day`);
      if (setup) msg.push(`• Estimated Equipment Line: ${setup}`);
      if (req === 'cad') msg.push(`• Client requested full CAD layout & utility consumption tables.`);
      if (req === 'catalog') msg.push(`• Client requested complete technical engineering specifications package.`);
      
      if (msg.length > 0) {
        notesField.value = msg.join('\n');
      }
    }
  }

  function initContactForm() {
    const form = document.getElementById('wiser-contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg> Dispatching RFQ to Engineering...';

      // Simulate reliable dispatch with FormSubmit / EmailJS readiness
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();

        if (window.showToast) {
          window.showToast('Thank you! Your quotation request and engineering parameters have been dispatched to WISER ACC.', 'success');
        } else {
          alert('Thank you! Your quotation request has been received. A senior engineering consultant will contact you within 24 hours.');
        }
      }, 1200);
    });
  }

  function init() {
    parseUrlParameters();
    initContactForm();
  }

  return {
    init,
    parseUrlParameters
  };
})();

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', WiserContact.init);

// Export for global access
window.WiserContact = WiserContact;
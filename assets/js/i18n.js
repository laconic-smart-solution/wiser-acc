/**
 * WISER ACC — Internationalization (i18n) Engine
 * Supports: English ('en'), Chinese ('zh'), Thai ('th')
 */

(function () {
  'use strict';

  const SUPPORTED_LANGUAGES = ['en', 'zh', 'th'];
  const DEFAULT_LANG = 'en';
  const STORAGE_KEY = 'wiser_lang';

  let currentLang = DEFAULT_LANG;
  let translationsCache = {};

  /**
   * Determine initial language from URL param, localStorage, or browser setting
   */
  function getInitialLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && SUPPORTED_LANGUAGES.includes(langParam.toLowerCase())) {
      return langParam.toLowerCase();
    }

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
      return stored;
    }

    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (browserLang.startsWith('zh')) return 'zh';
    if (browserLang.startsWith('th')) return 'th';

    return DEFAULT_LANG;
  }

  /**
   * Fetch translation dictionary for the given language
   */
  async function loadTranslations(lang) {
    if (translationsCache[lang]) {
      return translationsCache[lang];
    }
    try {
      // Find path to translations directory relative to current page
      const response = await fetch(`translations/${lang}.json`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      translationsCache[lang] = data;
      return data;
    } catch (err) {
      console.warn(`[i18n] Failed to load translations/${lang}.json:`, err);
      // Fallback to English if not already English
      if (lang !== DEFAULT_LANG && translationsCache[DEFAULT_LANG]) {
        return translationsCache[DEFAULT_LANG];
      }
      return null;
    }
  }

  /**
   * Resolve nested key e.g. "hero.titleLine1" in object
   */
  function getNestedValue(obj, keyPath) {
    if (!obj || !keyPath) return null;
    return keyPath.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), obj);
  }

  /**
   * Translate all DOM elements tagged with data-i18n attributes
   */
  function applyTranslations(dict) {
    if (!dict) return;

    // Text content
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = getNestedValue(dict, key);
      if (val !== null && val !== undefined) {
        el.textContent = val;
      }
    });

    // HTML content (for elements containing nested markup)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      const val = getNestedValue(dict, key);
      if (val !== null && val !== undefined) {
        el.innerHTML = val;
      }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = getNestedValue(dict, key);
      if (val !== null && val !== undefined) {
        el.setAttribute('placeholder', val);
      }
    });

    // Title & ARIA Labels
    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      const val = getNestedValue(dict, key);
      if (val !== null && val !== undefined) {
        el.setAttribute('title', val);
      }
    });
  }

  /**
   * Update active class state on language switcher buttons
   */
  function updateSwitcherUI(lang) {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang === lang) {
        btn.classList.add('font-bold', 'text-ocean-500', 'active-lang');
        btn.classList.remove('text-slate-500', 'text-slate-400');
      } else {
        btn.classList.remove('font-bold', 'text-ocean-500', 'active-lang');
        btn.classList.add('text-slate-500');
      }
    });
  }

  /**
   * Public function to change language
   */
  async function setLanguage(lang) {
    if (!SUPPORTED_LANGUAGES.includes(lang)) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;

    // Load English as base fallback then target language
    if (!translationsCache[DEFAULT_LANG]) {
      await loadTranslations(DEFAULT_LANG);
    }
    const dict = await loadTranslations(lang);
    if (dict) {
      applyTranslations(dict);
    }

    updateSwitcherUI(lang);

    // Notify other components (catalog, calculator, gallery)
    window.dispatchEvent(
      new CustomEvent('languageChanged', {
        detail: { lang, dict }
      })
    );
  }

  /**
   * Initialize i18n on page load
   */
  async function initI18n() {
    const lang = getInitialLanguage();

    // Attach click listeners to language switchers
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.lang-btn');
      if (btn) {
        e.preventDefault();
        const targetLang = btn.getAttribute('data-lang');
        if (targetLang && targetLang !== currentLang) {
          setLanguage(targetLang);
        }
      }
    });

    await setLanguage(lang);
  }

  // Expose global API
  window.i18n = {
    setLanguage,
    getCurrentLanguage: () => currentLang,
    t: (key) => getNestedValue(translationsCache[currentLang] || translationsCache[DEFAULT_LANG], key) || key
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }
})();

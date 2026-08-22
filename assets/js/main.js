/**
 * WISER ACC — Luxury Industrial Laundry Solutions
 * Modular Architecture: WiserApp (Navigation, Scroll, Toast, Footer, Utilities)
 */

const WiserApp = (() => {
  'use strict';

  // Navigation Module
  const Navigation = {
    init() {
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');

      if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
          const isCurrentlyHidden = mobileMenu.classList.contains('max-h-0');
          if (isCurrentlyHidden) {
            mobileMenu.classList.remove('max-h-0', 'opacity-0', 'invisible', 'pt-0', 'pb-0');
            mobileMenu.classList.add('max-h-[600px]', 'opacity-100', 'pt-3', 'pb-6');
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
            mobileMenuBtn.setAttribute('aria-label', 'Close menu');
            mobileMenuBtn.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>';
          } else {
            mobileMenu.classList.add('max-h-0', 'opacity-0', 'invisible', 'pt-0', 'pb-0');
            mobileMenu.classList.remove('max-h-[600px]', 'opacity-100', 'pt-3', 'pb-6');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mobileMenuBtn.setAttribute('aria-label', 'Open menu');
            mobileMenuBtn.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';
          }
        });
      }

      this.highlightActivePage();
    },

    highlightActivePage() {
      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
          link.classList.add('active-page', 'text-ocean-500');
          link.classList.remove('text-slate-700', 'text-slate-600');
        } else {
          link.classList.remove('active-page', 'text-ocean-500');
          link.classList.add('text-slate-700');
        }
      });
    }
  };

  // Scroll & Micro-Interactions Module
  const Scroll = {
    init() {
      this.initProgressBar();
      this.initBackToTop();
      this.initHeaderEffects();
      this.initScrollReveal();
    },

    initProgressBar() {
      let progressBar = document.getElementById('scroll-progress-bar');
      if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.id = 'scroll-progress-bar';
        document.body.prepend(progressBar);
      }

      window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
        progressBar.style.width = scrolled + '%';
      }, { passive: true });
    },

    initBackToTop() {
      let btn = document.getElementById('back-to-top');
      if (!btn) {
        btn = document.createElement('button');
        btn.id = 'back-to-top';
        btn.setAttribute('aria-label', 'Scroll back to top');
        btn.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>';
        document.body.appendChild(btn);
      }

      window.addEventListener('scroll', () => {
        if (window.scrollY > 350) {
          btn.classList.add('visible');
        } else {
          btn.classList.remove('visible');
        }
      }, { passive: true });

      btn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    },

    initHeaderEffects() {
      const header = document.getElementById('main-header');
      if (!header) return;

      window.addEventListener('scroll', () => {
        if (window.scrollY > 25) {
          header.classList.add('glass-nav-scrolled', 'shadow-md');
        } else {
          header.classList.remove('glass-nav-scrolled', 'shadow-md');
        }
      }, { passive: true });
    },

    initScrollReveal() {
      const reveals = document.querySelectorAll('.reveal');
      if (!reveals.length) return;

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
      });

      reveals.forEach(el => observer.observe(el));
    }
  };

  // Toast Notification Module
  const Toast = {
    show(message, type = 'success') {
      let container = document.getElementById('toast-container');
      if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm';
        document.body.appendChild(container);
      }

      const toast = document.createElement('div');
      const bg = type === 'success' ? 'bg-slate-900 text-white border-l-4 border-teal-500' : 'bg-red-900 text-white border-l-4 border-red-500';
      toast.className = `${bg} p-4 rounded-xl shadow-2xl text-xs font-medium flex items-center justify-between transition-all transform duration-300 translate-y-4 opacity-0 border border-slate-700`;
      toast.innerHTML = `
        <span>${message}</span>
        <button class="ml-4 text-slate-400 hover:text-white text-base font-bold" aria-label="Dismiss notification" onclick="this.parentElement.remove()">&times;</button>
      `;

      container.appendChild(toast);
      setTimeout(() => {
        toast.classList.remove('translate-y-4', 'opacity-0');
      }, 10);

      setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
      }, 4000);
    }
  };

  // Footer Module
  const Footer = {
    init() {
      const yearEl = document.getElementById('current-year');
      if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
      }
    }
  };

  // Global WhatsApp Inquiry Trigger
  function openWhatsAppQuote(customText) {
    const phone = '8613800000000';
    const defaultText = customText || 'Hello WISER ACC Team, I would like to request an official quotation and technical specifications for industrial laundry machinery.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(defaultText)}`;
    window.open(url, '_blank');
  }

  // App Master Init
  function init() {
    Navigation.init();
    Scroll.init();
    Footer.init();
  }

  return {
    init,
    Navigation,
    Scroll,
    Toast,
    Footer,
    openWhatsAppQuote
  };
})();

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', WiserApp.init);

// Global Window Exports for HTML inline compatibility
window.WiserApp = WiserApp;
window.WiserUI = WiserApp; // Backward compatibility alias
window.showToast = WiserApp.Toast.show;
window.openWhatsAppQuote = WiserApp.openWhatsAppQuote;
window.initScrollReveal = WiserApp.Scroll.initScrollReveal;
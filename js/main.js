/* ─────────────────────────────────────────
   Cainii — Main JS
   ───────────────────────────────────────── */

(function () {
  'use strict';

  // Nav border opacity on scroll
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 4) {
        nav.style.borderBottomColor = '#E4E6EB';
      } else {
        nav.style.borderBottomColor = '#E4E6EB';
      }
    }, { passive: true });
  }

  // Prevent double-submit
  const form = document.querySelector('.signup-form-wrap');
  if (form) {
    form.addEventListener('submit', function () {
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.style.opacity = '0.4';
      }
    });
  }

})();

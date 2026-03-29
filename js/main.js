/* ─────────────────────────────────────────
   Cainii — How I Work JS
   ───────────────────────────────────────── */

(function () {
  'use strict';

  // Staggered reveal on scroll
  const steps = document.querySelectorAll('.hiw__step');

  steps.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const steps = Array.from(document.querySelectorAll('.hiw__step'));
          const idx = steps.indexOf(entry.target);
          setTimeout(function () {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'none';
          }, idx * 100);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    steps.forEach(function (el) { observer.observe(el); });
  } else {
    steps.forEach(function (el) {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }

})();

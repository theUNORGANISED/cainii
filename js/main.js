/* ─────────────────────────────────────────
   Cainii — How I Work JS
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


  const els = [
    document.querySelector('.about__heading'),
    document.querySelector('.about__photos'),
    document.querySelector('.about__right'),
  ].filter(Boolean);

  els.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const idx = els.indexOf(entry.target);
          setTimeout(function () {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'none';
          }, idx * 120);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    els.forEach(function (el) { observer.observe(el); });
  } else {
    els.forEach(function (el) {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }



  // Scroll reveal
  const els = [
    document.querySelector('.contact__left'),
    document.querySelector('.contact__form'),
  ].filter(Boolean);

  els.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const idx = els.indexOf(entry.target);
          setTimeout(function () {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'none';
          }, idx * 120);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    els.forEach(function (el) { observer.observe(el); });
  } else {
    els.forEach(function (el) {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }

  // Prevent double-submit
  const form = document.querySelector('.contact__form');
  if (form) {
    form.addEventListener('submit', function () {
      const btn = form.querySelector('.contact__submit');
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Sending…';
        btn.style.opacity = '0.5';
      }
    });
  }



  // Fade in tagline + social on scroll into view
  const els = [
    document.querySelector('.footer__tagline'),
    document.querySelector('.footer__social'),
    document.querySelector('.footer__wordmark'),
  ].filter(Boolean);

  els.forEach(function (el, i) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.7s ease ' + (i * 0.12) + 's, transform 0.7s ease ' + (i * 0.12) + 's';
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          els.forEach(function (el) {
            el.style.opacity = '1';
            el.style.transform = 'none';
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.05 });

    const footer = document.querySelector('.footer');
    if (footer) observer.observe(footer);
  } else {
    els.forEach(function (el) {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }


})();

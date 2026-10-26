// Rotates hero slides. Interval comes from the CSS token --rotate-seconds.
(function () {
  var root = document.querySelector('[data-rotator]');
  if (!root) return;
  var slides = root.querySelectorAll('.hero__slide');
  var dots = root.querySelectorAll('.hero__dot');
  if (slides.length < 2) return;
  var i = 0, timer = null;
  var secs = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--rotate-seconds')) || 7;
  function show(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach(function (s, k) { s.classList.toggle('is-active', k === i); });
    dots.forEach(function (d, k) { d.classList.toggle('is-active', k === i); });
  }
  function start() { stop(); timer = setInterval(function () { show(i + 1); }, secs * 1000); }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }
  dots.forEach(function (d, k) { d.addEventListener('click', function () { show(k); start(); }); });
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', start);
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) start();
})();

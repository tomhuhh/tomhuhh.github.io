// Minimal, dependency-free interactivity.
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Mark current page link in nav for styling + accessibility
  var path = window.location.pathname;
  var here = path.split('/').pop();
  document.querySelectorAll('.main-nav a').forEach(function (a) {
    var href = a.getAttribute('href');
    var isHome = (href === '/' || href === '') && (path === '/' || here === '' || here === 'index.html');
    if (isHome || href === here || href === path) {
      a.setAttribute('aria-current', 'page');
    }
  });
});

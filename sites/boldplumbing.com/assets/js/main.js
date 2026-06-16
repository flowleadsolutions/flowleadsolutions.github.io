const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
const mobileNav = document.getElementById('mobileNav');

menuOpen.addEventListener('click', () => {
  mobileNav.classList.add('open');
  document.body.style.overflow = 'hidden';
});

menuClose.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  document.body.style.overflow = '';
});

mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ── NAV SCROLL BEHAVIOUR ──
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  nav.style.top = window.scrollY > 0 ? '0' : '50px';
}, { passive: true });
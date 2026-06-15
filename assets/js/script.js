document.addEventListener("DOMContentLoaded", () => {

  if (window.AOS) AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 60 });

  // Navbar scroll shadow
  const header = document.querySelector("header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 12);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile nav
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("header nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach(l => l.addEventListener("click", () => nav.classList.remove("open")));
  }

  // Contact form
  const contactForm = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMsg");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      successMsg.textContent = "✓ Request received — we'll be in touch within 24 hours.";
      contactForm.reset();
      setTimeout(() => successMsg.textContent = "", 6000);
    });
  }
});

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
}
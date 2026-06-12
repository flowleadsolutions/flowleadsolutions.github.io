document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Initialize AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.padding = '12px 0';
    header.style.background = 'rgba(255, 255, 255, 0.95)';
    header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
  } else {
    header.style.padding = '24px 0';
    header.style.background = 'rgba(255, 255, 255, 0.8)';
    header.style.boxShadow = 'none';
  }
});

// Form submission handling
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const successMsg = document.getElementById("successMsg");
    successMsg.innerHTML = '<div style="margin-top:20px; color:#10b981; font-weight:700;">✓ Message sent successfully! We\'ll be in touch soon.</div>';
    contactForm.reset();
  });
}

// Function for button click
function scrollToContact() {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: "smooth"
    });
  }
}
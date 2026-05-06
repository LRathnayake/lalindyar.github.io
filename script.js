// Smooth Scroll
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Hamburger Menu Toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Close menu when a nav link is clicked
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}
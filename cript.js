// Theme toggle
const themeToggleButton = document.getElementById('themeToggle');
const rootElement = document.documentElement;
const storedTheme = localStorage.getItem('theme');

if (storedTheme === 'light') {
  rootElement.classList.add('light');
  if (themeToggleButton) themeToggleButton.textContent = '🌙';
}

if (themeToggleButton) {
  themeToggleButton.addEventListener('click', () => {
    const isLight = rootElement.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeToggleButton.textContent = isLight ? '🌙' : '☀️';
  });
}

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`.nav a[href="#${id}"]`);
    if (!link) return;
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, {rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1]});

sections.forEach(s => observer.observe(s));

// Update year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();



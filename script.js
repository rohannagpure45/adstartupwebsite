// ===== Ipsa Website JavaScript =====

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  initNavbar();
  initScrollAnimations();
  initSmoothScroll();
  initBarAnimations();
});

// ===== Navbar Scroll Effect =====
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 10) {
      navbar.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.06)';
    } else {
      navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  });
}

// ===== Scroll Animations =====
function initScrollAnimations() {
  // Elements to animate
  const animatedElements = document.querySelectorAll(
    '.problem-item, .question-card, .step-card, .capability-card, .team-card, .trust-item, .insight-card'
  );

  // Add animation class
  animatedElements.forEach(el => {
    el.classList.add('animate-on-scroll');
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));

  // Section titles animation
  const sectionTitles = document.querySelectorAll('.section-title, .section-body');
  sectionTitles.forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });
}

// ===== Smooth Scroll for Anchor Links =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ===== Bar Chart Animations =====
function initBarAnimations() {
  const chartBars = document.querySelector('.chart-bars');
  
  if (!chartBars) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
          bar.style.animationDelay = `${index * 0.1}s`;
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(chartBars);
}

// ===== Utility: Debounce Function =====
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ===== Optional: Add dynamic year to footer =====
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
  const year = new Date().getFullYear();
  footerYear.innerHTML = footerYear.innerHTML.replace('2026', year);
}

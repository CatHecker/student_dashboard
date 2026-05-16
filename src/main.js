// Sticky header behavior
let lastScrollTop = 0;
const header = document.getElementById('site-header');
const scrollThreshold = 50;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Add box shadow when scrolled
  if (scrollTop > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Hide header when scrolling down, show when scrolling up
  if (scrollTop > scrollThreshold) {
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.classList.add('header-hidden');
    } else {
      header.classList.remove('header-hidden');
    }
  }

  lastScrollTop = scrollTop;
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
  mobileMenuToggle.parentElement.classList.toggle('mobile-menu-open');
});

// Add active class to nav links
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active class from all links
    navLinks.forEach(item => {
      item.classList.remove('active');
    });

    // Add active class to clicked link and its mobile/desktop counterpart
    const linkText = link.textContent;
    navLinks.forEach(item => {
      if (item.textContent === linkText) {
        item.classList.add('active');
      }
    });

    // Close mobile menu if open
    mobileMenu.classList.remove('show');
    mobileMenuToggle.parentElement.classList.remove('mobile-menu-open');
  });
});

// Prevent actual form submission
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
  });
});

// Notification CTA
document.querySelector('.notification-cta').addEventListener('click', (e) => {
  e.preventDefault();
});
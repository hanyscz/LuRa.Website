// Modern vanilla JavaScript version - no jQuery, no GSAP
// Lightweight and simplified

// Page loader
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.display = 'none';
    document.getElementById('header').style.display = 'block';
  }, 1000);
});

// Color changer
document.addEventListener('DOMContentLoaded', function() {
  // Color panel toggle
  const colorPanels = document.querySelectorAll('.color-panel');
  colorPanels.forEach(panel => {
    panel.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentElement.classList.toggle('color-changer-active');
    });
  });

  // Color selection
  const colorLinks = document.querySelectorAll('.colors a');
  colorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const colorTheme = this.getAttribute('title');
      
      // Remove any existing color theme
      const existingLink = document.querySelector('link[href*="color-"]');
      if (existingLink) {
        existingLink.remove();
      }
      
      // Add new color theme
      const newLink = document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.href = 'css/' + colorTheme + '.css';
      document.head.appendChild(newLink);
    });
  });

  // Menu toggle
  const menubar = document.querySelector('.menubar');
  const navigationContent = document.getElementById('navigation-content');
  const navigationClose = document.querySelector('.navigation-close');

  if (menubar) {
    menubar.addEventListener('click', function() {
      navigationContent.classList.add('active');
    });
  }

  if (navigationClose) {
    navigationClose.addEventListener('click', function() {
      navigationContent.classList.remove('active');
    });
  }

  // Navigation links
  const navLinks = {
    'home-link': 'header',
    'about-link': 'about',
    'portfolio-link': 'portfolio',
    'blog-link': 'blog',
    'contact-link': 'contact'
  };

  Object.keys(navLinks).forEach(linkId => {
    const link = document.getElementById(linkId);
    if (link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        showSection(navLinks[linkId]);
      });
    }
  });

  function showSection(sectionId) {
    // Hide navigation
    navigationContent.classList.remove('active');
    
    // Hide all sections
    const sections = ['header', 'about', 'portfolio', 'blog', 'contact'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        element.classList.remove('active');
      }
    });

    // Show selected section with delay for transition
    setTimeout(() => {
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.classList.add('active');
      }
    }, 300);
  }

  // Text rotation animation
  class TextRotate {
    constructor(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.isDeleting = false;
      this.tick();
    }

    tick() {
      const i = this.loopNum % this.toRotate.length;
      const fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 100;
      }

      setTimeout(() => this.tick(), delta);
    }
  }

  // Initialize text rotation
  const elements = document.getElementsByClassName('txt-rotate');
  for (let i = 0; i < elements.length; i++) {
    const toRotate = elements[i].getAttribute('data-rotate');
    const period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TextRotate(elements[i], JSON.parse(toRotate), period);
    }
  }

  // Add CSS for text rotation
  const css = document.createElement('style');
  css.textContent = '.txt-rotate > .wrap { border-right: 0em solid #666; }';
  document.head.appendChild(css);
});

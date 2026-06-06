/**
 * LuRa IT Develop — Script
 * Handles: translations, nav, portfolio filters, cookie consent,
 *          particle canvas, scroll reveals, 3D tilt, mouse glow, navbar shrink
 */
document.addEventListener('DOMContentLoaded', () => {

  /* ═══════════════════════════════════════════════
     SCROLL SPY — Active nav link
     ═══════════════════════════════════════════════ */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', current && link.getAttribute('href') === `#${current}`);
    });
  }

  /* ═══════════════════════════════════════════════
     NAVBAR SHRINK ON SCROLL
     ═══════════════════════════════════════════════ */
  const navbar = document.querySelector('.navbar');

  function updateNavbar() {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveNav();
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });

  /* ═══════════════════════════════════════════════
     MOBILE MENU
     ═══════════════════════════════════════════════ */
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinksContainer = document.querySelector('.nav-links');

  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = navLinksContainer.classList.toggle('open');
      mobileBtn.classList.toggle('open');
      mobileBtn.setAttribute('aria-expanded', isOpen);
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinksContainer.classList.remove('open');
      mobileBtn.classList.remove('open');
      mobileBtn.setAttribute('aria-expanded', 'false');
    });
  });

  /* ═══════════════════════════════════════════════
     PORTFOLIO FILTERING
     ═══════════════════════════════════════════════ */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      projectCards.forEach(card => {
        const categories = card.dataset.category ? card.dataset.category.split(' ') : [];
        const shouldShow = filter === 'all' || categories.includes(filter);
        card.classList.toggle('hidden', !shouldShow);
      });
    });
  });

  /* ═══════════════════════════════════════════════
     COOKIE BANNER
     ═══════════════════════════════════════════════ */
  const cookieBanner = document.getElementById('cookie-banner');
  const cookieAcceptBtn = document.getElementById('cookie-accept');

  if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => cookieBanner.classList.add('show'), 1000);
  }

  if (cookieAcceptBtn) {
    cookieAcceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      cookieBanner.classList.remove('show');
    });
  }

  /* ═══════════════════════════════════════════════
     LANGUAGE SWITCHER
     ═══════════════════════════════════════════════ */
  const languageButtons = document.querySelectorAll('.lang-btn');
  const i18nElements = document.querySelectorAll('[data-i18n-key]');

  const translations = {
    cs: {
      'nav.hero': 'Úvod',
      'nav.services': 'Služby',
      'nav.portfolio': 'Portfolio',
      'nav.contact': 'Kontakt',
      'hero.kicker': 'Senior .NET vývoj a provozní systémy',
      'hero.title': 'Software, který <span class="gradient-text">mluví s provozem</span>',
      'hero.description': 'Navrhuji a stavím aplikace, které propojují kancelář, sklad, hardware a cloud. Od Blazoru a .NET MAUI po váhy, tiskárny, offline režimy a firemní data.',
      'hero.proof1': 'Hardware integrace',
      'hero.proof2': 'Offline-first mobilní aplikace',
      'hero.proof3': 'Firemní systémy na míru',
      'hero.work': 'Moje práce',
      'hero.contact': 'Kontaktovat',
      'section.services.kicker': 'Schopnosti',
      'section.services.title': 'Co umím dodat do provozu',
      'service.app.title': 'Firemní systémy',
      'service.app.desc': 'Informační systémy pro procesy, evidenci, fakturaci, statistiky a provozní data. Stabilní .NET základ, který roste s firmou.',
      'service.web.title': 'Mobilní provozní aplikace',
      'service.web.desc': 'Aplikace pro lidi v terénu i ve skladu: offline režim, synchronizace, tisk dokladů, čtečky a rychlé dotykové ovládání.',
      'service.web.highlight': 'Praktická řešení s .NET MAUI, API a SignalR.',
      'service.hw.title': 'Hardware integrace',
      'service.hw.desc': 'Napojení vah, tiskáren, čteček a terminálů na aplikace a databáze. Méně ruční práce, méně chyb, rychlejší provoz.',
      'service.cloud.title': 'Cloud & API',
      'service.cloud.desc': 'REST API, cloudové služby, integrace systémů a bezpečná výměna dat mezi webem, mobilem, desktopem a provozem.',
      'section.process.kicker': 'Postup',
      'section.process.title': 'Od provozního problému k fungující aplikaci',
      'process.step1.title': 'Mapování reality',
      'process.step1.desc': 'Nejdřív pochopit skutečný proces, lidi, zařízení, data a místa, kde dnes vznikají zbytečné chyby.',
      'process.step2.title': 'Návrh řešení',
      'process.step2.desc': 'Rozhraní, datový model, integrace a technologie navržené tak, aby dávaly smysl v reálném provozu.',
      'process.step3.title': 'Dodání a provoz',
      'process.step3.desc': 'Vývoj, testování, nasazení a další rozvoj bez zbytečné magie. Systém musí vydržet běžný pracovní den.',
      'section.portfolio.kicker': 'Důkazy práce',
      'section.portfolio.title': 'Vybrané projekty',
      'filter.all': 'Vše',
      'filter.web': 'Web',
      'filter.mobile': 'Mobile',
      'filter.hardware': 'Hardware',
      'project.meta.web': 'Webový firemní systém',
      'project.meta.tool': 'Produktivní nástroj',
      'project.meta.hardware': 'Dotykové rozhraní a hardware',
      'project.meta.mobile': 'Mobilní aplikace v terénu',
      'project.meta.system': 'ERP / IS na míru',
      'project.threes.desc': 'Informační systém pro firmy, kterým již Excel nestačí. Webová aplikace pro komplexní správu firemních procesů, projektů a dokumentace.',
      'project.trello.desc': 'Rozšíření do prohlížeče Chrome pro export Trello nástěnek a karet do čistého Markdown formátu. Vše funguje lokálně, bezpečně a nepoužívá externí servery.',
      'project.expedit.desc': 'Robustní dotykové rozhraní pro skladové operátory. Napojení na váhy, tiskárny štítků a centrální databázi. Tisk etiket a plnění daty z pohodlí kanceláře.',
      'project.mvykup.desc': 'Mobilní aplikace pro nákupčí. Příjem zvěřiny, tvorba a tisk pokladních dokladů přes BT tiskárnu. Offline režim se synchronizací, SignalR komunikace.',
      'project.is.desc': 'IS na míru pro zpracování zvěře. Statistiky, fakturace, napojení na veterinární správu, skladové hospodářství. Komplexní řešení pro firmy.',
      'project.prijem.desc': 'Obrazovka příjmového terminálu, velké prvky pro lehké dotykové ovládání. Jednoduché rozhraní, napojení na databázi a váhu.',
      'section.contact.title': 'Spojme se',
      'section.contact.desc': 'Máte nápad na projekt? Potřebujete spolehlivého partnera pro vývoj? Napište nám.',
      'contact.phone': 'Telefon',
      'contact.email': 'Email',
      'billing.title': 'Fakturační údaje',
      'whatsapp.text': 'Napsat na WhatsApp',
      'footer': '© 2026 LuRa IT Develop. Všechna práva vyhrazena.',
      'cookie.text': 'Tento web používá soubory cookies k zajištění správného fungování a analýze návštěvnosti. Používáním webu souhlasíte s jejich používáním.',
      'cookie.button': 'Rozumím'
    },
    en: {
      'nav.hero': 'Home',
      'nav.services': 'Services',
      'nav.portfolio': 'Portfolio',
      'nav.contact': 'Contact',
      'hero.kicker': 'Senior .NET development and operational systems',
      'hero.title': 'Software that <span class="gradient-text">talks to operations</span>',
      'hero.description': 'I design and build applications that connect office work, warehouse processes, hardware and cloud services. From Blazor and .NET MAUI to scales, printers, offline modes and business data.',
      'hero.proof1': 'Hardware integration',
      'hero.proof2': 'Offline-first mobile apps',
      'hero.proof3': 'Custom business systems',
      'hero.work': 'My work',
      'hero.contact': 'Contact',
      'section.services.kicker': 'Capabilities',
      'section.services.title': 'What I can deliver into real operations',
      'service.app.title': 'Business systems',
      'service.app.desc': 'Information systems for processes, records, invoicing, statistics and operational data. A stable .NET foundation that grows with the business.',
      'service.web.title': 'Operational mobile apps',
      'service.web.desc': 'Applications for people in the field and warehouse: offline mode, synchronization, receipt printing, scanners and fast touch interfaces.',
      'service.web.highlight': 'Practical solutions with .NET MAUI, APIs and SignalR.',
      'service.hw.title': 'Hardware integration',
      'service.hw.desc': 'Connecting scales, printers, scanners and terminals to applications and databases. Less manual work, fewer errors, faster operations.',
      'service.cloud.title': 'Cloud & API',
      'service.cloud.desc': 'REST APIs, cloud services, system integrations and secure data exchange between web, mobile, desktop and operations.',
      'section.process.kicker': 'Process',
      'section.process.title': 'From operational problem to working application',
      'process.step1.title': 'Map the reality',
      'process.step1.desc': 'First understand the real process, people, devices, data and places where unnecessary errors happen today.',
      'process.step2.title': 'Design the solution',
      'process.step2.desc': 'Interface, data model, integrations and technology chosen to make sense in real day-to-day operations.',
      'process.step3.title': 'Deliver and run',
      'process.step3.desc': 'Development, testing, deployment and further improvement without unnecessary magic. The system must survive a normal working day.',
      'section.portfolio.kicker': 'Proof of work',
      'section.portfolio.title': 'Selected projects',
      'filter.all': 'All',
      'filter.web': 'Web',
      'filter.mobile': 'Mobile',
      'filter.hardware': 'Hardware',
      'project.meta.web': 'Business web system',
      'project.meta.tool': 'Productivity tool',
      'project.meta.hardware': 'Touch UI and hardware',
      'project.meta.mobile': 'Field mobile application',
      'project.meta.system': 'Custom ERP / IS',
      'project.threes.desc': 'ERP-style web system for businesses that need more than Excel. A web app for managing company processes, projects and documentation.',
      'project.trello.desc': 'Chrome extension for exporting Trello boards and cards to clean Markdown. Works locally, safely and without external servers.',
      'project.expedit.desc': 'Robust touchscreen interface for warehouse operators. Connected to scales, label printers and central database for easy data entry.',
      'project.mvykup.desc': 'Mobile purchase app for buyers. Handles animal intake, issues receipts via Bluetooth printer, and syncs offline with SignalR.',
      'project.is.desc': 'Custom ERP solution for game processing. Includes statistics, invoicing, veterinary integration and warehouse management.',
      'project.prijem.desc': 'Receiving terminal UI with large controls for easy touch operation. Simple interface connected to database and scale.',
      'section.contact.title': "Let's connect",
      'section.contact.desc': 'Have a project idea? Need a reliable development partner? Write to us.',
      'contact.phone': 'Phone',
      'contact.email': 'Email',
      'billing.title': 'Billing Information',
      'whatsapp.text': 'Message on WhatsApp',
      'footer': '© 2026 LuRa IT Develop. All rights reserved.',
      'cookie.text': 'This website uses cookies to ensure proper functionality and traffic analysis. By using this site, you agree to their use.',
      'cookie.button': 'Got it'
    }
  };

  function applyTranslations(lang) {
    document.documentElement.lang = lang;
    i18nElements.forEach(el => {
      const key = el.dataset.i18nKey;
      const translation = translations[lang]?.[key];
      if (!translation) return;
      if (el.dataset.i18nMode === 'html') {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    });
  }

  function setLanguage(lang) {
    localStorage.setItem('siteLanguage', lang);
    languageButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    applyTranslations(lang);
  }

  languageButtons.forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  setLanguage(localStorage.getItem('siteLanguage') || 'cs');

  /* ═══════════════════════════════════════════════
     SCROLL REVEAL ANIMATIONS (Intersection Observer)
     ═══════════════════════════════════════════════ */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
      revealObserver.observe(el);
    });
  } else {
    // Show all elements immediately when reduced motion is preferred
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
      el.classList.add('visible');
    });
  }

  /* ═══════════════════════════════════════════════
     HERO PARTICLE CANVAS — Network nodes
     ═══════════════════════════════════════════════ */
  const canvas = document.getElementById('hero-particles');
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    let mouseX = -1000;
    let mouseY = -1000;

    const particleCount = Math.min(55, Math.floor(window.innerWidth / 20));

    function resizeCanvas() {
      const hero = canvas.parentElement;
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 1.8 + 0.6,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update & draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(94, 234, 212, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      const maxDist = 140;
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(94, 234, 212, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        // Mouse interaction — particles gravitate toward cursor
        const dmx = a.x - mouseX;
        const dmy = a.y - mouseY;
        const mouseDist = Math.sqrt(dmx * dmx + dmy * dmy);
        if (mouseDist < 250) {
          const force = (1 - mouseDist / 250) * 0.03;
          a.vx += dmx * force * 0.01;
          a.vy += dmy * force * 0.01;
          // Dampen
          a.vx *= 0.999;
          a.vy *= 0.999;
        }
      });

      animationId = requestAnimationFrame(draw);
    }

    resizeCanvas();
    createParticles();
    draw();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    // Track mouse for particle interaction
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
      });
      heroSection.addEventListener('mouseleave', () => {
        mouseX = -1000;
        mouseY = -1000;
      });
    }
  }

  /* ═══════════════════════════════════════════════
     MOUSE GLOW EFFECT
     ═══════════════════════════════════════════════ */
  const mouseGlow = document.querySelector('.mouse-cursor-gradient-tracking');
  if (mouseGlow && !prefersReducedMotion) {
    let glowTimeout;
    document.addEventListener('mousemove', (e) => {
      mouseGlow.style.opacity = '1';
      mouseGlow.style.background = `
        radial-gradient(circle 400px at ${e.clientX}px ${e.clientY}px, rgba(201, 133, 62, 0.04) 0%, transparent 70%),
        radial-gradient(circle 160px at ${e.clientX}px ${e.clientY}px, rgba(94, 234, 212, 0.03) 0%, transparent 70%)
      `;
      clearTimeout(glowTimeout);
      glowTimeout = setTimeout(() => {
        mouseGlow.style.opacity = '0';
      }, 2000);
    });
  }

  /* ═══════════════════════════════════════════════
     CLICKABLE PROJECT CARDS — Whole card acts as link
     ═══════════════════════════════════════════════ */
  document.querySelectorAll('.project-card[data-href]').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't trigger if user was selecting text or clicking an inner link
      if (window.getSelection().toString()) return;
      if (e.target.closest('a')) return;
      const url = card.dataset.href;
      if (url) window.open(url, '_blank', 'noopener');
    });

    // Keyboard accessibility
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'link');
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const url = card.dataset.href;
        if (url) window.open(url, '_blank', 'noopener');
      }
    });
  });

  /* ═══════════════════════════════════════════════
     3D TILT EFFECT — Service & Portfolio cards
     ═══════════════════════════════════════════════ */
  const canHover = window.matchMedia('(hover: hover)').matches;

  if (canHover && !prefersReducedMotion) {
    const tiltElements = document.querySelectorAll('.service-card, .project-card');

    tiltElements.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;

        el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  /* ═══════════════════════════════════════════════
     INITIAL STATE
     ═══════════════════════════════════════════════ */
  updateNavbar();
});

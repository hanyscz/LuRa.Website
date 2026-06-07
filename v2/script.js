/**
 * LuRa IT Develop — "Cold Machinery" Script
 * Handles: CNC grid reactivity, spark particles, laser hover,
 *          i18n, nav, portfolio filters, cookie consent, scroll reveals
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
     CNC GRID — Scroll reactivity
     ═══════════════════════════════════════════════ */
  const cncGrid = document.querySelector('.cnc-grid');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (cncGrid && !prefersReducedMotion) {
    let gridTicking = false;

    window.addEventListener('scroll', () => {
      if (!gridTicking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const maxScroll = document.body.scrollHeight - window.innerHeight;
          const scrollFraction = maxScroll > 0 ? scrollY / maxScroll : 0;

          // Translate grid slightly with scroll for depth effect
          const yOffset = scrollFraction * 40;
          cncGrid.style.transform = `translateY(${yOffset}px)`;

          // Pulse opacity of the coarse grid
          const coarsePulse = 1 + Math.sin(scrollFraction * Math.PI * 3) * 0.2;
          cncGrid.style.setProperty('--coarse-opacity', coarsePulse);

          gridTicking = false;
        });
        gridTicking = true;
      }
    }, { passive: true });
  }

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
      'hero.title': 'Software, který <span class="accent-word">mluví</span> s provozem',
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
      'hero.title': 'Software that <span class="accent-word">talks</span> to operations',
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
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
      revealObserver.observe(el);
    });

    /* ── Divider flash on intersection ── */
    const dividers = document.querySelectorAll('.section-divider');
    const dividerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('flash');
            setTimeout(() => entry.target.classList.remove('flash'), 600);
          }
        });
      },
      { threshold: 0.5 }
    );

    dividers.forEach(divider => dividerObserver.observe(divider));
  } else {
    // Show all elements immediately when reduced motion is preferred
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
      el.classList.add('visible');
    });
  }

  /* ═══════════════════════════════════════════════
     SPARK PARTICLE CANVAS — Grinder sparks
     ═══════════════════════════════════════════════ */
  const canvas = document.getElementById('hero-particles');
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext('2d');
    let sparks = [];
    let animationId;
    let mouseX = -1000;
    let mouseY = -1000;

    const sparkCount = Math.min(60, Math.floor(window.innerWidth / 18));

    function resizeCanvas() {
      const hero = canvas.parentElement;
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    }

    function createSparks() {
      sparks = [];
      for (let i = 0; i < sparkCount; i++) {
        sparks.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          size: Math.random() * 1.4 + 0.4,
          opacity: Math.random() * 0.55 + 0.15,
          life: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.4 + 0.2
        });
      }
    }

    function drawSparks() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparks.forEach(s => {
        // Move
        s.x += s.vx;
        s.y += s.vy;

        // Wrap around with fade margin
        if (s.x < -30) s.x = canvas.width + 30;
        if (s.x > canvas.width + 30) s.x = -30;
        if (s.y < -30) s.y = canvas.height + 30;
        if (s.y > canvas.height + 30) s.y = -30;

        // Spark shimmer — life-based opacity oscillation
        s.life += s.speed * 0.03;
        const shimmer = 0.5 + 0.5 * Math.sin(s.life);
        const alpha = s.opacity * shimmer;

        // Draw spark core — bright center
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 210, 230, ${alpha})`;
        ctx.fill();

        // Draw outer glow
        if (shimmer > 0.7) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(106, 158, 192, ${alpha * 0.2})`;
          ctx.fill();
        }
      });

      // Draw connections — sparse, only close pairs
      const maxDist = 130;
      sparks.forEach((a, i) => {
        sparks.slice(i + 1).forEach(b => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const connectionAlpha = (1 - dist / maxDist) * 0.08;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(160, 200, 225, ${connectionAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        // Mouse interaction — sparks pull toward cursor
        if (mouseX > 0 && mouseY > 0) {
          const dmx = a.x - mouseX;
          const dmy = a.y - mouseY;
          const mouseDist = Math.sqrt(dmx * dmx + dmy * dmy);
          if (mouseDist < 220) {
            const force = (1 - mouseDist / 220) * 0.04;
            a.vx += dmx * force * 0.008;
            a.vy += dmy * force * 0.008;
            a.vx *= 0.995;
            a.vy *= 0.995;
          }
        }
      });

      animationId = requestAnimationFrame(drawSparks);
    }

    resizeCanvas();
    createSparks();
    drawSparks();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createSparks();
    });

    // Track mouse for spark interaction
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
     MOUSE GLOW EFFECT — Subtle CNC blue
     ═══════════════════════════════════════════════ */
  const mouseGlow = document.querySelector('.mouse-glow');
  if (mouseGlow && !prefersReducedMotion) {
    let glowTimeout;
    document.addEventListener('mousemove', (e) => {
      mouseGlow.style.opacity = '1';
      mouseGlow.style.background = `
        radial-gradient(circle 320px at ${e.clientX}px ${e.clientY}px, rgba(106, 158, 192, 0.055), transparent 70%),
        radial-gradient(circle 120px at ${e.clientX}px ${e.clientY}px, rgba(160, 200, 225, 0.03), transparent 70%)
      `;
      clearTimeout(glowTimeout);
      glowTimeout = setTimeout(() => {
        mouseGlow.style.opacity = '0';
      }, 2000);
    });
  }

  /* ═══════════════════════════════════════════════
     LASER HOVER — Card focus effect
     ═══════════════════════════════════════════════ */
  const canHover = window.matchMedia('(hover: hover)').matches;

  if (canHover && !prefersReducedMotion) {
    const hoverCards = document.querySelectorAll('.service-card, .project-card, .team-member');

    hoverCards.forEach(el => {
      el.addEventListener('mouseenter', () => {
        el.style.transition = 'border-color 0.35s var(--ease-cnc), box-shadow 0.35s var(--ease-cnc), transform 0.35s var(--ease-cnc), background 0.35s';
      });

      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Subtle tilt — less than old 3D tilt, more machine-like
        const tiltX = ((y - centerY) / centerY) * -2.5;
        const tiltY = ((x - centerX) / centerX) * 2.5;

        el.style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-3px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  /* ═══════════════════════════════════════════════
     CLICKABLE PROJECT CARDS — Whole card as link
     ═══════════════════════════════════════════════ */
  document.querySelectorAll('.project-card[data-href]').forEach(card => {
    card.addEventListener('click', (e) => {
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
     INITIAL STATE
     ═══════════════════════════════════════════════ */
  updateNavbar();
});

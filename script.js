(() => {
  'use strict';

  const translations = {
    cs: {
      'nav.services':'Služby','nav.work':'Projekty','nav.process':'Postup','nav.contact':'Kontakt','nav.cta':'Popsat projekt <span aria-hidden="true">↗</span>',
      'hero.eyebrow':'LuRa IT Develop · od roku 2004','hero.title':'Software, který <strong>rozumí provozu.</strong>','hero.intro':'Od jednoduchého webu a aplikace pro živnostníka po propojený systém pro větší firmu. Řekněte, co řešíte — na všem se domluvíme.','hero.primary':'Probrat váš projekt <span aria-hidden="true">→</span>','hero.secondary':'Prohlédnout realizace <span aria-hidden="true">↓</span>','hero.visualLabel':'C# / .NET · živý systém',
      'index.approach':'Přístup','intro.title':'Od jednoduchého webu po provozní systém. Hledáme cestu, která vám usnadní práci.','intro.text':'Pomáháme živnostníkům, malým firmám i větším provozům. Může jít o web na zakázku, jednoduchou aplikaci nebo komplexní systém — důležité je, aby řešení dávalo smysl právě vám.',
      'index.services':'Služby','services.eyebrow':'Co dodáváme','services.title':'Řešení, které sedne vašemu podnikání.','service.systems.title':'Weby a aplikace na míru','service.systems.text':'Prezentační web, jednoduchá aplikace, zákaznický portál i firemní systém. Začneme rozsahem, který vašemu podnikání opravdu sedí.','service.mobile.title':'Mobilní provoz','service.mobile.text':'Rychlé aplikace pro terén a sklad, které počítají s dotykem, výpadky signálu a potřebou fungovat hned.','service.hardware.title':'Hardware integrace','service.hardware.text':'Váhy, tiskárny, čtečky, terminály i průmyslová zařízení. Data putují tam, kam mají — bez ručního přepisu.','service.cloud.title':'Cloud &amp; integrace','service.cloud.text':'API, synchronizace a bezpečný pohyb dat mezi webem, mobilem, desktopem a službami třetích stran.',
      'index.work':'Realizace','work.eyebrow':'Vybrané projekty','work.title':'Kód, který má dopad na každý pracovní den.','filter.all':'Vše','filter.system':'Systémy','filter.mobile':'Mobilní','filter.hardware':'Hardware','filter.tool':'Nástroje','filter.status':'Zobrazeno projektů: {count}','project.threes':'Webový informační systém pro firmy, kterým už Excel nestačí — procesy, projekty a dokumentace na jednom místě.','project.visit':'Navštívit projekt','project.reservation.title':'Rezervační systém Academy TT','project.reservation':'Online rezervační systém pro Table Tennis Academy Znojmo. Umožňuje rezervaci stolů i tréninků s trenérem.','project.mvykup.title':'Mobilní výkup','project.mvykup':'Příjem v terénu, Bluetooth tisk, offline režim a okamžitá synchronizace dat.','project.expedition.title':'Expediční terminál','project.expedition':'Robustní dotykové pracoviště propojené s váhou, tiskárnou štítků a centrální databází.','project.erp.title':'Informační systémy na míru','project.erp':'Od nákupu a skladu po fakturaci, statistiky a napojení na partnerské služby. Jeden spolehlivý základ pro růst firmy.','project.trello':'Lokální Chrome rozšíření, které exportuje nástěnky a karty do čistého Markdownu.','project.viewGithub':'Zobrazit na GitHubu','project.deepseekCredit':'Windows aplikace pro tray monitoring zůstatku DeepSeek API: výstrahy, predikce spotřeby, dashboard a integrace do Home Assistanta.','project.deepseekAccount':'Rozšíření do VS Code, které přímo ve stavovém řádku hlídá zůstatek, spotřebu a dostupnost DeepSeek modelů.','project.luraReport':'Připravovaný .NET nástroj pro definici, validaci, náhled, export a tisk štítků i dokumentů z JSON šablon a JSON dat.','project.comingSoon':'Připravuje se k veřejnému vydání','project.intake.title':'Příjmový terminál','project.intake':'Velké a přehledné ovládání pro provoz s propojením na databázi i váhu.','project.wildlife.title':'Informační systém pro výkup zvěře','project.wildlife':'Moderní Blazor aplikace pro nákup, prodej, sklad a veterinární agendu. Zajišťuje dohledatelnost, detailní logování a tisk dokumentů v jednom provozním systému.',
      'index.process':'Spolupráce','process.eyebrow':'Jak postupujeme','process.title':'Od reality k řešení, které vydrží.','process.intro':'Dobrá aplikace nezačíná seznamem technologií. Začíná tím, co dnes lidem brání v práci.','process.discover.title':'Poznáme provoz','process.discover':'Pojmenujeme cíle, data, zařízení a místa, kde vznikají zdržení nebo chyby.','process.design.title':'Navrhneme cestu','process.design':'Rozhraní, procesy a technický základ, který má smysl pro lidi i budoucí rozvoj.','process.deliver.title':'Dodáme a rozvíjíme','process.deliver':'Vyvíjíme po částech, ověřujeme v praxi a zůstáváme partnerem i po nasazení.',
      'contact.eyebrow':'První krok je jednoduchý','contact.title':'Máte nápad, nebo konkrétní problém? Ozvěte se.','contact.intro':'Ať potřebujete jednoduchý web, aplikaci na míru nebo větší systém, stačí pár vět. Společně najdeme rozumné řešení.','form.name':'Jméno a firma','form.email':'E-mail','form.message':'S čím potřebujete pomoci?','form.placeholder':'Například: potřebuji nový web nebo jednoduchou aplikaci pro své podnikání.','form.submit':'Otevřít e-mail <span aria-hidden="true">→</span>','form.note':'Po odeslání se otevře váš e-mailový program s připravenou zprávou.','footer.copy':'© 2026 LuRa IT Develop. Software pro skutečný provoz.','footer.privacy':'Ochrana soukromí','footer.cookies':'Nastavení cookies','cookie.title':'Používáme cookies','cookie.text':'Nezbytné technologie zajišťují správné fungování webu. Analytické cookies Google Analytics použijeme pouze s vaším souhlasem.','cookie.more':'Více informací','cookie.reject':'Odmítnout vše','cookie.settings':'Nastavení','cookie.accept':'Povolit analytiku','cookie.settings.title':'Nastavení cookies','cookie.necessary':'Nezbytné technologie','cookie.necessary.text':'Potřebné pro fungování webu a zapamatování vašeho nastavení.','cookie.analytics':'Analytické cookies','cookie.analytics.text':'Pomáhají nám pochopit návštěvnost webu prostřednictvím Google Analytics.','cookie.save':'Uložit volbu','cookie.cancel':'Zrušit','form.error':'Doplňte prosím jméno, platný e-mail a zprávu.'
    },
    en: {
      'nav.services':'Services','nav.work':'Projects','nav.process':'Process','nav.contact':'Contact','nav.cta':'Describe your project <span aria-hidden="true">↗</span>',
      'hero.eyebrow':'LuRa IT Develop · since 2004','hero.title':'Software that <strong>understands operations.</strong>','hero.intro':'From a simple website or app for a sole trader to a connected system for a larger company. Tell us what you need — everything is open for discussion.','hero.primary':'Discuss your project <span aria-hidden="true">→</span>','hero.secondary':'See selected work <span aria-hidden="true">↓</span>','hero.visualLabel':'C# / .NET · live system',
      'index.approach':'Approach','intro.title':'From a simple website to an operational system. We find the path that makes your work easier.','intro.text':'We help sole traders, small businesses and larger operations. It can be a bespoke website, a simple app or a complex system — what matters is that the solution fits you.',
      'index.services':'Services','services.eyebrow':'What we deliver','services.title':'A solution that fits your business.','service.systems.title':'Custom websites and apps','service.systems.text':'A presentation website, simple app, customer portal or business system. We start with the scope that genuinely fits your business.','service.mobile.title':'Mobile operations','service.mobile.text':'Fast field and warehouse apps that account for touch controls, lost signal and the need to work immediately.','service.hardware.title':'Hardware integration','service.hardware.text':'Scales, printers, scanners, terminals and industrial devices. Data goes where it belongs — without manual transcription.','service.cloud.title':'Cloud &amp; integration','service.cloud.text':'APIs, synchronization and secure data movement between web, mobile, desktop and third-party services.',
      'index.work':'Selected work','work.eyebrow':'Selected projects','work.title':'Code that improves every working day.','filter.all':'All','filter.system':'Systems','filter.mobile':'Mobile','filter.hardware':'Hardware','filter.tool':'Tools','filter.status':'Showing {count} projects','project.threes':'A business web system for companies that have outgrown Excel — processes, projects and documentation in one place.','project.visit':'Visit project','project.reservation.title':'Academy TT booking system','project.reservation':'An online booking system for Table Tennis Academy Znojmo. It lets players reserve tables or training sessions with a coach.','project.mvykup.title':'Mobile purchasing','project.mvykup':'Field intake, Bluetooth printing, offline mode and immediate data synchronization.','project.expedition.title':'Dispatch terminal','project.expedition':'A robust touchscreen workplace connected to a scale, label printer and central database.','project.erp.title':'Custom information systems','project.erp':'From purchasing and warehousing to invoicing, statistics and partner-service integrations. A reliable foundation for growth.','project.trello':'A local Chrome extension that exports boards and cards to clean Markdown.','project.viewGithub':'View on GitHub','project.deepseekCredit':'A Windows tray app for monitoring DeepSeek API credit: alerts, usage prediction, dashboard and Home Assistant integration.','project.deepseekAccount':'A VS Code extension that monitors DeepSeek balance, usage and model availability directly in the Status Bar.','project.luraReport':'An upcoming .NET tool for defining, validating, previewing, exporting and printing labels and documents from JSON templates and JSON data.','project.comingSoon':'Preparing for public release','project.intake.title':'Receiving terminal','project.intake':'Large, clear controls for operations with a connection to the database and scale.','project.wildlife.title':'Wildlife purchasing information system','project.wildlife':'A modern Blazor application covering purchasing, sales, stock and veterinary records. It provides traceability, detailed logging and document printing in one operational system.',
      'index.process':'Working together','process.eyebrow':'How we work','process.title':'From reality to a solution that lasts.','process.intro':'A good application does not start with a list of technologies. It starts with what is getting in people’s way today.','process.discover.title':'Understand the operation','process.discover':'We identify goals, data, devices and the places where delays or errors happen.','process.design.title':'Design the path','process.design':'An interface, workflows and a technical foundation that make sense for people and future growth.','process.deliver.title':'Deliver and evolve','process.deliver':'We develop in increments, validate in practice and remain a partner after go-live.',
      'contact.eyebrow':'The first step is simple','contact.title':'Have an idea or a specific problem? Get in touch.','contact.intro':'Whether you need a simple website, custom app or a larger system, a few sentences are enough. Together, we will find a sensible solution.','form.name':'Name and company','form.email':'Email','form.message':'What do you need help with?','form.placeholder':'For example: I need a new website or a simple app for my business.','form.submit':'Open email <span aria-hidden="true">→</span>','form.note':'Submitting opens your email app with a prepared message.','footer.copy':'© 2026 LuRa IT Develop. Software for real operations.','footer.privacy':'Privacy and cookies','footer.cookies':'Cookie settings','cookie.title':'We use cookies','cookie.text':'Necessary technologies keep the website working. We use Google Analytics cookies only with your consent.','cookie.more':'More information','cookie.reject':'Reject all','cookie.settings':'Settings','cookie.accept':'Allow analytics','cookie.settings.title':'Cookie settings','cookie.necessary':'Necessary technologies','cookie.necessary.text':'Required for the website to work and to remember your preferences.','cookie.analytics':'Analytics cookies','cookie.analytics.text':'Help us understand website traffic through Google Analytics.','cookie.save':'Save choice','cookie.cancel':'Cancel','form.error':'Please add your name, a valid email and a message.'
    }
  };

  Object.assign(translations.cs, {
    'hero.title':'Weby a software, <strong>který roste s vámi.</strong>',
    'hero.intro':'Od prvního webu pro živnostníka po aplikaci pro tým nebo větší systém. Začneme rozsahem, který dává smysl právě vám.',
    'intro.title':'Od prvního webu po systém, který roste s vámi. Hledáme cestu, která vám usnadní práci.',
    'intro.text':'Pomáháme živnostníkům, malým firmám i týmům, které chtějí pracovat chytřeji. Může jít o web, malou aplikaci, zákaznický portál nebo větší systém — důležité je začít řešením, které odpovídá vašim potřebám.',
    'service.mobile.title':'Mobilní aplikace',
    'service.mobile.text':'Aplikace pro telefon, tablet i terén — s dotykem, offline režimem a napojením na data, když je potřebujete.',
    'service.hardware.title':'Hardware a integrace',
    'service.hardware.text':'Váhy, tiskárny, čtečky, terminály i průmyslová zařízení. Integraci řešíme tehdy, když vám ušetří čas nebo chyby.',
    'service.cloud.text':'API, synchronizace a bezpečný pohyb dat mezi webem, mobilem, desktopem a službami třetích stran. Propojíme jen to, co má pro vás smysl.',
    'work.title':'Projekty od webů po vlastní nástroje.',
    'process.title':'Od nápadu k řešení, které vydrží.',
    'process.intro':'Dobrý web ani aplikace nezačíná seznamem technologií. Začíná tím, co potřebujete vyřešit.',
    'process.discover.title':'Poznáme, co potřebujete',
    'process.discover':'Pojmenujeme cíle, uživatele, obsah, data i místa, kde dnes vznikají zdržení nebo chyby.',
    'process.design.title':'Navrhneme správný rozsah',
    'process.design':'Rozhraní, funkce a technický základ, který dává smysl dnes a může růst zítra.'
  });
  Object.assign(translations.en, {
    'hero.title':'Websites and software that <strong>grow with you.</strong>',
    'hero.intro':'From a first website for a sole trader to an app for a team or a larger system. We start with the scope that makes sense for you.',
    'intro.title':'From a first website to a system that grows with you. We find the path that makes your work easier.',
    'intro.text':'We help sole traders, small businesses and teams that want to work smarter. It might be a website, a small app, a customer portal or a larger system — what matters is starting with the solution that fits your needs.',
    'service.mobile.title':'Mobile apps',
    'service.mobile.text':'Apps for phones, tablets and the field — with touch controls, offline support and data connections when you need them.',
    'service.hardware.title':'Hardware and integration',
    'service.hardware.text':'Scales, printers, scanners, terminals and industrial devices. We add integration when it saves you time or prevents errors.',
    'service.cloud.text':'APIs, synchronization and secure data movement between web, mobile, desktop and third-party services. We connect only what makes sense for you.',
    'work.title':'Projects from websites to custom tools.',
    'process.title':'From an idea to a solution that lasts.',
    'process.intro':'A good website or app does not start with a list of technologies. It starts with what you need to solve.',
    'process.discover.title':'Understand what you need',
    'process.discover':'We identify goals, users, content, data and the places where delays or errors happen today.',
    'process.design.title':'Choose the right scope',
    'process.design':'An interface, features and technical foundation that make sense today and can grow tomorrow.'
  });

  const themeToggle = document.querySelector('[data-theme-toggle]');
  const themeIcon = document.querySelector('[data-theme-icon]');
  const themeCopy = {
    cs: { dark: 'Zapnout tmavý režim', light: 'Zapnout světlý režim' },
    en: { dark: 'Enable dark mode', light: 'Enable light mode' }
  };
  const updateThemeToggle = () => {
    const dark = document.documentElement.dataset.theme === 'dark';
    const language = document.documentElement.lang === 'en' ? 'en' : 'cs';
    const label = themeCopy[language][dark ? 'light' : 'dark'];
    themeToggle?.setAttribute('aria-label', label);
    themeToggle?.setAttribute('title', label);
    themeToggle?.setAttribute('aria-pressed', String(dark));
    if (themeIcon) themeIcon.textContent = dark ? '☀' : '☾';
  };
  const applyTheme = theme => {
    const dark = theme === 'dark';
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#10181C' : '#1B242A');
    updateThemeToggle();
  };
  const storedTheme = (() => { try { return localStorage.getItem('lura-theme'); } catch { return null; } })();
  applyTheme(storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : (document.documentElement.dataset.theme || 'dark'));
  themeToggle?.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    try { localStorage.setItem('lura-theme', nextTheme); } catch { /* private browsing */ }
  });

  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  const closeMenu = () => { menuToggle?.classList.remove('is-open'); menuToggle?.setAttribute('aria-expanded','false'); mobileNav?.classList.remove('is-open'); menuToggle?.focus(); };
  menuToggle?.addEventListener('click', () => { const isOpen = mobileNav.classList.toggle('is-open'); menuToggle.classList.toggle('is-open', isOpen); menuToggle.setAttribute('aria-expanded', String(isOpen)); if (isOpen) mobileNav.querySelector('a')?.focus(); });
  mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && mobileNav?.classList.contains('is-open')) closeMenu(); });

  const updateHeader = () => { header.classList.toggle('is-scrolled', window.scrollY > 24); document.querySelector('[data-back-to-top]')?.classList.toggle('is-visible', window.scrollY > 620); };
  window.addEventListener('scroll', updateHeader, { passive:true }); updateHeader();
  document.querySelector('[data-back-to-top]')?.addEventListener('click', () => window.scrollTo({top:0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'}));

  function updateFilterStatus() {
    const dictionary = translations[document.documentElement.lang] || translations.cs;
    const visibleProjects = [...document.querySelectorAll('[data-category]')].filter(project => !project.classList.contains('is-hidden')).length;
    const status = dictionary['filter.status']?.replace('{count}', String(visibleProjects));
    if (status) document.querySelector('[data-filter-status]')?.replaceChildren(document.createTextNode(status));
  }

  const portfolio = document.querySelector('[data-portfolio]');
  const layoutPortfolio = () => {
    if (!portfolio) return;
    const projects = [...portfolio.querySelectorAll('.project')];
    projects.forEach(project => { project.style.gridRowEnd = ''; });
    if (window.matchMedia('(max-width: 760px)').matches) return;
    const styles = getComputedStyle(portfolio);
    if (styles.display !== 'grid') return;
    const rowHeight = parseFloat(styles.gridAutoRows);
    const rowGap = parseFloat(styles.rowGap);
    projects.filter(project => !project.classList.contains('is-hidden')).forEach(project => {
      const height = project.getBoundingClientRect().height;
      project.style.gridRowEnd = `span ${Math.ceil((height + rowGap) / (rowHeight + rowGap))}`;
    });
  };
  const queuePortfolioLayout = () => requestAnimationFrame(() => requestAnimationFrame(layoutPortfolio));
  window.addEventListener('resize', queuePortfolioLayout, { passive: true });
  portfolio?.querySelectorAll('img').forEach(image => image.addEventListener('load', queuePortfolioLayout, { once: true }));

  document.querySelectorAll('.filter-button').forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filter-button').forEach(item => { const active = item === button; item.classList.toggle('is-active', active); item.setAttribute('aria-pressed', String(active)); });
    document.querySelectorAll('[data-category]').forEach(project => project.classList.toggle('is-hidden', filter !== 'all' && !project.dataset.category.split(' ').includes(filter)));
    updateFilterStatus();
    queuePortfolioLayout();
  }));

  function setLanguage(language) {
    const dictionary = translations[language];
    if (!dictionary) return;
    document.documentElement.lang = language;
    updateThemeToggle();
    document.querySelectorAll('[data-i18n]').forEach(element => { const value = dictionary[element.dataset.i18n]; if (!value) return; if (element.hasAttribute('data-i18n-html')) element.innerHTML = value; else if (value.includes('&amp;') || value.includes('<span')) element.innerHTML = value; else element.textContent = value; });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => { const value = dictionary[element.dataset.i18nPlaceholder]; if (value) element.placeholder = value; });
    document.querySelectorAll('[data-language]').forEach(button => { const active = button.dataset.language === language; button.classList.toggle('is-active', active); button.setAttribute('aria-pressed', String(active)); });
    document.querySelectorAll('[data-privacy-link]').forEach(link => { link.href = language === 'en' ? 'privacy.html' : 'ochrana-soukromi.html'; });
    updateFilterStatus();
    queuePortfolioLayout();
  }
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  updateFilterStatus();
  queuePortfolioLayout();

  const form = document.querySelector('[data-contact-form]');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    const status = form.querySelector('[data-form-status]');
    const fields = [...form.querySelectorAll('[required]')];
    const valid = fields.every(field => field.checkValidity() && field.value.trim());
    fields.forEach(field => field.setAttribute('aria-invalid', String(!field.checkValidity() || !field.value.trim())));
    if (!valid) { status.textContent = translations[document.documentElement.lang]?.['form.error'] || translations.cs['form.error']; fields.find(field => field.getAttribute('aria-invalid') === 'true')?.focus(); return; }
    status.textContent = '';
    const name = form.elements.name.value.trim(); const email = form.elements.email.value.trim(); const message = form.elements.message.value.trim();
    const subject = encodeURIComponent(`Poptávka z webu — ${name}`);
    const body = encodeURIComponent(`Jméno a firma: ${name}\nE-mail: ${email}\n\n${message}`);
    window.location.href = `mailto:hanak@lura-it.eu?subject=${subject}&body=${body}`;
  });

  /* ═══════════════════════════════════════════════
     COOKIE CONSENT
     ═══════════════════════════════════════════════ */
  const cookieBanner = document.querySelector('[data-cookie-banner]');
  const cookieModal = document.querySelector('[data-cookie-modal]');
  const cookieConsentKey = 'lura-cookie-consent-v1';
  const cookieConsentVersion = '2026-09-22';
  let cookieFocusBeforeModal = null;

  const readCookieConsent = () => {
    try {
      const value = JSON.parse(localStorage.getItem(cookieConsentKey) || 'null');
      return value && value.version === cookieConsentVersion ? value : null;
    } catch { return null; }
  };

  const updateZarazConsent = analytics => {
    const zaraz = window.zaraz;
    try {
      if (typeof zaraz?.consent?.setAll === 'function') {
        zaraz.consent.setAll(Boolean(analytics));
        if (analytics && typeof zaraz.consent.sendQueuedEvents === 'function') zaraz.consent.sendQueuedEvents();
      }
    } catch { /* local fallback remains usable if Zaraz is unavailable */ }
  };

  const closeCookieBanner = () => { if (cookieBanner) cookieBanner.hidden = true; };
  const showCookieBanner = () => { if (cookieBanner) cookieBanner.hidden = false; };
  const closeCookieModal = () => {
    if (!cookieModal) return;
    cookieModal.hidden = true;
    cookieModal.setAttribute('aria-hidden', 'true');
    cookieFocusBeforeModal?.focus?.();
  };
  const openCookieModal = trigger => {
    if (!cookieModal) {
      if (typeof window.zaraz?.showConsentModal === 'function') window.zaraz.showConsentModal();
      return;
    }
    cookieFocusBeforeModal = trigger || document.activeElement;
    const consent = readCookieConsent();
    const analyticsToggle = cookieModal.querySelector('[data-cookie-analytics]');
    if (analyticsToggle) analyticsToggle.checked = Boolean(consent?.analytics);
    cookieModal.hidden = false;
    cookieModal.setAttribute('aria-hidden', 'false');
    cookieModal.querySelector('[data-cookie-save]')?.focus();
  };
  const saveCookieConsent = analytics => {
    const choice = { version: cookieConsentVersion, analytics: Boolean(analytics), timestamp: new Date().toISOString() };
    try { localStorage.setItem(cookieConsentKey, JSON.stringify(choice)); } catch { /* private browsing */ }
    updateZarazConsent(choice.analytics);
    closeCookieModal();
    closeCookieBanner();
  };

  if (cookieBanner) {
    const storedConsent = readCookieConsent();
    if (storedConsent) closeCookieBanner(); else showCookieBanner();
    cookieBanner.querySelector('[data-cookie-accept]')?.addEventListener('click', () => saveCookieConsent(true));
    cookieBanner.querySelector('[data-cookie-reject]')?.addEventListener('click', () => saveCookieConsent(false));
    cookieBanner.querySelector('[data-cookie-open-settings]')?.addEventListener('click', event => { event.preventDefault(); openCookieModal(event.currentTarget); });
  }
  cookieModal?.querySelector('[data-cookie-save]')?.addEventListener('click', () => saveCookieConsent(cookieModal.querySelector('[data-cookie-analytics]')?.checked));
  cookieModal?.querySelector('[data-cookie-cancel]')?.addEventListener('click', closeCookieModal);
  cookieModal?.addEventListener('click', event => { if (event.target === cookieModal) closeCookieModal(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && cookieModal && !cookieModal.hidden) closeCookieModal(); });
  document.querySelectorAll('[data-cookie-settings]').forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    openCookieModal(link);
  }));

  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const heroCanvas = document.querySelector('[data-hero-canvas]');
  const heroSection = heroCanvas?.closest('.hero');
  if (heroCanvas && heroSection && !motionQuery.matches) {
    const context = heroCanvas.getContext('2d');
    const pointer = { x: -1000, y: -1000 };
    let points = [];
    let animationFrame;

    const resizeCanvas = () => {
      const bounds = heroSection.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      heroCanvas.width = Math.floor(bounds.width * ratio);
      heroCanvas.height = Math.floor(bounds.height * ratio);
      heroCanvas.style.width = `${bounds.width}px`;
      heroCanvas.style.height = `${bounds.height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      points = Array.from({ length: Math.min(100, Math.max(56, Math.round(bounds.width / 16))) }, () => ({
        x: Math.random() * bounds.width,
        y: Math.random() * bounds.height,
        z: Math.random(),
        vx: (Math.random() - .5) * .16,
        vy: (Math.random() - .5) * .12,
        phase: Math.random() * Math.PI * 2,
        size: Math.random() * 2.2 + .65
      }));
    };

    const drawConstellation = (time) => {
      const width = heroSection.clientWidth;
      const height = heroSection.clientHeight;
      context.clearRect(0, 0, width, height);

      points.forEach(point => {
        point.x += point.vx;
        point.y += point.vy;
        point.phase += .008 + point.z * .006;
        if (point.x < -24) point.x = width + 24;
        if (point.x > width + 24) point.x = -24;
        if (point.y < -24) point.y = height + 24;
        if (point.y > height + 24) point.y = -24;

        const shimmer = .55 + Math.sin(point.phase + time * .00035) * .25;
        const radius = point.size + point.z * 1.8;
        const glow = context.createRadialGradient(point.x, point.y, 0, point.x, point.y, radius * 8);
        glow.addColorStop(0, `rgba(44, 207, 200, ${shimmer * .28})`);
        glow.addColorStop(1, 'rgba(44, 207, 200, 0)');
        context.fillStyle = glow;
        context.beginPath();
        context.arc(point.x, point.y, radius * 8, 0, Math.PI * 2);
        context.fill();

        context.fillStyle = `rgba(44, 207, 200, ${point.z > .52 ? shimmer * .95 : shimmer * .58})`;
        context.beginPath();
        context.arc(point.x, point.y, radius, 0, Math.PI * 2);
        context.fill();
      });

      const maxDistance = 170;
      points.forEach((point, index) => {
        points.slice(index + 1).forEach(other => {
          const distance = Math.hypot(point.x - other.x, point.y - other.y);
          if (distance > maxDistance) return;
          const alpha = (1 - distance / maxDistance) * .2;
          context.strokeStyle = `rgba(44, 207, 200, ${alpha})`;
          context.lineWidth = .55 + Math.min(point.z, other.z) * .35;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(other.x, other.y);
          context.stroke();
        });

        const distanceToPointer = Math.hypot(point.x - pointer.x, point.y - pointer.y);
        if (distanceToPointer < 210) {
          const alpha = (1 - distanceToPointer / 210) * .28;
          context.strokeStyle = `rgba(44, 207, 200, ${alpha})`;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(pointer.x, pointer.y);
          context.stroke();
        }
      });

      animationFrame = requestAnimationFrame(drawConstellation);
    };

    resizeCanvas();
    drawConstellation(0);
    window.addEventListener('resize', resizeCanvas, { passive: true });
    heroSection.addEventListener('pointermove', event => {
      const bounds = heroCanvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
    }, { passive: true });
    heroSection.addEventListener('pointerleave', () => { pointer.x = -1000; pointer.y = -1000; });
    motionQuery.addEventListener?.('change', event => {
      if (event.matches) cancelAnimationFrame(animationFrame);
    });
  }

  const heroAnimation = document.querySelector('[data-hero-animation]');
  if (heroAnimation && !motionQuery.matches && window.matchMedia('(pointer:fine)').matches) {
    heroAnimation.addEventListener('pointermove', event => {
      const bounds = heroAnimation.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - .5;
      const y = (event.clientY - bounds.top) / bounds.height - .5;
      heroAnimation.style.setProperty('--hero-far-x', `${x * 4}px`);
      heroAnimation.style.setProperty('--hero-far-y', `${y * 4}px`);
      heroAnimation.style.setProperty('--hero-near-x', `${x * 8}px`);
      heroAnimation.style.setProperty('--hero-near-y', `${y * 8}px`);
    }, { passive: true });
    heroAnimation.addEventListener('pointerleave', () => {
      ['--hero-far-x', '--hero-far-y', '--hero-near-x', '--hero-near-y'].forEach(property => heroAnimation.style.removeProperty(property));
    });
  }

  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold:.12 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
})();

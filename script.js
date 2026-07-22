(() => {
  'use strict';

  const translations = {
    cs: {
      'nav.services':'Služby','nav.work':'Projekty','nav.process':'Postup','nav.contact':'Kontakt','nav.cta':'Popsat projekt <span aria-hidden="true">↗</span>',
      'hero.eyebrow':'LuRa IT Develop · od roku 2004','hero.title':'Software, který <strong>rozumí provozu.</strong>','hero.intro':'Stavíme aplikace pro firmy, které potřebují propojit lidi, procesy, hardware a data — bez zbytečné složitosti.','hero.primary':'Probrat váš projekt <span aria-hidden="true">→</span>','hero.secondary':'Prohlédnout realizace <span aria-hidden="true">↓</span>','hero.visualLabel':'Jedno řešení, celý provoz',
      'index.approach':'Přístup','intro.title':'Nehledáme technologii pro technologii. Hledáme cestu, která zrychlí práci.','intro.text':'Ať řešíte sklad, výrobu, servis v terénu nebo firemní administrativu, cílem je vždy stejný: méně přepisování, méně chyb a lepší přehled nad tím, co se skutečně děje.',
      'index.services':'Služby','services.eyebrow':'Co dodáváme','services.title':'Technologie, které obstojí i mimo kancelář.','service.systems.title':'Firemní systémy','service.systems.text':'Systémy pro evidenci, procesy, fakturaci, sklad i reporting. Přesně podle toho, jak vaše firma skutečně pracuje.','service.mobile.title':'Mobilní provoz','service.mobile.text':'Rychlé aplikace pro terén a sklad, které počítají s dotykem, výpadky signálu a potřebou fungovat hned.','service.hardware.title':'Hardware integrace','service.hardware.text':'Váhy, tiskárny, čtečky, terminály i průmyslová zařízení. Data putují tam, kam mají — bez ručního přepisu.','service.cloud.title':'Cloud &amp; integrace','service.cloud.text':'API, synchronizace a bezpečný pohyb dat mezi webem, mobilem, desktopem a službami třetích stran.',
      'index.work':'Realizace','work.eyebrow':'Vybrané projekty','work.title':'Kód, který má dopad na každý pracovní den.','filter.all':'Vše','filter.system':'Systémy','filter.mobile':'Mobilní','filter.hardware':'Hardware','project.threes':'Webový informační systém pro firmy, kterým už Excel nestačí — procesy, projekty a dokumentace na jednom místě.','project.visit':'Navštívit projekt','project.mvykup.title':'Mobilní výkup','project.mvykup':'Příjem v terénu, Bluetooth tisk, offline režim a okamžitá synchronizace dat.','project.expedition.title':'Expediční terminál','project.expedition':'Robustní dotykové pracoviště propojené s váhou, tiskárnou štítků a centrální databází.','project.erp.title':'Informační systémy na míru','project.erp':'Od nákupu a skladu po fakturaci, statistiky a napojení na partnerské služby. Jeden spolehlivý základ pro růst firmy.','project.trello':'Lokální Chrome rozšíření, které exportuje nástěnky a karty do čistého Markdownu.','project.viewGithub':'Zobrazit na GitHubu','project.intake.title':'Příjmový terminál','project.intake':'Velké a přehledné ovládání pro provoz s propojením na databázi i váhu.',
      'index.process':'Spolupráce','process.eyebrow':'Jak postupujeme','process.title':'Od reality k řešení, které vydrží.','process.intro':'Dobrá aplikace nezačíná seznamem technologií. Začíná tím, co dnes lidem brání v práci.','process.discover.title':'Poznáme provoz','process.discover':'Pojmenujeme cíle, data, zařízení a místa, kde vznikají zdržení nebo chyby.','process.design.title':'Navrhneme cestu','process.design':'Rozhraní, procesy a technický základ, který má smysl pro lidi i budoucí rozvoj.','process.deliver.title':'Dodáme a rozvíjíme','process.deliver':'Vyvíjíme po částech, ověřujeme v praxi a zůstáváme partnerem i po nasazení.',
      'contact.eyebrow':'První krok je jednoduchý','contact.title':'Popište, co vám dnes v provozu zbytečně bere čas.','contact.intro':'Stačí pár vět. Ozveme se a společně zjistíme, zda pro váš problém dává smysl postavit řešení na míru.','form.name':'Jméno a firma','form.email':'E-mail','form.message':'S čím potřebujete pomoci?','form.placeholder':'Například: chceme zrychlit příjem zboží a propojit sklad s mobilní aplikací.','form.submit':'Otevřít e-mail <span aria-hidden="true">→</span>','form.note':'Po odeslání se otevře váš e-mailový program s připravenou zprávou.','footer.copy':'© 2026 LuRa IT Develop. Software pro skutečný provoz.','form.error':'Doplňte prosím jméno, platný e-mail a zprávu.'
    },
    en: {
      'nav.services':'Services','nav.work':'Projects','nav.process':'Process','nav.contact':'Contact','nav.cta':'Describe your project <span aria-hidden="true">↗</span>',
      'hero.eyebrow':'LuRa IT Develop · since 2004','hero.title':'Software that <strong>understands operations.</strong>','hero.intro':'We build applications for companies that need to connect people, processes, hardware and data — without unnecessary complexity.','hero.primary':'Discuss your project <span aria-hidden="true">→</span>','hero.secondary':'See selected work <span aria-hidden="true">↓</span>','hero.visualLabel':'One solution, the whole operation',
      'index.approach':'Approach','intro.title':'We do not look for technology for technology’s sake. We find the path that makes work faster.','intro.text':'Whether you are solving warehouse workflows, production, field service or business administration, the goal is the same: less retyping, fewer errors and a clearer picture of what is actually happening.',
      'index.services':'Services','services.eyebrow':'What we deliver','services.title':'Technology that works beyond the office.','service.systems.title':'Business systems','service.systems.text':'Systems for records, workflows, invoicing, warehousing and reporting. Designed around how your company truly works.','service.mobile.title':'Mobile operations','service.mobile.text':'Fast field and warehouse apps that account for touch controls, lost signal and the need to work immediately.','service.hardware.title':'Hardware integration','service.hardware.text':'Scales, printers, scanners, terminals and industrial devices. Data goes where it belongs — without manual transcription.','service.cloud.title':'Cloud &amp; integration','service.cloud.text':'APIs, synchronization and secure data movement between web, mobile, desktop and third-party services.',
      'index.work':'Selected work','work.eyebrow':'Selected projects','work.title':'Code that improves every working day.','filter.all':'All','filter.system':'Systems','filter.mobile':'Mobile','filter.hardware':'Hardware','project.threes':'A business web system for companies that have outgrown Excel — processes, projects and documentation in one place.','project.visit':'Visit project','project.mvykup.title':'Mobile purchasing','project.mvykup':'Field intake, Bluetooth printing, offline mode and immediate data synchronization.','project.expedition.title':'Dispatch terminal','project.expedition':'A robust touchscreen workplace connected to a scale, label printer and central database.','project.erp.title':'Custom information systems','project.erp':'From purchasing and warehousing to invoicing, statistics and partner-service integrations. A reliable foundation for growth.','project.trello':'A local Chrome extension that exports boards and cards to clean Markdown.','project.viewGithub':'View on GitHub','project.intake.title':'Receiving terminal','project.intake':'Large, clear controls for operations with a connection to the database and scale.',
      'index.process':'Working together','process.eyebrow':'How we work','process.title':'From reality to a solution that lasts.','process.intro':'A good application does not start with a list of technologies. It starts with what is getting in people’s way today.','process.discover.title':'Understand the operation','process.discover':'We identify goals, data, devices and the places where delays or errors happen.','process.design.title':'Design the path','process.design':'An interface, workflows and a technical foundation that make sense for people and future growth.','process.deliver.title':'Deliver and evolve','process.deliver':'We develop in increments, validate in practice and remain a partner after go-live.',
      'contact.eyebrow':'The first step is simple','contact.title':'Tell us what is taking unnecessary time in your operation today.','contact.intro':'A few sentences are enough. We will get in touch and find out whether a tailored solution makes sense for your challenge.','form.name':'Name and company','form.email':'Email','form.message':'What do you need help with?','form.placeholder':'For example: we want to speed up goods intake and connect our warehouse with a mobile app.','form.submit':'Open email <span aria-hidden="true">→</span>','form.note':'Submitting opens your email app with a prepared message.','footer.copy':'© 2026 LuRa IT Develop. Software for real operations.','form.error':'Please add your name, a valid email and a message.'
    }
  };

  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  const closeMenu = () => { menuToggle?.classList.remove('is-open'); menuToggle?.setAttribute('aria-expanded','false'); mobileNav?.classList.remove('is-open'); };
  menuToggle?.addEventListener('click', () => { const isOpen = mobileNav.classList.toggle('is-open'); menuToggle.classList.toggle('is-open', isOpen); menuToggle.setAttribute('aria-expanded', String(isOpen)); });
  mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  const updateHeader = () => { header.classList.toggle('is-scrolled', window.scrollY > 24); document.querySelector('[data-back-to-top]')?.classList.toggle('is-visible', window.scrollY > 620); };
  window.addEventListener('scroll', updateHeader, { passive:true }); updateHeader();
  document.querySelector('[data-back-to-top]')?.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

  document.querySelectorAll('.filter-button').forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filter-button').forEach(item => item.classList.toggle('is-active', item === button));
    document.querySelectorAll('[data-category]').forEach(project => project.classList.toggle('is-hidden', filter !== 'all' && !project.dataset.category.split(' ').includes(filter)));
  }));

  function setLanguage(language) {
    const dictionary = translations[language];
    if (!dictionary) return;
    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(element => { const value = dictionary[element.dataset.i18n]; if (!value) return; if (element.hasAttribute('data-i18n-html')) element.innerHTML = value; else if (value.includes('&amp;') || value.includes('<span')) element.innerHTML = value; else element.textContent = value; });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => { const value = dictionary[element.dataset.i18nPlaceholder]; if (value) element.placeholder = value; });
    document.querySelectorAll('[data-language]').forEach(button => { const active = button.dataset.language === language; button.classList.toggle('is-active', active); button.setAttribute('aria-pressed', String(active)); });
  }
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));

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

  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold:.12 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
})();

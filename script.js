document.addEventListener('DOMContentLoaded', () => {
    // Mouse Gradient Tracking
    const mouseGradient = document.querySelector('.mouse-cursor-gradient-tracking');

    if (mouseGradient) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            mouseGradient.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        });
    }

    // Scroll Active State (Optional, good for single page apps)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('href').includes(current)) {
                li.classList.add('active');
            }
        });
    });

    // Mobile Menu Toggle (Basic implementation)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinksContainer.classList.toggle('open');
            mobileBtn.classList.toggle('open');
        });
    }

    // Cookie Banner Logic
    const cookieBanner = document.getElementById('cookie-banner');
    const cookieAcceptBtn = document.getElementById('cookie-accept');
    
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    }

    if (cookieAcceptBtn) {
        cookieAcceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieBanner.classList.remove('show');
        });
    }

    // Language Switcher
    const languageButtons = document.querySelectorAll('.lang-btn');
    const i18nElements = document.querySelectorAll('[data-i18n-key]');

    const translations = {
        cs: {
            'nav.hero': 'Úvod',
            'nav.services': 'Služby',
            'nav.portfolio': 'Portfolio',
            'nav.contact': 'Kontakt',
            'hero.badge1': '.NET Development',
            'hero.badge2': 'IoT & Cloud',
            'hero.badge3': 'Blazor & MAUI',
            'hero.title': 'Tvoříme digitální <br><span class="gradient-text">budoucnost</span>',
            'hero.description': 'Jsem seniorní .NET developer a architekt se zaměřením na cloudová a IoT řešení. Specializuji se na moderní aplikace v .NET MAUI, Blazor a Azure s reálným napojením na hardware a průmyslové systémy. "Kde je vůle, tam je cesta."',
            'hero.work': 'Moje práce',
            'hero.contact': 'Kontaktovat',
            'section.services.title': 'Co nabízím',
            'service.app.title': 'Vývoj Aplikací',
            'service.app.desc': 'Komplexní vývoj v C# a .NET pro desktop, web i mobil. Včetně cloudových a IoT řešení s důrazem na stabilitu a škálovatelnost.',
            'service.web.title': 'Web & Mobil',
            'service.web.desc': 'Responsivní webové aplikace a nativní mobilní řešení propojené přes REST API, SignalR a cloudové služby.',
            'service.web.highlight': 'Moderní řešení s technologiemi Blazor a .NET MAUI.',
            'service.hw.title': 'IT Podpora & HW',
            'service.hw.desc': 'Servis PC, IT poradenství a integrace s hardwarem. Váhy, čtečky, tiskárny a reálná průmyslová automatizace.',
            'section.portfolio.title': 'Vybrané Projekty',
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
            'hero.badge1': '.NET Development',
            'hero.badge2': 'IoT & Cloud',
            'hero.badge3': 'Blazor & MAUI',
            'hero.title': 'Building the digital <br><span class="gradient-text">future</span>',
            'hero.description': 'I am a senior .NET developer and architect focused on cloud and IoT solutions. I specialize in modern applications built with .NET MAUI, Blazor and Azure, connected to hardware and industrial systems. "Where there\'s a will, there\'s a way."',
            'hero.work': 'My work',
            'hero.contact': 'Contact',
            'section.services.title': 'What I offer',
            'service.app.title': 'Application Development',
            'service.app.desc': 'Comprehensive C# and .NET development for desktop, web and mobile. Including cloud and IoT solutions with a focus on reliability and scalability.',
            'service.web.title': 'Web & Mobile',
            'service.web.desc': 'Responsive web applications and native mobile solutions connected via REST APIs, SignalR and cloud services.',
            'service.web.highlight': 'Modern solutions with Blazor and .NET MAUI.',
            'service.hw.title': 'IT Support & Hardware',
            'service.hw.desc': 'PC support, IT consulting and hardware integration. Scales to scales, scanners, printers and industrial automation.',
            'section.portfolio.title': 'Selected Projects',
            'project.threes.desc': 'ERP-style web system for businesses that need more than Excel. A web app for managing company processes, projects and documentation.',
            'project.trello.desc': 'Chrome extension for exporting Trello boards and cards to clean Markdown. Works locally, safely and without external servers.',
            'project.expedit.desc': 'Robust touchscreen interface for warehouse operators. Connected to scales, label printers and central database for easy data entry.',
            'project.mvykup.desc': 'Mobile purchase app for buyers. Handles animal intake, issues receipts via Bluetooth printer, and syncs offline with SignalR.',
            'project.is.desc': 'Custom ERP solution for game processing. Includes statistics, invoicing, veterinary integration and warehouse management.',
            'project.prijem.desc': 'Receiving terminal UI with large controls for easy touch operation. Simple interface connected to database and scale.',
            'section.contact.title': 'Let\'s connect',
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

    const setLanguageActive = (lang) => {
        languageButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    };

    const applyTranslations = (lang) => {
        document.documentElement.lang = lang;
        i18nElements.forEach(el => {
            const key = el.dataset.i18nKey;
            const translation = translations[lang][key];
            if (!translation) return;
            if (el.dataset.i18nMode === 'html') {
                el.innerHTML = translation;
            } else {
                el.textContent = translation;
            }
        });
    };

    const setLanguage = (lang) => {
        localStorage.setItem('siteLanguage', lang);
        setLanguageActive(lang);
        applyTranslations(lang);
    };

    languageButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const chosenLang = btn.dataset.lang;
            setLanguage(chosenLang);
        });
    });

    const savedLanguage = localStorage.getItem('siteLanguage') || 'cs';
    setLanguage(savedLanguage);
});

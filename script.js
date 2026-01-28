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
});

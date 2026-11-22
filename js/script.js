document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const navbar = document.querySelector('.navbar');

    // Create and insert mobile menu toggle button dynamically if not hardcoded
    let menuToggle = document.querySelector('.mobile-menu-toggle');
    if (!menuToggle && navbar && nav) {
        menuToggle = document.createElement('button');
        menuToggle.className = 'mobile-menu-toggle';
        menuToggle.setAttribute('aria-label', 'Toggle Navigation Menu');
        menuToggle.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        navbar.appendChild(menuToggle);
    }

    // Toggle menu
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        // Close menu on link click
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    // Header shadow on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 10px 30px rgba(5, 64, 74, 0.08)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});

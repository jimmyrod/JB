const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.main-nav ul');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

const header = document.querySelector('.site-header');
if (header) {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        },
        { threshold: 0.1 }
    );

    observer.observe(document.querySelector('.hero'));
}

const form = document.querySelector('.cta-form');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('¡Gracias por sumarte! Pronto nos pondremos en contacto.');
        form.reset();
    });
}

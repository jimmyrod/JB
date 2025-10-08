(function () {
    var navToggle = document.querySelector('.nav-toggle');
    var navMenu = document.getElementById('navigation-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            var isOpen = navMenu.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 920 && navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    var header = document.querySelector('.site-header');
    var heroSection = document.querySelector('.hero');

    function updateHeaderShadow() {
        if (!header || !heroSection) {
            return;
        }

        var heroBottom = heroSection.getBoundingClientRect().bottom;
        if (heroBottom <= 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateHeaderShadow, { passive: true });
    updateHeaderShadow();

    var form = document.querySelector('.cta-form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('¡Gracias por sumarte! Pronto nos pondremos en contacto.');
            form.reset();
        });
    }

    function loadHeroPortrait(imageElement) {
        var request = new XMLHttpRequest();
        request.open('GET', 'assets/data/portrait-base64.txt', true);

        request.onreadystatechange = function () {
            if (request.readyState !== 4) {
                return;
            }

            if ((request.status >= 200 && request.status < 300) || request.status == 0) {
                var payload = request.responseText.replace(/\s+/g, '');
                if (payload) {
                    imageElement.src = 'data:image/png;base64,' + payload;
                }
            }

            request.onreadystatechange = null;
        };

        request.send(null);
    }

    var heroImage = document.querySelector('.hero-portrait img');
    if (heroImage) {
        loadHeroPortrait(heroImage);
    }

})();

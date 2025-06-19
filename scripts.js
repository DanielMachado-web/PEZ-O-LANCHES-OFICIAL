document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const botaoMenu = document.querySelector('.botao-menu');
    const menuNav = document.querySelector('nav ul');

    botaoMenu.addEventListener('click', function() {
        menuNav.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    const menuLinks = document.querySelectorAll('nav ul li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuNav.classList.remove('active');
        });
    });

    // Animação de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animação de elementos ao rolar a página
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observar elementos com classes de animação
    document.querySelectorAll('.section, .destaque-item, .hero-content, .hero-image').forEach((el) => {
        observer.observe(el);
    });
});


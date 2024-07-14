document.addEventListener('DOMContentLoaded', () => {
    const translate = document.querySelectorAll('.translate');
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    const opacityElements = document.querySelectorAll('.opacity');

    let headerHeight = header.offsetHeight;

    window.addEventListener('scroll', () => {
        let scroll = window.pageYOffset;

        translate.forEach(element => {
            let speed = element.dataset.speed;
            element.style.transform = `translateY(${scroll * speed}px)`;
        });

        opacityElements.forEach(element => {
            element.style.opacity = scroll / (headerHeight / 1.5) - 0.5;
        });

        sections.forEach(section => {
            let sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.querySelectorAll('.opacity').forEach(element => {
                    element.classList.add('show');
                });
            }
        });
    });
});

// script.js
document.querySelectorAll('.dropdown-content a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

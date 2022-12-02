document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.menu-nav').classList.toggle('mostrar');
});

document.addEventListener('DOMContentLoaded', () => {
    const elementoscarrusel = document.querySelectorAll('.carrusel');
    Map.carrusel.init(elementoscarrusel, {
        duration: 150
    });
});

ScrollReveal().reveal('.escaparate');
ScrollReveal().reveal('.na', { delay: 500 });
ScrollReveal().reveal('.NA', { delay: 500 });
ScrollReveal().reveal('.dmz', { delay: 500 });
ScrollReveal().reveal('.NueCa', { delay: 500 });
ScrollReveal().reveal('.galeria', { delay: 500 });
ScrollReveal().reveal('.horu', { delay: 500 });
ScrollReveal().reveal('.horut', { delay: 500 });
ScrollReveal().reveal('.table', { delay: 500 });
ScrollReveal().reveal('#table1', { delay: 500 });
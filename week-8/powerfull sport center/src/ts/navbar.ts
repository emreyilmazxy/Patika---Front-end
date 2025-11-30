const navbar = document.querySelector<HTMLElement>('.navbar');

window.addEventListener('scroll', (): void => {
    if (!navbar) return;

    if (window.innerWidth <= 576) {
        navbar.classList.remove('navbar--scrolled');
    }

    navbar.classList.toggle('navbar--scrolled', window.scrollY > 50);
});

//  Toggle mobile menu 
const hamburger = document.querySelector<HTMLElement>('.navbar__hamburger');
const navLinks = document.querySelector<HTMLElement>('.navbar__links');

hamburger?.addEventListener('click', () => {
    navLinks?.classList.toggle('navbar__links--active');
});
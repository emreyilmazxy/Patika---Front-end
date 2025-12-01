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
const closeIcon = document.querySelector<HTMLElement>('.close-icon');

hamburger?.addEventListener('click', () => {
    navLinks?.classList.toggle('navbar__links--active');
});

closeIcon?.addEventListener('click', () => {
    navLinks?.classList.remove('navbar__links--active');
});

// menu outside click to close
document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;

    if (!navLinks?.classList.contains('navbar__links--active')) return;

    // Eğer tıklanan yer menü veya hamburger değilse kapat
    if (!navLinks?.contains(target) && !hamburger?.contains(target)) {
        navLinks?.classList.remove('navbar__links--active');
    }
});
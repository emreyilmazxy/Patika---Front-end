const navbar = document.querySelector<HTMLElement>('.navbar');

window.addEventListener('scroll', (): void => {
    if (!navbar) return;

    navbar.classList.toggle('navbar--scrolled', window.scrollY > 50);
});

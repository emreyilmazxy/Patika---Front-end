// Navbar component placeholder
export class Navbar {
    private element: HTMLElement;

    constructor() {
        this.element = document.createElement('nav');
        this.element.id = 'navbar';
        this.element.className = 'navbar';
    }

    render(): HTMLElement {
        this.element.innerHTML = `
      <div class="navbar__brand">Prime Sport Center</div>
      <ul class="navbar__links">
        <li><a href="#hero">Hero</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#programs">Programs</a></li>
        <li><a href="#trainers">Trainers</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    `;
        return this.element;
    }
}

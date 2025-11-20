// Footer component placeholder
export class Footer {
    private element: HTMLElement;

    constructor() {
        this.element = document.createElement('footer');
        this.element.id = 'footer';
        this.element.className = 'footer';
    }

    render(): HTMLElement {
        this.element.innerHTML = `
      <p>&copy; ${new Date().getFullYear()} Prime Sport Center</p>
    `;
        return this.element;
    }
}

// Contact section component placeholder
export class Contact {
    private element: HTMLElement;

    constructor() {
        this.element = document.createElement('section');
        this.element.id = 'contact';
        this.element.className = 'contact';
    }

    render(): HTMLElement {
        this.element.innerHTML = `
      <h2>Contact Us</h2>
      <address>
        <p>Email: hello@primesportcenter.com</p>
        <p>Phone: +90 555 555 55 55</p>
      </address>
    `;
        return this.element;
    }
}

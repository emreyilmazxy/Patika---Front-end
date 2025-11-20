// About section component placeholder
export class About {
    private element: HTMLElement;

    constructor() {
        this.element = document.createElement('section');
        this.element.id = 'about';
        this.element.className = 'about';
    }

    render(): HTMLElement {
        this.element.innerHTML = `
      <div class="about__content">
        <h2>About Prime Sport Center</h2>
        <p>We combine expert coaching with premium facilities to keep members inspired.</p>
      </div>
    `;
        return this.element;
    }
}

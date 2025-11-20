// Hero section component placeholder
export class Hero {
    private element: HTMLElement;

    constructor() {
        this.element = document.createElement('section');
        this.element.id = 'hero';
        this.element.className = 'hero';
    }

    render(): HTMLElement {
        this.element.innerHTML = `
      <div class="hero__content">
        <h1>Reach Your Peak Performance</h1>
        <p>Custom training programs and community-driven motivation.</p>
        <button type="button">Join Now</button>
      </div>
    `;
        return this.element;
    }
}

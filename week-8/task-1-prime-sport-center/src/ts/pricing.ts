// Pricing section component placeholder
export class Pricing {
    private element: HTMLElement;

    constructor() {
        this.element = document.createElement('section');
        this.element.id = 'pricing';
        this.element.className = 'pricing';
    }

    render(): HTMLElement {
        this.element.innerHTML = `
      <h2>Pricing Plans</h2>
      <div class="pricing__cards">
        <article>Basic</article>
        <article>Pro</article>
        <article>Elite</article>
      </div>
    `;
        return this.element;
    }
}

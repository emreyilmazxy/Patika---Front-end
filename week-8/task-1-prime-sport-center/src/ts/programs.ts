// Programs section component placeholder
export class Programs {
    private element: HTMLElement;

    constructor() {
        this.element = document.createElement('section');
        this.element.id = 'programs';
        this.element.className = 'programs';
    }

    render(): HTMLElement {
        this.element.innerHTML = `
      <h2>Programs</h2>
      <ul class="programs__list">
        <li>Fitness</li>
        <li>Crossfit</li>
        <li>Cardio</li>
        <li>Yoga</li>
      </ul>
    `;
        return this.element;
    }
}

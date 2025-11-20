// Trainers section component placeholder
export class Trainers {
    private element: HTMLElement;

    constructor() {
        this.element = document.createElement('section');
        this.element.id = 'trainers';
        this.element.className = 'trainers';
    }

    render(): HTMLElement {
        this.element.innerHTML = `
      <h2>Expert Trainers</h2>
      <p>Meet the coaches dedicated to your progress.</p>
    `;
        return this.element;
    }
}

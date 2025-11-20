// Gallery section component placeholder
export class Gallery {
    private element: HTMLElement;

    constructor() {
        this.element = document.createElement('section');
        this.element.id = 'gallery';
        this.element.className = 'gallery';
    }

    render(): HTMLElement {
        this.element.innerHTML = `
      <h2>Gallery</h2>
      <div class="gallery__grid">
        <div class="gallery__item">Image 1</div>
        <div class="gallery__item">Image 2</div>
        <div class="gallery__item">Image 3</div>
      </div>
    `;
        return this.element;
    }
}

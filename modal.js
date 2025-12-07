class Modal {
  constructor(selector) {
    this.element = document.querySelector(selector);
    if (!this.element ) {
      throw new Error(`Элемент с ID '${selector}' не найден`);
    }

    this.element.addEventListener('click', (event) => {
      if (event.target === event.currentTarget) {
        this.close();
      }
    });
  }

  open() {
    if (this.isOpen()) return;
    this.element.classList.add('modal-showed');
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (!this.isOpen()) return;
    this.element.classList.remove('modal-showed');
    document.body.style.overflow = '';
  }

  isOpen() {
    return this.element.classList.contains('modal-showed');
  }
}

export { Modal };
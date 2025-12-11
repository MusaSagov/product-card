class Modal {
  constructor(selector = '.modal.overlay') {
    this.modal = document.querySelector(selector);
  }

  handleBackdropClick() {
    this.modal.addEventListener('click', (event) => {
      if (event.target === event.currentTarget) {
        this.close();
      }
    });
  }

  open() {
    const isModalOpen = this.isOpen();

    if (isModalOpen) {
      return;
    }

    this.modal.classList.add('modal-showed');
    document.body.style.overflow = 'hidden';
  }

  close() {
    const isModalOpen = this.isOpen();

    if (!isModalOpen) {
      return;
    }

    this.modal.classList.remove('modal-showed');
    document.body.style.overflow = '';
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }
}

class AuthModal extends Modal {
  constructor() {
    super('.modal.overlay')
  }
}

export { Modal, AuthModal};
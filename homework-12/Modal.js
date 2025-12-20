export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.#initOpen(buttonId);
    this.#initCloseButton();
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    this.#addOverlayListener();
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    this.#removeOverlayListener();
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    })
  }

  #initCloseButton() {
    const closeButton = this.modal.querySelector('#modal-close-button');
    if (closeButton) {
      closeButton.addEventListener('click', () => this.close());
    }
  }
  
  #overlayClickHandler = () => this.close();
  
  #addOverlayListener() {
    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.#overlayClickHandler);
    }
  }

  #removeOverlayListener() {
    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.#overlayClickHandler);
    }
  }
}
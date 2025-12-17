export class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
  }

  initOpen(button) {
    button.addEventListener('click', () => {
      this.open();
    })
  }
}
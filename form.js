export class FormBase {
  constructor(formId) {
    const cleanId = formId.replace('#', '');
    this.form = document.getElementById(cleanId);
    if (!this.form) {
      throw new Error(`Форма с id "${cleanId}" не найдена`);
    }
  }

  getFormData() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData.entries());
  }

  isValid() {
    const password = this.form.querySelector('input[name="password"]')?.value || '';
    const confirmPassword = this.form.querySelector('input[name="confirmPassword"]')?.value || '';
    return password === confirmPassword && password.length >= 3;
  }

  reset() {
    this.form.reset();
  }

  validateField(fieldId) {
    const field =this.form.querySelector(`#${fieldId}`);
    return field ? field.checkValidity() : true;
  }

  handleSubmit(callback) {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      callback(this.getFormData());
    });
  }
}


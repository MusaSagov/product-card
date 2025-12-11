export class FormBase {
  constructor(formId = "email-form") {
    this.form = document.getElementById(formId);
    if (formId === "email-form") {
      this.emailHandler();
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

  emailHandler() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(this.getFormData());
    });
  }
}

export class AuthForm extends FormBase {
  constructor() {
    super('auth-form')
  }
}
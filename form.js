export class FormBase {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  getFormData() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData.entries());
  }

  isValid() {
    return this.form.checkValidity();
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

export class EmailForm extends FormBase {
  constructor() {
    super('email-form');
    this.emailHandler(); 
  }
}

export class FormRegister extends FormBase {
  constructor() {
    super('register-form')
  }

  isValid() {
    const formValid = super.isValid();
    const password = this.form.querySelector('input[name="password"]')?.value || '';
    const confirmPassword = this.form.querySelector('input[name="confirmPassword"]')?.value || '';
    return formValid && (password === confirmPassword && password.length >= 3);
  }
}

export class AuthForm extends FormBase {
  constructor() {
    super('auth-form')
  }
}
import { FormBase } from "./form.js";

export class FormHandler extends FormBase {
  constructor(formId) {
    super(formId);

    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log(this.getFormData());
    });
  }
}
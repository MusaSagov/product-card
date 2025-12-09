import { FormBase } from "./form.js";

export class FormHandler extends FormBase {
  constructor(formId) {
    super(formId);

    this.handleSubmit((data) => {
      console.log(data);
    });
  }
}
import { Modal } from "./Modal.js";

const button = document.querySelector('.button');

const registrationModal = new Modal('registration-modal');

registrationModal.initOpen(button);
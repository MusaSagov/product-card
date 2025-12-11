import { AuthForm, FormBase } from './form.js';
import { AuthModal} from './modal.js';

let currentUser = {};

// Добавил логику к футеру email. 
const emailForm = new FormBase("email-form");
emailForm.emailHandler();

//Форма регистрации с логикой
document.querySelectorAll('.show-password').forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    const targetId = this.dataset.target;
    const passwordField = document.getElementById(targetId);
    if (this.checked) {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }
  });
});

const formRegister = new FormBase("register-form")
formRegister.form.addEventListener('submit', (event) => {
  event.preventDefault();
  const isFormValid = formRegister.isValid();   
  if(!isFormValid) {
    alert("регистрация отклонена");
    document.getElementById('confirmPassword').focus();
    return;
  }
  alert(' Пароли совпадают! Форма готова');

  const userData = formRegister.getFormData();
  userData.createdOn = new Date().toISOString();
  

//  Сохранение объекта в переменную.
  currentUser[userData.login] = userData;
  console.log('Пользователь сохранен:', currentUser);
  alert('Регистрация успешна!');
  formRegister.reset(); 
});

// Модальное окно
const authModal = new AuthModal();
const openBtn = document.querySelector("#openModalBtn");
const closeBtn = document.querySelector(".close");

authModal.handleBackdropClick();
openBtn.addEventListener('click', (event) => {
  authModal.open();
});

closeBtn.addEventListener('click', (event) => {
  authModal.close();
});

// Аутентификация
const authForm = new AuthForm();
authForm.form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userData = authForm.getFormData();
  
  const savedUser = currentUser[userData.login];
  console.log('Авторизация данные:', userData);
  console.log('База currentUser:', currentUser);

  if (savedUser && savedUser.password === userData.password) {
    alert("Успешный вход!");
    authModal.close();
  } else {
    alert("Неверный логин или пароль");
  }
});

// Структура и наследуемость классов.

class Tank {
  constructor(level, title, type) {
    this.level = level;
    this.title = title;
    this.type = type;
  }

  start() {
    console.log(`${this.level}, ${this.title}, ${this.type}`);
  }

}

class Warship extends Tank {
  constructor(level, title, type, shipTonnage) {
    super(level, title, type)
    this.shipTonnage = shipTonnage;
  }

  infoWarship() {
    console.log(`${this.level}, ${this.title}, ${this.type}, ${this.shipTonnage}`);
  }
}

const is7 = new Tank(10, "ИС-7", "тяжелый");
const is3 = new Tank(8, "ИС-3", "тяжелый")
is7.start();

const description = new Warship(3, "корвет", "легкий", 1000)
description.infoWarship();
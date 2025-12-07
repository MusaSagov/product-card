import { FormBase } from './form.js';
import { Modal } from './modal.js';

let currentUser = {};

// Добавил логику к футеру email. 
const emailForm = new FormBase("#email-form")
emailForm.form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(emailForm.getFormData());
})

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

const formRegister = new FormBase("#register-form")
formRegister.form.addEventListener('submit', (event) => {
  event.preventDefault();    
  if(!formRegister.isValid()) {
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
const authModal = new Modal('.modal.overlay')
const openBtn = document.querySelector("#openModalBtn");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener('click', (event) => {
  authModal.open();
});

closeBtn.addEventListener('click', (event) => {
  authModal.close();
});

// Аутентификация
const authForm = new FormBase("#auth-form");
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

 class Tanks {
    constructor(level, title, type) {
      this.level = level;
      this.title = title;
      this.type = type;
  }

  start() {
    console.log(`${this.level}, ${this.title}, ${this.type}`);
  }

}

class CountryTank extends Tanks {
  constructor(level, title, type, country) {
    super(level, title, type)
    this.country = country;
  }

  infoTanks() {
    console.log(`${this.level}, ${this.title}, ${this.type}, ${this.country}`);
  }
}

const is7 = new Tanks(10, "ИС-7", "тяжелый");
const is3 = new Tanks(8, "ИС-3", "тяжелый")
is7.start();

const description = new CountryTank(10, "ИС-7", "тяжелый", "СССР")
description.infoTanks();
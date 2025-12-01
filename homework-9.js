let currentUser = undefined;

function getFormData(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  return Object.fromEntries(formData.entries());
}

// 4. Добавил логику к футеру email. 
const emailForm = document.querySelector("#email-form")
emailForm.addEventListener('submit', (event) => {
  const data = getFormData(event);
  console.log(data);
})

// 5. Форма регистрации с логикой
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

const formRegister = document.querySelector("#register-form")
formRegister.addEventListener('submit', (event) => {
  event.preventDefault();
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirmPassword").value;
  if(password !== confirmPassword){
    alert("регистрация отклонена");
    document.getElementById('confirmPassword').focus();
    return;
  }
  alert(' Пароли совпадают! Форма готова');

  const userData = getFormData(event);
  userData.createdOn = new Date();
  console.log('Форма готова', userData);

// 6. Сохранение объекта в переменную.
  currentUser[userData.login] = userData.password;
  alert('Регистрация успешна!'); 
})

// 8.Модальное окно
const openBtn = document.querySelector("#openModalBtn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener('click', (event) => {
  modal.classList.add("modal-showed");
});

closeBtn.addEventListener('click', (event) => {
  modal.classList.remove("modal-showed");
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('modal-showed');
  }
});

//7. Аутентификация
const authForm = document.querySelector(".form-modal");
authForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const userData = getFormData(event);
  
  console.log('Авторизация данные:', userData);
  console.log('База currentUser:', currentUser);

  if (currentUser[userData.login] && currentUser[userData.login] === userData.password) {
    alert("Успешный вход!");
    modal.classList.remove("modal-showed");
  } else {
    alert("Неверный логин или пароль");
  }
});
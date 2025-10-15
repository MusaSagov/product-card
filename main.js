//Покраска всех карточек

const productCards = document.querySelectorAll(".card-container-item");
const changeColorAllCardBtn = document.querySelector("#change-all-cards-color");
const mantleColorHash = "#24C6DC";

changeColorAllCardBtn.addEventListener("click", () => {
  productCards.forEach(
    (card) => (card.style.backgroundColor = mantleColorHash)
  );
});

//Покраска первой карточки

const firstProductCard = document.querySelector(".card-container-item");
const changeColorFirstCardBtn = document.querySelector(
  "#change-first-card-color"
);
const yodaColorHash = "#FF0099";

changeColorFirstCardBtn.addEventListener("click", () => {
  firstProductCard.style.backgroundColor = yodaColorHash;
});

//Открыть google

const openGoogleBtn = document.querySelector("#open-google-page");

openGoogleBtn.addEventListener("click", openGoogle);

function openGoogle() {
  const answer = confirm("Вы действительно хотите открыть Google");

  if (answer === true) {
    window.open("http://google.com");
  } else {
    return;
  }
}

//Вывод в консоль лог при нажатии

const outputLogBtn = document.querySelector("#log-to-console");

outputLogBtn.addEventListener("click", () => outputConsoleLog("ДЗ №4"));
function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

//Вывод в консоль лог при наведение

const mainTitle = document.querySelector("#main-title-log");

mainTitle.addEventListener("mouseover", () =>
  showMessageTitle("Выбери свой продукт")
);
function showMessageTitle(message) {
  console.log(message);
}

//Переключатель цветов кнопки

const colorSwitchBtn = document.querySelector("#color-switch");

let clickCount = 0;

colorSwitchBtn.addEventListener("click", () => {
  clickCount++;
  if (clickCount === 1) {
    colorSwitchBtn.classList.add("color-switch-first");
  } else if (clickCount === 2) {
    colorSwitchBtn.classList.remove("color-switch-first");
    colorSwitchBtn.classList.add("color-switch-second");
  } else if (clickCount === 3) {
    colorSwitchBtn.classList.remove("color-switch-second");
    clickCount = 0;
  }
});

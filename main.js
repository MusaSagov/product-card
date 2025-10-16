//Покраска всех карточек

const productCards = document.querySelectorAll(".card-container-item");
const changeColorAllCardBtn = document.querySelector("#change-cards-color");
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

const outputMessageBtn = document.querySelector("#message-console");

outputMessageBtn.addEventListener("click", () => showMessage("ДЗ №4"));
function showMessage(message) {
  alert(message);
  console.log(message);
}

//Вывод в консоль лог при наведение

const productTitle = document.querySelector("#product-selection-title");

productTitle.addEventListener("mouseover", () =>
  outputConsoleLog("Выбери свой продукт")
);
function outputConsoleLog(message) {
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

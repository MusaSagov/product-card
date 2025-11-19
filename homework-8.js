// 3.Создаем и реализовываем шаблон для продуктовых карточек как в лекции.
import { productCards } from "./product.card.js";

const productCompound = document.querySelector(".card-container");
const compositionTemplate = document.querySelector(".composition-template");

productCards.forEach((productCard) => {
  const productCardClone = compositionTemplate.content.cloneNode(true);
  productCardClone.querySelector(".images").src = productCard.imageUrl;
  productCardClone.querySelector(".product-name").textContent = productCard.name;
  productCardClone.querySelector(".productCards-ingredient1").textContent = productCard.ingredient1;
  productCardClone.querySelector(".productCards-ingredient2").textContent = productCard.ingredient2;
  productCardClone.querySelector(".productCards-ingredient3").textContent = productCard.ingredient3;
  productCardClone.querySelector(".product-price-label").innerHTML = `${productCard.price}&nbsp;₽`;

  productCompound.appendChild(productCardClone);
  console.log(productCompound);
});

// 4.Оптимизация дублирования querySelector, textContent вариант - маппинг
const mapping = {
  imageUrl: ".images",
  name: ".product-name",
  ingredient1: ".productCards-ingredient1",
  ingredient2: ".productCards-ingredient2",
  ingredient3: ".productCards-ingredient3",
  price: ".product-price-label",
};

productCards.forEach((productCard) => {
  const clone = compositionTemplate.content.cloneNode(true);
  const mappingEntries = Object.entries(mapping);
  mappingEntries.forEach(([key, selector]) => {
    const element = clone.querySelector(selector);
    if (!element) return;

    if (key === "imageUrl") {
      element.src = productCard[key];
    } else {
      element.textContent = productCard[key];
    }
  });

  productCompound.appendChild(clone);
});

//5. Использование метода .reduce(), для получения строки из название продуктовых карточек рзаделенной ";"

const productCardNames = productCards.reduce((acc, productCard, index) => {
  return acc + productCard.name + (index < productCards.length - 1 ? ";" : "");
}, "");

console.log(productCardNames);

// 6.Получение массива объектов, где ключем является название продукта, а значением - его описание

const productDescriptions = productCards.reduce((acc, productCard) => {
  acc.push({
    [productCard.name]: productCard.description,
  });
  return acc;
}, []);

console.log(productDescriptions);

//7. Вывод карточек по запросу пользователя от 1 до 5

function getCardsCount() {
  let input;
  do {
    input = prompt("Сколько карточек отобразить? От 1 до 5");
    if (input === null) {
      alert("Ввод отменен");
      return 0;
    }
    input = Number(input);
    if (isNaN(input) || input < 1 || input > 5) {
      alert("Неверный ввод! Пожалуйста, введите число от 1 до 5.");
    }
  } while (isNaN(input) || input < 1 || input > 5);
  return input;
}

function displayCards(count) {
  productCompound.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const productCard = productCards[i];

    const cardClone = compositionTemplate.content.cloneNode(true);

    cardClone.querySelector(".images").src = productCard.imageUrl;
    cardClone.querySelector(".images").alt = productCard.name;
    cardClone.querySelector(".product-name").textContent = productCard.name;
    cardClone.querySelector(".productCards-ingredient1").textContent = productCard.ingredient1;
    cardClone.querySelector(".productCards-ingredient2").textContent = productCard.ingredient2;
    cardClone.querySelector(".productCards-ingredient3").textContent = productCard.ingredient3;
    cardClone.querySelector(".product-price-label").innerHTML = `${productCard.price}&nbsp;₽`;

    productCompound.appendChild(cardClone);
  }
}

window.onload = function () {
  const cardsCount = getCardsCount();
  if (cardsCount > 0) {
    displayCards(cardsCount);
  }
};

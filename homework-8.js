// 3.Создаем и реализовываем шаблон для продуктовых карточек как в лекции.
import { productCards } from "./product.card.js";

const productCompound = document.querySelector(".product-card-list");
const compositionTemplate = document.querySelector(".product-card-template");

const fillProductCard = ((productCardClone, productCard) => {
    productCardClone.querySelector(".images").src = `/images/${productCard.imageName}`;
    productCardClone.querySelector(".product-category").textContent = productCard.category;
    productCardClone.querySelector(".product-name").textContent = productCard.name;
    productCardClone.querySelector(".product-price-label").innerHTML = `${productCard.price}&nbsp;₽`;
    const ingredientsList = productCardClone.querySelector(".product-compound")
    productCard.ingredients.forEach(ingredient => {
    const li = document.createElement("li");    
    li.textContent = ingredient;
    ingredientsList.appendChild(li);
  })})

productCards.forEach((productCard) => {
  const productCardClone = compositionTemplate.content.cloneNode(true);
  fillProductCard(productCardClone, productCard);
  
  productCompound.appendChild(productCardClone);
  
});

//4. Использование метода .reduce(), для получения строки из название продуктовых карточек рзаделенной ";"
const productNamesString = productCards.reduce((acc, productCard) => {
    acc.push(productCard.name);
    return acc;
  }, [])
  .join(";");

console.log(productNamesString);

// 5.Получение массива объектов, где ключем является название продукта, а значением - его описание
const productDescriptions = productCards.reduce(
  (acc, { name, description }) => [...acc, { [name]: description }],
  []
);

console.log(productDescriptions);

//6. Вывод карточек по запросу пользователя от 1 до 5
function startAndDisplayCards() {
  let input;
  do {
    input = prompt("Сколько карточек отобразить? От 1 до 5");
    if (input === null) {
      alert("Ввод отменен");
      return;
    }
    input = Number(input);
    if (isNaN(input) || input < 1 || input > 5 || !Number.isInteger(input)) {
      alert("Неверный ввод! Пожалуйста, введите целое число от 1 до 5.");
    }
  } while (isNaN(input) || input < 1 || input > 5 || !Number.isInteger(input));
  
  displayCards(input);
}

window.onload = startAndDisplayCards;

function displayCards(count) {
  productCompound.innerHTML = "";
  productCards.slice(0, count).forEach(productCard => {
    const cardClone = compositionTemplate.content.cloneNode(true);
    fillProductCard(cardClone, productCard);
    productCompound.appendChild(cardClone);
  });
}

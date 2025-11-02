//3. Температура в городе

function displayWeather(city, temperature) {
  const message = `Сейчас в ${city} температура  — ${temperature} градусов по Цельсию`;
  console.log(message);
}
displayWeather("Москве", 18);

//4.Проверка скорости

const SPEED_OF_SOUND = 343;

function compareSpeed(speed) {
  if (speed > SPEED_OF_SOUND) {
    console.log("Сверхзвуковая скорость");
  } else if (speed <= 343) {
    console.log("Дозвуковая скорость");
  }
}
compareSpeed(367);

//5. Покупка товара

let productName = "хлеб";
let productPrice = 23;

const checkBudget = (currentBudget) =>
  currentBudget >= productPrice
    ? `${productName} приобретён. Спасибо за покупку!`
    : `Вам не хватает ${productPrice - currentBudget}$, пополните баланс`;

console.log(checkBudget(12));

//6. Функция.

function studyEvaluation(minutesPerDay) {
  if (minutesPerDay > 60) {
    return "Ученик учится больше 60 минут - отлично";
  } else if (minutesPerDay > 15 && minutesPerDay <= 60) {
    return `Ученик учится ${minutesPerDay} - хорошо`;
  } else {
    return "Плохо";
  }
}
console.log(studyEvaluation(70));
console.log(studyEvaluation(25));
console.log(studyEvaluation(10));

//7.Переменные в JS
let studentName = "Stoun";
let workingAxe = "топор";
let familyCar = "Largus";
let userEmail = "sagov82@mail.ru";

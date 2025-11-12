//3.Создал объект с персональными данными

const userProfile = {
  firstName: "Муса",
  lastName: "Сагов",
  email: "sagov82@mail.ru",
  profession: "Разработчик",
  position: "Frontend",
  age: 43,
  country: "Россия",
  city: "Сунжа",
  relationshipStatus: "В браке",
};

//4. Создание объекта и добавление свойст с другого объекта
const carInfo = {
  make: "Toyota",
  model: "Camry",
  manufactureYear: 2018,
  color: "белый",
  transmissionType: "Автоматическая",
};

carInfo.owner = userProfile;

console.log(carInfo);

//5.Проверка объекте на наличие свойства

function checkMaxSpeed(car) {
  if (!car.hasOwnProperty("maxSpeed")) {
    carInfo.maxSpeed = 180;
  }
}
checkMaxSpeed(carInfo);
console.log(carInfo);

//6. Выводим свойство и значение объекта
function showPropertyValue(obj, propName) {
  console.log(`${propName}, ${obj[propName]}`);
}

showPropertyValue(userProfile, "firstName");
showPropertyValue(userProfile, "country");

//7.Массив
const productNames = ["фрукты", "конфеты", "овощи", "хлеб", "молоко"];

//8. Массив из объектов. Добавление объекта в массив
const russianClassicBooks = [
  {
    title: "Война и мир",
    author: "Лев Толстой",
    year: 1869,
    coverColor: "синий",
    genre: "Роман",
  },
  {
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    year: 1866,
    coverColor: "красный",
    genre: "Психологический роман",
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    coverColor: "чёрный",
    genre: "Мистика",
  },
];

russianClassicBooks.push({
  title: "Отцы и дети",
  author: "Иван Тургенев",
  year: 1862,
  coverColor: "зелёный",
  genre: "Роман",
});

console.log(russianClassicBooks);

//9. Конкатенация массивов
const marvelBooks = [
  {
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    year: 1997,
    coverColor: "фиолетовый",
    genre: "Фэнтези",
    universe: "Гарри Поттер",
  },
  {
    title: "Гарри Поттер и Тайная комната",
    author: "Дж. К. Роулинг",
    year: 1998,
    coverColor: "зелёный",
    genre: "Фэнтези",
    universe: "Гарри Поттер",
  },
  {
    title: "Железный человек: Под маской",
    author: "Тим Леббон",
    year: 2010,
    coverColor: "красный",
    genre: "Супергеройский",
    universe: "Марвел",
  },
  {
    title: "Человек-паук: Вдали от дома",
    author: "Ник Спаркс",
    year: 2019,
    coverColor: "синий",
    genre: "Супергеройский",
    universe: "Марвел",
  },
];

console.log(marvelBooks);

const allBooksCollection = [...marvelBooks, ...russianClassicBooks];

console.log(allBooksCollection);

//10. Использование метода forEach в массивах

function markRarity(booksArray) {
  booksArray.forEach((book, index) => {
    book.isRare = book.year < 2000;
  });
}

markRarity(allBooksCollection);

console.log("Обновлённый массив книг:", allBooksCollection);



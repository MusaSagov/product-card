import { userComments } from "./comments.js";

// 2.Фильтрация массива по заданному условию
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res = numbers.filter((num) => num >= 5);
console.log(res);

// 3.Проверка массива на наличие определенной сущности

const fruits = [
  "Яблоко",
  "Банан",
  "Апельсин",
  "Клубника",
  "Манго",
  "Киви",
  "Груша",
];
const longFruits = fruits.filter((fruit) => fruit.length > 6);
console.log(fruits.includes("Яблоко"));
console.log(fruits.includes("Слива"));
console.log(fruits.includes("Яблоко", 1));
console.log(longFruits);

// 4. Реверс двух массивов с помощью функции
function reverseArray(array) {
  return array.reverse();
}

reverseArray(numbers);
reverseArray(fruits);

console.log(numbers);
console.log(fruits);

// 7. Вывод в консоль объектов
const filteredComments = userComments.filter((comment) =>
  comment.email.includes(".com")
);
console.log(filteredComments);

// 8. Перебор массивы с определенным условием
const userCommentsPostId = userComments.map((userComment, id) => ({
  ...userComment,
  postId: userComment.id <= 5 ? 2 : 1,
}));

console.log(userCommentsPostId);

// 9. Деструктуризация и перебор массива
const userCommentsSimplified = userComments.map((comment) => {
  return { id: comment.id, name: comment.name };
});

console.log(userCommentsSimplified);

// 10. Добавление новых свойств в объект массива и его проверка
const updatedUserComments = userComments.map((obj) => {
  const isInvalid = obj.body.length > 180;
  return { ...obj, isInvalid };
});
console.log(updatedUserComments);

// 11.  Вывод определенного элемента с помощью метода reduce
const userEmails = userComments.reduce((result, user) => {
  result.push(user.email);
  return result;
}, []);
console.log(userEmails);

const emailIsList = userComments.map((user) => user.email);

console.log(emailIsList);

// 12. Преобразование массива в строку(toString()) и добавление разделителя(join())

const emailAddresses = emailIsList.toString();
const emailsString = emailIsList.join("/-/");

console.log(emailAddresses);
console.log(emailsString);

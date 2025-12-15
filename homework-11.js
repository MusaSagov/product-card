import { Cafe, Coffee } from './cafe-drinks.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Приложение загружено');
   
  const cafe = new Cafe('Stolicha', 'Kislovodsk');
  const cappuccino = new Coffee('Капучино', 'Большой', 5.5, 'Горячий', 'Арабика', 'Овсяное');

  cafe.orderDrink(cappuccino, 'Готов');
});
import { Cafe } from './cafeDrinks/Cafe.js';
import { Coffee } from './cafeDrinks/Coffee.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Приложение загружено');
   
  const cafe = new Cafe('Stolicha', 'Kislovodsk');
  const cappuccino = new Coffee('Капучино', 'Большой', 5.5, 'Горячий', 'Арабика', 'Овсяное');

  cafe.orderDrink(cappuccino);
  console.log(cappuccino.presentDrink());
});
import { Drink } from './drink.js';

export class Coffee extends Drink {
  constructor(name, size, price, temperature, beansType, milkType) {
    super(name, size, price, temperature);
    this.beansType = beansType;
    this.milkType = milkType;
  }
  
  getBrewingProcess() {
    return `Помол зерен ${this.beansType}, нагрев воды 94-96°C, пропорции кофе, вода, настаивание 3 мин, добавление ${this.milkType} молока`;
  }
}
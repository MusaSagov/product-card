import { Drink } from './drink.js';

export class Lemonade extends Drink {
  constructor(name, size, price, temperature, flavor) {
    super(name, size, price, temperature);
    this.flavor = flavor;
  }

  getBrewingProcess() {
    return `Смешиваем лимонад со вкусом ${this.flavor}`;
  }
}

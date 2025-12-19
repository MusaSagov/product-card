import { Drink } from './Drink.js';

export class Tea extends Drink {
  constructor(name, size, price, temperature, teaType) {
    super(name, size, price, temperature);
    this.teaType = teaType;
  }

  getBrewingProcess() {
    return `Завариваем чай ${this.teaType}, нагрев воды 95-96°C, пропорции 1 ложка чая чайная на стакан воды`;
  }
}
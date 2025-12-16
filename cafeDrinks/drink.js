export class Drink {
  #temperature;
  constructor(name, size, price, temperature) {
    if (new.target === Drink) {
      throw new Error('Drink является абстрактным и не может иметь экземпляров');
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getDrinkInfo() {
    return `${this.name}, ${this.size}, ${this.price}, ${this.getTemperature()}`;
  }

  getTemperature() {
    return this.#temperature;
  }

  #prepareDrink() {
  }

  presentDrink() {
    const preparation = this.#prepareDrink()
    console.log(`Напиток ${this.name} подан при t: ${this.getTemperature()}`);
    return `${preparation} | ${this.getDrinkInfo()}`;
  }
}







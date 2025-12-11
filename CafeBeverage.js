class Drink {
  #temperature;
  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#setTemperature(temperature);
  }

  presentDrink() {
    const preparation = this.#prepareDrink();
    return `${preparation} | ${this.name} ${this.size} - $${this.price}`;
  };

  #prepareDrink() {
   
  }

  getTemperature() {
    return this.#temperature;
  }

  #setTemperature() {
    
  }

  getDrinkInfo() {
    return `${this.presentDrink()} (${this.getTemperature()})`;
  }
}

class Coffee extends Drink {
  constructor(name, size, price, temperature, beansType, milkType) {
    super(name, size, price, temperature);
    this.beansType = beansType;
    this.milkType = milkType;
  }

 

}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location
  }

  getCafeInfo() {

  }

  orderDrink() {

  }
}
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
    return `${this.presentDrink()} (${this.getTemperature()})`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(newTemp) {
    this.#setTemperature(newTemp);
  }

  #setTemperature(temp) {
    this.#temperature = temp;
  }

  getPreparation() {
    return this.#prepareDrink();
  }

  #prepareDrink() {
    return 'Базовая заготовка';
  }

  presentDrink() {
    const preparation = this.getPreparation();
    return `${preparation} | ${this.name} ${this.size} - $${this.price}`;
  }
}

export class Coffee extends Drink {
  constructor(name, size, price, temperature, beansType, milkType) {
    super(name, size, price, temperature);
    this.beansType = beansType;
    this.milkType = milkType;
  }
  
  #prepareDrink() {
    return `Молим зёрна ${this.beansType}, нагреваем ${this.milkType} молоко`; 
  }
}

export class Tea extends Drink {
  constructor(name, size, price, temperature, teaType) {
    super(name, size, price, temperature);
    this.teaType = teaType;
  }

  #prepareDrink() {
    return `Завариваем чай ${this.teaType}`;
  }
}

export class Lemonade extends Drink {
  constructor(name, size, price, temperature, flavor) {
    super(name, size, price, temperature);
    this.flavor = flavor;
  }

  #prepareDrink() {
    return `Смешиваем лимонад со вкусом ${this.flavor}`;
  }
}

export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.menu = [];
  }

  addToMenu(drink) {
    this.menu.push(drink)
  }

  getCafeInfo() {
  return `${this.name} в ${this.location}`;
  }

  orderDrink(drink, servingTemp = 'Готов к подаче') {
    console.log(`Готовим в ${this.name}...`);

    drink.setTemperature(servingTemp);

    const serving = drink.presentDrink();
    const info = drink.getDrinkInfo();

    console.log(serving);
    console.log(info);

    return drink;
  }
}

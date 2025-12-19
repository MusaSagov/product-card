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
  return `Название: ${this.name} город: ${this.location}`;
  }

  orderDrink(drink) {
    console.log(`Готовим в кафе-${this.name} в городе ${this.location}`);
  }
}


class Person {
  #name;
    constructor(name, age, hairColor, height, weight, eyesColor) {
    this.#name = name;
    this.age = age;
    this.hairColor = hairColor;
    this.height = height;
    this.weight = weight;
    this.eyesColor = eyesColor;
  }

  showInfo(property) {
    console.log(this.#name, this.age, this.hairColor, this.height, this.weight, this.eyesColor, property);
  }

  getName() {
    return this.#name;
  }

  getAge() {
    return this.age;
  }

  editName(newName) {
    this.#name = newName;
  }
}

class Man extends Person {
  constructor(name, age, hairColor, height, weight, eyesColor, beardColor) {
    super(name, age, hairColor, height, weight, eyesColor);
    this.beardColor = beardColor;
  }

  getBeardColor() {
    console.log(this.name);
    return this.beardColor;
  }

  showInfo() {
    super.showInfo(this.beardColor);
  }
}

class Woman extends Person {
  constructor(name, age, hairColor, height, weight, eyesColor, nailsColor) {
    super(name, age, hairColor, height, weight, eyesColor);
    this.nailsColor = nailsColor;
  }

  getNailsColor() {
    return this.nailsColor;
  }
}

const man = new Man('musa', 43, 172, 85, 'black', 'green', 'black')
man.showInfo()

const woman = new Woman('Olesya', 22, 173, 52, 'black', 'green', 'black')
console.log(woman.getNailsColor());

man.editName('Mustang');
console.log(man.getName());
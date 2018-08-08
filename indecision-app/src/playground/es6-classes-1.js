
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi, I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their Major is ${this.major}.`
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let gretting = super.getGreeting();

    if(this.homeLocation) {
      gretting += ` I'm visiting from ${this.homeLocation}`;
    }

    return gretting;
  }
}

const me = new Traveler('Vinay pandya', 26, 'Ahemdabad');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());


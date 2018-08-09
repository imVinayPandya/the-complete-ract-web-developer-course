
class OldSyntax {
  constructor() {
    this.name = "vinay";
    this.getGreeting = this.getGreeting.bind(this); // this is the solution for proble
  }
  getGreeting() {
    return `Hi, My name is ${this.name}`;
  }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting; // this will change the scope of the this.name variable
console.log(getGreeting());

// ----------------

class NewSyntax {
  name = "shivam";
  getGreeting = () => {
    return `Hi, My name is ${this.name}`;
  }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());
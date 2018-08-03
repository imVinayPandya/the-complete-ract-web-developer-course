var nameVar = "Vinay";
var nameVar = 'Shivam';
console.log('nameVar', nameVar);

let nameLet = "vinay";
nameLet = 'shovam';
console.log('nameLet', nameLet);

const nameConst = 'vinay';
console.log('nameConst', nameConst);

// Block scope

const fullName = 'vinay pandya';
let firstName;

if(fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
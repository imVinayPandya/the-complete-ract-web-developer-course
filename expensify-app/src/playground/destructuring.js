//
// Distructing function parameters
//
// const add = ({a, b}, c) => {
//   return a + b + c;
// };
// console.log(add({ a: 10, b: 3 }, 100));

//
// Object destructing
//

// const person = {
//   name: 'vinay pandya',
//   age: '26',
//   location: {
//     city: 'ahmedababd',
//     temp: 35
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temprature } = person.location;
// if (city && temprature) {
//   console.log(`It's ${city} in ${temprature}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

//
// Array destructing
//

// const address = ['F-2 saundarya appartment', 'Ahmedabad', 'Gujarat', '360081'];
// const [street, city, state, zip] = address;
// const [street, city, state] = address;
// const [, city, state] = address;
// const [, city, state = 'Mumbai'] = address;
// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , medium] = item;
console.log(`A medium ${coffee} costs ${medium}`);
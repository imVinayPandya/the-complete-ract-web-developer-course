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

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);
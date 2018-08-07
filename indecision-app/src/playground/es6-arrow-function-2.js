// arguments object - no longer bound with arrow functions

// const add = function (a, b) {
//   console.log(arguments); // this will work
//   return a + b;
// }
// console.log(add(30, 40, 31));

const add = (a, b) => {
  // console.log(arguments); // ReferenceError: arguments is not defined
  return a + b;
}

console.log(add(30, 40, 31));

// this keyword = no longer found

// const user = {
//   name: "Vinay",
//   cities: ["Surat", "Delhi", "Jaladhar", "Ahmedabad"],
//   printPlacedLive: function () {
//     console.log(this.name);
//     console.log(this.cities);

//     this.cities.forEach(function(city) {
//       console.log(this.name, " is lived in ", city); // this.name won't work here
//     });
//   }
// };

// user.printPlacedLive();

const user = {
  name: "Vinay",
  cities: ["Surat", "Delhi", "Jaladhar", "Ahmedabad"],
  //////////////////////////////////////////
  // 1st problem
  //////////////////////////////////////////
  // printPlacedLive: function () {
  //   console.log(this.name);
  //   console.log(this.cities);
  //   this.cities.forEach(function (city) {
  //     console.log(this.name, " has lived in ", city); // this.name won't work here
  //   });
  // }

  // printPlacedLive: function () {
  //   console.log(this.name);
  //   console.log(this.cities);
  //   this.cities.forEach((city) => {
  //     console.log(this.name, " has lived in ", city); // this.name will work here
  //   });
  // }


  //////////////////////////////////////////
  // 2nd problem
  //////////////////////////////////////////
  // printPlacedLive:  () => {
  //   console.log(this.name); // this.name won't work
  //   console.log(this.cities);
  //   this.cities.forEach((city) => {
  //     console.log(this.name, " has lived in ", city);
  //   });
  // }

  // printPlacedLive: function () {
  //   console.log(this.name);// this.name will work
  //   console.log(this.cities);

  //   this.cities.forEach((city) => { 
  //     console.log(this.name, " has lived in ", city);
  //   });
  // }

  //////////// ES6 way to solve 2nd problem
  // printPlacedLive() {
  //   return this.cities.map((city) => `${this.name} has lived in ${city}`);
  // }
};

// console.log(user.printPlacedLive());

// challenge

const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
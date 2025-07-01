// //object
// //objects let us define key-value pairs - called properties of object

// // const jonas = {
// //  firstName: 'Jonas',
// //  lastName: 'Schmedtmann',
// //  age: 2037 - 1991,
// //  job: 'teacher',
// //  friends: ['Michael', 'Peter', 'Steven'],
// // };

// // //object literal syntax
// // Give each piece of data a name (key or property name)
// // Store unstructured and related data
// // Access data by its name rather than position

// // Unlike arrays, the order of properties in objects doesn't matter when retrieving data.
// // that's why we use const Keyword to define object , to get in exact order

// //-------------------------------------------------------------------
// //Dot vs Bracket Notation

// //Dot Notation:
// const jonas = {
//  firstName: 'Jonas',
//  lastName: 'Schmedtmann',
//  age: 2037 - 1991,
//  job: 'teacher',
//  friends: ['Michael', 'Peter', 'Steven'],
// };
// // console.log(jonas.lastName); // Schmedtmann

// // //Bracket Notation:
// // console.log(jonas['lastName']); // 'Schmedtmann'

// Allows expressions or variables inside the brackets

// //The main difference is that bracket notation allows us to use expressions:

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]); // 'Jonas'
// console.log(jonas['last' + nameKey]); // 'Schmedtmann'

// //'first' + 'Name' becomes 'firstName', so it accesses jonas.firstName

// // This would NOT work with dot notation:
// // console.log(jonas.'last' + nameKey); // Error


// //Bracket notation is useful when we don't know which property to access until runtime

// const interestedIn = prompt('What do you want to know about Jonas?');
// if (jonas[interestedIn]) {
//  console.log(jonas[interestedIn]);
// } else {
//  console.log(
//  'Wrong request! Choose between firstName, lastName, age, job and friends.',
//  );
// }

// //adding new properties to objects
// jonas.location = 'Anantpur';
// jonas['twitter'] = '@jonasvillager';
// console.log(jonas);

//--------------------------------------------------
//Object methods

//Functions attached to objects are called methods.

// Since functions are just values in JavaScript, we can add them as properties to objects

// const jonas = {
//  firstName: 'Jonas',
//  lastName: 'Schmedtmann',
//  birthYear: 1991,
//  job: 'teacher',
//  friends: ['Michael', 'Peter', 'Steven'],
//  hasDriversLicense: true,

//  calcAge: function () {  // Method (function as property)
//  this.age = 2037 - this.birthYear;  // 'this' refers to the current object (jonas)
//  return this.age;
//  },

//  getSummary: function () {
//  return `${this.firstName} ${this.lastName} is a ${this.calcAge()}-year old ${this.job}. He has ${this.friends.length} friends and ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
//  },
// };


// console.log(jonas.calcAge()); // 46
// console.log(jonas.age); // 46

// console.log(jonas.getSummary());

/*
*In object methods, the this keyword refers to the object calling the method. This allows methods to
access and manipulate the object's other properties.

*The calcAge method not only returns the age but also creates a new age property on the object,
saving us from recalculating it every time.

*when jonas.calAge() methods called
this.age = 2037 - this.birthYear; , this line creates a age propery inside jonas object.
*/
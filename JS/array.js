// //Array-Arrays allow us to store multiple related values in a single variable

'use strict'

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// // Alternative syntax (less common)
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]); // Michael
// console.log(friends[2]); // Peter

// console.log(friends.length); // 3

// console.log(friends[friends.length - 1]);

// friends[1] = 'Jay'; // Replace 'Steven' with 'Jay'
// console.log(friends);

//Arrays can hold values of different types
// const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher',friends];
// console.log(jonas);

//-------------------------------------------
//arrays with functions

// const calcAge = function (birthYear) {
//  return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];
// const ages = [
//  calcAge(years[0]),
//  calcAge(years[1]),
//  calcAge(years[years.length - 1]),
// ];
// console.log(ages); // [47, 70, 19]

//Array Methods

// Add to end
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay');
console.log(friends);

// Add to beginning
friends.unshift('John');
console.log(friends);

// Remove from end
const popped = friends.pop();
console.log(friends); 
console.log(popped);

// Remove from beginning
const shifted = friends.shift();
console.log(friends); 
console.log(shifted);

/*---------------------------------------------------------------------------- */
//Finding elements

console.log(friends.indexOf('Steven')); // 1
console.log(friends.indexOf('Bob')); // -1 (not found)

// ES6 method - returns boolean
console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false

//The includes method is useful for conditionals:
if (friends.includes('Peter')) {
 console.log('You have a friend called Peter!');
}
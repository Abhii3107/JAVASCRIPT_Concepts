'use strict'
// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriverLicense = true; // Typo! Missing 's'
// if (hasDriversLicense) console.log('I can drive 😃 ');

//op in console-functions.js:4 Uncaught ReferenceError: hasDriverLicense is not defined

// const interface=hello; // reserved word cannot be assigned(error given by console)

//---------------------------------------------------------
//function

// function logger() {
//  console.log('My name is Jonas!');
// }
// // Callinginvoking the function
// logger();

//--------------------------------------
// //Function parameters

// function fruitProcessor(apples, oranges) {
//  console.log(apples, oranges);
//  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//  return juice;
// }
// // Using the function with arguments 5 and 0
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// // Reusing the function with different inputs
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//------------------------------------------------
//Hoisting

// function declarations- it can be called before they defined in the code
// greet(); //op-hello
// function greet(){
//     console.log("hello");
// }

//Function expression- Assign function into variable
//function expression not hoisted

// greet(); -//error
// const greet= function(){
//     console.log("hii");
// };

//-----------------
//Arrow Functions

// One parameter: parentheses can be omitted

name => console.log(name);

//Multiple Parameters-Use parentheses
(a, b) => a + b;


//Multiple Lines of Code - Use curly braces and explicit return
(a, b) => {
  let sum = a + b;
  return sum;
};

//No Own this Binding
// Arrow functions inherit this from their surrounding scope
// const obj = {
//   name: "Abhay",
//   greet: () => {
//     console.log(this.name); // undefined
//   }
// };

//----------------------------------------------

//Functions Calling Other Functions

// Function to cut fruit into pieces
// const cutPieces = function (fruit) {
//  return fruit * 4;
// };
// // Function that uses the cutPieces function
// const fruitProcessor = function (apples, oranges) {
//  const applePieces = cutPieces(apples);
//  const orangePieces = cutPieces(oranges);
//  const juice = `Juice with ${applePieces} pieces of apple and
// ${orangePieces} pieces of orange.`;
//  return juice;
// };
// console.log(fruitProcessor(2, 3));
// follows the DRY principle -fruitProcessor function calls the cutPieces function twice
// follows the DRY principle - if we later need to change how fruits are cut (e.g., cut into 3 pieces instead
// of 4), we only need to change it in one place.

//---------------------------------------------
//Reviewing Functions
// const calcAge = function (birthYear) {
//  return 2037 - birthYear;
// };
// const yearsUntilRetirement = function (birthYear, firstName) {
//  const age = calcAge(birthYear);
//  const retirement = 65 - age;
//  if (retirement >= 0) {
//  return `${firstName} retires in ${retirement} years!`;
//  } else {
//  return `${firstName} is already retired 🎉 `;
//  }
// };
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1969, 'Mark'));

// Functions with the same parameter names don't interfere with each other
// The return statement immediately exits the function - any code after it won't run
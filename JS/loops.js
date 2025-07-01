//Loops 

/*
steps:
(1)intialization
(2)check condition- if matched - then execute body and (3)update and then check condition.....

if condition fails, then exits a loop
*/

// for (let rep = 1; rep <= 10; rep++) {
//  console.log(`Lifting weights repetition ${rep}  `);
// }

//----------------------

// const jonasArray = [
//  'Jonas',
//  'Schmedtmann',
//  2037 - 1991,
//  'teacher',
//  ['Michael', 'Peter', 'Steven'],
// ];

// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//  console.log(jonasArray[i], typeof jonasArray[i]);
//  // Filling a new array
//  types.push(typeof jonasArray[i]);
// }

// console.log(types); //(5) ['string', 'string', 'number', 'string', 'object']

//---------------------------------------
//loops to transform one array into another

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//  ages.push(2037 - years[i]);
// }
// console.log(ages);

//-----------------------------------------
//continue and break

// /The continue statement skips the current iteration and continues with the next one

// console.log('----- ONLY STRINGS -----');
// for (let i = 0; i < jonasArray.length; i++) {
//  if (typeof jonasArray[i] !== 'string') continue;
//  console.log(jonasArray[i]);
// }


//break statement completely terminates the loop

// console.log('----- BREAK WITH NUMBER -----');
// for (let i = 0; i < jonasArray.length; i++) {
//  if (typeof jonasArray[i] === 'number') break;
//  console.log(jonasArray[i]);
// }

//---------------------------
//Nested Loops

// for (let exercise = 1; exercise <= 3; exercise++) {
//  console.log(`----- Starting exercise ${exercise} ------`);
//  for (let rep = 1; rep <= 5; rep++) {
//  console.log(`Exercise ${exercise}: Lifting weights repetition
// ${rep}  `);
//  }
// }

//----------------------
// //While Loop - jab tk

// let rep = 1;
// while (rep <= 10) {
//  console.log(`Lifting weights repetition ${rep}  `);
//  rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//  console.log(`You rolled a ${dice}`);
//  dice = Math.trunc(Math.random() * 6) + 1;
// }


/*
Key differences between for and while loops:

1.Use for when you know the exact number of iterations

2.Use while when you don't know how many iterations will be needed

3.The while loop is more flexible but requires manual setup of the counter (if needed)

*/
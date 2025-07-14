// const colors = ["orange", "blue", "Red"];

// for (const copycolor of colors) {
//   console.log(copycolor);
// }
// /* Output
// orange
// blue
// Red
// */

// const IronMan = {
//   name: "Tony stark",
//   age: 45,
//   friends: ["Steve", "peter", "Rhody", "Banner"],
// };

// for (const friend of IronMan.friends) {
//   if (friend === "peter") continue; // skip peter
//   console.log(friend);
// }

//----------------------------------------------
//.entries()
/*
🔸 Used with:
Arrays
Objects (via Object.entries())
*/

let fruits = ["apple", "banana", "cherry"];
let iterator = fruits.entries();
console.log(iterator); //Array iterator {}

for (let [index, value] of iterator) {
  console.log(index, value);
}

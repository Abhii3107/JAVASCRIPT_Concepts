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
//   friends: ["Steve", "peter", "Rhody", "Banner"],           Arrays do have an .entries() method built-in.
// };

// // for (const friend of IronMan.friends) {
// //   if (friend === "peter") continue; // skip peter
// //   console.log(friend);
// // }

// for (const [index, name] of IronMan.friends.entries()) {
//   console.log("Number of tony friends", `${index} and ${name}`);
// }

//----------------------------------------------
//.entries()
/*
🔸 Used with:
Arrays
Objects (via Object.entries())
*/

// let fruits = ["apple", "banana", "cherry"];
// let iterator = fruits.entries();
// console.log(iterator); //Array iterator {}

// for (let [index, value] of iterator) {
//   console.log(index, value);
// }

let person = {
  name: "Abhay",
  age: 23,
  address: { city: "Mohania", PinCode: 821109 },
}; //Plain JavaScript objects do NOT have a .entries() method.

for (const [key, value] of Object.entries(person)) {
  console.log(`At key '${key}' value is ${value}`);
}

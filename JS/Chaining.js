/*Optional chaining - it helps you safely access nested properties ,methods , or array-items without crashing your code
if something is null or undefined*/

//Rule - if the thing before " ?."  is null or undefined . Javascript will stop and return undefined , instead of throwing error.

const player = {
  name: "Roman Reigns",
  profession: "Wresler",
  address: {
    city: "Texas 3211",
    country: "USA",
  },
};

// console.log(player.address.city);

// console.log(player.address.contact.pincode); // throws a error

console.log(player.contact?.city); // it says Undefined- not throw a error

//Looping with optional chaining

// // primitive- call by value (direct value is passed)

// //string,number,boolean , undefined, null , symbol  , int

// let a = 10;

// let b = a;
// b = b + 20;

// console.log(b); // 30

//Non-primitive- call by reference - address is passes
//object , Array
// let obj1 = { name: "Abhay" };

// let obj2 = obj1;
// obj2.name = "Shivam";
// console.log(obj2);

// console.log(obj1); // name- shivam

/*-------------------------------------------------- */

/*Shallow Copy vs Deep Copy  */

//shallow copy - Only top level properties are copies , nested objects and arrays is still referenced

// let obj1 = {
//   name: "Abhay singh",
//   address: {
//     city: "Mohania",
//     pincode: 821109,
//   },
// };

// let obj2 = Object.assign({}, obj1); //obect.assign(empty obj arr,to be copied variable)
// obj2.name = "Ankita";
// console.log(obj2); //name:Ankita
// console.log(obj1);// name:Abhay

//--
// let obj1 = {
//   name: "Abhay singh",
//   address: {
//     city: "Mohania",
//     pincode: 821109,
//   },
// };

// let obj2 = { ...obj1 };
// obj2.address.city = "Pune";

// console.log(obj1); // changed city will be pune (so nested object do not get copied)
//-----------------------------------

//Deep Copy - in this nested elements also copied ,
//limitation - functiona and date are not.

// let obj1 = {
//   name: "Abhay singh",
//   address: {
//     city: "Mohania",
//     pincode: 821109,
//   },
//   greet: function () {
//     console.log("hii");
//   },
// };

// let obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.address.city = "pune";
// obj2.address.pincode = 801003;
// // console.log(obj1); // same

// console.log(obj2); // function will be not there

//Unforuntently there is no any method in js - to resolve this
//unless we used forloop for each key - lengthy process
//lodash_ npm package and cdn link copy ( let obj2 = ___.cloneDeep(obj));

/*------------------------------------------------------------------------------ */
// by forloop

// Original object with nested object and a function
let obj1 = {
  name: "Abhay Singh",
  address: {
    city: "Mohania",
    pincode: 821109,
  },
  greet: function () {
    console.log("Hi");
  },
  dob: new Date("2002-03-03"),
};

// // Deep copy function for objects
// function deepCopyObject(obj) {
//   if (obj === null || typeof obj !== "object") return obj;

//   if (obj instanceof Date) return new Date(obj);

//   let copied = {};
//   for (let key in obj) {
//     copied[key] = deepCopyObject(obj[key]);
//   }

//   return copied;
// }

// // Use deep copy
// let obj2 = deepCopyObject(obj1);
// obj2.address.city = "Pune";
// obj2.dob.setFullYear(2025);

// console.log("Original:", obj1);
// console.log("Copied:", obj2);

//--------------------------------------------------------------

// npm install lodash

// import cloneDeep from "lodash/cloneDeep";

// const obj2 = cloneDeep(obj1);
// //Or via CDN:

// <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
// <script>
//   const obj2 = _.cloneDeep(obj1);
// </script>

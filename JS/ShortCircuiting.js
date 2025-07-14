//falsy- false, 0, "", null , undefined , Nan
// except these everything is true

/* OR operator - Any one is truth */

//return the first truth value
//if are falsy then return a last one

// console.log("" || "Abhay" || 0); //Abhay

// console.log("" || 445); //445 - return first truth value

// console.log(0 || NaN); //nan - both are false return last one

//-------------------------------------------------------

/* And - everything must be true */

//return the first falsy value
// if all  true then last iine is returned

// console.log("Abhay" && 3107); //3107
// console.log(0 && Nan); // 0 - first falsy no

// console.log("Hello" && 123 && [] && true); // true

//-----------------------
/* 3. Nullish (??) - coalesing operator*/
//Return the right value only if the left one is null or undefined.
// It ignores other falsy values like "", 0, false, or NaN.

// let count = null;

// console.log(count ?? 10); // 10

// let no = 0;
// console.log(no ?? 10); //0

// console.log("" ?? 0);
//"" is an empty string, which is falsy, but not null or undefined.
// Since it's not null or undefined, ?? returns the left-hand value.

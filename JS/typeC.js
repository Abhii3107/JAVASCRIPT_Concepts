//type conversion (Explicity) - one data to  another

const inputYear = "1992";
console.log(Number(inputYear)+18); // 2020 string to Num

console.log(String(23)); // 23- string

//Type corecion - Automatic
//+ operator - everything becomes a string becomes a string
console.log("I am" + 23 + "years old"); //string

//- ,> , <, * - tringer Number coercision
//strings becomes a number

console.log("23" -"10" - 3); //10 
console.log('23'*'2');
console.log("23" > "18"); // true
 
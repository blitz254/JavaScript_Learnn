
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// Avoid this type of comparison 
// console.log("2" > 1);        // auto type conversion hunxa
// console.log("02" > 1);

console.log(null > 0);   //false
console.log(null == 0);  //false           // converts it to number daya type, but treats null as 0
console.log(null >= 0);  //true

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// strict comparision is done by ===, as it checks data type too

console.log("2" === 2);
// learn about deep copy and shallow copy
// js arrays create shallow copies
// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)    // inserts at front, but operational heavy as all the elements need to be shifted.
// myArr.shift()       // removes element from front

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()    // binds and convert to string  typeof--> string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)   // returns [ ) without manipulating the string

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)   // returns [] but by manipulating the string, it takes out [,] from the string
console.log("C ", myArr);
console.log(myn2);
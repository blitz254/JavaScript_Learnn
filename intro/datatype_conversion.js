let score = 33


    //let score = "33abc"
    // let score = "null"
    // let score = undefined
    // let score = true

    // we dont know the variable value when we are working in backend. so we need type conversion
    // const {score} =req.body

    // data type check garne 2 ota method hunxa. jun tala xa
    console.log(typeof score);
    console.log(typeof(score));

    let valueInNumber = Number(score)
    console.log(typeof(valueInNumber));  // but it will change its data type to number
    console.log(valueInNumber)    //NaN => not a number it will come for data type other than number true-->1 and false-> 0

    //let score2= true
    let score2= 1 // let score2= "bin" --. true if score2=""--> false
    let bool= Boolean(score2) // it returns true or false not 1 or 0
    // console.log(bool)
    
    let someNumber = 33
   // anything to string
let stringNumber = String(someNumber)
// console.log(typeof(stringNumber))
// console.log(stringNumber); 

/* operations */
let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "hello"
let str2 = " binashak"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let Counter = 100
++Counter;
console.log(Counter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
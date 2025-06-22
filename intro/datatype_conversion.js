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
    console.log(bool)
    
    let someNumber = 33
   // anything to string
let stringNumber = String(someNumber)
console.log(typeof(stringNumber))
console.log(stringNumber); 

/* operations */
let value = 3
let negValue = -value
// console.log(negValue);


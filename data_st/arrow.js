const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);       //it will print all current context of this object
    }

}        // THIS is for current context

user.welcomeMessage()   // hitesh....
// user.username = "sam"
// user.welcomeMessage()    // sam.... beacsue current context is used as declared by this

console.log(this);      //here it point to a empty object as we are using node, but in browser it will give context of window object, which is a global object.

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);        // this can only be used inside an onject     undefined
// }

// chai()

// const chai = function () {            // here also this cannot be used
//     let username = "hitesh"
//     console.log(this.username);       // undefined
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);                  // undefined
}


// chai()

// const addTwo = (num1, num2) => {        //explicit return
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2      //implicit return for one liners

// const addTwo = (num1, num2) => ( num1 + num2 )    // if () are used no need to write return 

const addTwo = (num1, num2) => ({username: "hitesh"})    // object is returned


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()    // discussed in loops
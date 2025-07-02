// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {          // forof object, here object means on whom
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()                    // follows the same order hold key-value pairs
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);
for (const key of map) {               //map is iterable in forof but not in forin
    // console.log(key);
}

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    // console.log(key);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {     //object is not iterable in forof loop
//     console.log(key, ':-', value);
    
// }
//object is not iterable in forof loop
// for...of is used to iterate over the values of an iterable.
// It expects the data structure to have a special method: Symbol.iterator.
// however it can be made iterable if we use object.keys types

// for (let key of Object.keys(myObject)) {
//   console.log(key, myObject[key]);             //it will run
// }

// We're not directly iterating over the object (since it's not iterable by default), 
// but we're tweaking how we access it by converting its structure into an iterable form using methods like:




// FOR_IN

const myObject1 = {
    js: 'javascript',                       // object is iterable in forIN
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject1) {
    //console.log(`${key} shortcut is for ${myObject1[key]}`);    //second one returns values
}

// forin always iterates through index or number. while forof iterates through values

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}


// map is not iterable in forIN beacuse  Map is not an Object:
// A Map is a special built-in object that stores key-value pairs and maintains insertion order.
// It doesn't expose its entries as enumerable properties, so for...in doesn't work.


// const map = new Map()    
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }


//+++++++++ FOR_EACH+++++++++++++


const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){                        //here function name is not there because it is a callbreak (directly calling)
//     console.log(val);                           
// } )

// coding.forEach( (item) => {              // arrow function in forEach
//     console.log(item);
// } )

// function printMe(item){                       
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [                       //array of objects
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
        // console.log(item);
    console.log(item.languageName);
} )


// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);                             // forEach does not return ant values so we use filter for it
//     return item
// } )

// console.log(values);
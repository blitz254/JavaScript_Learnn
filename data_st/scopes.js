//var c = 300
let a = 300        
if (true) {
    let a = 10                // inside local scope let and const remain confined but var doesnot follow this conndition.
    const b = 20
    var c= 30
    // console.log("INNER: ", a);
    
}



// console.log(a);       // a and b are not accessible as they are declared under the scope , while var can be accesed globally
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()     // reference error

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);      
    }
    // console.log(website);       // error is occured becaue website is called outside that if
}

// console.log(username);         // reference error due to out of scope    


// ++++++++++++++++++ interesting ++++++++++++++++++
// two types of function declaration

console.log(addone(5))

function addone(num){
    return num + 1
}
console.log(addone(5))


// addTwo(5)     // this function cannot be called before declaration
const addTwo = function(num){
    return num + 2
}
addTwo(5)
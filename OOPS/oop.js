const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);     // gives the current context
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);    // retun emty ehen called on global


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this  //may write maynot
}

const userOne = new User("hitesh", 12, true)              // new creates an instance or copy
const userTwo = new User("ChaiAurCode", 11, false)        // without using NEW it will overwrite 
console.log(userOne.constructor);     // reference about that object
//console.log(userTwo);   

// instance of returns whethere that is present inside object or not 
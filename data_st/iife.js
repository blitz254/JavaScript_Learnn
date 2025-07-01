// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// ; is required to end the iife otherwise next instances cannot be executed

( (name) => {       //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');

( (name) => {       //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
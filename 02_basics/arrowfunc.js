
//   user.welcome();
//   user.username = "om"
//   user.welcome()

// console.log(this);
// 
// IIFE 
// Immediately invoked function expression


// (function greet(){
//     console.log("hello user!");
// })()

(function greet(){

    // named IIFE
    console.log("reshab");
})();


( (name) =>{
    console.log(`Hello ${name}`);
})("reshab");
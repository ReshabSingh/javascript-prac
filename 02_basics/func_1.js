

function sayMyName(){
    console.log("R");
    console.log("e");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("b");
}

// sayMyName()

function sum2numbers(n1 , n2){
    console.log(n1+n2);
}

// sum2numbers(3,"b")

// function loginusermsg(username){
//     return `${username} logged in`
// }

// console.log(loginusermsg("reshab"))
// console.log(loginusermsg())

// default value 
function loginusermsg(username = "user"){
    if(!username){
        console.log("Enter username");
        return
    }
    return `${username} logged in`
}

console.log(loginusermsg("reshab"))
console.log(loginusermsg())
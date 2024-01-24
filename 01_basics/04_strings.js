// let str ='reshab'

// console.log(str);

// string methods in JS

// console.log(str.length);
// return the length of the string

// let str1 ="he is a "
// let str2="honest guy"

// let str3 =str1+str2
// console.log(str3);

// String Interpolation

// creating placeholder for literals and using backquotes

// let str1="reshab"
// let str2="singh"

// console.log(`${str1} and surname is ${str2} and i will be the richest person in the world`);

// string methods

// let str ="rameSh";
// let str2 = str.toUpperCase()

// console.log(str2);

// let str2 = str.toLowerCase();

// console.log(str2);

// slice method is used to get substrings of a string
// let str = "reshabsingh1"

// console.log(str.slice(0,4));

// console.log(str.__.proto__); ---> Syntax for all the String methods

// --------------------------------------------------------------------------------------------

// Number and maths

// Baisc math functions

// console.log(Math.sqrt(49));
// console.log(Math.abs(-433));
// console.log(Math.ceil(49.177));
// console.log(Math.floor(49.9333));

// min and max functions 

// console.log(Math.min(1,5,6,78,95));
// console.log(Math.max(1,5,6,78,95));

// Random function in JS return a random value in the range 0 to 1

// Use depends as per requirements 
// Dice is thrown

// console.log(Math.random());

// console.log((Math.random() * 10) + 1)
// console.log(Math.floor((Math.random() * 10) + 1))

let min = 1
let max = 20
// to get random numbers in a specific range


console.log(Math.floor(Math.random() *(max - min + 1)+ min));
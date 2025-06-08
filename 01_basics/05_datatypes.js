// primitve data types
// string, number, boolean, null, undefined, symbol, bigint
// string 
// number
// null
//undefined
// boolean
// symbol
// bigint



const score = 100; // number

const isLoggedIn = true; // boolean
const outsideTemp = null; // null
let userEmail; // undefined
const id = Symbol('id'); // symbol

const bigNumber = 1234567890123456789012345678901234567890n; // bigint

//refrence (non-primitive) data types
// Array, objects and functions

const heros = ['Thor', 'Ironman', 'Hulk']; // Array
let myobj = {
    name:"tanishq",
    age:22,
    isActive:true

}

function myFunc() {
    console.log("Hello from myFunc");
} // function

// console.log(typeof score); // number

// Primitive Data Types:

// Number -> Example: 42
// String -> Example: "Hello, World"
// Boolean -> Example: true
// null -> Example: null
// undefined -> Example: undefined
// Symbol -> Example: Symbol("unique")
// Non-Primitive Data Types:

// Array -> Example: var fruits = ['apple', 'banana', 'cherry']
// Function -> Example:
// function greet(name) {
//   console.log("Hello, " + name + "!");


// ++++++++++++++++++++ 

// Stack(Primitve) and heap(Non-primitive) memory allocation

let myYoutubeName = "Tanishq Gupta"; // string stored in stack memory

let anotherName = myYoutubeName; // anotherName points to the same string in stack memory
anotherName = "Tanishq Ji"; // this creates a new string in stack memory
console.log(anotherName); // Output: Tanishq Gupta
console.log(myYoutubeName); // Output: Tanishq Gupta


let userOne = {
    email :"tanishq@123@gmail.com",
    upi :  "tanishq@upi",

}


let userTwo = userOne; // userTwo points to the same object in heap memory

userTwo.email ="tanishq@gmail.com"
console.log(userTwo.email);
console.log(userOne.email);
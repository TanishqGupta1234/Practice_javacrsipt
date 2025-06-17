const user ={
    username: "John",
    price : 100,

    welcomeMessage: function() {
        console.log(`Welcome ${this.username}, your price is ${this.price}`); 
        console.log(this);
    }

    // this is used to refer to the current context of the object
}

// user.welcomeMessage(); // Welcome John, your price is 100
// user.username = "Doe";
// user.welcomeMessage()


// console.log(this);

function one()
{
    // let username = "John";
    // console.log(this.username); // undefined in Node.js, "John" in browser
}

// one(); // Window object in browser, global object in Node.js

// const chai = () => {
//     let username = "John";
//     console.log(this.username); 

// }
// chai(); // undefined in Node.js, "John" in browser

// const addTwo = (num1, num2) =>{ // Arrow function syntax it is a basic arrow function
//     return num1 + num2;

// }

// const addTwo = (num1, num2) => num1 + num2; // Arrow function syntax it is a basic arrow function
// const addTwo2 = (num1, num2) => (num1 + num2); // Arrow function syntax it is a basic arrow function but no need to use retrun keywords
const addTwo = (num1, num2) => ({username : "John"}); // Arrow function syntax it is a basic arrow function but no need to use retrun keywords   


console.log(addTwo(10, 20)) // 30);

const myArray = [1, 2, 3, 4, 5];

myArray.forEach()
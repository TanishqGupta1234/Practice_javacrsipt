// if

// const isUserLoggedIn = true;
// const temperature = 30;

// if (temperature < 20) {
//   console.log("It's cold outside, wear a jacket.");
// }
// else {
//     console.log("It's warm outside, no need for a jacket.");
// }

// console.log("temperature is greater than 50");
// comparsion operator are >, <, >=, <=, ==, ===, !=, !==
// == // is used to compare values, it does not check type
// === // is used to compare values and type, it checks both value and type
// != // is used to compare values, it does not check type, it is the opposite of ==
// !== // is used to compare values and type, it checks both value and type, it is the opposite of ===

// console.log(2 == "2"); // true, because it only checks value

// if true code will be executed if false code will not be executed

// const score = 200;

// if (score >= 100) {
//     const power = "fly";
//   console.log(`You have enough score to ${power} in the game.`);
// }
// console.log(`You have enough score to ${power} in the game.`);


// const balance =1000;
// // if (balance >= 1000) console.log(`You have enough balance to withdraw money.`); // implicit Scope
// // else console.log(`You don't have enough balance to withdraw money.`); // implicit scope

// if (balance > 500) {
//     console.log("You have enough balance to withdraw money.");
    
// }
// else if (balance >= 100) {
//     console.log("You have enough balance to withdraw money, but not enough for a big purchase.");
// }
// else {
//     console.log("You don't have enough balance to withdraw money.");
// }

const isUserLoggedIn = true;
const debit_card = true;
const isloggedinfromGmail = false;
const isloggedinfromFacebook = true;
if(isUserLoggedIn && debit_card) { // logical AND operator which checks if both conditions are true or not. and OR operator which checks if at least one condition is true or not.
    console.log("You can make a purchase.");
}

if(isUserLoggedIn || debit_card) { // logical OR operator which checks if at least one condition is true or not.
    console.log("You can make a purchase.");
} 
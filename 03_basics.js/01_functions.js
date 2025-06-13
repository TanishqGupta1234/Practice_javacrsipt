

// function sayMyname(){
//     console.log("t");
// console.log("a");
// console.log("n");
// console.log("i");
// console.log("s");
// console.log("h");
// console.log("q");

// }

// sayMyname();

// function addTwoNumbers(num1, num2){ // parameters
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
//    let result = num1 + num2; // local variable
//    return result; // return statement
    return num1 + num2; // directly returning the sum
}

const result = addTwoNumbers(10,20); // arguements
// console.log(result); // undefined because the function does not return anything

function loggingUserMessage(userName)
{
    if(userName === undefined || userName === null)
    {
        return "Please provide a valid username.";
    }
    return `Welcome ${userName}, just logged in!`;
}


loggingUserMessage("Tanishq");

console.log(loggingUserMessage("Tanishq")); // This will print the welcome message to the console
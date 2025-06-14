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


// loggingUserMessage("Tanishq");

// console.log(loggingUserMessage("Tanishq")); // This will print the welcome message to the console


//

function  calculateCartprice(val1, val2, ...num1)
{
    return num1;
}
calculateCartprice();
// console.log(calculateCartprice(10, 20, 30, 40, 50)); // This will print the array of numbers passed as arguments

const user = {
    name: "Tanishq",
    age: 22,
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}

function handleObject(anyObject)
{
    console.log(`usernmae is  ${anyObject.name} and price is ${anyObject.age}`);
    
}

handleObject(user); // This will print the username and age from the user object

const myNewArray = [1, 2, 3, 4, 5];
function returnSecondValue(getArray)
{
    return getArray[1]; // This will return the second value of the array
}

console.log(returnSecondValue(myNewArray)); // This will print the second value of the array, which is 2
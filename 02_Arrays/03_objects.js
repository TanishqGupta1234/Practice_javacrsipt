// singelton

// object literals
//Object.create

const mySum = Symbol("key1");



const Jsuser = {
    name: "Tanishq",
    "full name": "tanishq kumar",
    [mySum] : "mykey1",
    age : 20,
    email : "hitesh@goggle.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday", "Tuesday", "Wednesday"],
};
// console.log(Jsuser["email"]); // Accessing property using dot notation
// console.log(Jsuser.email); // Accessing property using bracket notation
// console.log(Jsuser[mySum]); // Accessing property using symbol
// myArray = ["h", "i", "t", "a", "n", "s", "h", "q"];

Jsuser.email = "tanishq@gmail.com"; // Updating property
// Object.freeze(Jsuser); // Freezing the object to prevent further modifications
Jsuser.email = "tanishq@gmail1234.com"; // This will not change the email as the object is frozen
// console.log(Jsuser);

Jsuser.greeting = function () {
    console.log("Hello Js user");
}
Jsuser.greetingTwo = function () {
    console.log(`Hello Js user, ${this.name}`);
}

console.log(Jsuser.greetingTwo()); // Calling the method);
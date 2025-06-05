 const accountId = 1445533;
 let accountEmail = "xyz@gmail.com";
 var accountPassword = "1234abcd";// it is creating the problem of scope and change at once place can do change at all other places.
 accountCity = "Delhi"; // This will create a global variable if not declared with let or const but not to use it..
let accounState;
 //accountId = 2; // This will throw an error because accountId is a constant ie not allowed to change

accountEmail = "tani@gmail.com"
accountPassword = "abcd1234";
accountCity = "Mumbai"; // This will change the value of the global variable
// console.log(accountEmail);

console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accounState
])

/*
prefer not to use var becuase of issue in block scope and functional scope...



*/
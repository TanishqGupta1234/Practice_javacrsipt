
// const userEmail = "h@gmail.com" // This is a truthy value
// if (userEmail) {
//     console.log("User email exists");
// }
// else {
//     console.log("User email does not exist");
// }

// falsy values = false, 0, "", null, undefined, NaN, -0, bitint
// truty values = " ", [], {}, true, 1, "0", 'false', [], {}, function(){} 


const emptyObj = {}; // This is a truthy value
if (Object.keys(emptyObj).length === 0) {
    console.log("Object exists");
}

// Nullish coalescing operator(??) is used to provide a default value when the left-hand side is null or undefined

let val1;
// val1 = 5 ?? 10; // 5 is not null or undefined, so val1 will be 5
val1 = null ?? 10; // null is null, so val1 will be 10
console.log(val1); // 5


// Ternary operator is a shorthand for if-else statements
const userAge = 18;
const isAdult = userAge >= 18 ? "Adult" : "Not Adult";
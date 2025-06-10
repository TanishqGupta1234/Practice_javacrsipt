const score = 100;
// console.log(score); // Output: 100
const balance = new Number(199);
// console.log(balance);

// console.log(balance.toString().length); // Converting the Number object to a string
// console.log(balance.toFixed(4)); // Formatting the Number object to 4 decimal places

const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(3)); // Formatting the Number object to 3 significant digits

const hundreds = 10000;
// console.log(hundreds.toLocaleString('en-IN'));// Converting the Number object to a locale-specific string representation


// +++++++++++++++++++++++++++ Mathematics +++++++++++++++++++++++++++

// console.log(Math);  // Output: Math object with various mathematical properties and methods
// console.log(Math.abs(-4)); // Output: 4 (absolute value)
// console.log(Math.round(4.3)); // Output: 4 (rounding to nearest integer)
// console.log(Math.ceil(4.2)); // Output: 5 (rounding up to nearest integer)
// console.log(Math.floor(4.2)); // Output: 4 (rounding down to nearest integer)
// console.log(Math.max(1, 2, 3, 4, 5)); // Output: 5 (maximum value)

console.log((Math.random()*10) + 1); // Output: Random number between 1 and 10

const min = 10;
const max = 20;

console.log(Math.random() * (max - min +1) + min ); // Output: Random number between 10 and 20 
// Immediately Invoked Function Expression (IIFE) Example

(function chai() {
  console.log(`Hello from IIFE!`);
})(); // This will execute the function immediately
// Calling the function to see the output

//  ()()

// Use of iife is
// Immediately Invoked Function Expression (IIFE) is a design pattern in JavaScript that allows you to execute a function immediately after defining it.
// global scope pollution is a common issue in JavaScript, especially when multiple scripts are loaded on a page. IIFE is used
// to encapsulate code and avoid polluting the global scope. By wrapping your code in an IIFE, you can create a private scope for your variables and functions.
// // This is particularly useful in larger applications or when working with third-party libraries, as it helps to prevent naming conflicts and keeps the global namespace clean.
// to create a private scope, so that variables defined inside the IIFE do not pollute the global scope.

(() => {
  console.log(`Hello from another IIFE! ${name}`);
})('tanos'); // This is another way to write an IIFE using arrow function syntax

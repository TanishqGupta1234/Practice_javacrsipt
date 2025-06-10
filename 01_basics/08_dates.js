// Dates
let myDate = new Date();
// console.log(myDate.toString()); // Output: Current date and time
// console.log(myDate.toDateString()); // Output: Current date in string format
// console.log(myDate.toLocaleString()); // Output: Current date and time in locale-specific format
// console.log(typeof myDate); // Output: "object" (Date is an object in JavaScript)
// let myCreatedDate = new Date(2023, 0, 23,5,3); // Creating a date object with a specific date and time
// console.log(myCreatedDate.toDateString()); // Output: "Mon Jan 23 2023" (date in string format)
// console.log(myCreatedDate.toLocaleString()); // Output: "1/23/2023, 12:00:00 AM" (date and time in locale-specific format)
let myCreatedDate = new Date("2023-01-14");
let myCreatedDates = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString()); // Output: "Sat Jan 14 2023" (date in string format)
// console.log(myCreatedDates.toLocaleString()); // Output: "Sat Jan 14 2023" (date in string format)

let myTimeStamp = Date.now(); // Getting the current timestamp in milliseconds since January 1, 1970
// console.log(myTimeStamp); // Output: Current timestamp in milliseconds
// console.log(myCreatedDate.getTime()); // Output: Timestamp of the created date in milliseconds since January 1, 1970

console.log(Math.floor(Date.now()/1000)); // Output: Current timestamp in milliseconds since January 1, 1970
let newDate = new Date();
// console.log(newDate.getMonth() + 1); // Output: Current month (0-11, where 0 is January and 11 is December)
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long", // "short" for abbreviated day name, "narrow" for single-letter day name
    
}));


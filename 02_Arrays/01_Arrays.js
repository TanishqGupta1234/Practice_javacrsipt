//Arrays

const myArray = [0,1,2,3,4,5,6,7,8,9]; // Creating an array with numbers from 0 to 9
const myHeroes = ["shaktiman", "superman", "batman", "spiderman"]; // Creating an array with superhero names
const myArray2 = new Array(1,2,3,4,5,6,4,2,1); // Creating an empty array with a length of 10
console.log(myArray[0]); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//Shallow copy of an array do share the same reference in memory
//deep copy of an array does not share the same reference in memory

// Array Methoda
 // Adding an element to the end of the array
myArray.push(10);
// console.log(myArray); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
myArray.pop(); // Removing the last element from the array
// console.log(myArray); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
myArray.unshift(5); // Adding an element to the beginning of the array
// console.log(myArray);
// Output: [5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
myArray.shift(); // Removing the first element from the array
// console.log(myArray);

// console.log(myArray.includes(3)); // Checking if the array includes the element 3
// console.log(myArray.indexOf(3)); // Getting the index of the element 3 in the array

const newArr = myArray.join(); // Slicing the array from index 2 to index 5 (exclusive)
// console.log(newArr); // Output: "2,3,4,5"

// splice, slice
console.log("A", myArray);
const myn1 = myArray.slice(1,3);// Slicing the array from index 1 to index 3 (exclusive)
console.log(myn1); // Output: [1, 2]

const myn2 = myArray.splice(1,3); // Splicing the array from index 1 to index 3 (exclusive)

console.log(myn2); // Output: [1, 2, 3]

// difference between splice and slice is that in splice the original array is modified and in slice the original array is not modified.


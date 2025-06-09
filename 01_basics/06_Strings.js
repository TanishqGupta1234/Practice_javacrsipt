const name = "tanishq";
const repoCount = 60;
// console.log(name+ repoCount); // outdated 

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // String interpolation
const gameName = new String("tanishq-gupta"); //

// console.log(gameName[0]);// Accessing the first character of the string object
// console.log(gameName.__proto__); // Accessing the prototype of the String object

// console.log(gameName.length); // Accessing the length of the string object
// console.log(gameName.toUpperCase()); // Converting the string object to uppercase
// console.log(gameName.charAt([2])); // Accessing the character at index 0 of the string object
// console.log(gameName.indexOf("i")); // Accessing the index of the first occurrence of the character "i" in the string object
const newString = gameName.slice(0,4); // Slicing the string object from index 0 to index 4
console.log(newString); // Output: "tani"

const anotherString = gameName.slice(-7,4); // Slicing the string object from index 4 to the end
console.log(anotherString); // Output: "tani"


const newStringOne = "    tanishq    "; // String with leading and trailing spaces
console.log(newStringOne.trim()); // Removing leading and trailing spaces from the string

const url = "https://www.tanishqgupta.com?name=tanishq&age=20"; // URL with query parameters
url.replace("tanishq", "Tanishq"); // Replacing "tanishq" with "Tanishq" in the URL
console.log(url.replace("tanishq", "Tanishq")); // Output: "https://www.Tanishqgupta.com?name=Tanishq&age=20"
console.log(gameName.split('-')); // Splitting the string object into an array of substrings using "-" as the delimiter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map( (num)=> num + 10 );
// console.log(newNums); // This will log a new array with each number increased by 10

const newNums = myNums 
.map((num) => num * 10) 
.map((num) => num + 1) // this is said to be chaining 
.filter((num) => num > 50); // This will filter the new array to only include numbers greater than 50

console.log(newNums); // This will log a new array with each number multiplied by 10 and then increased by 1

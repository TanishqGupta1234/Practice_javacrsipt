const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function(acc, currVal) {
    return acc + currVal;
}, 0); // Initial value is set to 0

console.log(myTotal); // Output: 6

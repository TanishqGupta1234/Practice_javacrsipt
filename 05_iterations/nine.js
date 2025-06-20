const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function(acc, currVal) {
//     console.log(`Accumulator: ${acc}, Current Value: ${currVal}`);
//     return acc + currVal;
// }, 0); // Initial value is set to 0


const myTotal = myNums.reduce((acc, currVal) => acc + currVal, 0)



const ShoppingCart =[
    { item: 'apple', price: 1 },
    { item: 'banana', price: 2 },
    { item: 'orange', price: 3 }
]

const price = ShoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(price); // Output: 6


// console.log(myTotal); // Output: 6

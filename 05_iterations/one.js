// for loop
for (let i = 0; i <= 10; i++) {
  const message = `${i}`;
  if (message == 5) {
    // console.log("The value of i is 5");
  }
  // console.log(message);
}

// Notes for for loop:
// 1. The for loop is used to iterate over a block of code a number of times.
// 2. The syntax is: for (initialization; condition; increment/decrement) { code to be executed }
// 3. The initialization is executed once before the loop starts.
// 4. The condition is evaluated before each iteration, and if it evaluates to true, the loop continues.
// 5. The increment/decrement is executed after each iteration.
// 6. The loop will stop when the condition evaluates to false.
// 7. It is commonly used when the number of iterations is known beforehand.

for (let index = 0; index <= 10; index++) {
  // console.log(`Current index is: ${index}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Current j is: ${j}`);
  }
}


// let myArray = ["flash", "green", "blue", "red", "yellow"];

// for (let index = 0; index < myArray.length; index++) {
//     const element = array[index];
    
// }

//break and continue

for (let i = 0; i < 10; i++) {  
  if (i === 5) {
    console.log("Breaking the loop at i = 5");
    break; // Exits the loop when i is 5
  }
  console.log(`Current value of i: ${i}`);
}

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Skipping the iteration when i = 5");
    continue; // Skips the current iteration when i is 5
  }
  console.log(`Current value of i: ${i}`);
}
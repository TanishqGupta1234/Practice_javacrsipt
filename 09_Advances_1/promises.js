// promises are used to handle asynchronous operations in JavaScript.
// defining a promise - a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// example of a promise are fetching data from an API, reading a file, etc.
// a promise is one of these states - pending, fulfilled, or rejected.
// a promise is an object that has a then() method and a catch() method.
// const promiseOne = new Promise(function (resolve, reject) {
//   // Do an async tasks
//   // Db calls, crytography, network calls, etc.
//   setTimeout(function () {
//     console.log("Promise One Resolved");
//     resolve(); // This will resolve the promise
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise One is fulfilled"); // This will run when the promise is resolved which means consumed
// });

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task two");
//         resolve(); // This will resolve the promise
//     },1000)
// }).then(function()
// {
//     console.log("Promise Two is fulfilled"); // This will run when the promise is resolved which means consumed
// })

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "John", age: 30 }); // This will resolve the promise with an object
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; // Change this to true to simulate an error
    if (!error) {
      resolve({ username: "tanishq", password: "123" }); // This will resolve the promise
    } else {
      reject("Error: Something went wrong!"); // This will reject the promise
    }
  }, 2000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username; // This will return the username
  })
  .then((username) => {
    console.log(username); // This will log the username to the console
  })
  .catch((error) => {
    console.log(error); // This will log the error to the console
  }).finally(() => console.log("Promise Four is completed")); // This will run regardless of the promise being fulfilled or rejected

// console.log(username); // This will log the username to the console

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function () {
        let error = true; // Change this to true to simulate an error
        if (!error) {
          resolve({ username: "js wne wrong", password: "123" }); // This will resolve the promise
        } else {
          reject("Error: js went wrong!"); // This will reject the promise
        }
      }, 1000);

})
//const coding = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// const values = coding.forEach((item) => {
//   console.log(item);
// });

// console.log("Values:", values); // This will log undefined because forEach does not return a value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = myNums.filter((num) => {
//   return num > 4 // This line is missing a return statement so it will not filter correctly
// }) // returns a new array with numbers greater than 5

// const newNums = myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num); // This line will not work because newNumbers is not defined

//     }
// })

// console.log("New Numbers:", newNumbers); // This will log the new array with numbers greater than 5

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
  }, // object
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
  { title: "1984", author: "George Orwell", genre: "Fiction" },
  { title: "Pride and Prejudice", author: "Jane Austen", genre: "Fiction" },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
  },
];

let userBooks = books.filter((bk) => bk.genre === "Fiction"); // This will filter the books array to only include books with the genre 'Fiction'
userBooks = books.filter((bk) => {
  return bk.author === "J.D. Salinger" && bk.genre === "Fiction";
}); // // This will filter the books array to only include books by 'J.D. Salinger'
const UserBooks = console.log(userBooks);

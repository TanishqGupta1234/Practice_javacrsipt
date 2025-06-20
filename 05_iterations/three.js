// for of loop

const numbers = [1, 2, 3, 4, 5];
for (const i of numbers) {
  // console.log(i);
}

const greetings = ["Hello", "Hi", "Hey"];

for (const greeting of greetings) {
  // console.log(greeting);
}

// Maps 

const map = new Map()
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");
// console.log(map);

for (const [key,value] of map) {
     console.log(key, value);   
}

const myObject = {
    'name': 'Alice',
    'age': 25,
    'city': 'Los Angeles'
}

for (const [key,value] of myObject) {
    
    
}
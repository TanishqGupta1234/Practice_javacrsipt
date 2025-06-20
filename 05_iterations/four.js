const myObject = { 
    'name': 'Alice',
    'age': 25,
    'city': 'Los Angeles'
};

for (const key in myObject) {
   // console.log('Key:', key, 'Value:', myObject[key]);
}

const programming = ["js","java", "python", "c++"];

for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");

for (const key in map) {
    console.log(key); // this will not work as expected because Map is not an object and not iterable with 'in' operatorb 
    
}
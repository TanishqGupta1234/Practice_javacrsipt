const marvel_heroes = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["batman", "superman", "shaktiman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

const myHeros = marvel_heroes.concat(dc_heroes);
// console.log(myHeros);

const allHeros = [...marvel_heroes, ...dc_heroes];
// console.log(allHeros);

const another_array = [1,2,3,4,5 [4,5,6], 7,[8,9,10,[3,4]], 11,12,13,14,15];
const usable_another = another_array.flat(Infinity);
// console.log(usable_another);

// console.log(Array.isArray("tanishq"))
// console.log(Array.from("tanishq"))
console.log(Array.from({name: "tanishq", age: 20, city: "delhi"})) // intresting case

let Score1 = 100;
let Score2 = 200;
let Score3 = 300;

console.log(Array.of(Score1, Score2, Score3)); // Array.of() creates a new array with the given elements
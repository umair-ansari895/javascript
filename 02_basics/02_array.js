const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros]
//console.log(allNewHeros);

const anotherArray = [1, 2, 3, 4, [5, 6, 7, 8], 9, 1, [2, 3, 4, [5, 6, 7]]]

const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray("umair"));
console.log(Array.from("umair"));
console.log(Array.from({name: "umair"})); // interesting
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


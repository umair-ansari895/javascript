let score = 33

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanLoggedIn = Boolean(isLoggedIn);
console.log(booleanLoggedIn);
console.log(typeof booleanLoggedIn);

// 1 => true; 0 => false
// "" => false
// "umair" => true

let someNumber = 35
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

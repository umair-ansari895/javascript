const score = 400
console.log("score");

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum = 123.896

console.log(otherNum.toPrecision(4));

const hundreds = 10000000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));


// ****************************** maths ***************************

console.log(Math);

console.log(Math.abs(-4)); // to change only neg value to postv value
console.log(Math.round(4.6));
console.log(Math.round(4.5));
console.log(Math.round(4.3));
console.log(Math.round(-4));
console.log(Math.round(-4.6));
console.log(Math.round(-4.4));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 2, 5, 1, 7));
console.log(Math.max(4, 2, 5, 1, 7));
console.log(Math.random()); // return random number 0 to 1
console.log(Math.floor(Math.random() * 10)); // return random number 0 to 9
console.log(Math.floor(Math.random() * 10) + 1); // return random number 1 to 10

const minNum = 1
const maxNum = 20
console.log(Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum); // return random number between any two number

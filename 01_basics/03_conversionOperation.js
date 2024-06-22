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


// ********************** operation ****************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**2); // 2 to the power 2

let str1 = "umair"
let str2 = " ansari"
let str3 = str1 + str2;

console.log(str3);

console.log(1 + 2);
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log(1 + 2 + 3);
console.log("1" + 2 + 3);
console.log(1 + 2 + "3");
console.log(1 + 2 + "3" + 4 + 5);
console.log(1 + 2 + "3" + 4 + 5 + 6 + 7 + 8);
console.log(1 + 2 + (3 * 4) + (5 % 6));
console.log(true);
console.log(+true);
// console.log(true+); // error
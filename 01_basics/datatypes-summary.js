// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt


const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumber = 345324567654n;


// Reference (Non primitive)

// Array, Object, Functions

const heros = ["shaktiman", "nagraj", "doga"];

let myObj = {
    name: "umair",
    age: 27
}

const myFunction = function(){

    console.log("hello world");
}

// ************************** Memmory *****************************************

// Stack (Primitive), Stack (Non Primitive)

let myYoutubeName = "umairdotcom"
let anotherName = myYoutubeName
anotherName = "ansaridotcom"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "umair@gmail.com",
    upi: "umair@ybl"
}

let userTwo = userOne;

userTwo.email = "ansari@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
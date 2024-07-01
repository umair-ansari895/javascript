// singleton
// object.create

//object leterals

const mySym = Symbol("key1");

const jsUser = {
    name: "umair",
    "full Name": "Umair Ansari",
    [mySym]: "mykey1",
    age: 28,
    location: "jaipur",
    email: "umair@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"]);
console.log(jsUser["full Name"]);
console.log(typeof jsUser[mySym]);

jsUser.email = "umair@chatgpt.com";
console.log(jsUser.email);
//Object.freeze(jsUser);
jsUser.email = "umair@google.com";
console.log(jsUser.email);
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

const accountId = 12345;
let accountEmail = "umair@umair.com";
var accountPassword = "123456";
accountCity = "jalalpur";
let accountState;

// accountId = 234 // not allowed
// console.log(accountId);

accountEmail = "ansari@ansari.com";
accountPassword = "654321";
accountCity = "jalalabad";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState
]);

/* 

prefer not to use var because of issue in block scope and functional scope

*/
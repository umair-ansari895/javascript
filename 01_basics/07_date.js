// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

// let myCreateddate = new Date(2024, 5, 26);
//console.log(myCreateddate.toDateString());
// let myCreateddate = new Date(2024, 5, 26, 5, 3);
// console.log(myCreateddate.toLocaleString());

let myCreateddate = new Date("01-14-2023");
//console.log(myCreateddate.toLocaleString());

let myTimeStamp = Date.now();
//console.log(myTimeStamp);
//console.log(myCreateddate.getTime());

//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


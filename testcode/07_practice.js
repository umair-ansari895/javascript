// ********************* Swap two variables **********************

function swapTwoNum(a, b){
a = a + b;
b = a - b;
a = a - b; 
return [a, b];
}

let x = 4;
let y = 3;
[x, y] = swapTwoNum(x, y)
console.log(typeof[x, y])
console.log(`x = ${x} y = ${y}`); 

// ***********************ternary operator*************************

function ternaryOperator(a, b){
    let otpt = a > b ? "a is grater" : "b is grater"
    return otpt;
}
let num1 = 4;
let num2 = 5;
let result = ternaryOperator(num1, num2);
console.log(result);

//*****************************switch case******************************** */

let numOfDay = "Day2"
switch (numOfDay) {
    case "Day1":
        console.log("monday");
        break;

    case "Day2":
        console.log("tuesday");
        break;    

    default:
        console.log("wrong day");
        break;
}


/***************************************************** */

let arrForMul = [3, 2, 4, 5, 6, 2];
let arrSum = arrForMul.reduce((a, c) => a+c, 0)
console.log(arrSum);
let arrMul = arrForMul.reduce((a, c) => a*c, 1)
console.log(arrMul);

/***************************************************** */

let arrForFrstDupli = [1, 3, 5, 2, 7, 2, 5, 1]
let arrLength = arrForFrstDupli.length;
let seen = new Set();
//console.log(seen);
for(let i = 0; i < arrLength; i++){
    if(seen.has(arrForFrstDupli[i])){
        console.log(arrForFrstDupli[i])
    }
    seen.add(arrForFrstDupli[i])
}

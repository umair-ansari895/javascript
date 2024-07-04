function sayMyName(){
console.log("u");
console.log("m");
console.log("a");
console.log("i");
console.log("r");
}

//sayMyName()

// function addTwoNumbers(number1, number2){
// console.log(number1 + number2);
// }

// addTwoNumbers(3, 4)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;
    return number1+number2
    }
    
   const result = addTwoNumbers(3, 4)
   //console.log("Result:", result);

   function loginUserMessage(username){
    //if (username === undefined) {
        if (!username) {
        console.log("please enter a user name");
        return;
    }
    return `${username} just logged in`
   }

   //console.log( loginUserMessage("umair"));
   //console.log(loginUserMessage());

//    function calculateCartPrice(num1){
//     return num1

//    }

//    console.log( calculateCartPrice(2) );

// function calculateCartPrice(...num1){
//          return num1
    
//         }
    
//         console.log( calculateCartPrice(2, 200, 305, 436, 500) );

function calculateCartPrice(val1, val2, ...num1){
    return num1

   }

   //console.log( calculateCartPrice(2, 200, 305, 436, 500) );

   const user = {
    userName: "umair",
    price: 1299
   }

   function handleObject (anyobject){
    console.log(`user name is ${anyobject.userName} and price is ${anyobject.price}`);
   }

   //handleObject(user);
   handleObject({
    userName: "sam",
    price:499
   })

   const myarray = [200, 300, 400, 500]

   function returnSecondVal(getarray){
    return getarray[1];
   }
//   console.log(returnSecondVal(myarray));
console.log(returnSecondVal([200, 500, 700]));
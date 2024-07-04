//let arr = [1, 2, 3, 4, 5]

// for(let i = 0; i < arr.length; i++){
    
//     for(let j = i; j < arr.length; j++ ){
//         let newArr = []
//         console.log(`result:`);
//         for(let k = i; k <= j; k++){
//             //console.log(arr[k]);
//             newArr.push(arr[k]);
//         }
//         console.log(newArr);
//     }
// }

//********************************************************* */

// 
let arr = [1, 4, 2, 5, 3]
let sumOfAllOdd = 0;
for(let i = 0; i < arr.length; i++){
    
    for(let j = i; j < arr.length; j++ ){
        let newArr = []
        let sumOfArr = 0;
        console.log(`result:`);
        for(let k = i; k <= j; k++){
            //console.log(arr[k]);
            newArr.push(arr[k]);
            sumOfArr = sumOfArr + arr[k];
        }
        if(newArr.length % 2 == 0){
            console.log("Even");
        }
        else{
            console.log("Odd");

            sumOfAllOdd = sumOfAllOdd + sumOfArr
        }
        console.log(newArr);
        console.log(`sum of array: ${sumOfArr}`);
    }
    //console.log(newArr);
    
}

console.log(`sum of all odd array: ${sumOfAllOdd}`);
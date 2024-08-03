console.log("Approch-1")

let arr = [3, 5, 4, 1, 9] 
console.log(Math.min(...arr));
console.log(Math.max(...arr));

//***************************************************** */

console.log("Approch-2")

function setmini(a) {
    let mini = Infinity;
    for(let i = 0; i < a.length; i++){
        if(mini > a[i]){
            mini = a[i];
        }
    }
    return mini;
}

function setmaxi(a) {
    let maxi = -Infinity;
    for(let i = 0; i < a.length; i++){
        if(maxi < a[i]){
            maxi = a[i];
        }
    }
    return maxi;
}

function main(){
    let arr1 = [4, 9, 6, 5, 2, 3]
    console.log("minmum number is: " + setmini(arr1));
    console.log("maximum number is: " + setmaxi(arr1));
}

main();

//******************************************************** */

console.log("Approch-3")

function getMinMax(arr2){
    const minmax = {};
    arr2.sort((a, b) => a - b);
    minmax.min = arr2[0];
    minmax.max = arr2[arr2.length-1];
    return minmax;
}

function main1(){
    const arr2 = [1000, 11, 445, 1, 330, 3000];
    const minmax = getMinMax(arr2);
    console.log("minimum number is : " + minmax.min);
    console.log("maximum number is : " + minmax.max);
}

main1();


//******************************************************** */

console.log("Approch-4")
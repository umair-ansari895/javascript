/*Question: A sorted array is rotated at some unknown pivot. Find the minimum element in the array.*/

// function findMinimum(arr){
// let result = Math.min(...arr);
// return result;
// }


function findMinimum(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        const mid = Math.floor((left + right) / 2);
        if(arr[mid] > arr[right]){
            left = mid + 1;
        }
        else{
            right = mid;
        }
    }
    return arr[left];
}
console.log(findMinimum([11, 13, 15, 17]));
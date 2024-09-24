/*Question: Given a sorted array and a target value, return the index if the target is found. If not, 
return the index where it would be if it were inserted in order.*/

function searchInsert(arr, target){
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        //console.log(mid);
        if(arr[mid] === target){
            result =  mid;
            return result;
        }
        else if(arr[mid] < target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return left;
    // if(result === -1){
    //     for(let i = 0; i < arr.length; i++){
    //         if(arr[i] < target){
    //             result = i + 1;
    //         }
    //     }
    //     return result;
    // }
}
console.log(searchInsert([1, 3, 5, 6], 5)); // Output: 2
console.log(searchInsert([1, 3, 5, 6], 2)); // Output: 1
console.log(searchInsert([1, 3, 5, 6], 7)); // Output: 4
console.log(searchInsert([1, 3, 5, 6], 4)); // Output: 2

/*Question: Modify the binary search algorithm to return the index of the last occurrence of the target 
value in a sorted array that may contain duplicates.*/

function lastOccurance(arr, target){
    let left = 0;
    let right = arr.length - 1;
    let result = "target not found";
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        if(arr[mid] === target){
            result = mid;
            left = mid + 1;
        }
        else if(arr[mid] < target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return result;

}

console.log(lastOccurance([1, 2, 2, 3, 3, 3, 4, 5, 6, 6, 7, 8, 8, 8, 8, 9, 9], 11));
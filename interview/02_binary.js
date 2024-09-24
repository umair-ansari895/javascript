/* Question: Modify the binary search algorithm to return the index of the first occurrence of the 
target value in a sorted array that may contain duplicates.*/

function firstOccurrence(arr, target){
    let left = 0; 
    let right = arr.length - 1;
    let result = -1;
    //console.log(left)
    //console.log(right)
    while(left <= right){
      //  console.log("hell")
        const mid = Math.floor((left + right) / 2);
        if(arr[mid] === target){
            result = mid;
            right = mid - 1;
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
console.log(firstOccurrence([1, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5], 1));
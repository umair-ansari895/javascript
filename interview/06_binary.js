/*Question: Given an array where an element is greater than its neighbors, find a peak element and 
return its index.*/
function findPeakElement(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        const mid = Math.floor((left + right) / 2);
        if(arr[mid] < arr[mid + 1]){
            left = mid + 1;
        }
        else{
            right = mid;
        }
    }
    return left;
}
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
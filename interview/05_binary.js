/*A sorted array is rotated at some unknown pivot. Implement a function to search for a target 
value in this array. If found, return its index; otherwise, return -1.*/

function searchInRotateArr(arr, target){
    let left = 0
    let right = arr.length - 1;
    //let result = -1;
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        if(arr[mid] === target){
            return mid;
        }
        if(arr[left] <= arr[mid]){//left half is sorted
            if(target >= arr[left] && target <= arr[mid]){
                right = mid - 1;
            }
            else{
                left = mid + 1;
            }
        }
        else{//right half is sorted
            if(target >= arr[mid] && target <= arr[right]){
                left = mid + 1;
            }
            else{
                right = mid - 1;
            }
        }
    } 
    return -1;
}
console.log(searchInRotateArr([4, 5, 6, 7, 0, 1, 2], 0));
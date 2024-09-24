/*Question: Implement a function to compute the square root of a non-negative integer x. Since the 
return type is an integer, the decimal digits are truncated, and only the integer part of the result 
is returned.*/

function mySqrt(num){
    if(num < 2) return num;
    let left = 1;
    let right = Math.floor((left + num) / 2);
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        const midSquared = mid * mid;
        if(midSquared === num){
            return mid;
        }
        else if(midSquared < num){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return right;
}


console.log(mySqrt(8)); // Output: 2
console.log(mySqrt(16)); // Output: 4
console.log(mySqrt(18)); // Output: 4
console.log(mySqrt(4)); // Output: 2


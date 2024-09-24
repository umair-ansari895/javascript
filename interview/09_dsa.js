/*Problem: Given an array of integers, return indices of the two numbers such that they add up to a 
specific target.*/

function twoSum(nums, target){
    const map = new Map();
    for(let i = 0; i < nums.length; i++){
        //console.log("hell")
        const complement = target - nums[i];
        if(map.has(complement)){
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
        //console.log(map);
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
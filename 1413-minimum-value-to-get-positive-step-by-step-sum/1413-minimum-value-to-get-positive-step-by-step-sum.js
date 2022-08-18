/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n) t.c. 
var minStartValue = function(nums) {
    let [sum, min] = [0, nums[0]]; // init sum to 0 & min to 1st el in nums
    
    for (let num of nums) {
        sum += num; // add each num in nums arr to sum
        min = Math.min(min, sum); // update our min var each time
    }
    return min > 0 ? 1 : 1 - min; // if min never went neg, ret 1 else 1 - min
};
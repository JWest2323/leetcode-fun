/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let count = 0, res = 0, cur = []; // init a count & res var, and cur arr to store contin. el
    let min = Number.MAX_SAFE_INTEGER; // init min to large num
    let max = Number.MIN_SAFE_INTEGER; // init max to small num
    
    for (let idx = 0; idx < nums.length; idx++) {
        cur.push(nums[idx]);
        if (cur.length < res) continue; // continue building up to prev res if curr.length < res
        min = Math.min(min, nums[idx]);
        max = Math.max(max, nums[idx]);
        // calc diff
        let diff = Math.abs(max - min);
        if (diff <= limit) {
            // update count if within limit
            count = cur.length;
        } else {
            // else shift from front and check if it was min || max
            let el = cur.shift();
            if (el === min) min = Math.min(...cur);
            if (el === max) max = Math.max(...cur);
        }
        // update res using count
        res = Math.max(res, count);
    } 
    return res; // return res                                              
};
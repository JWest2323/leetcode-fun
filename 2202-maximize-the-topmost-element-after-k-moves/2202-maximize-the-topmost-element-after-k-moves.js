/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumTop = function(nums, k) {
    let topMost = []; // use to push k top most elements from nums
    const clone = [...nums]; // store original copy of nums
    
    if (nums.length === 1) return k % 2 ? -1 : nums[0]; // if only 1 el in nums & k is even no non-empty sol possible, if k is odd ret nums[0]
    
    if (nums.length < k) { // if we have more moves than nums.length, calc and ret max
        let max = Math.max(...nums);
        return max; 
    }
    let idx = 0;
    while (idx < k) { // since nums.length > k, store first k elements from beginning of nums to topMost
        if (isNaN(clone[idx])) break; // 
        const top = nums.shift();
        topMost.push(top);
        idx++;
    }
    const topRemaining = nums.shift(); // store first remaining val at nums[0]
    return Math.max(...topMost.slice(0, topMost.length - 1), topRemaining ?? -1); // return max of all els of topMost and topRemaining if it exists
    
};
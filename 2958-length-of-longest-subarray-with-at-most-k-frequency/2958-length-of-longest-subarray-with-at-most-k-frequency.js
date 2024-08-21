/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let l = 0, maxLen = -Infinity;
    let numFreq = new Map();
    
    for (let r = 0; r < nums.length; r++) {
        let rightNum = nums[r];
        numFreq.set(rightNum, numFreq.get(rightNum) + 1 || 1);
        
        while (numFreq.get(rightNum) > k) {
            let leftNum = nums[l];
            if (numFreq.get(leftNum) == 1) {
                numFreq.delete(leftNum);
            } else {
                numFreq.set(leftNum, numFreq.get(leftNum) - 1);
            }
            l++;
        }
        maxLen = Math.max(maxLen, r - l + 1);
    }
    return maxLen;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let l = 0, maxLen = 0, flips = k;
    
    for (let r = 0; r < nums.length; r++) {
        if (k == 0 && nums[r] == 0) {
            l = r + 1;
            continue;
        }
        
        while (flips == 0 && nums[r] == 0) {
            if (nums[l] == 0 && flips < k) flips++;
            l++;
        }
        
        if (nums[r] == 0 && flips > 0) {
            flips--;
        }
        
        maxLen = Math.max(maxLen, r - l + 1);
    }
    return maxLen;
};
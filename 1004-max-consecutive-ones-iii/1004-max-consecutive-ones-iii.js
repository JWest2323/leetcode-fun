/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let l = 0, r;

    for (r = 0; r < nums.length; r++) {
        if (nums[r] === 0) {
            k--;
        }
        if (k < 0) {
            k += 1 - nums[l];
            l++;
        }
    }
    return r - l;
};
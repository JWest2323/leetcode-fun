/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let res = 0, l = 0, r = 0; n = nums.length;

    while (r < n) {
        if (nums[r] === 0) {
            while (nums[r] === 0) 
                r++;
            l = r;
        } else {
            r++;
        }
        res = Math.max(res, r  - l);
    }
    return res;
};
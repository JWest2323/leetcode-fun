/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curSub = nums[0], res = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        curSub = Math.max(curSub + nums[i], nums[i]);
        res = Math.max(res, curSub);
    }
    return res;
};
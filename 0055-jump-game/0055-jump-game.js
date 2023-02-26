/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // save initial lastPos as last index in nums
    let lastPos = nums.length - 1;
    // looping from end to start
    for (let currIdx = nums.length - 1; currIdx >= 0; currIdx--) {
        if (currIdx + nums[currIdx] >= lastPos)
            lastPos = currIdx;
    }
    
    return lastPos === 0;
};
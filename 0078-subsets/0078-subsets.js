/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    
    const backtrack = (curSub, idx) => {
        if (idx == nums.length) {
            res.push(curSub.slice());
            return;
        }
        curSub.push(nums[idx]);
        backtrack(curSub, idx + 1);
        curSub.pop();
        backtrack(curSub, idx + 1);
    }
    
    backtrack([], 0);
    
    return res;
};
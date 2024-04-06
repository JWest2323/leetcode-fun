/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    
    const backtrack = (curSub, idx) => {
        if (idx == nums.length) {
            res.push(curSub);
            return;
        }
        
        backtrack([...curSub, nums[idx]], idx + 1);
        backtrack(curSub, idx + 1);
    }
    
    backtrack([], 0);
    
    return res;
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    
    const backtrack = (idx, subset) => {
        if (idx == nums.length) {
            res.push(subset.slice());
            return;
        }
        // branch with nums[idx]
        subset.push(nums[idx]);
        backtrack(idx + 1, subset)
        subset.pop();
        
        while (idx < nums.length && nums[idx] == nums[idx + 1])
            idx += 1;
        // branch without nums[idx]
        backtrack(idx + 1, subset);
    }
    
    backtrack(0, []);
    return res;
};
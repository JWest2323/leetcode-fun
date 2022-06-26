/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if (!nums) return []; // check for null input
    let res = []; // create return var
    
    // define backtrack func
    function backtrack(subs, i) {
        if (i >= nums.length) {
            res.push(subs);
            return;
        }
        // call backtracking w curr value included in subset
        backtrack([...subs, nums[i]], i + 1);
        
        // call backtracking w curr value excluded from subset
        backtrack([...subs], i + 1);
    }
    backtrack([], 0);
    return res;
};
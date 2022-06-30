/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    if (!nums) return [];
    let res = [];
    nums.sort((a,b) => {return a - b});
    
    function backtrack(idx, subset) {
        if (idx == nums.length) {
            res.push(subset.slice());
            return;
        }
        subset.push(nums[idx]);
        backtrack(idx + 1, subset);
        subset.pop();
        while (idx < nums.length && nums[idx] == nums[idx + 1]){
            idx++;
        }
        backtrack(idx + 1, subset);
    }
    backtrack(0, []);
    return res;
};
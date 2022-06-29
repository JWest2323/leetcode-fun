/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []; // create return var
    backtrack(nums, new Set(), res);
    return res;
}
function backtrack(nums, curr, res) {
    // if curr perm.length == nums.length, push to res
    if (curr.size == nums.length) {
        res.push(Array.from(curr));
        return;
    }
    // continue to build perm, only adding if not found in curr set
    for (let i = 0; i < nums.length; i++) {
        if (curr.has(nums[i])) continue;
        curr.add(nums[i]);
        backtrack(nums, curr, res);
        curr.delete(nums[i]);
    }
}
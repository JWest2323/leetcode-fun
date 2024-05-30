/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [], seen = new Set();

    const backtrack = (curPerm) => {
        if (curPerm.size === nums.length) {
            res.push([...curPerm.values()]);
            return;
        }

        for (let num of nums) {
            if (!curPerm.has(num)) {
                curPerm.add(num);
                backtrack(curPerm);
                curPerm.delete(num);
            }
        }
    }
    backtrack(seen, 0);
    return res;
};

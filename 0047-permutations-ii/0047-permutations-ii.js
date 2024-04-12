/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [], perm = [], freq = new Map();
    for (let num of nums) 
        freq.set(num, (freq.get(num) + 1) || 1);
    
    const backtrack = () => {
        if (perm.length == nums.length) {
            res.push(perm.slice());
            return;
        }
        for (let num of freq.keys()) {
            if (freq.get(num) > 0) {
                perm.push(num);
                freq.set(num, freq.get(num) - 1);
                backtrack();
                freq.set(num, freq.get(num) + 1);
                perm.pop();
            }
        }
    }
    
    backtrack();
    return res;
};
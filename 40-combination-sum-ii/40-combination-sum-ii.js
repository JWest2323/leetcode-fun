/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    if (!candidates) return [];
    candidates.sort((a,b) => {return a - b}); // sort least to greatest to use prev var to track duplicates
    let res = [];
    function backtrack(cur, idx, target) {
        if (target === 0) { // if target == 0, push copy of cur to res
            res.push(cur.slice());
        }
        if (target <= 0) return; // if we deduct too much from target, return
        let prev = -1; // set prev to null/-1
        for (let i = idx; i < candidates.length; i++) {
            if (candidates[i] === prev) continue; // if we spot a duplicate cont.
            cur.push(candidates[i]); 
            backtrack(cur, i + 1, target - candidates[i]); // deduct cur candidate from target and call backtrack
            cur.pop(); // remove last candidate from cur
            prev = candidates[i]; // set prev var to check for duplicates
        }
    }
    backtrack([], 0, target);
    return res;
};
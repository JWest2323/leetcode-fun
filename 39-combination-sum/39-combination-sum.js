/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    if (!candidates) return []; // if null input ret []
    let res = []; // create ret array
    
    // define backtrack function
    function backtrack(idx, cur, total) {
        if (total === target) { // if sum equals target push to res
            res.push(cur.slice());
            return;
        }
        
        if (idx >= candidates.length || total > target) return; // if idx goes OOB or total > target return
        
        // call backtrack with current candidate
        cur.push(candidates[idx]);
        backtrack(idx, cur, total + candidates[idx]);
        // call backtrack without current candidate
        cur.pop();
        backtrack(idx + 1, cur, total);
    }
    backtrack(0, [], 0);
    return res;
};
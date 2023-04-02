/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    // sort candidates arr to be used for backtracking and to avoid duplicates
    candidates.sort((a, b) => a - b);
    
    let res = [];
    
    const backtrack = (idx, remaining, combo) => {
        // remaining === 0 implies current combo === target
        if (remaining === 0) { 
            res.push(combo);
            return;
        }
        
        // loop from current index to find other candidates to reach target
        for (let i = idx; i < candidates.length; i++) {
            // if candidate at this index <= remaining, we can add
            if (candidates[i] <= remaining) {
                backtrack(i + 1, remaining - candidates[i], [...combo, candidates[i]]);
            }
            // continue iterator for duplicate values
            while (candidates[i + 1] === candidates[i]) i++;
        }
        
        // return res arr
        return res;
    }
    
    // return backtrack function from 0 index, target = remaining, & empty combo arr
    return backtrack(0, target, []);
};
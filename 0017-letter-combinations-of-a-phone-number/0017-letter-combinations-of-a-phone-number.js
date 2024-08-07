/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) return [];
    
    let res = new Set();
    let phoneDir = {
        "2" : ["a", "b", "c"],
        "3" : ["d", "e", "f"],
        "4" : ["g", "h", "i"],
        "5" : ["j", "k", "l"],
        "6" : ["m", "n", "o"],
        "7" : ["p", "q", "r", "s"],
        "8" : ["t", "u", "v"],
        "9" : ["w", "x", "y", "z"],
    };
    
    const backtrack = (curPerm) => {
        if (curPerm.length == digits.length && !res.has(curPerm)) {
            res.add(curPerm);
            return;
        }
        
        let candidates = phoneDir[digits.charAt(curPerm.length)];
        for (let candidate of candidates) {
            backtrack(curPerm + candidate);
        }
    }
    
    backtrack("");
    
    return [...res.keys()];
};
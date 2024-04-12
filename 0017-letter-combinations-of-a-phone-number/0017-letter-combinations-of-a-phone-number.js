/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) return [];
    let res = [];
    let phoneDir = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }

    const backtrack = (curCombo, idx) => {
        if (curCombo.length == digits.length) {
            res.push(curCombo);
            return;
        }
        let options = phoneDir[digits.charAt(idx)];
        for (let option of options) {
            curCombo += option;
            backtrack(curCombo, idx + 1);
            curCombo = curCombo.slice(0, curCombo.length - 1);
        }
    }

    backtrack("", 0);
    return res;
};
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = [];

    const backtrack = (curCombo, open, close) => {
        if (curCombo.length === 2 * n) {
            res.push(curCombo);
            return;
        }


        if (open < n) {
            backtrack(curCombo + "(", open + 1, close);
        }

        if (close < open) {
            backtrack(curCombo + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);

    return res;
};
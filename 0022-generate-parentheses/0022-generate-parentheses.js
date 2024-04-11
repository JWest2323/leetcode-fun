/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let stack = [], res = [];
    
    const backtrack = (open, close) => {
        if (open == close && close == 0) {
            res.push(stack.join(''));
            return;
        }
        if (open > 0) {
            stack.push('(');
            backtrack(open - 1, close);
            stack.pop();
        }
        if (close > open) {
            stack.push(')');
            backtrack(open, close - 1);
            stack.pop();
        }
    }
    backtrack(n, n);
    return res;
};
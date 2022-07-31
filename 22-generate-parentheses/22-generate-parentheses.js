/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n === 0) return [];
    let open = 1, close = 0, res = []; // track init open and close count, and create res arr for return
    // define backtracking func
    function backtrack(o, c, curSeq, max) {
        if (curSeq.length === 2 * max) { // partial sol found, push to res & return
            res.push(curSeq);
            return;
        }
        if (o < max) { // valid if open < max
            backtrack(o + 1, c, curSeq + '(', max);
        }
        if (c < o) { // valid if close < open
            backtrack(o, c + 1, curSeq + ')', max);
        }
    }
    // call our backtrack func w curSeq = '('
    backtrack(open, close, '(', n);
    return res;
};
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    
    const generate = (open, close, str) => {
        if (!open && !close && str.length) return res.push(str);
        if (open) generate(open - 1, close, str + '(');
        if (close > open) generate(open, close - 1, str + ')');
    }
    
    generate(n, n, '');
    
    return res;
};
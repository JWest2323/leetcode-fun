/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];

    const generate = (open, close, curCombo) => {
        if (open === 0 && close === 0) {
            res.push(curCombo);
            return;
        }
        
        if (open > close) return;
        if (close > 0 && open == 0) {
            curCombo += ')', generate(open, close - 1, curCombo);
            return;
        };
        
        curCombo += '(', generate(open - 1, close, curCombo);
        
        curCombo = curCombo.split('').slice(0, curCombo.length - 1).join('')
        
        curCombo += ')', generate(open, close - 1, curCombo);
        return;
    }

    generate(n, n, '');
    return res;
};
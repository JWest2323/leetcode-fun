/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let n = s.length, open = 0, close = 0;
    let stack = [];

    for (let idx = 0; idx < n; idx++) {
        if (s[idx] === '(' || s[idx] === '{' || s[idx] === '[' ) {
            open++;
            stack.push(s[idx]);
        } else {
            close++;
            let mostRecent = stack.pop();
            if (mostRecent === '(' && s[idx].charCodeAt() !== 41 || 
                mostRecent === '{' && s[idx].charCodeAt() !== 125 ||
                mostRecent === '[' && s[idx].charCodeAt() !== 93 ) {
                    return false;
                }
        }
        if (close > open) return false;
    }
    return stack.length ? false : true;
};
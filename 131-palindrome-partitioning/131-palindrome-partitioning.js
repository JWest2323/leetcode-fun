/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    if (!s) return []; // input handler
    let res = [], curPart = []; // create res & current partition arrays
    // define recursive helper func
    function dfs(idx) {
        if (idx >= s.length) { // if we reach the end of the string, push a copy of curPart & ret
            res.push(Array.from(curPart.slice()));
            return;
        }
        // if not at end of string, check if all chars in range of idx & s.length isPalin
        for (let j = idx; j < s.length; j++) {
            if (isPali(s, idx, j)) {
                curPart.push(s.slice(idx, j + 1));
                dfs(j + 1);
                curPart.pop();
            }
        
        }
    }
    function isPali(s, l, r) {
        while (l < r) {
            if (s[l] != s[r]) return false;
            l++, r--;
        }
        return true;
    }
    
    dfs(0);
    return res;
};
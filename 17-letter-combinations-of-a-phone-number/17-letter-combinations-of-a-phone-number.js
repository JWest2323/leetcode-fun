/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return []; // input handler
    let res = []; // create res arr 
    
    // create a digit to char map
    const map = {   2: "abc",
                    3: "def",
                    4: "ghi",
                    5: "jkl",
                    6: "mno",
                    7: "pqrs",
                    8: "tuv",
                    9: "wxyz" }
    
    // define recursive helper func
    function dfs(curStr, idx) {
        if (curStr.length == digits.length) { // if we build a string the length of digits push & return
            res.push(curStr);
            return;
        }
        // loop thru every char assoc. w current digit
        for (const char of map[digits[idx]]) {
            dfs(curStr + char, idx + 1);
        }
    }
    // call dfs using empty string and 0 index to start
    dfs("", 0); 
    return res;                                 
};
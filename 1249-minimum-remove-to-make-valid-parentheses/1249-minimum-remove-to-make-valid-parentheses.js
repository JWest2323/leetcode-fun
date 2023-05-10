/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    s = s.split("");
    let stack = [];

    for (let idx = 0; idx < s.length; idx++) {
        // push to stack for each open parentheses
        if (s[idx] === "(")
            stack.push(idx);
        else if (s[idx] === ")") {
            // iff we are at a close and stack !empty, pop from stack
            if (stack.length) stack.pop();
            // else no matching open parentheses, set spot in s to empty char
            else s[idx] = ""; 
        }
    }

    // loop remaining elements for unmatched open parentheses
    for (let idx of stack) s[idx] = ""; // set spot in s to empty char

    // return the joined valid string s
    return s.join("");
};
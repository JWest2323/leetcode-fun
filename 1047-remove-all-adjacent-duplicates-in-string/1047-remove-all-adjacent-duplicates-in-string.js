/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    if (!s || s == "") return "";
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if (char !== stack[stack.length - 1]) {
            stack.push(char);
        } else {
            stack.pop();
        }
    }
    return stack.join("");
};
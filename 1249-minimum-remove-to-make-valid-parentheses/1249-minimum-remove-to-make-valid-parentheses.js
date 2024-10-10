/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = [];
    let splitStr = s.split('');

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char == '(') {
            stack.push(i);
        } else if (char == ')') {
            if (!stack.length) {
                splitStr[i] = '';
            } else {
                stack.pop();
            }
        }
    }

    for (let i = 0; i < stack.length; i++) {
        let charIdx = stack[i];
        splitStr[charIdx] = '';
    }

    return splitStr.join('');
};
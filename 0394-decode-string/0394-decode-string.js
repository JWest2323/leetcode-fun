/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    for (let char of s) {
        if (char != ']') {
            stack.push(char);
            continue;
        }
        let curChar = stack.pop();
        let innerString = '';
        while (curChar != '[') {
            innerString = curChar + innerString;
            curChar = stack.pop();
        }
        curChar = stack.pop();
        let multi = '';
        while (!isNaN(curChar)) {
            multi = curChar + multi;
            curChar = stack.pop();
        }
        stack.push(curChar);
        stack.push(innerString.repeat(Number(multi)));
    }
    return stack.join('');
};
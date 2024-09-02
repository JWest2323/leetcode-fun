/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let indexesToRemove = new Set();
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(i);
        } else if (s[i] == ')') {
            if (!stack.length) 
                indexesToRemove.add(i);
            else 
                stack.pop();
        }
    }


    while (stack.length != 0) {
        indexesToRemove.add(stack.pop());
    }
    
    let res = [];
    for (let i = 0; i < s.length; i++) {
        if (!indexesToRemove.has(i)) {
            res.push(s[i]);
        }
    }
    return res.join('');
};
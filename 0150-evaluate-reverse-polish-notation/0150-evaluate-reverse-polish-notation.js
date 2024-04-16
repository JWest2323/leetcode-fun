/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    
    const eval = (op1, op2, operator) => {
        let res;
        if (operator == '+') {
            res = op1 + op2;
        } else if (operator == '-') {
            res = op1 - op2;
        } else if (operator == '*') {
            res = op1 * op2;
        } else if (operator == '/') {
            res = Math.trunc(op1 / op2);
            
        }
        return res;
    }
    
    for (let token of tokens) {
        if (!isNaN(token)) {
            stack.push(token)
        } else {
            let op2 = stack.pop(), op1 = stack.pop();
            stack.push(eval(Number(op1), Number(op2), token));
        }
    }
    return stack[0];
};
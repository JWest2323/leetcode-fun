/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []; // create stack var
    for (let token of tokens) { // read in one element at a time
        if (token !== '+' && token !== '-' && token !== '*' && token !== '/') {
            stack.push(Number(token)); // if not an operator push to stack 
        } else {
            let op2 = stack.pop(); // store our operands, maintaining left to right for computing sum
            let op1 = stack.pop();
            let sum = 0;
            switch (token) { // based on operand perform computation
                case ('+'):
                    sum = op1 + op2;
                    break;
                case ('-'):
                    sum = op1 - op2;
                    break;
                case ('*'):
                    sum = op1 * op2;
                    break;
                case ('/'):
                    sum = op1 / op2;
                    if (sum >= 0) sum = Math.floor(sum);  // round down if sum pos, else round up if sum neg
                    else sum = Math.ceil(sum);
                    break;
            }
            stack.push(sum); // push sum to stack
        }
    }
    return stack[0]; // ret first el in stack as final res
};
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []; // create stack var
    for (let token of tokens) { // read in one element at a time
        if (token === "+") {
            stack.push(stack.pop() + stack.pop()); // pop off two most recent and push their sum
        } else if (token === "-") {
            let b = stack.pop(), a = stack.pop(); // maintain order of two most recent pops
            stack.push(a - b); // push their difference 
        } else if (token === "*") {
            stack.push(stack.pop() * stack.pop()); // pop off two most recent and push their product
        } else if (token === "/") {
            let b = stack.pop(), a = stack.pop(); // maintain order of two most recent pops
            if ((a / b) >= 0) {
                stack.push(Math.floor(a / b)); // push the quotient, rounded down to nearest whole
            } else {
                stack.push(Math.ceil(a / b)); // push the quotient, rounded up to nearest whole
            }
            
        } else {
            stack.push(Number(token)); // operator, typecast to int
        }
    }
    return stack[0]; // ret first el in stack as final res
};
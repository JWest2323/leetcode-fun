/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const calc = (i = 0) => {
        let res = 0, prev = 0, num = 0, op = '+';
        // iterate entire len of s 
        for (; i < s.length; i++) {
            // store current char in s
            const c = s[i];
            // c is a simple number
            if (!isNaN(c)) {
                num = num * 10 + parseInt(c); // build num char by char moving 10s place each update
            }
            // c is a operation or we're at end of the string
            if (isNaN(c) || i === s.length - 1) {
                // check if c is opening bracket
                if (c === '(') ({num, i} = calc(i + 1)); // if so, recursively call calc func
                
                // check if we came across operands on prev loop
                if (op === '+') {
                    res += prev;
                    prev = num;
                } else if (op === '-') {
                    res += prev;
                    prev = -num;
                } else if (op === '/') {
                    prev = Math.trunc(prev / num); // divide our curr num by most recent prev
                } else if (op === '*') {
                    prev = prev * num; // multiply our curr num by most recent prev
                }
                num = 0; // reset num for next loop
                op = c // store c val as op for next loop

                // handle recursive exits only on closing brackets
                if (c === ')') return {i, num: res + prev};
            }   
        }
        return res + prev;
    }
    return calc();
};
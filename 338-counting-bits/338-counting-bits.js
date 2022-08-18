/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let res = new Array(n + 1).fill(0); // init res arr w 0s
    let offset = 1; // init offset to 1 to 
    // loop from 1 to n + 1 to fill res arr
    for (let i = 1; i < n + 1; i++) {
        if (offset * 2 === i) { // for every 2 bits, update offset
            offset = i;
        }
        res[i] = 1 + res[i - offset]; // use prev count results to calc ith bit count
    }
    return res;
};
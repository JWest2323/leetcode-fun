/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let res = [0];
    
    // loop the num of bits, n
    for (let i = 0; i < n; i++) {
        // on each loop store res.length
        let start = res.length;
        // using start - 1, decre. to 0
        for (let j = start - 1; j > -1; j--) {
            // on each loop append start + our signif. bit
            res.push(res[j] + start);
        }
    }
    return res;
};
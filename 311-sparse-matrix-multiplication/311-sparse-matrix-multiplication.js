/**
 * @param {number[][]} mat1
 * @param {number[][]} mat2
 * @return {number[][]}
 */
var multiply = function(mat1, mat2) {
    if (mat1.length == 0 || mat1[0].length == 0 || mat2.length == 0 || mat2[0].length == 0) return []; // input handler
    
    let m = mat1.length, k = mat1[0].length, n = mat2[0].length; // store mat1 rows x cols and mat2 cols
    let res = new Array(m).fill(0).map(() => new Array(n).fill(0)); // create product matrix of mat1.rows x mat2.cols
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < k; j++) {
            if (mat1[i][j] === 0) continue; // if true, all products result in 0, therefore skip to increase t.c.
            for (let z = 0; z < n; z++) {
                res[i][z] += mat1[i][j] * mat2[j][z]; // compute matrix mult.
            }
        }
    }
    return res;
};
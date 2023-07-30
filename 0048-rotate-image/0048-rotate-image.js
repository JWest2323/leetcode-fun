/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;
    // start for loop from matrix[last row][first col]
    for (let row = n - 1; row >= 0; row--) {
        for (let col = 0; col < n; col++) {
            // shift from cur row
            let item = matrix[row].shift();
            // push to cur col
            matrix[col].push(item);
        }
    }
};
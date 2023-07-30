/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let l = 0, r = matrix.length - 1;
    
    while (l < r) {
        for (let idx = 0; idx < r - l; idx++) {
            let top = l, bottom = r;
            
            let topLeft = matrix[top][l + idx];
            // move bottom left to top left
            matrix[top][l + idx] = matrix[bottom - idx][l];
            
            // move bottom right to bottom left
            matrix[bottom - idx][l] = matrix[bottom][r - idx];
            
            // move top right to bottom right
            matrix[bottom][r - idx] = matrix[top + idx][r];
            
            // move top left to top right
            matrix[top + idx][r] = topLeft;
        }
        l++, r--;
    }
};
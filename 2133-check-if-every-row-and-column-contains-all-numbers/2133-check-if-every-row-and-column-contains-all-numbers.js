/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    let n = matrix.length;
    let rows = new Map(), cols = new Map();
    
    for (let idx = 0; idx < n; idx++) {
        rows.set(idx, new Set());
        cols.set(idx, new Set());
    }
    
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            
            let curVal = matrix[r][c];
            
            if (rows.get(r).has(curVal) || cols.get(c).has(curVal)) return false;
       
            rows.get(r).add(curVal);
            cols.get(c).add(curVal);
        }
    }
    return true;
};
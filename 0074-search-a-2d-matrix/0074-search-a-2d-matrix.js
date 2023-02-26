/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // empty matrix, ret false
    if (!matrix.length) return false;
    
    let start = 0, end = matrix.length - 1;
    let midRow = Math.floor((start + end) / 2);
    // perform bin search on rows to find targetRow
    while (start <= end) {
        midRow = Math.floor((start + end) / 2);
        if (matrix[midRow][0] === target)
            return true; // if target found in first idx, return true
        else if (matrix[midRow][0] > target)
            end = midRow - 1;
        else start = midRow + 1;
    }
    
    // check if our midRow is over target 
    if (matrix[midRow][0] > target)
        midRow--;
    // if midRow was the first row than we are OOB, ret false
    if (midRow < 0) return false;
    
    // reset start & end using midRow
    start = 0, end = matrix[midRow].length - 1;
    // perform bin search on cols of midRow
    while (start <= end) {
        let midCol = Math.floor((start + end) / 2);
        if (matrix[midRow][midCol] === target)
            return true; // if target found, return true
        else if (matrix[midRow][midCol] > target)
            end = midCol - 1;
        else start = midCol + 1;
    }
    // target not found, ret false
    return false;
};
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 1 - we know m & n is arbitrarily small
 
 */
var exist = function(board, word) {
    let rows = board.length, cols = board[0].length;
    
    function backtrack(r, c, idx) {
        if (idx == word.length) return true;
        if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] != word[idx]) return false;
        
        board[r][c] = '*'; // mark as visited
        if(backtrack(r + 1, c, idx + 1) || // backtrack in up, down, left, right directions
           backtrack(r - 1, c, idx + 1) || 
           backtrack(r, c + 1, idx + 1) || 
           backtrack(r, c - 1, idx + 1)) return true;
        board[r][c] = word[idx]; // reset spot on board
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) { // traverse the entire board and recursively call backtrack once first char found
           if(board[r][c] === word[0] && backtrack(r, c, 0)) return true; 
        }
    }
    return false;
};
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let rows = board.length, cols = board[0].length; // store board dimensions
    let dirs = [[1,-1], [1,0], [1,1], [0,-1], [0,1], [-1,-1], [-1,0], [-1,1]]; // create directions arr
    
    for (let r = 0; r < rows; r++){
        for (let c = 0; c < cols; c++) {
            let aliveCount = 0;
            for (let dir of dirs) {
                if (dir[0] + r < 0 || dir[0] + r >= rows || dir[1] + c < 0 || dir[1] + c >= cols) continue; // OOB
                if (board[dir[0] + r][dir[1] + c] == 1 ||
                    board[dir[0] + r][dir[1] + c] == 2) aliveCount++; // incre if we find a unvisited 1 or visited 2    
            }
            if (board[r][c] == 0 && aliveCount == 3) board[r][c] = 3; // set board in terms of next state, if 0 => 3 
            if (board[r][c] == 1 && (aliveCount < 2 || aliveCount > 3)) board[r][c] = 2;  // if 1 && aliveCount OOB => 2
        }
    }
    // transform board back to 0 & 1 using modulo 2 
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            board[i][j] %= 2; // 2 % 2 ==> 0 && 3 % 2 ==> 1
        }
    }
};
// T.C. O(8 * m * n), 8 dirs, m rows, n cols
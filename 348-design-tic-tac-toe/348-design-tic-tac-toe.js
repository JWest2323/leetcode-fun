/**
 * @param {number} n
 */
var TicTacToe = function(n) {
    this.len = n; // store length of move needed to win
    this.rows = new Array(n).fill(0); // track n rows
    this.cols = new Array(n).fill(0); // track n cols
    this.posDiag = 0; // counter to track the positive diagonal
    this.negDiag = 0; // counter to track the negative diagonal
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    const val = player === 1 ? 1 : -1; // use +1 or -1 increment to track who is making move
    this.rows[row] += val ; // incre/decre spot in rows arr for given player
    this.cols[col] += val; // incre/decre spot in cols arr for given player
    if (row === col) this.posDiag += val; // if row == col, incre posDiag
    if (col === this.len - row - 1) this.negDiag += val; // if col == inverse row, incre negDiag
    
    if (Math.abs(this.rows[row]) === this.len ||
       Math.abs(this.cols[col]) === this.len ||
       Math.abs(this.posDiag) === this.len ||
       Math.abs(this.negDiag) === this.len
       ) return player; // if any of our winning conditions are met, return player
        
    return 0;
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    if (!n) return [];
    let res = [];
    let cols = new Set(), posDiag = new Set(), negDiag = new Set(); // crate sets to be used to check if spot valid or not
    let board = Array.from({length: n}, () => new Array(n).fill(".")); // create an nxn board w n ...'s
    
    function backtrack (r) {
        if (r == n) { // if rows == n, flatten curr board and push to res
            let flattendBoard = [];
            for (let i = 0; i < n; i++) {
                flattendBoard.push(board[i].toString().replaceAll(',', '')); // convert every row to string and remove all ','
            }
            res.push(flattendBoard);
            return;
        }
        // if not at last row, check all cols < n until we find a volid spot to place next Q
        for (let c = 0; c < n; c++) {
            if (cols.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) continue; // if not a valid spot, continue
            // if spot valid, mark the cols, posDiag, & negDiag in resp. sets
            cols.add(c);
            posDiag.add(r + c);
            negDiag.add(r - c);
            
            board[r][c] = "Q"; // set curr spot w Q
            
            // call backtrack and increment by 1 row
            backtrack(r + 1);
            
            // remove prev additions to sets after breaking out of backtrack
            cols.delete(c);
            posDiag.delete(r + c);
            negDiag.delete(r - c);
            board[r][c] = ".";
        }
    }
    backtrack(0); // call backtrack on 0th row
    return res; // return res
};
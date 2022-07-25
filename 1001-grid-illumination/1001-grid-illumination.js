/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function(n, lamps, queries) {
    const makeHash = (row , col) => `${row} - ${col}`; // create hashing func for storing keys
    let res = [], lampSet = new Set(); // create res arr and set to store lamps currently lit
    let lit = {row: {}, col: {}, posD: {}, negD: {}}; // create hashmap to track lit lamps
    
    // loop thru lamps arr to store lit lamps by hash using heler func
    for (const [row, col] of lamps) !lampSet.has(makeHash(row, col)) && addLamp(row, col); 
    // loop thru queries to check for lit lamps
    for (const [row, col] of queries) {
        if (lit.row[row] || lit.col[col] || lit.posD[row + col] || lit.negD[col - row]) {
            res.push(1) && turnOffAdj(row, col); // if the cell at this spot lit, push 1 & call helper
        } else res.push(0); // else push 0
    }
    return res;
    // define addLamp helper func
    function addLamp(row, col) {
        lampSet.add(makeHash(row, col));
        lit.row[row] = (lit.row[row] || 0) + 1;
        lit.col[col] = (lit.col[col] || 0) + 1;
        lit.posD[row + col] = (lit.posD[row + col] || 0) + 1; // use r + c to define positive diagnal
        lit.negD[col - row] = (lit.negD[col - row] || 0) + 1; // use c - r to define negative diagnal
    }
    // define deleteLamp helper func to remove lamp from set and update hashmap
    function deleteLamp(row, col) {
        lampSet.delete(makeHash(row, col));
        lit.row[row]--, lit.col[col]--, lit.posD[row + col]--, lit.negD[col - row]--;
    }
    // define turnOffAdj helper func to check at most the 8 adj lamps that need to be turned off
    function turnOffAdj(startRow, startCol) {
        for (let i = startRow - 1; i <= startRow + 1; i++) 
            for (let j = startCol - 1; j <= startCol + 1; j++)
                lampSet.has(makeHash(i, j)) && deleteLamp(i, j);
    }
};
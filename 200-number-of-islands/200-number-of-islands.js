/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid) return 0; // if null grid ret 0
    const WATER = '0', LAND = '1'; // predefine water & land
    const DIR = [[1, 0], [0, 1], [0, -1], [-1, 0]]; // up row, up col, down row, down col
    
    function bfs (grid, r, c) {
        let q = [[r, c]];
        grid[r][c] = WATER;
        while (q.length > 0) {
            let numOfNbrs = q.length;
            for (let i = 0; i < numOfNbrs; i++) {
                let [row, col] = q.pop();
                
                for (let [x, y] of DIR) {
                    let nRow = row + x;
                    let nCol = col + y;
                    if (nRow < 0 || nRow >= grid.length   || 
                        nCol < 0 || nCol > grid[0].length || 
                        grid[nRow][nCol] !== LAND) { // if new direction = OOB or !LAND: continue through DIRs
                        continue;
                    }
                    grid[nRow][nCol] = WATER; // set to water so we dont revisit
                    q.unshift([nRow, nCol]); // add to front of q to bfs next
                }
            }
        }
    }
    
    let numOfIslands = 0; // create ret var
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === LAND) { // if we come across LAND    
                numOfIslands++; // increment counter
                bfs(grid, i, j); // check all neighbors
            }
        }
    }
    return numOfIslands;
};
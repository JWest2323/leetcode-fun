/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    if (!grid) return 0;
    
    const rows = grid.length, cols = grid[0].length;
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // create dirs arr to check 4 nbrs
    const vis = new Set(); // track visited nodes in grid
    vis.add(`0-0-${k}`); // init visit set w (0, 0) vertex and given k hashed
    
    let moves = 0, q = [[0, 0, k]]; // init moves counter and q w starting pos, k
    while (q.length > 0) {
        let newMoves = [];
        while (q.length > 0) {
            let [x, y, elimsLeft] = q.pop();
            if (x === rows - 1 && y === cols - 1) return moves;
            for (let dir of dirs) {
                let row = x + dir[0], col = y + dir[1];
                if (row < 0 || col < 0 || row >= rows || col >= cols || (grid[row][col] === 1 && elimsLeft === 0)) continue; // if OOB or no elims left
                let newElims = grid[row][col] === 1 ? elimsLeft - 1 : elimsLeft;
                let key = `${row}-${col}-${newElims}`; // hash the vertex in grid along w elims
                if (!vis.has(key)) { // check if we've visited vertex before
                    vis.add(key); 
                    newMoves.push([row, col, newElims]); // push valid nbr to newMoves
                }
            }
        }
        q = newMoves; // store valid nbrs in q
        moves++; // incre moves counter
    }
    return -1; // return if no valid path found
};
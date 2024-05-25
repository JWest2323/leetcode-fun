/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let res = 0, vis = new Set();
    let m = grid.length, n = grid[0].length;
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    const dfs = (row, col) => {
        if (row < 0 || col < 0 || row >= m || col >= n ||
            vis.has(`${row}-${col}`) || grid[row][col] == 0)
                return;
        vis.add(`${row}-${col}`);
        for (let [x, y] of dirs) {
            let xDir = row + x, yDir = col + y;
            if (!vis.has(xDir-yDir))
                dfs(xDir, yDir);
        }
    }
    
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] == 1 && !vis.has(`${r}-${c}`)) {
                dfs(r, c);
                res++;
            }
        }
    }
    
    return res;
};
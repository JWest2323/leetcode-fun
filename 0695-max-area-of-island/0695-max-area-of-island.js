/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let res = 0, m = grid.length, n = grid[0].length;

    const dfs = (row, col) => {
        if (row < 0 || row >= m || col < 0 || col >= n || grid[row][col] == '*' || grid[row][col] == 0)
            return 0;
        
        grid[row][col] = '*';
        
        return (1 + dfs(row + 1, col) +
                    dfs(row - 1, col) +
                    dfs(row, col + 1) +
                    dfs(row, col - 1));
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            res = Math.max(dfs(r, c), res);
        }
    }
    return res;
};
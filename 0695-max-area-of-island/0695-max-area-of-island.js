/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let res = 0;
    let m = grid.length, n = grid[0].length;

    const dfs = (row, col, curArea) => {
        if (row < 0 || col < 0 || row >= m || col >= n || grid[row][col] != 1)
            return 0;

        grid[row][col] = "*";

        curArea += 1 + dfs(row + 1, col, curArea) + dfs(row - 1, col, curArea) 
                    + dfs(row, col + 1, curArea) + dfs(row, col - 1, curArea);
        
        return curArea;
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] == 1) {
                let curArea = dfs(r, c, 0);
                res = Math.max(res, curArea);
            }
        }
    }
    return res;
};
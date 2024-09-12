/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let m = grid.length, n = grid[0].length;
    let islands = 0;

    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] != 1)
            return;
        grid[i][j] = "*";

        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] == 1) {
                dfs(row, col);
                islands++;
            }
        }
    }
    return islands;
};
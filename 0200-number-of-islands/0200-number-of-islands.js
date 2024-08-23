/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let res = 0, m = grid.length, n = grid[0].length;
    let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] != 1) {
            return;
        }

        grid[i][j] = '*';

        for (let [x, y] of dirs) {
            let nextRow = i + x;
            let nextCol = j + y;
            dfs(nextRow, nextCol);
        }
    }

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
             if (grid[row][col] == 1) {
                dfs(row, col);
                res++;
             }
        }
    }
    return res;
};
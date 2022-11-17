/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let m = grid.length, n = grid[0].length;
    let max = 0;
    
    function dfs (i, j) {
        // if OOB ret 0
        if (i < 0 || j < 0 || i >= m || j >= n || !grid[i][j]) return 0; 
        // implicitly mark spot
        grid[i][j] = 0;
        // ret 1 + dfs on 4 dirs
        return (1 + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1));
    }
    // traverse grid using dbl for
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) // if spot in grid == 1
                max = Math.max(max, dfs(i, j)); // update max by calling dfs
        }
    }
    
    return max;
};
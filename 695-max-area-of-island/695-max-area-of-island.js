/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    // init res var and store grid dimensions 
    let res = 0, n = grid.length, m = grid[0].length;
    // define dfs helper func
    function dfs (i, j) {
        // if dfs goes OOB or doesn't find LAND, return 0
        if (i < 0 || j < 0 || i >= n || j >= m || !grid[i][j]) return 0;
        grid[i][j] = 0; // mark curr spot as visited
        return 1 + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1); // ret 1 + dfs in 4 dirs
    }
    // traverse grid using nested for loop
    for (let i = 0; i < n; i++)
        for (let j = 0; j < m; j++)
            if (grid[i][j]) res = Math.max(res, dfs(i, j)); // if we find land, calc res using dfs 
    
    return res; // return res
};
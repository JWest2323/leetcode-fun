/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let m = grid.length, n = grid[0].length;
    let islands = 0;
    
    function dfs (r, c) {
        if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] !== '1')
            return;
        grid[r][c] = '0';
        
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }
    
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] == '1')
                islands++;
                dfs(r, c);
        }
    }
    
    return islands;
};
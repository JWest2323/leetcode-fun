/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let dirs = [[-1,0], [1,0], [0,-1], [0,1]];
    const WATER = '0', LAND = '1';
    
    function bfs(grid, r, c) {
        let q = [[r, c]];
        grid[r][c] = WATER;
        while (q.length > 0) {
            let size = q.length;
            for (let i = 0; i < size; i++) {
                let [row, col] = q.pop();
                
                for (let [x, y] of dirs) {
                    let newRow = row + x;
                    let newCol = col + y;
                    
                    if (newRow < 0 || newRow >= grid.length || newCol < 0 ||
                        newCol >= grid[0].length || grid[newRow][newCol] !== LAND) {
                        continue;
                    }
                    grid[newRow][newCol] = WATER; 
                    q.unshift([newRow, newCol]);
                }
            }
        }
    }
    
    let islands = 0;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === LAND) {
                islands++;
                bfs(grid, r, c);
            }
        }
    }
    return islands;
};
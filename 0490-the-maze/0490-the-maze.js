// /**
//  * @param {number[][]} maze
//  * @param {number[]} start
//  * @param {number[]} destination
//  * @return {boolean}
//  */
var hasPath = function(maze, start, dest) {
    // create dirs arr to check directions
    let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    // implicitly mark start node as visited
    maze[start[0]][start[1]] = '*';
    
    function dfs(maze, start, dest) {
        let [origRow, origCol] = start;
        
        for (let dir of dirs) {
            let row = origRow, col = origCol;
            while ( row + dir[0] >= 0 
                    && row + dir[0] < maze.length
                    && col + dir[1] >= 0
                    && col + dir[1] < maze[0].length
                    && maze[row + dir[0]][col + dir[1]] !== 1) {
                row += dir[0];
                col += dir[1];
                if (maze[row][col] == '*') break;
            }
            if (row == origRow && col == origCol ||
                maze[row][col] == '*') continue;
            
            maze[row][col] = '*'
            if (row == dest[0] && col == dest[1])
                return true;
            
            const possible = dfs(maze, [row, col], dest);
            if (possible) return true;
        }
        return false;
    }
    
    return dfs(maze, start, dest);
};
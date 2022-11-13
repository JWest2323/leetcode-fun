// /**
//  * @param {number[][]} maze
//  * @param {number[]} start
//  * @param {number[]} destination
//  * @return {boolean}
//  */
// var hasPath = function(maze, start, dest) {
//     // create dirs arr to check directions
//     let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
//     // implicitly mark start node as visited
//     maze[start[0]][start[1]] = '*';
    
//     function dfs(maze, start, dest) {
//         let [origRow, origCol] = start;
        
//         for (let dir of dirs) {
//             let row = origRow, col = origCol;
//             while ( row + dir[0] >= 0 
//                     && row + dir[0] < maze.length
//                     && col + dir[1] >= 0
//                     && col + dir[1] < maze[0].length
//                     && maze[row + dir[0]][col + dir[1]] !== 1) {
//                 row += dir[0];
//                 col += dir[1];
//                 if (maze[row][col] == '*') break;
//             }
//             if (row == origRow && col == origCol ||
//                 maze[row][col] == '*') continue;
            
//             maze[row][col] = '*'
//             if (row == dest[0] && col == dest[1])
//                 return true;
            
//             const possible = dfs(maze, [row, col], dest);
//             if (possible) return true;
//         }
//     }
    
//     return dfs(maze, start, dest);
// };

const hasPath = (maze, start, destination) => {
    maze[start[0]][start[1]] = 2;
    return dfs(maze, start, destination);    
};

// 0-up 1-down 2-left 3-right
const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

const dfs = (maze, start, destination) => {
    const [origRow, origCol] = start;
    
    for(const dir of dirs) {
        let row = origRow;
        let col = origCol;
        
        // throw a ball, see if we hit a wall
        while(
            row + dir[0] >= 0
            && row + dir[0] < maze.length
            && col + dir[1] >= 0
            && col + dir[1] < maze[0].length
            && maze[row + dir[0]][col + dir[1]] !== 1
        ) {
            row += dir[0];
            col += dir[1];
            if(maze[row][col] === 2) break; // I hit a visited path
        }
        // couldn't move, try next
        if(
            row === origRow && col === origCol
            || maze[row][col] === 2
        ) continue;
        
        maze[row][col] = 2; // visited
        
        if(row === destination[0] && col === destination[1] ) return true;
        
        const possible = dfs(maze, [row, col], destination);
        if(possible) return true;
    }
    
    // none of my attempts found target
    return false;
}
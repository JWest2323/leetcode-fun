/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let vis = new Set(), provs = 0;
    
    function dfs (isConnected, i, visited) {
        visited.add(i);
        for (let j = 1; j < isConnected.length; j++) {
            if (isConnected[i][j] && !vis.has(j)) {
                dfs(isConnected, j, visited);
            }
        }
    }
    
    for (let i = 0; i < isConnected.length; i++) {
        if (!vis.has(i)) {
            dfs(isConnected, i, vis);
            provs++;
        }
    }
    
    return provs;
};
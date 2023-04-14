/**
 * @param {number[][]} edges
 * @return {number[]}
 * O(n^2) time complexity, n = edges.length
 */
var findRedundantConnection = function(edges) {
    let adjList = {};
    
    const dfs = (cur, target, prev) => {
        if (cur === target) return true;
        for (let nbr of adjList[cur]) {
            // if nbr != prev & cur == target on next dfs call, return true denoting cycle
            if (nbr !== prev && dfs(nbr, target, cur)) return true;
        }
        // no cycles detected yet, return false
        return false;
    }
    
    // loop each edge in edges arr
    for (let [a, b] of edges) {
        // if node !exist in adjList yet, init []
        if (!adjList[a]) adjList[a] = [];
        if (!adjList[b]) adjList[b] = [];
        
        // push respective edges
        adjList[a].push(b);
        adjList[b].push(a);
        
        // for each new added edge, make dfs call w a node as target, if true, cycle detected, return edge
        if (dfs(b, a, a)) return [a, b]
    }
};
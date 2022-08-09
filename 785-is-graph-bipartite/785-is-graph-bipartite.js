/**
 * @param {number[][]} graph
 * @return {boolean}
 */
// XOR : bitwise OR
var isBipartite = function(graph) {
    let n = graph.length;
    let color = Array(n).fill(-1); // fill an arr of size n with -1
    // define dfs func that takes in node u and a bool
    function dfs (u, c) {
        if (color[u] == c) return true; // if color at node u == bool val, ret true
        if (color[u] == (c^1)) return false; // if color at node u == (bool val XOR 1), ret false
        color[u] = c; // set bool val for node u in color
        let adj = graph[u] || []; // set adj list using graph
        for (let v of adj) { // check all nodes in adj
            if (!dfs(v, c^1)) return false; // if any nbrs return false using XOR, return false
        }
        return true;
    }
    for (let i = 0; i < n; i++) {
        if (color[i] === -1) { // if i at colors unvisited
            if (!dfs(i, 0)) return false; // check color at i and resp nbrs using false
        }
    }
    return true;
};
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    if (edges.length + 1 > n) return false;
    
    let graph = Array.from({length: n}, () => []);
    
    for (let [edge1, edge2] of edges) {
        graph[edge1].push(edge2);
        graph[edge2].push(edge1);
    }
    
    let vis = new Array(n).fill(false);
    
    const dfs = (node) => {
        if (vis[node]) return;
        vis[node] = true;
        graph[node].forEach(nbr => dfs(nbr));
    }
    dfs(0);
    
    return vis.every(node => node === true);
};
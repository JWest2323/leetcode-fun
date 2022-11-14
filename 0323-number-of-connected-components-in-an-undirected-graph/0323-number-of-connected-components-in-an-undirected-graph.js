/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    let vis = new Array(n).fill(false);
    
    function buildGraph(n, edges) {
        let graph = Array.from({length: n}, () => []);
        for (let edge of edges) {
            let [src, dst] = edge;
            graph[src].push(dst);
            graph[dst].push(src);
        }
        return graph;
    }
    
    let graph = buildGraph(n, edges);
    let res = 0;
    
    function dfs(idx, graph, visited) {
        visited[idx] = true;
        let nodes = graph[idx];
        for (let i = 0; i < nodes.length; i++) {
            if (!visited[nodes[i]])
                dfs(nodes[i], graph, visited);
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!vis[i])
            res++;
            dfs(i, graph, vis);
    }
    return res;    
};
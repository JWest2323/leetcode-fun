/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    let n = graph.length;
    let color = new Array(n).fill(-1);
    
    function dfs(node) {
        for (let nbr of graph[node]) {
            if (color[nbr] === color[node]) return false;
            if (color[nbr] === -1) {
                color[node] == 0 ? color[nbr] = 1 : color[nbr] = 0;
                if (!dfs(nbr)) return false;
            }
        }
        return true;
    }
    
    for (let v = 0; v < n; v++) {
        if(color[v] == -1){
            color[v] = 0;
            if (!dfs(v)) return false;
        }
    }
    return true;
};
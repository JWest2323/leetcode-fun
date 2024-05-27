/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    let n = graph.length;
    let color = new Array(n).fill(-1);
    
    for (let start = 0; start < n; start++) {
        if (color[start] === -1) {
            let stack = [start];
            color[start] = 0;
            
            while(stack.length > 0) {
                let node = stack.pop();
                let nbrs = [...graph[node]];
                for (let nbr of nbrs) {
                    if (color[nbr] === -1) {
                        stack.push(nbr);
                        color[nbr] = color[node] ^ 1;
                    } else if (color[nbr] === color[node]) {
                        return false;
                    }
                } 
            }
        }
    }
    return true;
};
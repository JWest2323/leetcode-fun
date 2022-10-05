/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let graph = new Map();
    edges.forEach(([a, b]) => {
        if (!graph.has(a)) graph.set(a, []);
        if (!graph.has(b)) graph.set(b, []);
        
        graph.get(a).push(b);
        graph.get(b).push(a);
    })
    let vis = [], q = [source];
    while (q.length > 0) {
        let cur = q.shift();
        if (cur == destination) return true;
        vis[cur] = true;
        graph.get(cur).forEach((nbr) => {
            if (!vis[nbr]) q.push(nbr);
        });
    }
    return false;
};
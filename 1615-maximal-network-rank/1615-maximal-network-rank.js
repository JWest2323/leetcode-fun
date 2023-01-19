/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    if (n < 2) return 0;
    let graph = new Map();
    let res = 0;
    
    for (let road of roads) {
        let [city1, city2] = road;
        if (!graph.has(city1)) graph.set(city1, new Set());
            
        if (!graph.has(city2)) graph.set(city2, new Set());
        
        graph.get(city1).add(city2);
        graph.get(city2).add(city1);
    }
    let nbrs = [...graph.entries()];
    nbrs.sort((a, b) => b[1].size - a[1].size);
    
    let rank = 0;
    for (let i = 0; i < nbrs.length; i++) {
        let cityOne = nbrs[i][0];
        for (let j = i + 1; j < nbrs.length; j++) {
            let cityTwo = nbrs[j][0]; 
            rank = graph.get(cityOne).size + graph.get(cityTwo).size;
            if (graph.get(cityOne).has(cityTwo)) rank--;
            res = Math.max(res, rank);
        }
        
    }   
    
    return res;
};
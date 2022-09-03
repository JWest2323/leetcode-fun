/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const map = equations.reduce((result, [a, b], idx) => {
        const value = values[idx];
        const valueA = result.get(a) ?? [];
        const valueB = result.get(b) ?? [];
        
        valueA.push([b, value]);
        valueB.push([a, 1 / value]);
        result.set(a, valueA);
        result.set(b, valueB);
        return result;
    }, new Map());
    
    const dfs = ([a, b], vis = new Set(), cur = 1) => {
        if (!map.has(a) || !map.has(b)) return -1; // check map to determine if start and end exist in map
        if (a === b) return cur; // if start & end ===, ret 1
        const vals = map.get(a); // store A vals in vals arr
        vis.add(a); // add a to vis set
        // loop each key/val pairs 
        for (const [key, val] of vals) {
            if (vis.has(key)) continue; // if key already visited, continue
            const nextVal = cur * val; // calc nextVal
            
            const res = dfs([key, b], vis, nextVal); // use key & nextVal to make dfs call & calc res
            if (res !== null) return res;
        }
        return null;
    };
    
    return queries.map(item => dfs(item) ?? -1); // perform dfs on each key/val or item in queries, ret -1 if null
};
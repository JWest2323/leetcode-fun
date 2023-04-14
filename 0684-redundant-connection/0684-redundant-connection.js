/**
 * @param {number[][]} edges
 * @return {number[]}
 * O(n) time complexity, n = edges.length
 */
var findRedundantConnection = function(edges) {
    // init disjoint set data structure
    let uf = {};
    // find parent set
    function find (x) {
        // if no parent, set x as parent
        if (!uf[x]) uf[x] = x;
        // if parent exist && equal to x, return x
        if (uf[x] === x) return x
        
        return find(uf[x]); // else find parent of parent
    }
    // set union of two sets
    function union (x, y) {
        // call find on both x and y, & set lower parent's subparent to higher parent
        uf[find(x)] = uf[find(y)];
    }
    // loop edges arr
    for (let [a, b] of edges) {
        if (find(a) === find(b)) return [a, b]; // if two edges parents are ===, return edge
        else union(a, b); // else call union
    }
};
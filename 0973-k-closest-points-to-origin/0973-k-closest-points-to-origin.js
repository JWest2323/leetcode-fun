/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let res = [], dists = new Map();
    let idx = 0;
    for (let [x, y] of points) {
        let dist = Math.sqrt(Math.pow((x - 0), 2) + Math.pow((y - 0), 2));
        dists.set(idx, dist);
        idx++;
    }
    
    let sortedEntries = [...dists.entries()].sort((a, b) => a[1] - b[1]);
    
    while (k > 0) {
        let closest = sortedEntries.shift()[0];
        res.push(points[closest]);
        k--;
    }
    return res;
}; 
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {    
    let res = [], distMap = new Map();
    
    for (let [x, y] of points) {
        let dist = Math.pow(x, 2) + Math.pow(y, 2);
        distMap.set([x,y], dist);
    }
    let sortedDistances = [...distMap.entries()].sort((a, b) => b[1] - a[1]);
    
    while (k > 0) {
        res.push(sortedDistances.pop()[0]);
        k--
    }
    
    return res;
};
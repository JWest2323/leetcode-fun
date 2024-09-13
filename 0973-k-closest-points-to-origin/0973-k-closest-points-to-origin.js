/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let distMap = new Map(), res = [];

    for (let idx = 0; idx < points.length; idx++) {
        let [x, y] = points[idx];
        let distance = Math.pow(x, 2) + Math.pow(y, 2);

        if (!distMap.has(distance)) distMap.set(distance, []);
        distMap.get(distance).push(idx);
    }

    let sortedEntries = [...distMap.entries()].sort((a, b) => b[0] - a[0]);
    
    while (k > 0) {
        let [dist, indices] = sortedEntries.pop();
        for (let i = 0; i < indices.length; i++) {
            res.push(points[indices[i]]);
            k--;
            if (!k) break;
        }
    }

    return res;
};
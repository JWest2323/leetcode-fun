/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let minHeap = new MinPriorityQueue(); // create min heap var
    for (const p of points) {
        let dist = Math.sqrt(p[0] * p[0] + p[1] * p[1]); // calc dist. from origin for each point 
        minHeap.enqueue(p, dist);// store in min heap using [x,y] and dist.
    }
    let res = []; // create res var
    while (k > 0) {
        res.push(minHeap.dequeue().element); // pop from min heap k times & push [x,y] to res
        k--;
    }
    return res;
};
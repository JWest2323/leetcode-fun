/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let maxHeap = new MaxPriorityQueue(), res = [];
    
    for (let [x, y] of points) {
        let d = x * x + y * y;
        maxHeap.enqueue([x, y], d);
        if (maxHeap.size() > k)
            maxHeap.dequeue();
    }
    
    while (maxHeap.size())
        res.push(maxHeap.dequeue().element);
    
    return res;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let pq = new MinPriorityQueue();
    for (let num of nums) {
        pq.enqueue(num);
        if (pq.size() > k) {
            pq.dequeue();
        }
    }
    return pq.front().element;
};

var MedianFinder = function() {
    // init our lo half as maxHeap/PQ
    this.lo = new MaxPriorityQueue();
    // init our hi half as minHeap/PQ
    this.hi = new MinPriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
    O(5 * logn) worst case t.c. 
 */

MedianFinder.prototype.addNum = function(num) {
    // on each add, enqueue to hi queue
    this.hi.enqueue(num);
    // dequeue hi's smallest & enqueue to lo queue
    this.lo.enqueue(this.hi.dequeue().element);
    
    // if lo queue gets larger than hi, rebalance by sending largest val from lo to hi
    if (this.hi.size() < this.lo.size()) {
        this.hi.enqueue(this.lo.dequeue().element);
    }
};

/**
 * @return {number}
    O(1) worst case t.c.
 */
MedianFinder.prototype.findMedian = function() {
    // if our input was of an odd length, simply return front element from hi queue
    if (this.hi.size() > this.lo.size()) {
        return this.hi.front().element;
    } else {
        // else add front elements from both queues, divide by 2, & return 
        return ((this.lo.front().element + this.hi.front().element) / 2);
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
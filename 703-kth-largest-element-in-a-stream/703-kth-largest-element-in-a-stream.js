/**
 * @param {number} k
 * @param {number[]} nums
 */
// create minHeap using class and store elements of nums
var KthLargest = function(k, nums) {
    this.minHeap = new MinHeap(k);
    for (let n of nums) this.minHeap.add(n);
};

/** 
 * @param {number} val
 * @return {number}
 */
// add val to minHeap and return minHeap[0]
KthLargest.prototype.add = function(val) {
    this.minHeap.add(val);
    return this.minHeap.peek();
};
// instantiate MinHeap class with size and minHeap array
function MinHeap(size) {
    this.size = size;
    this.minHeap = [];
}
// add to MinHeap while maintaining the property
MinHeap.prototype.add = function(val) {
    let heap = this.minHeap;
    if (heap.length < this.size) { // if heap.length < k 
        heap.push(val);
        let i = heap.length - 1; // store index and new val
        let parent = (i - 1)/2 | 0; // calc parent 
        while (parent >= 0 && heap[i] < heap[parent]) { // continue swapping until min heap property satisfied
            swap(heap, parent, i);
            i = parent;
            parent = (parent - 1)/2 | 0;
        }
    } else if(heap[0] < val) { // if val larger than heap[0], reset and heapify
        heap[0] = val;
        this.heapify(0);
    }
}
// MinHeap function to convert arr to minHeap
MinHeap.prototype.heapify = function(i) {
    let heap = this.minHeap;
    let n = heap.length;
    let l = 2 * i+1, r = 2 * i+2;
    let smallest = i; // track index of smallest
    if (l < n && heap[smallest] > heap[l]) smallest = l; // if within bounds of heap & smallest > l, reset index to l
    if (r < n && heap[smallest] > heap[r]) smallest = r; // if within bounds of heap & smallest > r, reset index to r
    if (smallest != i) { // if smallest was changed, perform swap and recursively call heapify on new smallest
        swap(heap, smallest, i);
        this.heapify(smallest);
    }
}
// MinHeap function to return current kth largest
MinHeap.prototype.peek = function() {
    return this.minHeap[0];
}
// swap function
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
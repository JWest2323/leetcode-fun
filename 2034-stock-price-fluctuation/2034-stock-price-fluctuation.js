
var StockPrice = function() {
    // create min heap var
    this.minHeap = new MinPriorityQueue({
        compare: (a,b) => a.price > b.price,
    });
    // create max heap var
    this.maxHeap = new MaxPriorityQueue({
        compare: (a,b) => a.price < b.price,
    });
    // create a prices map to track prices
    this.prices = new Map();
    // create currPrice obj to use for return
    this.currPrice = {};
    
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
    this.prices.set(timestamp, price);
    this.minHeap.enqueue({ timestamp, price });
    this.maxHeap.enqueue({ timestamp, price });
    
    if (!this.currPrice.timestamp || this.currPrice.timestamp <= timestamp) { // if currPrice null or more recent timestamp update 
        this.currPrice = {timestamp, price};
    }
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
    return this.currPrice.price;
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
    let front = this.maxHeap.front(); // get most recent max obj
    while (this.prices.get(front.timestamp) !== front.price) { // if most recent max price and timestamp assoc dont match  
        this.maxHeap.dequeue(); // dequeue from max heap
        front = this.maxHeap.front(); // update front var to next max
    }
    return front.price; // ret front.price
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
    let front = this.minHeap.front(); // get most recent min obj
    while (this.prices.get(front.timestamp) !== front.price) { // while price and timestamp dont match
        this.minHeap.dequeue(); // dequeue from min heap
        front = this.minHeap.front(); // update front var to next min
    }
    return front.price; // ret front.price
};

/** 
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */
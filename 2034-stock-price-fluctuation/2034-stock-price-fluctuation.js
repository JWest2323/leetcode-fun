
var StockPrice = function() {
    this.stocksPrice = [];
    this.timeStamps = [];
    this.lastPrice = [0,0];
    this.max = Number.NEGATIVE_INFINITY;
    this.min = Number.POSITIVE_INFINITY;
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
    let idx = this.timeStamps.indexOf(timestamp); // check if timestamp was prev seen using indexOf
    if (idx === -1) { // if not found
        this.timeStamps.push(timestamp);
        this.stocksPrice.push(price);
        this.max = Math.max(this.max, price); // use curr price to set max
        this.min = Math.min(this.min, price); // use curr price to set min
    } else { // timestamp found
        if (this.max === this.stocksPrice[idx] || this.min === this.stocksPrice[idx]) { // check if this was a prev max/min
            this.stocksPrice[idx] = price; 
            this.max = Math.max(...this.stocksPrice); // use entire stocksPrice arr to set max
            this.min = Math.min(...this.stocksPrice); // use entire stocksPrice arr to set max
        } else { // was not a prev max/min but timestamp still found
            this.stocksPrice[idx] = price; 
            this.max = Math.max(this.max, price); // use curr price to set max
            this.min = Math.min(this.min, price); // use curr price to set min
        }
    }
    if (timestamp >= this.lastPrice[0]) this.lastPrice = [timestamp, price]; // if curr timestamp greater than lastPrice, update
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
    return this.lastPrice[1];
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
    return this.max;
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
    return this.min;
};

/** 
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */
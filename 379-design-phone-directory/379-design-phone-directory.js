/**
 * @param {number} maxNumbers
 */
var PhoneDirectory = function(maxNumbers) {
    // use a set to store all available numbers on init
    this.len = maxNumbers;
    this.set = new Set();
    while (maxNumbers--) this.set.add(maxNumbers);
};

/**
 * @return {number}
 */
PhoneDirectory.prototype.get = function() {
    // use set size to check if any nums available, else retrieve one, remove from set, and return num
    if (this.set.size === 0) return -1;
    const num = this.set.values().next().value;
    this.set.delete(num);
    return num;
};

/** 
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function(number) {
    return this.set.has(number);
};

/** 
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function(number) {
    // re-add number to set of available nums
    this.set.add(number);
};

/** 
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */
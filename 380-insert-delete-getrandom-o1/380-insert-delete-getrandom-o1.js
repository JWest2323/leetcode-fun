
var RandomizedSet = function() {
    this.map = new Map(); // map var to track vals and their resp. idx
    this.list = []; // list to store by idx and assist with delete
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) return false; // if val already exist in map, ret false
    this.map.set(val, this.list.length); // store val in map and idx using list.length
    this.list.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) return false; // if val !exist in map, ret false
    let idx = this.map.get(val);
    this._swap(idx, this.list.length - 1); // call helper func to swap with element at end of list
    this.list.pop(); // pop to remove
    this.map.set(this.list[idx], idx); // set new [val, idx] following swap & pop
    this.map.delete(val); // remove [val, idx] from map
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.list[Math.floor(Math.random() * this.list.length)];
};

RandomizedSet.prototype._swap = function(a, b) {
    let temp = this.list[a];
    this.list[a] = this.list[b];
    this.list[b] = temp;
}

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var TimeMap = function() {
    this.map = new Map(); // instantiate hashmap 
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.map.has(key)) this.map.set(key, []);  // if not already present in map, set
    this.map.get(key)[timestamp] = value; // add value to arr based on key
    
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.map.has(key)) return ''; // if key not present in map ret empty string
    const vals = this.map.get(key); // create an arr to store vals and timestamps for key
    if (vals[timestamp]) return vals[timestamp]; // if exact timestamp found return
    while (timestamp-- > -1) { // else decrease timestamp to check for earlier call
        if (vals[timestamp]) return vals[timestamp];
    }
    return ''; // if none found ret empty string
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
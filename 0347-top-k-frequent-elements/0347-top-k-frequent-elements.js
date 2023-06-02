/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    
    for (let num of nums) {
        // for each new element found, init val to 1, else incre by 1
        !map.has(num) ? map.set(num, 1) : map.set(num, map.get(num) + 1);
    }
    
    // sort [key,val] of map by largest freq
    let sortedEntries = [...map.entries()].sort((a, b) => b[1] - a[1]);
    
    //init res arr for return
    let res = [];
    
    // shift from sortedEntries k times
    while (k > 0) {
        res.push(sortedEntries.shift()[0]); // push k most freq num to res arr
        k--;
    }
    
    return res;
    
};
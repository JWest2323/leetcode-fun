/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let res = [], numsFreq = new Map();
    
    for (let num of nums) {
        numsFreq.set(num, numsFreq.get(num) + 1 || 1);
    }
    
    let sortedEntries = [...numsFreq.entries()].sort((a, b) => a[1] - b[1]);
    
    while (k > 0) {
        res.push(sortedEntries.pop()[0]);
        k--;
    }
    return res;
};
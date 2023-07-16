/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let res = [], q = [], map = new Map();
    
    // count the frequency of values
    for (let num of nums) {
        if (!map.has(num)) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num) + 1);
        }
    }
    
    q = [...map.entries()]; // store entries of map in q
    q.sort((a, b) => b[1] - a[1]); // sort q in decending order
    
    // shift off q k times and push to res
    for (let i = 0; i < k; i++) {
        res.push(q.shift()[0]);
    }
    // return res
    return res;
};
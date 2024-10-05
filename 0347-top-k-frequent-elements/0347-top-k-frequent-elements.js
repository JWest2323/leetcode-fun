/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let counter = new Map();

    for (let num of nums) 
        counter.set(num, counter.get(num) + 1 || 1);
    
    let sorted = [...counter.entries()].sort((a, b) => b[1] - a[1]);

    return sorted.slice(0, k).map(el => el[0]);
};
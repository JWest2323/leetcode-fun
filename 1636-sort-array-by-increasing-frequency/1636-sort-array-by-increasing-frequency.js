/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let map = new Map();
    for (let n of nums) {
        map.set(n, (map.get(n) || 0) + 1); // store val freq in map
    }
    return nums.sort((a, b) => {
        if (map.get(a) === map.get(b)) return b - a; // if freq equal, sort by larger val
        else return map.get(a) - map.get(b); // else sort by larger freq
    })
};
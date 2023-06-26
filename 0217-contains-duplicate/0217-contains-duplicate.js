/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let distinct = new Set();
    
    for (let num of nums) {
        if (!distinct.has(num)) {
            distinct.add(num);
        } else {
            return true;
        }
    }
    
    return false;
};
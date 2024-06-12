/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let dupl= new Set();
    
    for (let i = 0; i < nums.length; i++) {
        if (dupl.has(nums[i])) 
            return true;
        dupl.add(nums[i]);
        
        if (dupl.size > k) {
            dupl.delete(nums[i - k]);
        }
    }
    return false;
};
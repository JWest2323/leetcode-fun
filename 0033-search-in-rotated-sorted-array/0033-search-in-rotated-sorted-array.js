/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length - 1;
    
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] == target) return mid;
        
        // nums[mid] in the left sorted portion
        if (nums[l] <= nums[mid]) {
            if (target > nums[mid] || target < nums[l])
                l = mid + 1;
            else 
                r = mid - 1;
            
        // nums[mid] in the right sorted portion
        } else {
            if (target < nums[mid] || target > nums[r]) 
                r = mid - 1;
            else 
                l = mid + 1;
        }
    }
    return -1;
};
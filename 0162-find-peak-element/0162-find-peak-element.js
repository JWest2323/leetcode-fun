/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (mid > 0 && nums[mid] < nums[mid - 1]) {
            r = mid - 1;
        } else if (mid < nums.length - 1 && nums[mid] < nums[mid + 1]) {
            l = mid + 1;
        } else {
            return mid;
        }
    }
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n = nums.length;
    let l = 0, r = n - 1;
    
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] > nums[n - 1]) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    
    const binSea = (left, right, target) => {
        let l = left, r = right;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] > target) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return -1;
    }
    
    let res = binSea(0, l - 1, target);
    
    if (res != -1) return res;
    
    return binSea(l, n - 1, target)
};
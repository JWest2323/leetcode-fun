/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if (k > nums.length) return null; // check for invalid input
    k = nums.length - k; // reset k for sorted order
    // define helper func
    function quickSelect(l, r) {
        let pivot = nums[r]; // niavely set pivot to far right
        let p = l; // create p ptr to be used for swaps
        for (let i = l; i < r; i++) {
            if (nums[i] <= pivot) { // if next el <= pivot swap with p ptr
                let temp = nums[p];
                nums[p] = nums[i];
                nums[i] = temp;
                p++; // incre. ptr
            }
        }
        // swap rightmost el w pivot
        let temp = nums[p];
        nums[p] = nums[r];
        nums[r] = temp;
        // determine what side to call quickSelect on using k
        if (p > k) return quickSelect(l, p - 1); 
        else if (p < k) return quickSelect(p + 1, r); 
        else return nums[p]; // return kth largest
    }
    return quickSelect(0, nums.length - 1); // call and return quickSelect on entire nums arr
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const pivotHelper = (pivot, start, end) => {
         // move the pivot to the end (get it out of the way)
        swap(pivot, end);
        let i = start, j = start;

        // move smaller nums to the begining of the array
        while (j < end) {
            if (nums[j] <= nums[end])
                swap(i, j), i++;
            j++;
        }
        // swap pivot to its final position
        swap(i, end);
        return i;
    }
    const swap = (i, j) => {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    let finalIdx = nums.length - k;
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let pivot = Math.floor(Math.random() * (right - left + 1)) + left;
        let pivotIdx = pivotHelper(pivot, left, right);

        if (pivotIdx == finalIdx) return nums[finalIdx];

        if (pivotIdx < finalIdx) left = pivotIdx + 1;
        else right = pivotIdx - 1;
    }
};
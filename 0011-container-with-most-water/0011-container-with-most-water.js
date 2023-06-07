/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // two pointer approach starting at beginning and end of height arr
    let max = 0, l = 0, r = height.length - 1;

    // calc max area while ptrs havent crossed
    while (l < r) {
        let len = Math.min(height[l], height[r]); // use smaller of two lens
        let width = r - l; // use difference in idx to calc width
        
        // update max area
        max = Math.max(max, len * width)

        // pointer policy: move ptr w smaller height, if === move both
        if (height[l] < height[r]) { 
            l++;
        }
        else if (height[l] > height[r]) {
            r--;
        } else {
            l++, r--;
        }
    }

    return max;
};
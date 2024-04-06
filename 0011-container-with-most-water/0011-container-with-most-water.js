/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0, l = 0, r = height.length - 1;
    
    while (l < r) {
        let curArea = (Math.min(height[l], height[r])) * (r - l);
        res = Math.max(res, curArea);
        
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return res;
};
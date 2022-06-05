/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0, l = 0, r = height.length - 1; // create res var and l + r ptrs
    
    while (l < r) { 
        res = Math.max(res, Math.min(height[l], height[r]) * (r - l)); // compute or update res if we find a container w more water
        height[l] <= height[r] ? l++ : r--; // if l ptr's height is <= r ptr's height -> move l else move r
    }
    return res;
};
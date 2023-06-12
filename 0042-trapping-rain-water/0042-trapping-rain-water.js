/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l = 0, r = height.length - 1; // init l & r ptrs to 0 & height.length - 1 resp.
    let res = 0; // init res to 0
    let leftMax = 0, rightMax = 0; // init left & right max to 0
    // loop until ptrs cross
    while (l < r) {
        if (height[l] < height[r]) { // update whichever ptrs has smaller height
            // // if new bounded max found, update, else calc incre to res
            height[l] >= leftMax ? (leftMax = height[l]) : res += leftMax - height[l]; 
            l++; // incre l ptr
        } else {
            // if new bounded max found, update, else calc incre to res
            height[r] >= rightMax ? (rightMax = height[r]) : res += rightMax - height[r];
            r--; // decre r ptr
        }
    }
    // return res
    return res;
};
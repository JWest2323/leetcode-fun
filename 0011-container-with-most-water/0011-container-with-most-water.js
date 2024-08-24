/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0, r = height.length - 1, res = 0;

    while (l < r) {
        let curArea = (r - l) * Math.min(height[l], height[r]);
        res = Math.max(res, curArea);

        if (height[l] < height[r]) l++;
        else r--;
    }
    return res;
};
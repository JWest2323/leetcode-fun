/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (!height.length) return 0;
    let res = 0, n = height.length;
    let lMax = new Array(n), rMax = new Array(n);
    
    lMax[0] = height[0], rMax[n - 1] = height[n - 1];
    
    for (let i = 1; i < n; i++) 
        lMax[i] = Math.max(height[i], lMax[i - 1]);
    for (let i = n - 2; i >= 0; i--) 
        rMax[i] = Math.max(height[i], rMax[i + 1]);
    
    for (let i = 1; i < n; i++)
        res += Math.min(lMax[i], rMax[i]) - height[i];

    return res;
};
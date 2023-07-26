/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    heights.push(0);
    let res = 0, stack = [];
    
    for (let idx = 0; idx < heights.length; idx++) {
        let heightStart = idx;
        // while stack !empty && decreasing height found
        while (stack.length && stack[stack.length - 1][1] > heights[idx]) {
            // pop from stack, calc area, and update res
            let [pos, height] = stack.pop();
            res = Math.max(res, (idx - pos) * height);
            heightStart = pos; // update heightStart to pos
        }
        // push [heightStart idx, cur height] to stack
        stack.push([heightStart, heights[idx]]);
    }
    return res;
};
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let res = 0, stack = [];
    intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    
    for (let interval of intervals) {
        while (stack.length && stack[stack.length - 1] <= interval[0]) {
            stack.pop();
        }
        stack.push(interval[1]);
        res = Math.max(res, stack.length);
    }
    return res;
};
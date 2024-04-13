/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length == 1) return intervals;
    
    // sort intervals array by start
    intervals.sort((a, b) => a[0] - b[0]);
    
    // init res array w first sorted interval
    let res = [intervals[0]];
    
    // loop from idx = 1
    for (let [start, end] of intervals.slice(1)) {
        
        // if curr start > prev end: push cur start to res
        if (start > res[res.length - 1][1]) {
            res.push([start, end]);
            
        } else {
            
            // update prev end using cur end
            res[res.length - 1][1] = Math.max(end, res[res.length - 1][1]);
        }
    }
    return res;
};
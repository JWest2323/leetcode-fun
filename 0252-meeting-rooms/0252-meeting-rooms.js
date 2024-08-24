/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    
    for (let idx = 0; idx < intervals.length - 1; idx++) {
        let currEnd = intervals[idx][1];
        let nextStart = intervals[idx + 1][0];
        
        if (currEnd > nextStart) 
            return false;
    }
    return true;
};
/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if (!intervals[0]) return true; // if empty intervals, ret true
    intervals.sort((a,b) => {return a[0] - b[0]}); // sort by increasing start time
    
    // loop the start & end times of intervals
    for (let i = 0; i < intervals.length - 1; i++) {
        let end = intervals[i][1]; // store current end time
        let start = intervals[i + 1][0] // store next start time
        if (end > start) return false; // if end > prevStart, ret false
    }
    return true; // no overlap, return true
};
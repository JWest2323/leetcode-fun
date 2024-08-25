/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
    let res = [[1, intervals[0][1]]];
    
    for (let idx = 0; idx < intervals.length - 1; idx++) {
        let [curStart, curEnd] = intervals[idx];
        let [nextStart, nextEnd] = intervals[idx + 1];
        
        if (curEnd <= nextStart) {
            res[res.length - 1][1] = nextEnd; 
        } else {
            let roomIdx = 0;
            while (roomIdx < res.length) {
                if (nextStart >= res[roomIdx][1]) {
                    res[roomIdx][1] = nextEnd;
                    break;
                }
                roomIdx++;
            }
            if (roomIdx == res.length)
                res.push([res.length + 1, nextEnd])
        }
    }
    return res.length;
};
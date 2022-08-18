/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if (!intervals) return 0; // if empty arr, ret 0
    // sort intervals in ascend. order by start time, if equal use end time
    intervals.sort((a,b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);
    // create our minHeap to store end times/rooms in use
    let minHeap = [];
    
    // loop the elements in intervals arr
    for (let i = 0; i < intervals.length; i++) {
        let [start, end] = intervals[i]; // store curr start & end time
        if (!minHeap.length) minHeap.push(end); // if minHeap empty, push cur end time
        else {
            let nextAvailable = minHeap[0];
            if (start < nextAvailable) { // if curr start sooner than nextAvailable
                minHeap.push(end); // push curr end time to minHeap
                minHeap.sort((a,b) => a > b ? 1 : -1); // sort by end time
            } else { // else no new room needed
                minHeap[0] = Math.max(minHeap[0], end); // update nextAvailable
                minHeap.sort((a,b) => a > b ? 1 : -1); // sort by end time
            }
        }
    }
    return minHeap.length;
};
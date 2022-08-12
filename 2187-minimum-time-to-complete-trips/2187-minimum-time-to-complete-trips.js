/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    // perform binary search using min time of 1 and arbitrarily large max
    let lo = 1;
    let hi = Number.MAX_SAFE_INTEGER;
    let res = 0;
    // create helper isPossible func
    function isPoss(arr, totalTime, totalTrips) {
        let trips = 0; // counter var
        for (let oneTrip of arr) trips += Math.floor(totalTime / oneTrip); // calc trips completed  
        return trips >= totalTrips; // ret ? totalTrips completed
    }
    while (lo <= hi) {
        let timeTaken = Math.floor(lo + (hi - lo) / 2); // create first mid point for time needed
        if (isPoss(time, timeTaken, totalTrips)) {
            res = timeTaken; // set res as new min time needed
            hi = timeTaken - 1; // move hi ptr
        } else {
            lo = timeTaken + 1; // move lo ptr
        }
    }
    return res; // return min time needed
};
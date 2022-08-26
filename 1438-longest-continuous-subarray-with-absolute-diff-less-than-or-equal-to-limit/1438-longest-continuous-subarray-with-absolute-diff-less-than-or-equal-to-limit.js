/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let minQ = [], maxQ = []; // init min & max queues
    let start = 0, res = 0; // init a start & res counter vars to 0
    // loop the length of nums, using end counter
    for (let end = 0; end < nums.length; end++) {
        // store each num in nums
        let num = nums[end]; 
        // continue to check both queues for vals that break max & min property, if so pop()
        while (maxQ.length > 0 && maxQ[maxQ.length -1] < num) maxQ.pop();
        while (minQ.length > 0 && minQ[minQ.length - 1] > num) minQ.pop();
        // push cur num to both maxQ & minQ
        maxQ.push(num);
        minQ.push(num);
        if (maxQ[0] - minQ[0] > limit) { // if abs diff > limit
            if (maxQ[0] === nums[start]) maxQ.shift(); // if our starting window === maxQ[0], shift off
            if (minQ[0] === nums[start]) minQ.shift(); // if our starting window === minQ[0], shift off
            start++; // move start to update window
        }
        res = Math.max(res, end - start + 1); // update res using largest window length
    }
    return res;
};
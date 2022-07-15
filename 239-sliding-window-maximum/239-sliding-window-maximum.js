/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let res = [], q = []; // create ret array and mono q
    let l = 0, r = 0;
    // using r ptr, while loop the length of nums
    while (r < nums.length) {
        while(q.length > 0 && nums[q[q.length - 1]] < nums[r]) { // while the q exists and r points to val greater q.top
            q.pop(); // pop from right
        }
        q.push(r); // guarantees r points to val less than q[0]
        if (l > q[0]) q.shift(); // if our l ptr ever exceeds q[0], shift from left
        if (r + 1 >= k) { // once our min window has been met
            res.push(nums[q[0]]); // push every q[0] to res
            l++; //  incr l ptr
        }
        r++; // incr r ptr
    }
    return res;
};
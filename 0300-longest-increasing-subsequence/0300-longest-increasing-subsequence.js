/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // init dp arr of size nums.length and fill w 1 for smallest incre subseq
    let dp = new Array(nums.length).fill(1);
    
    // loop from 1 to length of nums
    for (let i = 1; i < nums.length; i++) {
        // loop from 0 to i 
        for (j = 0; j < i; j++) {
            if (nums[i] > nums[j]) { // if an increasing subseq found
                // update the spot in index of dp using math.max
                dp[i] = Math.max(dp[i], dp[j] + 1); 
            }
        }
    }
    // return largest value found in dp
    return Math.max(...dp);
};
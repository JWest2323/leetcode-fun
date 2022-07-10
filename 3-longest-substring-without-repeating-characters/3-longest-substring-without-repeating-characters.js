/**
 * @param {string} s
 * @return {number}
 */
// O(n) time complexity using sliding window technique
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0; // input handler
    let struct = new Set(); // create a set to check for duplicates
    let l = 0; // create left ptr for sliding window
    let max = 0; // create max ret var
   
    for (let r = 0; r < s.length; r++) {
        while (struct.has(s[r])) { // while s[r] is in set
            struct.delete(s[l]); // remove from the left until dupl removed
            l++; // increment l to update window
        }
        struct.add(s[r]); // no dupl in set, add cur char
        max = Math.max(max, r - l + 1); // recalculate max
    }
    return max; // return max once for loop complete
};
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0;
    let set = new Set(); // create set to store chars
    let l = 0, max = 0; // create l ptr for sliding win & max count var to track largest window
    for (let r = 0; r < s.length; r++) {
        while (set.has(s[r])) { // if dupl found
            set.delete(s[l]); // delete from set 
            l++; // shrink from left
        }
        set.add(s[r]); // no dupl in set, add s[r]
        max = Math.max(max, set.size); // recalc max using length of set
    }
    return max;
};
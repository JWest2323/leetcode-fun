/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = 0, window = new Set();
    let l = 0;
    
    for (let r = 0; r < s.length; r++) {
        let rightChar = s[r];
        if (!window.has(rightChar)) {
            window.add(rightChar);
            res = Math.max(res, r - l + 1);
        } else {
            while (window.has(rightChar)) {
                let leftChar = s[l];
                window.delete(leftChar);
                l++;
            }
            window.add(rightChar);
        }
    }
    return res;
};
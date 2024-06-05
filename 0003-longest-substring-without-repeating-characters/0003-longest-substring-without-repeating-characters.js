/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0;
    if (s.length === 1) return 1;
    
    let res = -Infinity, seen = new Set(s.charAt(0)), l = 0;
    
    for (let r = 1; r < s.length;) {
        while (!seen.has(s.charAt(r)) && r < s.length) {
            seen.add(s.charAt(r));
            res = Math.max(res, r - l + 1);
            r++;
        }
        
        while (seen.has(s.charAt(r)) && l < r) {
            seen.delete(s.charAt(l));
            l++;
        }
    }
    return res;
};
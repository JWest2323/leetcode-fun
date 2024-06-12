/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    let res = 0, l = 0, distincts = new Map(), n = s.length;
    
    for (let r = 0; r < n; r++) {
        distincts.set(s.charAt(r), (distincts.get(s.charAt(r)) + 1) || 1);
        
        while (distincts.size > k) {
            distincts.set(s.charAt(l), distincts.get(s.charAt(l)) - 1);
            if (distincts.get(s.charAt(l)) === 0) {
                distincts.delete(s.charAt(l));
            }
            l++;
        }
        res = Math.max(res, r - l + 1);
    }
    return res;
};
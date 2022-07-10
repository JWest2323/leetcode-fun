/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    // create l+r ptrs, maxFreq var, & hashmap to track character freq
    let l = 0, r = 0, maxFreq = 0, charFreq = new Map();
    
    while (r < s.length) {
        const char = s[r]
        charFreq[char] = charFreq[char] ? charFreq[char] + 1 : 1; // increment freq of char or init to 1
        if (charFreq[char] > maxFreq) maxFreq = charFreq[char]; // update our max freq
        
        while ((r - l + 1) - maxFreq > k) { // if our window exceeds our number of replacements, update from the left
            charFreq[s[l]]--;
            l++;
        }
        r++; // move r ptr
    }
    return r - l; // return the length of our window
};
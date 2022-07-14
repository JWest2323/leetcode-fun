/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const len1 = s1.length, len2 = s2.length;
    if (len1 > len2) return false; // if substring length > string ret false
    let count = new Array(26).fill(0); // init a count arr to 0 to track char count match (0 == match)
    for (i = 0; i < len1; i++) {
        count[s1.charCodeAt(i) - 97]++; // increment count for every char seen in s1 
        count[s2.charCodeAt(i) - 97]--; // decrement count for every char in len of s1
    }
    if (count.every(el => el === 0)) return true; // if every el in count == 0, we found substring ret true
    for (let i = len1; i < len2; i++) { // starting from len of s1, for loop s2
        count[s2.charCodeAt(i) - 97]--; // decrement count for every char included as we slide window
        count[s2.charCodeAt(i - len1) - 97]++; // increment count for every char removed as we slide window 
        if (count.every(el => el === 0)) return true;// if every el in count == 0, we found substring ret true
    }
    return false; // traversed entire length of s2, with no perms found, ret false
};
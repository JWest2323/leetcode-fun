/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    let sMap = new Map(), tMap = new Map();
    
    for (let char of s) {
        sMap.set(char, sMap.get(char) + 1 || 1);
    }
    
    for (let char of t) {
        tMap.set(char, tMap.get(char) + 1 || 1);
    }
    
    for (let char of s) {
        if (sMap.get(char) !== tMap.get(char)) return false;
    }
    
    return true;
};
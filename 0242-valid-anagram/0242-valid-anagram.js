/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   let sMap = new Map(), tMap = new Map();
    
    for (let char of s) {
        if (!sMap.has(char)) {
            sMap.set(char, 1);
        } else sMap.set(char, sMap.get(char) + 1);
    }
    
    for (let char of t) {
        if (!tMap.has(char)) {
            tMap.set(char, 1);
        } else tMap.set(char, tMap.get(char) + 1);
    }
    
    let sFreqArr = sMap.entries(), tFreqArr = tMap.entries();
    
    for (let [key, val] of sFreqArr) {
        if (val !== tMap.get(key)) return false;
    }
    
    for (let [key, val] of tFreqArr) {
        if (val !== sMap.get(key)) return false;
    }
    
    return true;
};
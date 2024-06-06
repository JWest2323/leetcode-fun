/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let res = '', freqMap = new Map();
    
    for (let char of s) {
        freqMap.set(char, freqMap.get(char) + 1 || 1);
    }
    
    let sortedEntries = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);
    
    for (let [char, count] of sortedEntries) {
        while (count > 0) {
            res += char;
            count--;
        }
    }
    
    return res;
};
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let charFreq = new Map(), res = '';
    
    for (let char of s) 
        charFreq.set(char, (charFreq.get(char) + 1) || 1);
    
    let sortedEntries = [...charFreq.entries()].sort((a, b) => b[1] - a[1]);
    
    for (let entry of sortedEntries) {
        let char = entry[0], freq = entry[1];
        while (freq > 0) 
            res += char, freq--;
    }
    
    return res;
};
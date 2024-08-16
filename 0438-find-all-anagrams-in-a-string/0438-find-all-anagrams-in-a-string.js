/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let sLen = s.length, pLen = p.length;
    if (pLen > sLen)
        return [];
    
    let sCount = new Map(), pCount = new Map();
    
    for (let char of p) 
        pCount.set(char, pCount.get(char) + 1 || 1);
    
    let res = [];
    for (let i = 0; i < sLen; i++) {
        let char = s[i];
        sCount.set(char, sCount.get(char) + 1 || 1);
        
        if (i >= pLen) {
            char = s[i - pLen];
            if (sCount.get(char) === 1)
                sCount.delete(char);
            else sCount.set(char, sCount.get(char) - 1);
        }
        if (sCount.size == pCount.size &&
            [...pCount.keys()].every((key) => sCount.get(key) === pCount.get(key))
           )
            res.push(i - pLen + 1);
    }
    return res;
};
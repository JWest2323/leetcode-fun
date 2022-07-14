/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let map = new Map();
    // use hashmap to count char freq of string t
    for (let i = 0; i < t.length; i++) {
        map.set(t[i], map.get(t[i]) + 1 || 1);
    }
    // create start & end vars, init minStart & minEnd to use for return, and map.size to store num of unique chars
    let start = 0, end = 0;
    let minStart = null, minEnd = null;
    let uniqueChars = map.size;
    
    while(end < s.length) { // traverse length of string s
        if (map.has(s[end])) { // if end char present in map, decre. count
            map.set(s[end], map.get(s[end]) - 1);
            if (map.get(s[end]) == 0) uniqueChars--; // if char count == 0, decre. uniqueChars
        }
        while (uniqueChars == 0 && start <= end) { // while all nec uniqueChars found & more chars in string s to traverse 
            if (minStart == null || minEnd - minStart > end - start) { // check for smaller window and update if nec
                minStart = start;
                minEnd = end;
            }
            if (map.has(s[start])) { // before moving start, check if start char in map
                map.set(s[start], map.get(s[start]) + 1); // if so incre. count
                if (map.get(s[start]) == 1) uniqueChars++; // if prev none, then update uniqueChars for new window
            }
            start++; // move start until uniqueChar removed or we reach end
        }
        end++; // move end length of string s
    }
    return minStart == null ? "" : s.substring(minStart, minEnd + 1); // if minStart never updated, ret "" else ret substring
};
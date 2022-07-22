/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    if (!paths) return [];
    let res = [], map = new Map();
    for (let p of paths) {
        let i = 0, j, k;
        while (p.charAt(i) !== ' ') i++; // incre i idx for next file to be read 
        let path = p.slice(0, i); // create path var using copy of p up to the file name
        for (j = ++i; i < p.length; i++) { // from start of each file name before increment of i
            if (p.charAt(i) === '(') k = i; // mark ending of file name using k idx
            else if (p.charAt(i) === ')') { // i idx has read in file content
                let pathFile = path + '/' + p.slice(j, k); // create pathfile using base path and p.slice from j to k 
                let content = p.slice(k+1, i); // create content for hashmap using copy from k+1 to i 
                if (!map.has(content)) {
                    map.set(content, [pathFile]);
                } else {
                    map.get(content).push(pathFile);
                }
                j = i + 2; // move j idx to next file in path using i
            }
        }
    }
    for (let v of map.values()) { // iterate hashmap values, checking for dupl
        if (v.length > 1) res.push(v); // if found, push to res
    }
    return res;
    
};
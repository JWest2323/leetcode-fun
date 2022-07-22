/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    if (!paths) return [];
    let res = [], map = new Map();
    for (let p of paths) {
        let i = 0, j, k;
        while (p.charAt(i) !== ' ') i++;
        let path = p.slice(0, i); // create root path copy non incl
        for (j = ++i; i < p.length; i++) { // from start of each file name before increment of i
            if (p.charAt(i) === '(') k = i; // mark ending of file name
            else if (p.charAt(i) === ')') {
                let pathFile = path + '/' + p.slice(j, k); // concatenate pathfile using non incl copy
                let content = p.slice(k+1, i); // copy content for hashmap
                if (!map.has(content)) {
                    map.set(content, [pathFile]);
                } else {
                    map.get(content).push(pathFile);
                }
                j = i + 2; // move to next file in path
            }
        }
    }
    for (let v of map.values()) {
        if (v.length > 1) res.push(v);
    }
    return res;
    
};
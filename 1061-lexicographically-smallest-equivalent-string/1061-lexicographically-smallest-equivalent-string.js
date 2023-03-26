/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    let union = new Map();

    // helper func to determine if we have found lexico smallest
    const unionFind = (target) => {
        let value = union.get(target) ?? target; // if union map returns null, set value = target
        // if value !== target call unionFind(value) else return value
        return value === target ? value : unionFind(value); 
    };

    // loop s1 and s2 to determine lexico sort using helper func 
    for (let idx = 0; idx < s1.length; idx++) {
        let a = unionFind(s1[idx]);
        let b = unionFind(s2[idx]);

        // if a < b: point b to a, else point a to b
        a < b ? union.set(b, a) : union.set(a, b);
    }

    // perform unionFind on each str of baseStr and append to res string for return
    return [...baseStr].reduce((res, str) => {
        return res + unionFind(str);
    },'');
};
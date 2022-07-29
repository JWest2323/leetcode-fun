/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    if (!n) return 0;
    let mod = 1e9 + 7;
    let dp = {'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1 };
    // loop n times to calc and store num of words formed in dp
    for (let len = 1; len < n; len++) {
        const {a, e, i, o, u} = dp; // use prev calc for next
        dp['a'] = e % mod;
        dp['e'] = (a + i) % mod;
        dp['i'] = (a + e + o + u) % mod;
        dp['o'] = (i + u) % mod;
        dp['u'] = a % mod;
    }
    return Object.values(dp).reduce((a,b) => a + b, 0) % mod; // return the total count % mod
};
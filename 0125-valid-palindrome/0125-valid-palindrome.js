/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s === '') return true;

    s = s.replace(/[^a-zA-Z0-9]/g, '');

    s = s.toLowerCase();
    
    let l = 0, r = s.length - 1;

    while (l < r) {
        if (s[l] !== s[r]) return false;
        l++, r--;
    }

    return true;
};
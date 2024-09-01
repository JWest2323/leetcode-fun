/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    s = s.split('');

    let canDelete = true, l = 0, r = s.length - 1;

    while (l < r) {
        if (s[l] == s[r]) {
            l++, r--;
        } else if (!canDelete) {
            return false;
        } else {
            canDelete = false;
            s.splice(r, 1);
            l = 0, r = s.length - 1;
        }
    }
    return true;
};
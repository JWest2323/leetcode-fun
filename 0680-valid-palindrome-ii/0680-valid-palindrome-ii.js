/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    const checkPali = (str, l, r) => {
        while (l < r) {
            if (str[l] !== str[r]) {
                return false;
            }
        }
        return true;
    }

    let l = 0, r = s.length - 1;

    while (l < r) {
        if (s[l] !== s[r])
            return (checkPali(s, l + 1, r) || checkPali(s, l, r - 1));
        l++, r--;
    }

    return true;
};
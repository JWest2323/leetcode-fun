/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    let p1 = 0, p2 = 0;
    let n = word.length, m = abbr.length;

    while (p1 < n && p2 < m) {
        if (!isNaN(abbr[p2])) {
            let move = '';
            while (!isNaN(abbr[p2])) move = move + abbr[p2++];
            p1 += Number(move);
        } else if (word[p1] !== abbr[p2]) {
            return false;
        } else {
            p1++, p2++;
        }
    }
    return p1 == word.length && p2 == abbr.length;
};
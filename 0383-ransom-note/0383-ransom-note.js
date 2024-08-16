/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let need = new Map(), have = new Map();

    for (let char of ransomNote) {
        need.set(char, need.get(char) + 1 || 1);
    }

    for (let char of magazine) {
        have.set(char, have.get(char) + 1 || 1);
    }

    let idx = 0;
    while (idx < ransomNote.length) {
        let curChar = ransomNote[idx];
        if (need.get(curChar) > have.get(curChar) || !have.has(curChar))
            return false;
        idx++
    }
    return true;
};
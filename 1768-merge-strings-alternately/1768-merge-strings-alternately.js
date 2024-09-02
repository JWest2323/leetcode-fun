/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res = [], i = 0, j = 0;

    while (i < word1.length && j < word2.length) {
        res.push(word1[i++]);
        res.push(word2[j++]);
    }

    while (i != word1.length) res.push(word1[i++]);
    while (j != word2.length) res.push(word2[j++]);

    return res.join('');
};
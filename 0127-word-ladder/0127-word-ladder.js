/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let len = beginWord.length;
    let combos = new Map();

    for (let word of wordList) {
        for (let i = 0; i < len; i++) {
            let newWord = word.substring(0, i) + '*' + word.substring(i + 1, len);
            if (!combos.has(newWord))
                combos.set(newWord, []);
            combos.get(newWord).push(word);
        }
    }

    let q = [[beginWord, 1]], vis = new Set();

    while (q.length) {
        let [word, level] = q.shift();
        for (let i = 0; i < len; i++) {
            let newWord = word.substring(0, i) + '*' + word.substring(i + 1, len);

            for (let adjWord of combos.get(newWord) || []) {
                if (adjWord === endWord)
                    return level + 1;
                if (!vi.has(newWord)) {
                    vis.add(newWord);
                    q.push([newWord, level + 1]);
                }
            }
        }
    }
    return 0;
};
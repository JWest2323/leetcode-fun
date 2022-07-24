/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
    const map = new Map();
    const aCharCode = 'a'.charCodeAt(0); // store char code of letter 'a'
    words.forEach(word => {
        let mask = 0; // init new mask for each word
        for (let i = 0; i < word.length; i++) { // for loop each char in word
            mask |= (1 << (word.charCodeAt(i) - aCharCode)); // compute mask using bitwise OR 
        }
        if (map.has(mask)) {
            map.set(mask, map.get(mask) + 1); // incre if mask exists already
        } else {
            map.set(mask, 1); // else set val to 1
        }
    });
    let res = []; // create ret arr
    for (let i = 0; i < puzzles.length; i++) { // for each word in puzzles
        res.push(0); // init valid word count to 0
        let curMask = 0; // create mask var for puzzles
        for (let j = 0; j < puzzles[i].length; j++) { // for each letter in puzzles[i]
            curMask |= (1 << (puzzles[i].charCodeAt(j) - aCharCode)); // generate curMask using bitwise OR
        }
        let firstLetter = 1 << (puzzles[i].charCodeAt(0) - aCharCode); // store bitmap of first letter of puzzles[i]
        let subset = curMask; // assign curMask to start for while
        while (subset > 0) {
            if((subset & firstLetter) === firstLetter && map.has(subset)){ // firstLetter match && sub exists in map
                res[i] += map.get(subset); // however many times we incre'd this subset in past = num of valid words
            }
            subset = (subset - 1) & curMask; // decre subset to only incl. chars that exist in curMask 
        }
    }
    return res;
};
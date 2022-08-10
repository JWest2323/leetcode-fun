/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    s = s.split(''); // seperate all chars
    let start = 0, end = s.length - 1;
    const regex = /[a-zA-Z]/g;
    while (start < end) {
        if (s[start].match(regex) === null) { // char at start not a valid letter
            start++;
            continue;
        }
        if (s[end].match(regex) === null) { // char at end not a valid letter
            end--;
            continue;
        }
        // perform swap
        let tmp = s[start];
        s[start] = s[end];
        s[end] = tmp;
        // move both start & end ptrs
        start++, end--;
    }
    return s.join(''); // rejoin all chars
};

/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    let len = palindrome.length; // store length of palindrome
    palindrome = palindrome.split(''); // seperate by char
    
    if (len === 1) return ''; // if given single char palindrome, ret ''
    
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (palindrome[i] !== 'a') { // if any char found thats not 'a', replace & return 
            palindrome[i] = 'a';
            return palindrome.join('');
        }
    }
    palindrome[len - 1] = 'b'; // given palindrome of all a's, change last char to 'b'
    return palindrome.join('');
};

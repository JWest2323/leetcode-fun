/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs) return ""; // if empty arr, ret empty string
    let prefix = strs[0]; // init prefix var to first string in strs
    // loop elements of strs
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) { // while prefix not found in element in strs
            prefix = prefix.slice(0, prefix.length - 1); // update prefix
            if (prefix.length == 0) return ""; // if prefix reduced to empty string, ret empty string
        }   
    }
    return prefix; // return our prefix
};
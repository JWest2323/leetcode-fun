/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (!strs) return [[""]]; // input handler
    let res = {};
    for (let str of strs) {
        let count = new Array(26).fill(0); // create a count arr to store char freq
        for (let char of str) count[char.charCodeAt() - 97]++; // convert each char to ascii value & incre its count
        let key = count.join("#"); // join values of count by # and store as key 
        res[key] ? res[key].push(str) : res[key] = [str]; // if key exists in set, push new str, else create new arr
    }
    return Object.values(res); // ret set as an array using values iterator
};
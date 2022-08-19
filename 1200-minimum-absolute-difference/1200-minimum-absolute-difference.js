/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    if (!arr) return [];
    let minAbsDiff = Infinity, res = []; // init minAbsDiff as large num & empty res arr
    arr.sort((a, b) => a - b); // sort arr in ascend. order
    // loop arr to calc minAbsDiff
    for (let i = 0; i < arr.length - 1; i++) {
        let currAbsDiff = arr[i + 1] - arr[i];
        minAbsDiff = Math.min(minAbsDiff, currAbsDiff);
    }
    // loop once more to see which adj elements === minAbsDiff
    for (let i = 0; i < arr.length - 1; i++) {
        if (minAbsDiff === arr[i + 1] - arr[i]) res.push([arr[i], arr[i + 1]]);
    }
    return res; 
};
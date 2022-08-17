/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b) => {return a - b}); // sort ascending order
    let minDiff = Infinity; // init maxDiff var
    let res = []; // init res arr
    // loop from idx 1 thru length of arr
    for (let i = 1; i < arr.length; i++) {
        let currDiff = arr[i] - arr[i - 1]; // calc a curr diff
        if (currDiff < minDiff) { // if < minDiff: reset res & update minDiff
            res = [];
            minDiff = currDiff;
        }
        if (currDiff == minDiff) res.push([arr[i - 1], arr[i]]); // if == : push to res
    }
    return res;
    
    
};
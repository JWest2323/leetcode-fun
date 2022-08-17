/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    if (!arr) return [];
    arr.sort((a,b) => {return a - b});
    let map = new Map();
    let minAbsDiff = Infinity;
    for (let i = 0; i < arr.length; i++) {
        let currAbsDiff = Math.abs(arr[i] - arr[i + 1]);
        if (currAbsDiff < minAbsDiff) minAbsDiff = currAbsDiff; 
        if (!map.has(currAbsDiff)) {
            map.set(currAbsDiff, []);
            map.get(currAbsDiff).push([arr[i], arr[i + 1]]);
        } else {
            map.get(currAbsDiff).push([arr[i], arr[i + 1]]);
        }
    }
    return map.get(minAbsDiff)
    
    
};
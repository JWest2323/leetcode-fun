/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function(data) {
    let minSwap = Infinity, ones = 0;
    data.forEach((bin) => {
        if (bin == 1) ones++
    });
    
    const countSwaps = (subarray) => {
        let swaps = 0;
        subarray.forEach((bin) => {
            if (bin == 0) swaps++;
        });
        return swaps; 
    }

    for (let idx = 0; idx <= data.length - ones; idx++) {
        let slice = data.slice(idx, idx + ones);
        minSwap = Math.min(minSwap, countSwaps(slice));
    }

    return minSwap;
};
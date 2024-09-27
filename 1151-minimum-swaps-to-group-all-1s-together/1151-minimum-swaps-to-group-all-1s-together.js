/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function(data) {
    let maxOnes = 0, totalOnes = 0, oneCount = 0;

    data.forEach((bin) => {
        if (bin) totalOnes++
    });

    let left = 0, right = 0;
    while (right < data.length) {
        oneCount += data[right++];
        if (right - left > totalOnes) {
            oneCount -= data[left++];
        }
        maxOnes = Math.max(maxOnes, oneCount);
    }

    return totalOnes - maxOnes;
};
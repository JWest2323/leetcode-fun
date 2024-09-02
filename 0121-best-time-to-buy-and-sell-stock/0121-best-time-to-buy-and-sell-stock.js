/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0, bestEntry = prices[0];

    for (let idx = 1; idx < prices.length; idx++) {
        if (prices[idx] < bestEntry) {
            bestEntry = prices[idx];
        } else {
            max = Math.max(max, prices[idx] - bestEntry);
        }
    }
    return max;
};
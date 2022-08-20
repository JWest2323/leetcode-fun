/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = -Infinity, firstBuy = prices[0];
    for (let price of prices) {
        let profit = price - firstBuy;
        if (max < profit) max = profit;
        if (firstBuy > price) firstBuy = price;
    }
    return max;
};
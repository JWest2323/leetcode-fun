/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let baskets = new Map(), l = 0, res = 0;

    for (let r = 0; r < fruits.length; r++) {
        baskets.set(fruits[r], (baskets.get(fruits[r] + 1)) || 1);

        while (baskets.size > 2) {
            baskets.set(fruits[l], baskets.get(fruits[l]) - 1);
            if (baskets.get(fruits[l]) === 0) 
                baskets.delete(fruits[l]);
            l++;
        }
        res = Math.max(res, r - l + 1)
    }
    return res;
};
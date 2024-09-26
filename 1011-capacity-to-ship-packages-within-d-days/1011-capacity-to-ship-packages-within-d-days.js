/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let maxWeight = Math.max(...weights);
    let totalWeight = 0;
    weights.forEach((weight) => totalWeight += weight);

    const feasible = (capacity, remainingDays) => {
        const originalCapacity = capacity;
        for (let weight of weights) {
            if (capacity - weight < 0) {
                remainingDays--;
                capacity = originalCapacity;
            } 
            if (!remainingDays) return false;
            capacity -= weight;
        }
        return true;
    }

    let l = maxWeight, r = totalWeight;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (feasible(mid, days)) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return l;
};
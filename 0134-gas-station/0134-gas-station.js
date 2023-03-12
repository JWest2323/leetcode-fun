/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    // init start idx, tank, and total trip cost to 0
    let start = 0, tank = 0, total = 0;
    
    // loop the length of the gas arr 
    for (let i = 0; i < gas.length; i++) {
        // compute each cost to next station
        const legCost = gas[i] - cost[i];
        
        // add cost to tank
        tank += legCost;
        
        // if cost > tank, reset tank and incre our start idx
        if (tank < 0) {
            tank = 0;
            start = i + 1;
        }
        
        // incre the total trip cost to track proof by contradiction
        total += legCost;
    }
    
    // if total < 0 no index can complete circuit, else return last start idx
    return total < 0 ? -1 : start;
};
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let curTank = 0, totalTank = 0, startPos = 0;
    for (let i = 0; i < gas.length; i++) {
        curTank += gas[i] - cost[i]; // calc if curTank enough for next station
        totalTank += gas[i] - cost[i]; // calc totalTank needed to complete circuit
        
        if (curTank < 0) { // if curTank not enough to make to next station, reset & update startPos
            curTank = 0;
            startPos = i + 1;
        }
    }
    return totalTank < 0 ? -1 : startPos; // if totalTank < 0 no startPositions found, else return startPos
};
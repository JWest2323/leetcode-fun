/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    if (!boxTypes || truckSize === 0) return 0;
    let unitCount = 0; // create return var
    boxTypes.sort((a, b) => b[1] - a[1]); // sort descend. based on numOfUnitsPerBox
    for (let boxType of boxTypes) {
        let boxCount = Math.min(boxType[0], truckSize); // set boxCount to min btwn curr numOfBoxes & remaining truckSize  
        unitCount += boxCount * boxType[1]; // incr. unitCount by total boxes
        truckSize -= boxCount; // decre. truckSize
        if (truckSize === 0) break;
    }
    return unitCount;
};
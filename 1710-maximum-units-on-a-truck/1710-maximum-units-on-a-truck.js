/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let bucket = []; // init bucket arr to perform bucket sort
    let total = 0; // init ret var
    // loop the els of boxTypes
    for (let i = 0; i < boxTypes.length; i++) {
        let [numBox, numUnit] = boxTypes[i];
        if (!bucket[numUnit]) bucket[numUnit] = numBox; // if new boxType, set numOfBoxes
        else bucket[numUnit] += numBox;                 // else incre. numOfUnits
    }
    // loop starting from end of bucket arr to target boxTypes with higher numUnit
    for (let numUnit = bucket.length - 1; numUnit >= 0; numUnit--) {
        if (!bucket[numUnit]) continue;
        let numBox = bucket[numUnit];                   // store num of boxes at curr numUnit
        if (truckSize >= numBox) {                      // check against truckSize
            total += (numBox * numUnit);
            truckSize -= numBox;
        } else {                                        // fill remaining space in truck & return
            total += (truckSize * numUnit);
            return total;
        }
    }
    return total;
};
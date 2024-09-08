/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    let mySet = new Set(), count = 0;

    arr1.forEach((value) => {
        let val = value.toString(), k = 0;
        while (k < val.length)
            k++, mySet.add(val.slice(0, k));
    });

    arr2.forEach((value) => {
        let val = value.toString(), k = 0;
        while (k < val.length) {
            k++;
            if (mySet.has(val.slice(0, k))) {
                mySet.delete(val.slice(0, k));
                if (count < k) count = k;
            }
        }
    });
    return count;
};
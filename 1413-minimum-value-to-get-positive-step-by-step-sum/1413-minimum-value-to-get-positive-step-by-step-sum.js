/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n * log(nm)) t.c. 
// log(nm) binary search and n loops of nums arr

var minStartValue = function(nums) {
    let n = nums.length, m = 100; // store nums.length & init safe max int val
    let l = 1, r = m * n + 1; // init l & r ptrs using m * n + 1 as upper bound
    
    while (l < r) {
        let mid = Math.floor(l + (r - l) / 2); // calc a midpoint to test as startVal
        let startVal = mid;
        let isValid = true;
        for (let num of nums) {
            startVal += num;
            if (startVal < 1) { // check if startVal went neg. 
                isValid = false;
                break; // stop for loop
            }
        }
        if (isValid) r = mid; // update r ptr to check for smaller startVal
        else l = mid + 1; // update l to check for larger startVal
    }
    return l; // return l or minStartVal
};
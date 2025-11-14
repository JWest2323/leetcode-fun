/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let l = 1, r = Math.max(...piles);
    let res = r;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        let time = 0;
        for (let pile of piles) 
            time += Math.ceil(pile / mid);
        
        if (time <= h) {
            res = Math.min(res, mid);
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return res;
};
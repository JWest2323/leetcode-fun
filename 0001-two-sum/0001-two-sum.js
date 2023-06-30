/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let compMap = new Map();

    for (let idx = 0; idx <= nums.length; idx++) {
        let val = nums[idx];
        if (!compMap.has(val)) {
            compMap.set(target - val, idx);
        } else {
            let compIdx = compMap.get(val);
            return [compIdx, idx];
        }
    }
};
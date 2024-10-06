/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums.length == 1) return nums;
    
    let zeroIdxs = [];
    for (let index = 0; index < nums.length; index++) {
        let num = nums[index];
        if (!num) zeroIdxs.push(index);
    }
    let targetIdx = nums.length - zeroIdxs.length + 1;

    const move = (zeroIdxs) => {
        console.log(zeroIdxs)
        while (zeroIdxs.length) {
            let curIdx = zeroIdxs.pop();
            if (curIdx == zeroIdxs.length - 1) continue;
            while (curIdx != targetIdx) {
                console.log(curIdx, targetIdx);
                nums[curIdx] = nums[curIdx + 1];
                nums[curIdx + 1] = 0;
                curIdx++;
            }
            targetIdx--;
        }
    }

    move(zeroIdxs);
    return nums;
};
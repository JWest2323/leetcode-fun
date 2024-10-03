/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let nums1Copy = nums1.slice(0, m);
    let p1 = 0, p2 = 0;

    for (let p = 0; p < m + n; p++) {
        if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2]))
            nums1[p] = nums1Copy[p1++];
        else   
            nums1[p] = nums2[p2++];
    }
};
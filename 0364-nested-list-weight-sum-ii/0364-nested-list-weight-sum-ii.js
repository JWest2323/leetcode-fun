/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function(nestedList) {
    const findMaxDepth = (list) => {
        let maxDepth = 1;
        for (let element of list) {
            if (!element.isInteger() && element.getList().length > 0) {
                maxDepth = Math.max(maxDepth, 1 + findMaxDepth(element.getList()));
            }
        }
        return maxDepth
    }

    const calcSum = (list, curDepth, maxDepth) => {
        let total = 0;
        for (let element of list) {
            if (element.isInteger()) {
                total += (maxDepth - curDepth + 1) * element.getInteger();
            } else {
                total += calcSum(element.getList(), curDepth + 1, maxDepth);
            }
        }
        return total;
    }

    let maxDepth = findMaxDepth(nestedList);
    return calcSum(nestedList, 1, maxDepth);
};
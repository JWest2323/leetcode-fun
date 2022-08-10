/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p === null && q === null) return true; // if both nodes null, ret true
    if (p === null || q === null) return false; // if only one null, ret false
    if (p.val !== q.val) return false; // diff vals, ret false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right); // recursively check child nodes
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    let total = 0;
    function dfs(node, curVal) {
        if (!node) return;
        curVal += node.val;
        
        if (!node.left && !node.right) {
            total += parseInt(curVal);
            return;
        }
        dfs(node.left, curVal);
        dfs(node.right, curVal);
    }
    dfs(root, '');
    return total;
};
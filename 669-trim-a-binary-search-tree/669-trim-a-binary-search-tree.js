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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
    if (!root) return [];
    function dfs(node, lo, hi) {
        if (!node) return node;
        if (node.val > hi) return dfs(node.left, lo, hi);
        if (node.val < lo) return dfs(node.right, lo, hi);
        
        node.left = dfs(node.left, lo, hi);
        node.right = dfs(node.right, lo, hi);
        
        return node;
    }
    
    return dfs(root, low, high);
};
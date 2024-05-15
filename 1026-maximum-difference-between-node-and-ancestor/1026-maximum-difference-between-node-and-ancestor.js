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
var maxAncestorDiff = function(root) {
    let res = -Infinity;
    
    const dfs = (node, min, max) => {
        if (!node) return;
        
        min = min === null ? node.val : Math.min(node.val, min);
        max = max === null ? node.val : Math.max(node.val, max);
        
        dfs(node.left, min, max);
        dfs(node.right, min, max);
        
        res = Math.max(Math.abs(max - min), res);
    }
    
    dfs(root, null, null);
    
    return res;
};
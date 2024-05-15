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
 * @return {boolean}
 */
var isValidBST = function(root) {
    const dfs = (node, low, hi) => {
        if (!node) return true;
        
        if (low !== null && node.val <= low || hi !== null && node.val >= hi)
            return false;
        
        return (
            dfs(node.right, node.val, hi) &&
            dfs(node.left, low, node.val)
        )
    }
    
    return dfs(root, null, null);
};
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
var maxPathSum = function(root) {
    let maxPath = root.val;
    
    const dfs = (node) => {
        if (!node) return 0;
        
        let maxLeftSum = dfs(node.left);
        let maxRightSum = dfs(node.right);

        maxPath = Math.max(maxPath, node.val + maxLeftSum + maxRightSum);
        
        return Math.max(node.val + maxLeftSum, node.val + maxRightSum, 0) // include 0 to trim neg. paths
    }
    
    dfs(root);
    
    return maxPath;
};
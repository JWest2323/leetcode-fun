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
        if (!node) return 0; // return 0 for leaf nodes
        
        // use induction to compute the subtree's max sum 
        let maxLeftSum = dfs(node.left);
        let maxRightSum = dfs(node.right);

        maxPath = Math.max(maxPath, node.val + maxLeftSum + maxRightSum); // update max against current path
        
        return Math.max(node.val + maxLeftSum, node.val + maxRightSum, 0) // include 0 to trim neg. paths
    }
    
    dfs(root); // call on root
    
    return maxPath; // return res var
};
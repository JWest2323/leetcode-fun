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
var diameterOfBinaryTree = function(root) {
    let res = 0;
    
    // tree traversal method
    const dfs = (node) => {
        if (!node) return 0;
        
        let left = dfs(node.left);
        let right = dfs(node.right);
        
        // update res for return
        res = Math.max(res, left + right);
        
        return Math.max(left, right) + 1;
    }
    // call dfs on root node
    dfs(root);
    
    return res
};
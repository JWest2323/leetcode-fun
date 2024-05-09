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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
    // if root is a leaf node, return root
    if (!root.left && !root.right) return root;
    
    // init res for return
    let res = [root, 0];
    
    // define post-order dfs helper 
    const dfs = (node, depth) => {
        if (!node) return depth;
        
        // use induction to calc depth of left and right subtrees
        let left = dfs(node.left, depth + 1);
        let right = dfs(node.right, depth + 1);
        
        // if depths are equal && a larger depth found, update res
        if (left == right && res[1] <= left)
            res = [node, left];
        
        // return the max of two depths
        return Math.max(left, right);
    }
    
    // call dfs helper using root
    dfs(root, 0);
    
    // return ancestor node
    return res[0];
};
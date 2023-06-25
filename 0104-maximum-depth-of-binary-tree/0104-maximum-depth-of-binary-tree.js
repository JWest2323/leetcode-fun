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
var maxDepth = function(root) {
    let res = 0;
    
    const depth = (node, curDepth) => {
        if (!node) return;
        
        res = Math.max(res, ++curDepth);
        
        depth(node.left, curDepth);
        depth(node.right, curDepth);
        
        return curDepth;
    }
    
    depth(root, 0);
    
    return res;
 };
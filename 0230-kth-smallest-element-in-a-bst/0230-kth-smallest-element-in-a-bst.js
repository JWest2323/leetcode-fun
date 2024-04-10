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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let nodeVals = [];
    
    const visit = (node) => {
        if (!node) return;
        
        visit(node.left);
        nodeVals.push(node.val);
        visit(node.right);
    }
    
    visit(root);
    
    return nodeVals[k - 1];
};
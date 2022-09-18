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
 * @return {number[]}
 */
var getLonelyNodes = function(root) {
    if (!root) return [];
    let res = [];
    function vis(node) {
        if (!node) return null;
        if (node.left && !node.right) res.push(node.left.val);
        if (!node.left && node.right) res.push(node.right.val);
        
        vis(node.left);
        vis(node.right);
    }
    vis(root);
    return res;
};
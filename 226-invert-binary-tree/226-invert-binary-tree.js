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
var invertTree = function(root) {
    if (!root) return null;
    // first case if both l & r nodes present
    if (root.left && root.right) {
        let temp = root.left;
        root.left = root.right;
        root.right = temp;
    // case of only l
    } else if (root.left && !root.right) {
        root.right = root.left;
        root.left = null
    // case of only r
    } else if (!root.left && root.right) {
        root.left = root.right;
        root.right = null;
    }
    // make recursive calls on both l & r
    invertTree(root.left);
    invertTree(root.right);
    
    return root; // return root
};
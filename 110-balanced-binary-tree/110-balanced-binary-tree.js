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
var isBalanced = function(root) {
    // define recursive helper func to calc tree height
    function height (node) {
        if (!node) return -1;
        return 1 + Math.max(height(node.left), height(node.right)); // ret larger l or r height +1
    }
    if (!root) return true;
    return (Math.abs(height(root.left) - height(root.right)) < 2 && // check curr height isBalanced
                    isBalanced(root.left) && isBalanced(root.right)); // recursively check subtrees 
};
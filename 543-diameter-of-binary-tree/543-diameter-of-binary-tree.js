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
    if (!root) return 0;
    let diameter = 0; // init diamater var to 0
    // define visit function to perform DFS
    function vis (node) {
        if (node === null) return 0; // return 0 for any leaf node
        let l = vis(node.left);
        let r = vis(node.right);
        diameter = Math.max(diameter, l + r); // update global diameter is larger found
        return Math.max(l, r) + 1; // return larger local diamater plus 1 for new edge found
    }
    vis(root);
    return diameter;
};
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
    // init a res var for return
    let res = 0;
    // define a helper function to find depth of tree
    const depth = (node, curDepth) => {
        if (!node) return; // if node null return
        // update res for all valid nodes found
        res = Math.max(res, ++curDepth);
        // call on both left & right children
        depth(node.left, curDepth);
        depth(node.right, curDepth);
    }
    // call depth on root 
    depth(root, 0);
    // return res
    return res;
 };
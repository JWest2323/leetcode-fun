/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let parentVal = root.val; // store the root/parent node val
    let pVal = p.val, qVal = q.val; // store p & q vals
    // use bst prop to check if both p & q vals againsts parentVal
    if(pVal > parentVal && qVal > parentVal) { 
        return lowestCommonAncestor(root.right, p, q); // recursively check on root.right
    } else if (pVal < parentVal && qVal < parentVal) {
        return lowestCommonAncestor(root.left, p, q); // recursively check on root.left
    } else {
        return root; // return last ancestor node common to p & q 
    }
};
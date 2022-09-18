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
    let LCA = null; // init LCA to null
    // define dfs func using induction
    function dfs(curr, p, q) {
        if (!curr) return false; // ret false if curr node null
        let l = dfs(curr.left, p, q) ? 1 : 0; // calc bool using dfs on left child
        let r = dfs(curr.right, p, q) ? 1 : 0; // calc bool using dfs on right child
        let mid = (curr == p || curr == q) ? 1 : 0; // use mid bool to check if curr is p or q
        
        if (l + mid + r >= 2) LCA = curr; // if 2 or more flags hit, we found both nodes and curr is our LCA
        
        return (l || mid || r); // return if any flags set to true on this recrusive call
    }
    
    dfs(root, p, q); // make init dfs call on root
    return LCA;
};
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
var countUnivalSubtrees = function(root) {
    let count = 0;
    function dfs(node, parentVal) {
        // base case for leaf node, since a leaf node can be a univalue subtree
        if (!node) return true; 
        
        // check if left & right subtrees are unival using node.val
        if (!dfs(node.left, node.val) | !dfs(node.right, node.val)) return false; 
        
        count++; // both subtrees either null || node.val == parentVal, incre. count
        
        return (node.val == parentVal); // 2nd case to check if univalue subtree for 
    }
    dfs(root, 0); // call on root node using 0 as parentVal
    return count; // return count var
};
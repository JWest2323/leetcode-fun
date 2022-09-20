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
var subtreeWithAllDeepest = function(root) {
    let maxNode = null;
    let maxDepth = 0;
    function dfs(node, curDepth) {
        if (!node) return curDepth - 1; // reached leaf node, return prev depth
        maxDepth = Math.max(maxDepth, curDepth); // update maxDepth on every recursive call
        const lDepth = dfs(node.left, curDepth + 1);
        const rDepth = dfs(node.right, curDepth + 1);
        
        if (lDepth == maxDepth && rDepth == maxDepth) { // if both l & r depths reach deepest node, we found our subtree
            maxNode = node; // set cur node as maxNode
        }
        return Math.max(lDepth, rDepth); // return the largest depth of the two subtrees to be used to calc maxDepth
    }
    dfs(root, 0);
    return maxNode;
};
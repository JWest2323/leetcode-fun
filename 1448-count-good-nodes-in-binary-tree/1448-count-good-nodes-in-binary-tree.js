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
var goodNodes = function(root) {
    let count = 0; // init count var to 0
    // define dfs func to take in a maxPrev var
    function dfs(node, maxPrev) {
        if (!node) return; // if null node found ret
        if (maxPrev <= node.val) count++; // if cur node.val larger than maxPrev, incre count
        maxPrev = Math.max(maxPrev, node.val); // update maxPrev if nec
        // call dfs recursively on l&r childs
        dfs(node.left, maxPrev);
        dfs(node.right, maxPrev);
        return count; // ret count
    }
    return dfs(root, root.val); // call dfs on root w maxPrev as root.val
};
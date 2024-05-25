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
var maxAncestorDiff = function (root) {
    let res = -Infinity;

    const dfs = (node, low, hi) => {
        if (!node) return;

        low = low === null ? node.val : Math.min(low, node.val);
        hi = hi === null ? node.val : Math.max(hi, node.val);

        res = Math.max(res, Math.abs(hi - low));

        dfs(node.left, low, hi);
        dfs(node.right, low, hi);
    }

    dfs(root, null, null);

    return res;
};
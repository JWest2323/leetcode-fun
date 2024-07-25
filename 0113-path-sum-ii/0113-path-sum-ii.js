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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let res = [];

    const dfs = (node, target, curPath) => {
        if (!node.left && !node.right && target - node.val === 0) {
            res.push([...curPath, node.val]);
            return;
        }

        if (node.left)
            dfs(node.left, target - node.val, [...curPath, node.val]);
        if (node.right)
            dfs(node.right, target - node.val, [...curPath, node.val]);
    }

    dfs(root, targetSum, []);

    return res;
};
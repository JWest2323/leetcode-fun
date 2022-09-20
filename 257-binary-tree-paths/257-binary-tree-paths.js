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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = [];
    function dfs(node, curPath) {
        if (!node) return;
        if (!node.left & !node.right) {
            res.push(curPath + node.val);
            return;
        }
        dfs(node.left, curPath + node.val + '->');
        dfs(node.right, curPath + node.val + '->');
    }
    dfs(root, '');
    return res;
};
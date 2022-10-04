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
var minDepth = function(root) {
    if (!root) return 0;
    let stack = [[root, 1]], min = Infinity;
    while (stack[0]) {
        let node = stack.pop();
        if (!node[0].left && !node[0].right) {
            min = Math.min(min, node[1]);
        }
        if (node[0].left) stack.push([node[0].left, node[1] + 1]);
        if (node[0].right) stack.push([node[0].right, node[1] + 1]);
    }
    return min;
};
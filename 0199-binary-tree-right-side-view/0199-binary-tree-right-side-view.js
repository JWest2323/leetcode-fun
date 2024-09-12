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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    let result = [];
    let queue = [];
    queue.push(root)
    while (queue.length) {
        let values = []
        let n = queue.length;
        for (let i = 0; i < n; i++) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            values.push(node.val);
        }
        result.push(values.pop());
    }
    return result;
};
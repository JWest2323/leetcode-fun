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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let stack = [root, root];
    let height = new Map();
    height.set(null, 0);
    while (stack.length > 0) {
        let cur = stack.pop();
        if (!cur) continue;
        if (stack.length && stack[stack.length - 1] == cur) {
            stack.push(cur.right);
            stack.push(cur.right);
            stack.push(cur.left);
            stack.push(cur.left);
        } else {
            let lHeight = height.get(cur.left), rHeight = height.get(cur.right);
            if (Math.abs(lHeight - rHeight) > 1) return false;
            height.set(cur, Math.max(lHeight, rHeight) + 1);
        }
    }
    return true;
};
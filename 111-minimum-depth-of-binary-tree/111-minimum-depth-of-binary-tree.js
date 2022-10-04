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
    let q = [root], depth = 1, res = Infinity;
    while (q[0]) {
        let qLen = q.length;
        for (let i = 0; i < qLen; i++) {
            let cur = q.shift();
            if (!cur.left & !cur.right) return depth;
            else {
                if (cur.left) q.push(cur.left);
                if (cur.right) q.push(cur.right);
            }
        }
        depth++;
    }
    return depth;
};
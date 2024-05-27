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
    let res = Infinity;
    let queue = [[root, 1]];
    
    while (queue.length) {
        let nextQ = [];
        for (let i = 0; i < queue.length; i++) {
            let [node, curDepth] = queue[i];
            if (!node.left && !node.right) {
                res = Math.min(res, curDepth);
            }
            if (node.left)
                nextQ.push([node.left, curDepth + 1]);
            if (node.right)
                nextQ.push([node.right, curDepth + 1]);
        }
        queue = nextQ;
    }
    return res;
};
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
var largestValues = function(root) {
    let res = [], q = [root];

    while (q.length > 0) {
        let curLevel = [], newQ = [];
        for (let el of q) {
            if (!el) continue;
            curLevel.push(el.val);

            if (el.left)
                newQ.push(el.left);
            if (el.right)
                newQ.push(el.right);
        }
        res.push(Math.max(...curLevel));
        q = newQ;
    }
    return res;
};
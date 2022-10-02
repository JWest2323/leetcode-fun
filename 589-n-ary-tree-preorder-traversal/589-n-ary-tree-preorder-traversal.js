/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return [];
    let q = [root], res = [];
    while (q[0]) {
        let cur = q.pop();
        res.push(cur.val)
        cur.children.reverse();
        for (let child of cur.children) {
            q.push(child)
        }
    }
    return res;
};
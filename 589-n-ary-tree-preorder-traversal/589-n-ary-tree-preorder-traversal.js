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
var preorder = function(root, res = []) {
    if (!root) return res;
    res.push(root.val);
    for (let child of root.children) {
        preorder(child, res);
    }
    return res;
};
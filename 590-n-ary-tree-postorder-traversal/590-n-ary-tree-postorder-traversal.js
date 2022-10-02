/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root, res = []) {
    if (!root) return res;
    if (root.children.length != 0) {
        for (let child of root.children) {
            postorder(child, res)
        }
    }
    res.push(root.val);
    
    return res;
};
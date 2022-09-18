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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    if (!root) return null;
    let q = [root]; // init q with root node
    
    // while the q is nonEmpty
    while (q.length > 0) {
        let len = q.length;
        let cousins = false, siblings = false;
        let sizeAtDepth = q.length;
        for (let i = 0; i < sizeAtDepth; i++) {
            let node = q.shift();
            if (node == null)  siblings = false; // found sibling marker
            else { // value found
                if (node.val == x || node.val == y) {
                    if (!cousins) {
                        siblings = true;
                        cousins = true;
                    } else {
                        return !siblings; // both vals found and not siblings
                    }
                }
                // check left & right nodes for next loop in while
                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);
                q.push(null); // set sibling marker
            }
        }
        if (cousins) return false; // only one val found
    }
    return false;  // no vals found
};
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
var isSymmetric = function(root) {
    if (!root) return true;
    let q = [root.left, root.right];
    while (q.length) {
        let l = q.shift();
        let r = q.shift();
        
        if (!l && !r) continue;
        
        if (!l && r || l && !r || l.val !== r.val) return false;
        
        q.push(l.left);
        q.push(r.right);
        q.push(l.right);
        q.push(r.left);
    }
    return true;
};
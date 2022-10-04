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
    let q = [root, root];
    while (q.length > 0) {
        let subTree1 = q.pop();
        let subTree2 = q.pop();
        
        if (!subTree1 && !subTree2) continue;
        if (!subTree1 && subTree2 || !subTree2 && subTree1 || subTree1.val !== subTree2.val) return false;
        
        q.push(subTree1.left);
        q.push(subTree2.right);
        
        q.push(subTree1.right);
        q.push(subTree2.left);
    }
    return true;
};
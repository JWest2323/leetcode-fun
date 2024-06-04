/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let preorderIdx = 0;
    let inorderIdxMap = new Map();
    
    for (let i = 0; i < inorder.length; i++) {
        inorderIdxMap.set(inorder[i], i);
    }
    
    const arrToTree = (left, right) => {
        if (left > right) return null;
        
        let rootVal = preorder[preorderIdx++];
        let root = new TreeNode(rootVal);
        
        root.left = arrToTree(left, inorderIdxMap.get(rootVal) - 1);
        root.right = arrToTree(inorderIdxMap.get(rootVal) + 1, right);
        
        return root;
    }
    
    return arrToTree(0, inorder.length - 1);
};
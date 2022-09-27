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
var findMode = function(root) {
    // init mode arr, curNodeVal and curNodeCount to track against maxCount
    let mode = [], curNodeVal = null, curNodeCount = 0, maxCount = -Infinity;
    // define inorder traversal method
    function inorder(node) {
        if(!node) return;
        inorder(node.left);
        
        curNodeCount = (node.val == curNodeVal ? curNodeCount : 0) + 1; // incr or reset curNodeCount based on node.val
        curNodeVal = node.val; // update curNodeVal
        if (curNodeCount > maxCount) { // check if new mode found, update mode arr & maxCount
            mode = [node.val];
            maxCount = curNodeCount;
        } else if (curNodeCount == maxCount) mode.push(node.val); // else check if new val of same freq found, push to mode arr
        
        inorder(node.right);
    }
    inorder(root);
    return mode;
    
};
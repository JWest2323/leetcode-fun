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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    // define recursive in order traversal func
    function inOrder(node) {
        if (!node) return [];
        return [...inOrder(node.left), node.val, ...inOrder(node.right)];
    }
    let sorted = inOrder(root); // perform inOrder traversal on root & store as sorted arr
    
    // use binary search to construct balanced search tree
    function construct (arr) {
        if (arr.length == 0) return null;
        let mid = Math.floor(arr.length / 2);
        let node = new TreeNode(arr[mid]);
        node.left = construct(arr.slice(0, mid));
        node.right = construct(arr.slice(mid + 1));
        
        return node;
    }
    
    return construct(sorted); // call & return construct on sorted arr
};
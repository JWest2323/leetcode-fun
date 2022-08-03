/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let stack = [], serialize = []; // create stack and ret arr serialize
    if (root == null) return []; // if root == null ret empty arr
    stack.push(root); // push root to stack
    while (stack.length > 0) { // perform while stack not empty
        // remove from front of stack
        let node = stack.shift(); 
        
        // if node !null, push val, else push null
        serialize.push(node ? node.val : null); 
        if (node != null) { 
            // if not !null, push l & r children
            stack.push(node.left);
            stack.push(node.right);
        }
    }
    return serialize; // return our serialized arr
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data[0] == null) return null; // if null node, ret null
    let node = new TreeNode(data.shift()); // store data[0] as a TreeNode
    let stack = [node]; // place node in stack
    while (stack.length > 0) { // perform while stack not empty
        // remove from front of stack
        let node = stack.shift(); 
        
        // store val of l & r child
        let left = data.shift(); 
        let right = data.shift(); 
        
        // if l or r != null, store as new TreeNode else null
        node.left = (left == null) ? null : new TreeNode(left); 
        node.right = (right == null) ? null : new TreeNode(right); 
        
        // if l or r child exist, push to stack
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    return node; // return node 
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
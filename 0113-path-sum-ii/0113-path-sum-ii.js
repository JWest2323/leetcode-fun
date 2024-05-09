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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    // init res array for return
    let res = [];
    
    // define pre-order dfs helper func
    const dfs = (node, path, remainingSum) => {
        
        if (!node) return;
        
        // if at a leaf node & remaining sum == current node.val
        if (!node.left && !node.right && remainingSum == node.val) {
            // push copy of path, incl current node.val, to res
            res.push([...path, node.val]);
            return;
        }
        // explore left & right, updating current path and remaining sum
        dfs(node.left, [...path, node.val], remainingSum - node.val);
        dfs(node.right, [...path, node.val], remainingSum - node.val);
    }
    
    dfs(root, [], targetSum);
    
    return res;
};
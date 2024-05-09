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
 * @return {number}
 */
var sumNumbers = function(root) {
    let res = 0;
    
    const dfs = (node, curNum) => {
        if (node) {
            // multiply curNum by 10 and add current node.val to build root to path num
            curNum = curNum * 10 + node.val;
            
            // once we reach a leaf node, incre res by curNum
            if (!node.left && !node.right)
                res += curNum;
            
            // if no leaf node found, continue exploring
            dfs(node.left, curNum);
            dfs(node.right, curNum);
        }
    }
    // call dfs on root
    dfs(root, 0);
    
    // return res
    return res;
};
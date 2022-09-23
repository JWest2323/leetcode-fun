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
var longestConsecutive = function(root) {
    let maxLen = 0;
    function dfs(node) {
        if (!node) return [0, 0]; // if null node found, ret [0,0] 
        let incr = 1, decr = 1; // init incr & decr counts to construct return pair
        
        if (node.left) {
            let l = dfs(node.left);
            if (node.val == node.left.val + 1) { // if smaller -1 node.left found, incre decr count
                decr = l[1] + 1;
            } else if (node.val == node.left.val - 1) { // else if larger +1 node.left found, incre incr count 
                incr = l[0] + 1;
            }
        }
    
        if (node.right) {
            let r = dfs(node.right);
            if (node.val == node.right.val + 1) { // if smaller -1 node.right, check max of curr decr & calc val
                decr = Math.max(decr, r[1] + 1); 
            } else if (node.val == node.right.val - 1) { // else if larger +1 node.right, check max of curr incr & calc val 
                incr = Math.max(incr, r[0] + 1);
            }
        }
        
        maxLen = Math.max(maxLen, incr + decr - 1); // update maxLen using incr + decr - 1 to avoid dbl root node count
        return [incr, decr]; // return incr & decr as an array pair
    }
    
    dfs(root); // call dfs on root
    return maxLen;
};
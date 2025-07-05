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
var invertTree = function(root) {
    const dfs = (node) => {
        if (!node) return true;
        if (!node.left && !node.right) return true;
        
        let left = dfs(node.left), 
            right = dfs(node.right);

        if (left && right) {
            let temp = node.left;
            node.left = node.right;
            node.right = temp;
            return true;
        }
    }
    dfs(root);
    return root;
};
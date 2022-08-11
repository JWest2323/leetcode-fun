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
 * @param {TreeNode} subRoot
 * @return {boolean}
 First Approach:
 HL: - perform dfs and check for symmetry once we come across subRoot
 LL: - use inductive template to check l & r subtrees === subRoot
 
 */
var isSubtree = function(root, subRoot) {
    var isEqual = function(node1, node2) {
      if (!node1 || !node2) return !node1 && !node2; // if either node == null, ret XAND
      if (node1.val !== node2.val) return false; // if node vals !=, ret false
      return isEqual(node1.left, node2.left) && isEqual(node1.right, node2.right); // recursively check l&r
    }
    var dfs = function(node) {
        if (!node) return false;
        if (isEqual(node, subRoot)) return true; // use helper func to determine same subTree, if so, ret true
        return dfs(node.left) || dfs(node.right); // else check either node.left or node.right
    }
    return dfs(root); // call and ret on root
};
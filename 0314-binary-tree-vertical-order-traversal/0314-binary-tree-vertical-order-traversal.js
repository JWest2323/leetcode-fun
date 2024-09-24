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
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    if (!root) return [];
    
    let map = {}, q = [[root, 0]];
    let min = 0, max = 0;

    while (q.length) {
        let [node, col] = q.shift();

        map[col] = [...(map[col] ?? []), node.val];
        min = Math.min(min, col);
        max = Math.max(max, col);

        if (node.left) q.push([node.left, col - 1]);
        if (node.right) q.push([node.right, col + 1]);
    }

    let res = [];

    while (min <= max) 
        res.push(map[min++]);
    
    return res;
};
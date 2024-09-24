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
    let nodes = new Map();

    const dfs = (node, depth, col) => {
        if (!node) return;
        node.depth = depth;
        
        if (!nodes.has(col)) nodes.set(col, []);
        nodes.get(col).push(node);

        dfs(node.left, depth + 1, col - 1);
        dfs(node.right, depth + 1, col + 1);
    }

    dfs(root, 0, 0);

    for (let cols of nodes.values()) 
        cols.sort((a, b) => a.depth - b.depth);
    
    let res = [];
    let minCol = Math.min(...nodes.keys());
    let maxCol = Math.max(...nodes.keys());

    for (let colIdx = minCol; colIdx <= maxCol; colIdx++) {
        let columns = nodes.get(colIdx);
        res.push(columns.map(el => el.val));
    }
    return res;
};
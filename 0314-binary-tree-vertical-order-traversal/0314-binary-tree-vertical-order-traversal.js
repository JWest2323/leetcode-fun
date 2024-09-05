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
    let colMap = new Map(), res = [];

    const dfs = (node, colSum) => {
        if (!node) return;
        if (!colMap.has(colSum)) 
            colMap.set(colSum, []);
        colMap.get(colSum).push(node.val);

        dfs(node.left, colSum - 1);
        dfs(node.right, colSum + 1);
    }

    dfs(root, 0);

    let [minIdx, maxIdx] 
        = [Math.min(...colMap.keys()) , Math.max(...colMap.keys())];
    
    for (let i = minIdx; i <= maxIdx; i++) {
        res.push(colMap.get(i));
    }
    return res;
};
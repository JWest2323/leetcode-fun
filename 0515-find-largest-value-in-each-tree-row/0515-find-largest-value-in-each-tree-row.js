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
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root) return [];
    
    let res = [], queue = [root];

    while (queue.length) {
        let curLvlMax = -Infinity, qLen = queue.length;
        
        for (let i = 0; i < qLen; i++) {
            let node = queue.shift();
            curLvlMax = Math.max(curLvlMax, node.val);

            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }
        res.push(curLvlMax);
    }
    return res;
};
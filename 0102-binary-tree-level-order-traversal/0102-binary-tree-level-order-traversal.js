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
var levelOrder = function(root) {
    if (!root) return [];
    let res = [], q = [root];

    while (q.length > 0) {
        let qLen = q.length;
        let newQ = [], curLvl = [];

        for (let i = 0; i < qLen; i++) {
            let curNode = q.shift();
            curLvl.push(curNode.val);
            if (curNode.left)
                newQ.push(curNode.left);
            if (curNode.right) 
                newQ.push(curNode.right);
        }
        res.push(curLvl);
        q = newQ;
    }
    return res;
};
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
var rightSideView = function(root) {
    function bfs (node) {
        if (!node) return [];
        let res = []; // create res arr
        let q = [root]; // start queue off w root node
        while (q.length > 0) {
            let len = q.length, cur = [], newQ = [];
            for (let i = 0; i < len; i++) {
                cur.push(q[i].val); // push everything cur in q to cur lvl arr
                if (q[i].left) newQ.push(q[i].left); // check l child
                if (q[i].right) newQ.push(q[i].right); // check r child
            }
            res.push(cur[cur.length - 1]); // push right most el in cur level
            q = newQ; // reset q to all child nodes found
        }
        return res; // ret res arr
    }
    return bfs(root); // call bfs on root
};
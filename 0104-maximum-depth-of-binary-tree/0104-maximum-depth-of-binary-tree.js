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
var maxDepth = function(root) {
    if (!root) return 0; // return 0 if given empty root
    
    // init queue with root and max var to 0
    let q = [root], max = 0;
    
    // loop while elements in queue
    while (q.length) {
        let newQ = []; // init newQ to track elements of next level
        for (let el of q) {
            if (!el) continue;
            newQ.push(el.left);
            newQ.push(el.right);
        }
        if (newQ.length) max++; // if elements present in next, incre max var
        q = newQ; // set q to elements of newQ
    }
    return max;
};
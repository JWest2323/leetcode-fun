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
    if (!root) return 0;
    let depth = 1;
    let q = [[root, depth]]; // init queue w root node and starting depth
    while (q.length > 0) {
        let pop = q.pop();
        if (pop[0] !== null) { // check for valid node
            if (pop[1] > depth) depth = pop[1]; // update depth if nec
        }
        let newDepth = pop[1] + 1; // incr depth for child nodes if any
        if (pop[0].left) q.push([pop[0].left, newDepth]);
        if (pop[0].right) q.push([pop[0].right, newDepth]);
    }
    return depth; // return depth
    
};
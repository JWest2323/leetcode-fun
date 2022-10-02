/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var diameter = function(root) {
    let maxDepth = 0;
    function dfs(node) {
        let childrenHeight = [];
        for (let child of node.children) {
            childrenHeight.push(dfs(child));
        }
        childrenHeight.sort((a,b) => b - a);
        let [first = 0, second = 0] = childrenHeight;
        maxDepth = Math.max(maxDepth, first + second);
        return first + 1;
    }
    dfs(root);
    return maxDepth;
};
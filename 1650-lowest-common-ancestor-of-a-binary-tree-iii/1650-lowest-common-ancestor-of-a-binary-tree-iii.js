/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} p
 * @param {_Node} q
 * @return {_Node}
 */
var lowestCommonAncestor = function(p, q) {
    let vis = new Set();

    while (p) {
        vis.add(p.val);
        p = p.parent;
    }

    while (q) {
        if (vis.has(q.val)) 
            return q;
        q = q.parent;
    }
};
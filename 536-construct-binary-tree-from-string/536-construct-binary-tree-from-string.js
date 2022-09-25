/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function(s) {
    let i = 0; // init an idx var to 0
    // define our recursive construct func
    function construct (s) {
        let numStr = []; // init arr to store node.val as a string
        while (s[i] === '-' || (s[i] >= '0' && s[i] <= '9')) {
            numStr.push(s[i++]); // push to numStr while at a number or neg sign
        }
        if (numStr.length == 0) return null; // if no number built, return null
        
        let node = new TreeNode(Number(numStr.join(''))); // create new node by joining chars in numStr
        
        // construct left child on first occurence of '('
        if (s[i] == '(') {
            i++, node.left = construct(s), i++;
        }
        // construct right child on second occurence of '('
        if (s[i] == '(') {
            i++, node.right = construct(s), i++;
        }
        return node; // return current node
    } // end of construct function 
    
    i = 0; // restart idx to 0
    
    return construct(s); // call & return on string s
};
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
var findFrequentTreeSum = function(root) {
    if (!root) return []; // if !root ret empty arr
    let res = [], maxSumFreq = 0, freqMap = {}; // init res arr, maxSumFreq var, and freqMap obj
    
    function dfs(node) {
        if (!node) return 0; // return 0 for any null node found
        // valid node found, calc sum using dfs
        let sum = node.val + dfs(node.left) + dfs(node.right);
        
        freqMap[sum] = freqMap[sum] + 1 || 1; // incre freq of sum in freqMap obj
        if (freqMap[sum] == maxSumFreq) { // if curr sum freq == max
            res.push(sum); // push sum to res
        } else if(freqMap[sum] > maxSumFreq) { // else if larger freq found
            maxSumFreq = freqMap[sum]; // update maxSumFreq
            res = [sum]; // reset res with curr sum
        }
        return sum; // return sum at each recursive call
    }
    dfs(root); // call on root
    return res;
};

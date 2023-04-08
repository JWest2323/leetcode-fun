/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// O(N x M) time complexity
var getIntersectionNode = function(headA, headB) {
    // loop each node in headA
    while (headA) {
        // create copy of each node in headB
        let headBCopy = headB;
        // check each node from headBCopy against cur node in headA
        while(headBCopy) {
            // if headA == headBCopy, return headA
            if (headA === headBCopy) return headA;
            // else move headBCopy to next node
            headBCopy = headBCopy.next;
        }
        // once out of inner while, move headA to next node
        headA = headA.next;
    }
};
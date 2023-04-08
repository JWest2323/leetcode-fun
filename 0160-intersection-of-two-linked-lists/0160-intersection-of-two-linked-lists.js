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

// O(N + M) time complexity, O(1) space complexity
var getIntersectionNode = function(headA, headB) {
    // init ptrs at the start of each resp. list
    let a = headA, b = headB;
    // while those ptrs are not equal
    while(a !== b) {
        // if either resp. ptr has reached a null node, set to beginning of opposite list
        // else set to next node in resp. list
        a = !a ? headB : a.next;
        b = !b ? headA : b.next;
    }
    // once out of while, a points to either the intersecting node or null ptr
    return a;
};
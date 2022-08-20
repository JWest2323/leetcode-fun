/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null, cur = head; // init prev to null & cur to head
    while (cur !== null) {
        let tempNext = cur.next; // store cur.next
        cur.next = prev; // set cur next to prev
        prev = cur; // move prev
        cur = tempNext; // move cur to temp next
    }
    return prev; // return prev ptr or reversed head
};
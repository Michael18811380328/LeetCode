/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 104 ms, 在所有 JavaScript 提交中击败了13.76%
var reverseList = function(head) {
  if (!head) {
    return null;
  }
  let preview = null;
  let current = head;
  while (current) {
    let next = current.next;
    current.next = preview;
    preview = current;
    current = next;
  }
  return preview;
};

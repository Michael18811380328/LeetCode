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
//  [83] 删除排序链表中的重复元素
// Your runtime beats 51.88 % of javascript submissions
const deleteDuplicates = function(head) {
  if (!head || !head.next) return head;
  while (head.next && head.val === head.next.val) {
    head.next = head.next.next;
  }
  deleteDuplicates(head.next);
  return head;
};

export { deleteDuplicates };

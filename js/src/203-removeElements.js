/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 203. Remove Linked List Elements  移除链表元素
// Remove all elements from a linked list of integers that have value val.
// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5
// 92 ms, 在所有 JavaScript 提交中击败了98.14%

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head) return head;
  // 如果头结点等于目标值，直接把头指针指向下一个
  while (head && head.val === val) {
    head = head.next;
  }
  if (head) {
    // 如果下一个是目标值，直接把下一个的指针，指向下下一个
    while (head && head.next && head.next.val === val) {
      head.next = head.next.next;
    }
    // 然后递归下一个节点（直到全部删除相同节点）
    if (head) removeElements(head.next, val);
  }
  return head;
};

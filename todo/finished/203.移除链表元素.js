/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 92 ms
// , 在所有 JavaScript 提交中击败了
// 98.14%
var removeElements = function(head, val) {
  if (!head) return head;
  while (head && head.val === val) {
    head = head.next;
  }
  if (head) {
    while (head && head.next && head.next.val === val) {
      head.next = head.next.next;
    }
    if (head) removeElements(head.next, val);
  }
  return head;
};
// @lc code=end


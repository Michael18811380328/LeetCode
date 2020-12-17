/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @return {ListNode}
 */
// Your runtime beats 51.88 % of javascript submissions
var deleteDuplicates = function(head) {
  if (!head || !head.next) return head;
  while (head.next && head.val === head.next.val) {
    head.next = head.next.next;
  }
  deleteDuplicates(head.next);
  return head;
};
// @lc code=end


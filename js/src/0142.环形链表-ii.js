/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
// 84 ms, 在所有 JavaScript 提交中击败了50.66%的用户
// 循环一次列表，使用哈希表记录是否重复（是 set，Object 无效）
const detectCycle = function(head) {
  const dict = new Set();
  while (head) {
    if (dict.has(head)) {
      return head;
    }
    dict.add(head);
    head = head.next;
  }
  return null;
};
// @lc code=end

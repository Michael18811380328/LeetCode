/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
// 思路1：遍历一次链表，获取链表的长度
// 然后再次遍历链表，获取中间的节点
// 这样循环一次半，性能不好

// 思路2：设置快慢指针
// 快指针每次增加两个，慢指针每次增加一个
// 当快指针到结尾时，慢指针会到中间
// 这样性能较好，需要测试空链表的情况
// Your runtime beats 44.98 % of javascript submissions
var middleNode = function(head) {
  // 先把链表的头临时存储一下
  if (!head) {
    return head;
  }
  let fast = slow = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  // 处理偶数的情况
  if (fast.next) {
    slow = slow.next;
  }
  return slow;
};
// @lc code=end


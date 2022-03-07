/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 */

// @lc code=start
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
// Your runtime beats 52.45 % of javascript submissions
// 先想好思路，然后把各种情况都想清楚，再写代码，事半功倍
// 这个再看一下官方思路，哪些地方可以提升
// 链表的解决方法：处理当前的节点后，写一个节点等于递归调用这个函数
const deleteDuplicates = function(head) {
  // 如果空链表，或者是最后一个节点，直接返回
  if (!head || !head.next) {
    return head;
  }
  // 实际上是四种情况
  // 当前节点不等于下一个节点,直接处理下一个节点
  if (head.val !== head.next.val) {
    head.next = deleteDuplicates(head.next);
    return head;
  }
  // 当前节点等于下一个节点
  if (head.val === head.next.val) {
    // 再分成三个情况
    // 1. 下下个节点不存在
    if (!head.next.next) {
      return null;
    }
    // 2.下下个不等于下一个
    if (head.next.val !== head.next.next.val) {
      head = head.next.next;
      head = deleteDuplicates(head);
      return head;
    }
    // 3.下下个等于下一个
    if (head.next.val === head.next.next.val) {
      head.next = head.next.next;
      head = deleteDuplicates(head);
      return head;
      // 然后处理当前节点
    }
  }
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
// 60 ms, 在所有 JavaScript 提交中击败了70.94%
var swapPairs = function(head) {
  let changeNode = (node) => {
    if (!node) {
      return node;
    }
    if (node && !node.next) {
      return node;
    }
    // 有 node 和 node.next
    let a = node;
    let b = node.next;
    let c = node.next.next;
    // 前后交换节点，改变指针
    a.next = changeNode(c);
    b.next = a;
    return b;
  }
  return changeNode(head);
};
// @lc code=end


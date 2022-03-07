/*
 * @lc app=leetcode.cn id=1290 lang=javascript
 *
 * [1290] 二进制链表转整数
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
 * @return {number}
 */
// Your runtime beats 38.94 % of javascript submissions
const getDecimalValue = function(head) {
  var getValue = (node) => {
    if (node.next) {
      return `${node.val}${getValue(node.next)}`;
    }
    return `${node.val}`;
  };
  const binary = getValue(head);
  return parseInt(binary, 2);
};

// @lc code=end

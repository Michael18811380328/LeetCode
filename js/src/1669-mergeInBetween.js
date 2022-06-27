/*
 * @lc app=leetcode.cn id=1669 lang=javascript
 *
 * [1669] 合并两个链表
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
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
// Your runtime beats 97.33 % of javascript submissions
const mergeInBetween = function(list1, a, b, list2) {
  // 关键是存储链表的开始节点和结束节点
  // 这是list1开始节点，返回这个值
  const list1Head = list1;
  // 这个存储剪切开始的节点
  let list1Middle = list1Middle1 = list1;
  for (let i = 1; i < a; i++) {
    list1Middle = list1Middle.next;
  }
  // 这个存储结束的节点
  for (let i = 1; i <= b + 1; i++) {
    list1Middle1 = list1Middle1.next;
  }
  // 获取第二个链表的开始节点和结束节点
  const list2Start = list2;
  let list2End = list2Start;
  while (list2End.next) {
    list2End = list2End.next;
  }
  // 然后把这个指向list2
  list1Middle.next = list2Start;
  list2End.next = list1Middle1;
  return list1Head;
};
// @lc code=end
export { mergeInBetween };

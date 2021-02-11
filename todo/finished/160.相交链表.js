/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 思路一：直接把两个链表的指针作为key，存储在字典中
// 判断链表是否有重复元素即可
// 这里不能使用对象，key 是字符串，直接使用Map
// Your runtime beats 38.16 % of javascript submissions
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  let hashmap = new Map();
  let p1 = headA;
  while (p1) {
    hashmap.set(p1, 1);
    p1 = p1.next;
  }
  let p2 = headB;
  while (p2) {
    if (hashmap.has(p2)) {
      // 这里应该返回一个节点，而不是返回节点的值
      return p2;
    }
    p2 = p2.next;
  }
  return null;
};
// 有没有直接比较指针相等的方法？
// https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/160xiang-jiao-lian-biao-shuang-zhi-zhen-ha-xi-biao/

// @lc code=end


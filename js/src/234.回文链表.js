/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
// 如果不知道尾巴在哪里，那么遍历一下链表，然后获取内部的值，
// 直接比较数组是否相同即可
// 把链表转换成数组
// Your runtime beats 24.03 % of javascript submissions
var isPalindrome = function(head) {
  // 空链表或者只有一个节点，那么是回文的链表
  if (!head || !head.next) {
    return true;
  }
  let list = [];
  list.push(head.val);
  while (head.next) {
    list.push(head.next.val);
    head.next = head.next.next;
  }
  let item = [...list].reverse();
  return list.toString() === item.toString();
};
// 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
// 这个是O(n)，O(1)还不清楚方法

// 优化：把数组变成字符串，减少数组的操作

// @lc code=end


/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function(head) {
  if (!head || !head.next) {
    return head;
  }
  function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
  let arr = [];
  arr.push(head.val);
  while (head.next) {
    arr.push(head.next.val);
    head.next = head.next.next;
  }
  arr.sort((a, b) => a - b);
  console.log(arr);
  let res = new ListNode(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    let item = new ListNode(arr[i]);
    // 这个指针为什么没有过来呢？
    res.next = item;
    res = res.next;
    console.log(res);
  }
  return res;
};
// @lc code=end


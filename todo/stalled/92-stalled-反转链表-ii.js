/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// 基本思路
// 现在内存爆了，while 循环有问题，不应该直接放入数组操作
// 最好使用索引
var reverseBetween = function(head, left, right) {
  let index = 0;
  let list = [];
  // 这两个变量表示旋转前后两个节点的只占
  let start, end;
  // 1、遍历链表节点，找到开始和结束的位置，然后把节点放入数组
  let current = head;
  while (current && current.next) {
    current = current.next;
    index++;
    while (index >= left && index <= right) {
      list.push(current);
    }
    // 这里应该把开始的位置和结束的位置拿到，这两个节点前后不动
    if (index === left) {
      start = current;
    }
    if (index === right) {
      end = current;
      break;
    }
  }
  // 2、把数组整个反转
  list.reverse();
  // 3、遍历列表，把新的部分添加到 start 和 end 之间
  start.next = list[0];
  list[list.length - 1].next = end;
  for (let i = 0; i < list.length - 1; i++) {
    list[i].next = list[i + 1];
  }
  return head;
};
// @lc code=end


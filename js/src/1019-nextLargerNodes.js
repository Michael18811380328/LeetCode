/*
 * @lc app=leetcode.cn id=1019 lang=javascript
 *
 * [1019] 链表中的下一个更大节点
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
 * @return {number[]}
 */
// Your runtime beats 34.55 % of javascript submissions
// 思路一：直接转换成数组，然后计算结果数组
// 这样循环较多，性能可能不好
const nextLargerNodes = function(head) {
  const arr = [];
  while (head) {
    const val = head.val;
    arr.push(val);
    head = head.next;
  }
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    // 如果下一个节点的值大于上一个节点
    // 那么上一个节点的目标就是下一个节点的值
    if (arr[i] < arr[i + 1]) {
      res[i] = arr[i + 1];
    }
    // 否则，就向后找大于这个节点的值
    else {
      res[i] = 0;
      for (let j = i; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
          res[i] = arr[j];
          break;
        }
      }
    }
  }
  // 最后一个节点的值是0
  res[arr.length - 1] = 0;
  return res;
};
// @lc code=end

export { nextLargerNodes };

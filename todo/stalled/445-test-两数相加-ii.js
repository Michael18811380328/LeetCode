/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 主要是，链表不能从后向前加
// 思路1：
// 把两个链表转换成数组，相加，然后把结果转换成链表，这样可行
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  let num1 = toNumber(l1);
  let num2 = toNumber(l2);
  // num1 num2 需要反转一下
  // 如果最后一位是0，那怎么办？
  // 或者直接输出一个数组？

  let sum = num1 + num2;
  console.log(num1, num2, sum);
  let result = toList(sum);
  return result;
};

// list to number
var toNumber = function(list) {
  let res;
  if (!list) {
    res = 0;
  }
  if (list.next) {
    res = list.val + toNumber(list.next) * 10;
  } else {
    res = list.val;
  }
  return res;
};

var toList = function(num) {
  return [123];
  // if (num === 0) {
  //   return null;
  // }
  // let num1 = num % 10;
  // let num2 = (num - num1) / 10;
  // let list = new ListNode(num2);
  // list.next = toList(num1);
  // return list;
};

// @lc code=end


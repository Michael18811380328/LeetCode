/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// 本地需要声明这个类，leetcode 在线测试不需要这个类
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next =(next === undefined ? null : next)
  }
}

// 辅助函数，处理结果是10的情况
function handleTen(node: ListNode | null): null {
  if (node.val !== 10) {
    return null;
  }
  if (node.next) {
    node.val = 0;
    node.next.val++;
    handleTen(node.next);
  } else {
    node.val = 0;
    node.next = new ListNode(1);
  }
  return null;
}

// 132 ms, 在所有 TypeScript 提交中击败了30.75%
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1 && !l2) {
    return null;
  }
  if (!l1) {
    handleTen(l2);
    return l2;
  }
  if (!l2) {
    handleTen(l1);
    return l1;
  }
  let value:number = l1.val + l2.val;
  if (value > 9) {
    if (l1.next) {
      l1.next.val++;
    } else {
      l1.next = new ListNode(1);
    }
    value -= 10;
  }
  const result:ListNode = new ListNode(value);
  result.next = addTwoNumbers(l1.next, l2.next);
  return result;
};

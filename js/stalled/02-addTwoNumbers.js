// 02-addTwoNumbers.js

// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
// （如果一个链表是0，那么直接返回另一个链表）

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 思路一：直接计算两个链表的和，因为他们的位相对应（直接计算加法，需要处理进一等）
function addTwoNumbers(l1, l2) {
  let point1 = l1;
  let point2 = l2;
  while (point1.next && point2.next) {
    l2.val = 0 + l1.val + l2.val;
    // 这里有问题
    // 应该改变指针，指向第二个，不能直接改变链表的链接
    point1 = point1.next;
    point2 = point2.next;
  }
  // 怎样获取单向链表的index？
  console.log(l1, l2);
  while (l2.next === null && l1.next !== null) {
    l2.next = l1.next;
  }
  do {
    if (l2.val > 9) {
      l2.val = l2.lav % 10;
      if (l2.next) {
        l2.next.value++;
      } else {
        l2.next = new ListNode(1);
      }
    }
  } while (l2.next);
  // 改进：在像第一次加法时，判断进一
  console.log(l1, l2);
  return l2;
}


// 思路二：把链表转换成数值，然后计算数值的和，然后把结果转换成链表输出（这样加法容易实现，需要转换）

export { addTwoNumbers };

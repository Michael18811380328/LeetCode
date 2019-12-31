// 02-addTwoNumbers.js
// 给出两个非空的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
// 特殊情况
// [9, 9], [9] => [8, 0, 1]
// [5], [5] => [0, 1]

// 136 ms, 在所有 javascript 提交中击败了56.58%
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function handleTen(node) {
  if (node.val !== 10) return;
  if (node.next) {
    node.val = 0;
    node.next.val++;
    handleTen(node.next);
  } else {
    node.val = 0;
    node.next = new ListNode(1);
  }
}

function addTwoNumbers(l1, l2) {
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
  let value = l1.val + l2.val;
  if (value > 9) {
    if (l1.next) {
      l1.next.val++;
    } else {
      l1.next = new ListNode(1);
    }
    value -= 10;
  }
  const result = new ListNode(value);
  result.next = addTwoNumbers(l1.next, l2.next);
  return result;
}

export { addTwoNumbers };

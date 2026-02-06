import { addTwoNumbers, addTwoNumbers2 } from '../src/0002-addTwoNumbers';

/**
 * https://leetcode.com/problems/add-two-numbers/description/
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

test('02-addTwoNumbers.js', () => {
  const l1 = { val: 2, next: { val: 4, next: { val: 3, next: null } } };
  const l2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };
  const l3 = { val: 7, next: { val: 0, next: { val: 8, next: null } } };
  expect(addTwoNumbers(l1, l2)).toEqual(l3);
});

test('02-addTwoNumbers.js', () => {
  const l1 = { val: 2, next: { val: 4, next: { val: 3, next: null } } };
  const l2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };
  const l3 = { val: 7, next: { val: 0, next: { val: 8, next: null } } };
  expect(addTwoNumbers2(l1, l2)).toEqual(l3);
});

test('02-addTwoNumbers.js', () => {
  const l1 = { val: 2, next: { val: 4, next: null } };
  const l2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };
  const l3 = { val: 7, next: { val: 0, next: { val: 5, next: null } } };
  expect(addTwoNumbers2(l1, l2)).toEqual(l3);
});

test('02-addTwoNumbers list node', () => {
  const l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);
  const l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);
  const result = addTwoNumbers(l1, l2);
  expect(result.val).toEqual(7);
  expect(result.next.val).toEqual(0);
  expect(result.next.next.val).toEqual(8);
  const l3 = new ListNode(1);
  l3.next = new ListNode(8);
  const l4 = new ListNode(0);
  const result2 = addTwoNumbers(l3, l4);
  expect(result2.val).toEqual(1);
});

test('02-addTwoNumbers edge cases', () => {
  // 空链表测试
  expect(addTwoNumbers(null, null)).toEqual(null);
  
  // 单个节点相加产生进位
  const l1 = new ListNode(9);
  const l2 = new ListNode(9);
  const result = addTwoNumbers(l1, l2);
  expect(result.val).toEqual(8);
  expect(result.next.val).toEqual(1);
  
  // 一个链表为空
  const l3 = new ListNode(5);
  const result2 = addTwoNumbers(l3, null);
  expect(result2.val).toEqual(5);
  
  // 大数相加测试
  const l4 = new ListNode(9);
  l4.next = new ListNode(9);
  l4.next.next = new ListNode(9);
  const l5 = new ListNode(1);
  const result3 = addTwoNumbers(l4, l5);
  expect(result3.val).toEqual(0);
  expect(result3.next.val).toEqual(0);
  expect(result3.next.next.val).toEqual(0);
  expect(result3.next.next.next.val).toEqual(1);
});

test('02-addTwoNumbers special cases', () => {
  // [5] + [5] => [0, 1]
  const l1 = new ListNode(5);
  const l2 = new ListNode(5);
  const result = addTwoNumbers(l1, l2);
  expect(result.val).toEqual(0);
  expect(result.next.val).toEqual(1);
  
  // [9, 9] + [9] => [8, 0, 1]
  const l3 = new ListNode(9);
  l3.next = new ListNode(9);
  const l4 = new ListNode(9);
  const result2 = addTwoNumbers(l3, l4);
  expect(result2.val).toEqual(8);
  expect(result2.next.val).toEqual(0);
  expect(result2.next.next.val).toEqual(1);
});

test('addTwoNumbers', () => {
  const l1 = new ListNode(5);
  const l2 = new ListNode(5);
  expect(addTwoNumbers(l1, l2).val).toEqual(0);
  expect(addTwoNumbers(l1, l2).next.val).toEqual(2);

  const l3 = new ListNode(1);
  l3.next = new ListNode(8);
  const l4 = new ListNode(0);
  expect(addTwoNumbers(l3, l4).val).toEqual(1);
  expect(addTwoNumbers(l3, l4).next.val).toEqual(8);
});

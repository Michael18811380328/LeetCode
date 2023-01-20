/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// [21] 合并两个有序链表
// 将两个升序链表合并为一个新的 升序 链表并返回。
// 新链表是通过拼接给定的两个链表的所有节点组成的。
// 这个题目的原理明白，就是递归比较链表头结点的值
// 没有要求不改变原始链表，那么直接操作原始链表即可
const mergeTwoLists = function(list1, list2) {
  if (list1 === null && list2 === null) {
    return null;
  }
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }
  // 如果都不是 null, 直接比较这两个链表的头结点
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

export { mergeTwoLists };

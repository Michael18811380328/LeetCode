/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
//  [160] 相交链表
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 思路一：直接把两个链表的指针作为key，存储在字典中
// 判断链表是否有重复元素即可
// 这里不能使用对象，key 是字符串，直接使用Map
// Your runtime beats 38.16 % of javascript submissions
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  let hashmap = new Map();
  let p1 = headA;
  while (p1) {
    hashmap.set(p1, 1);
    p1 = p1.next;
  }
  let p2 = headB;
  while (p2) {
    if (hashmap.has(p2)) {
      // 这里应该返回一个节点，而不是返回节点的值
      return p2;
    }
    p2 = p2.next;
  }
  return null;
};
// 有没有直接比较指针相等的方法？
// https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/160xiang-jiao-lian-biao-shuang-zhi-zhen-ha-xi-biao/

// 思路二：直接比较两个指针是否相等
// 循环链表。如果一个链表到达终点，那么把链表的结尾变成另一个链表的开始节点。
// 另一个链表也是类似的。如果相交，那么两个链表一定会在某个节点相等。
// A 独立长度+ 公共长度 + B独立长度 === B 独立+ 公共 + A独立
// 如果是不相交链表，那么指针不会相等
// Your runtime beats 11.38 % of javascript submissions
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  let p1 = headA;
  let p2 = headB;
  while (p1 !== p2) {
    p1 = p1 !== null ? p1.next : headB;
    p2 = p2 !== null ? p2.next : headA;
  }
  // 如果两个不想交？那么同时到达null，就返回null
  return p1;
};

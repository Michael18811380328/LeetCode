/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * [143] 重排链表
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 * 思路1：先遍历一次链表，把每一个节点和索引存储到数组中，同时找到总长度
 * 然后 for 循环，把开始和结束的节点分别加入新链表中
 * 执行用时：840 ms，打败 10.38%的用户
 * 这个算法不好（如果不是数组，直接放在对象索引中，避免数组操作试试）
 */
const reorderList = function(head) {
  let tmp = head;
  const list = [];
  while (tmp) {
    list.push(tmp);
    tmp = tmp.next;
  }
  let current = head;
  while (list.length > 0) {
    const first = list.shift();
    current.next = first;
    // 链表的长度是偶数
    if (list.length > 0) {
      const last = list.pop();
      first.next = last;
      current = last;
      current.next = null;
    } else {
      // 链表的长度是奇数
      current = first;
      current.next = null;
    }
  }
  return head;
};

// 思路2
// 可以使用数组+双指针，获取对应的节点，不需要每次都操作数组元素，可以优化
// 88 ms, 在所有 JavaScript 提交中击败了 73.09%
const reorderList2 = function(head) {
  let tmp = head;
  const list = [];
  while (tmp) {
    list.push(tmp);
    tmp = tmp.next;
  }
  let current = head;
  let start = 0;
  let end = list.length - 1;
  // 使用双指针获取链表，避免数组操作
  while (start < end) {
    const first = list[start];
    current.next = first;
    start++;

    const last = list[end];
    end--;
    first.next = last;

    current = last;
    current.next = null;
  }

  // 处理奇数的情况
  if (list.length % 2 === 1) {
    const middle = list[(list.length - 1) / 2];
    current.next = middle;
    middle.next = null;
  }
  return head;
};

// 官方的更好的解法是：
// 1、通过快慢指针，找到链表的中点，把链表分成两个
// 2、把后面的链表反转（N，N-1， N-2）
// 3、合并两个链表（因为长度差可能是0或者1，所以基本不影响）
// 后续有时间可以按照这个思路完成（这三个子问题，可以使用其他的题目处理）

export { reorderList, reorderList2 };

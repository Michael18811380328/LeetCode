/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 判断链表中是否有环
// 17/17 cases passed (108 ms)
// Your runtime beats 17.25 % of javascript submissions
// Your memory usage beats 14.63 % of javascript submissions (40 MB)
// 链表中节点的数目范围是 [0, 104]
// -105 <= Node.val <= 105
// pos 为 -1 或者链表中的一个 有效索引 。
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 这个算法性能不好，应该使用快慢指针解决
const hasCycle = function (head) {
  if (!head) {
    return false;
  }
  head.isRun = true;
  while (head && head.next) {
    head = head.next;
    if (!head.isRun) {
      head.isRun = true;
    } else {
      return true;
    }
  }
  return false;
};

export { hasCycle };

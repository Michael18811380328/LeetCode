/*
 * @lc app=leetcode.cn id=92 lang=javascript
 * [92] 反转链表 II
 * 这个问题自己没有独立思考出来
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// 思路1: 超出内存，循环时不应该把链表转换成数组操作，内存爆了——应该直接旋转链表，不占据额外空间
const reverseBetween1 = function(head, left, right) {
  let index = 0;
  const list = [];
  // 这两个变量表示旋转前后两个节点的只占
  let start;
  let end;
  // 1、遍历链表节点，找到开始和结束的位置，然后把节点放入数组
  let current = head;
  while (current && current.next) {
    current = current.next;
    index++;
    while (index >= left && index <= right) {
      list.push(current);
    }
    // 这里应该把开始的位置和结束的位置拿到，这两个节点前后不动
    if (index === left) {
      start = current;
    }
    if (index === right) {
      end = current;
      break;
    }
  }
  // 2、把数组整个反转
  list.reverse();
  // 3、遍历列表，把新的部分添加到 start 和 end 之间
  start.next = list[0];
  list[list.length - 1].next = end;
  for (let i = 0; i < list.length - 1; i++) {
    list[i].next = list[i + 1];
  }
  return head;
};
// @lc code=end

// 思路2：官方解答：
// https://leetcode.cn/problems/reverse-linked-list-ii/solutions/634701/fan-zhuan-lian-biao-ii-by-leetcode-solut-teyq/
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const reverseBetween = function(head, left, right) {
  // 因为头节点有可能发生变化，使用虚拟头节点可以避免复杂的分类讨论
  const dummyNode = new ListNode(-1);
  dummyNode.next = head;

  let pre = dummyNode;
  // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }
  // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
  let rightNode = pre;
  for (let i = 0; i < right - left + 1; i++) {
    rightNode = rightNode.next;
  }
  // 第 3 步：切断出一个子链表（截取链表）
  const leftNode = pre.next;
  const curr = rightNode.next;
  // 注意：切断链接
  pre.next = null;
  rightNode.next = null;

  // 第 4 步：同第 206 题，反转链表的子区间（这个操作比较精巧）
  const reverseLinkedList = (head) => {
    let pre = null;
    let cur = head;
    while (cur) {
      const next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
  };
  reverseLinkedList(leftNode);

  // 第 5 步：接回到原来的链表中
  pre.next = rightNode;
  leftNode.next = curr;
  return dummyNode.next;
};

export { reverseBetween, reverseBetween1 };

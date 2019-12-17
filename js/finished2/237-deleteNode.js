// 237 删除一个节点
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

function deleteNode(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}

export { deleteNode };

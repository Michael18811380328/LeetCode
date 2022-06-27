/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 * 有序列表无法直接判断中点
 * 思路一是先转换成有序数组，然后数组转换成平衡二叉搜索树
 * 是否能直接转换成二叉搜索树
 * 76 ms, 在所有 JavaScript 提交中击败了86.33%
 */
const sortedListToBST = function(head) {
  // 先把有序列表转换成有序数组
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  // 然后把有序数组转换成二叉搜索树
  function arr2Tree(start, end) {
    if (start > end) {
      return null;
    } else if (start === end) {
      return new TreeNode(arr[start]);
    } else {
      const middle = Math.floor((start + end) / 2);
      const node = new TreeNode(arr[middle]);
      node.left = arr2Tree(start, middle - 1);
      node.right = arr2Tree(middle + 1, end);
      return node;
    }
  }
  return arr2Tree(0, arr.length - 1);
};

// 官方：https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/solution/you-xu-lian-biao-zhuan-huan-er-cha-sou-suo-shu-1-3/
// 二叉搜索树的核心就是找到中位数作为根节点
// 1、可以使用快慢指针，获取排序链表的中位数。当快指针到达最后一位时，慢指针正好是中位数
// 2、设置中位数的是根节点，然后左子树和右子树的边界可以确定，递归左右子树即可
// 注意：链表找到元素的索引

// @lc code=end
export { sortedListToBST };

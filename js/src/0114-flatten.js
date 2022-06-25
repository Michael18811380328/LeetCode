/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 * 先把树结构转换成数组（先序遍历），然后数组前后项增加树节点关系
 * 68 ms, 在所有 JavaScript 提交中击败了81.73%
 */
const flatten = function(root) {
  const list = [];
  function runNode(node) {
    if (node) {
      list.push(node);
      runNode(node.left);
      runNode(node.right);
    }
  }
  runNode(root);
  const len = list.length;
  for (let i = 1; i < len; i++) {
    const prev = list[i - 1];
    const curr = list[i];
    prev.left = null;
    prev.right = curr;
  }
};
// @lc code=end

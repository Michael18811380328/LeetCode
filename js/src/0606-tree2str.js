/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
// 58.13 % of javascript submissions
const tree2str = function(t) {
  if (!t) return '';
  const res = runNode(t);
  return res.slice(1, res.length - 1);
};

const runNode = function(node) {
  if (!node) {
    return null;
  }
  if (!node.left && !node.right) {
    return `(${node.val})`;
  }
  const left = runNode(node.left);
  const right = runNode(node.right);
  return `(${node.val}${left !== null ? left : '()'}${right !== null ? right : ''})`;
};
// @lc code=end

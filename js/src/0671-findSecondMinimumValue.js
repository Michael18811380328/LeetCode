/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
 * @return {number}
 */
// 这个可以遍历全部的节点，然后获取第二小的值，很显然方法不好
// 也就是正数第二层的节点（如果下面还有一层）
// 从上到下，广度优先遍历，找到第二小的节点
// Your runtime beats 75.4 % of javascript submissions
const findSecondMinimumValue = function(root) {
  if (!root || !root.val) {
    return -1;
  }
  const runNode = function(node, target) {
    if (!node) {
      return null;
    }
    if (node && node.val > target) {
      return node.val;
    }
    if (node.left) {
      const a = runNode(node.left, target);
      const b = runNode(node.right, target);
      if (!a && !b) return -1;
      if (!a || a === -1) return b;
      if (!b || b === -1) return a;
      return Math.min(a, b);
    }
    return null;
  };
  const rootVal = root.val;
  const res = runNode(root, rootVal);
  return res || -1;
};
// @lc code=end

export { findSecondMinimumValue };

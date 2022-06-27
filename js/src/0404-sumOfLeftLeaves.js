/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = function(root) {
  const runNode = function(node, isLeft) {
    if (!node) {
      return 0;
    }
    if (!node.left && !node.right && isLeft) {
      return node.val;
    }
    return runNode(node.right, false) + runNode(node.left, true);
  };
  return runNode(root, false);
};

// 92 ms, 在所有 JavaScript 提交中击败了39.16%的用户

// 必须是叶子节点
// @lc code=end

export { sumOfLeftLeaves };

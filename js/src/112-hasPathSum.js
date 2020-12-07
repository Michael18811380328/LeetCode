/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
// 104 ms
// , 在所有 JavaScript 提交中击败了
// 31.09%
// 的用户
var hasPathSum = function(root, sum) {
  // 空树，目标是0
  if (!root) {
    return false;
  }
  // 只有一个根节点
  if (!root.left && !root.right) {
    return root.val === sum;
  }
  let currentSum = root.val;
  return runNode(root.left, sum, currentSum) || runNode(root.right, sum, currentSum);
};

var runNode = function(node, sum, currentSum) {
  // 没有节点，直接返回
  if (!node) {
    return false;
  }
  // 没有子节点，那么是叶子节点
  if (!node.left && !node.right) {
    return currentSum + node.val === sum;
  }
  // 有子节点
  return runNode(node.left, sum, currentSum + node.val) || runNode(node.right, sum, currentSum + node.val);
}

// @lc code=end


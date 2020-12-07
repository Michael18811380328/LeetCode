/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
// 思路1
// 92 ms
// , 在所有 JavaScript 提交中击败了
// 24.64%
// 的用户
var preorderTraversal = function(root) {
  if (!root) return [];
  // 前序遍历：根左右
  return [root.val].concat(preorderTraversal(root.left)).concat(preorderTraversal(root.right));
};

// 问题：题目建议使用迭代算法，这个需要进一步计算

// 思路二，使用栈，直接把数组放入栈内，不需要函数递归

// @lc code=end


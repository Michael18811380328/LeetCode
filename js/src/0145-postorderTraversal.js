/*
 * @lc app=leetcode.cn id=145 lang=javascript
 * [145] 二叉树的后序遍历
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
 * @param {TreeNode} root
 * @return {number[]}
 */
// 76 ms, 在所有 JavaScript 提交中击败了91.50%
const postorderTraversal = function(root) {
  if (!root || !root.val) return [];
  return [].concat(postorderTraversal(root.left)).concat(postorderTraversal(root.right)).concat([root.val]);
};

export { postorderTraversal };

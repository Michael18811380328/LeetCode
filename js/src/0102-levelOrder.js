/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const runTree = function(node, layer, matrix) {
  if (!node) return;
  if (!matrix[layer]) {
    matrix[layer] = [];
  }
  matrix[layer].push(node.val);
  runTree(node.left, layer + 1, matrix);
  runTree(node.right, layer + 1, matrix);
};
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 88 ms, 在所有 JavaScript 提交中击败了69.94%的用户
const levelOrder = function(root) {
  // 把当前的层数传递下去，然后传递一个二重数组即可
  const matrix = [];
  const layer = 0;
  if (!root) return matrix;
  if (!matrix[layer]) {
    matrix[layer] = [];
  }
  matrix[layer].push(root.val);
  runTree(root.left, layer + 1, matrix);
  runTree(root.right, layer + 1, matrix);
  return matrix;
};

// @lc code=end
export { levelOrder };

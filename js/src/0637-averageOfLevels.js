/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @return {number[]}
 */
// 96 ms , 在所有 JavaScript 提交中击败了82.37%
const averageOfLevels = function(root) {
  // 辅助函数
  const runNode = function(node, depth, matrix) {
    if (!node) return;
    if (!matrix[depth]) {
      matrix[depth] = [];
    }
    const value = node.val;
    matrix[depth].push(value);
    runNode(node.left, depth + 1, matrix);
    runNode(node.right, depth + 1, matrix);
  };

  // 遍历二叉树，转换成一个二维数组
  const depth = 0;
  const matrix = [];
  runNode(root, depth, matrix);
  // 计算二维数组的平均值
  for (let i = 0; i < matrix.length; i++) {
    const list = matrix[i];
    const len = list.length;
    const fn = function(total, num) {
      return total + num;
    };
    const sum = list.reduce(fn, 0);
    matrix[i] = sum / len;
  }
  return matrix;
};

// @lc code=end

export { averageOfLevels };

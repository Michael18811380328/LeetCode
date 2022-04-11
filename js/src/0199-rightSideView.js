/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * 思路：先把二叉树层序遍历，然后把每一层的最右侧一个拿出来
 * Your runtime beats 71.38 % of javascript submissions
 */
var rightSideView = function(root) {
  // 复用102代码(层序遍历)
  const matrix = [];
  if (!root) return [];
  // 辅助函数：二叉树层序遍历
  const runTree = function(node, layer) {
    if (!node) return;
    if (!matrix[layer]) {
      matrix[layer] = [];
    }
    matrix[layer].push(node.val);
    runTree(node.left, layer + 1);
    runTree(node.right, layer + 1);
  };
  const layer = 0;
  if (!matrix[layer]) {
    matrix[layer] = [];
  }
  matrix[layer].push(root.val);
  runTree(root.left, layer + 1);
  runTree(root.right, layer + 1);
  return matrix.map(arr => arr[arr.length - 1]);
};
// @lc code=end


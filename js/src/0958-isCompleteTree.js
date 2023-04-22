/*
 * @lc app=leetcode.cn id=958 lang=javascript
 * [958] 二叉树的完全性检验 难度中等
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
 * @return {boolean}
 */
// 958 判断是否是完全二叉树
// 思路：把二叉树层序遍历，然后放在数组中，看出现空位的情况就行
// 直接 BFS 即可，如果某个节点中不存在，那么就是空位，这个就判断了二叉树的完全性
// 68 ms, 在所有 JavaScript 提交中击败了70.08%
const isCompleteTree = function(root) {
  // 辅助函数：二叉树的层序遍历
  const runTree = function(node, layer, matrix) {
    if (!matrix[layer]) {
      matrix[layer] = [];
    }
    if (!node) {
      matrix[layer].push(null);
    } else {
      matrix[layer].push(node.val);
      runTree(node.left, layer + 1, matrix);
      runTree(node.right, layer + 1, matrix);
    }
  };
  // 初始化矩阵
  const matrix = [];
  matrix[0] = [];
  const layer = 0;
  matrix[layer].push(root.val);
  runTree(root.left, layer + 1, matrix);
  runTree(root.right, layer + 1, matrix);
  for (let i = 0; i < matrix.length - 1; i++) {
    if (matrix[i][matrix[i].length - 1] === null && i !== matrix.length - 2) {
      return false;
    }
    while (matrix[i][matrix[i].length - 1] === null) {
      matrix[i].pop();
    }
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === null) {
        return false;
      }
    }
  }
  return true;
};

// [1,2,3,4,5,6] true
// [1,2,3,4,5,null,7] false
// [1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,15] false
// [1,2,3,4,5,6,7,8,9,null,null,null,null,null,null,10,11,12,13] // false

export { isCompleteTree };

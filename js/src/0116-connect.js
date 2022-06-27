/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 * Your runtime beats 62.07 % of javascript submissions
 * 实际上，先把二叉树层序遍历，然后每一层的节点，设置指针指向右侧的节点即可
 * 二叉树的层序遍历使用 102 题目已有的代码，不需要单独写了
 */
const connect = function(root) {
  const matrix = [];
  if (!root) return root;
  // 辅助函数：二叉树层序遍历
  const runTree = function(node, layer) {
    if (!node) return;
    if (!matrix[layer]) {
      matrix[layer] = [];
    }
    matrix[layer].push(node);
    runTree(node.left, layer + 1);
    runTree(node.right, layer + 1);
  };
  // 处理根节点
  const layer = 0;
  if (!matrix[layer]) {
    matrix[layer] = [];
  }
  matrix[layer].push(root.val);
  runTree(root.left, layer + 1);
  runTree(root.right, layer + 1);
  // 这个指针指向其下一个右侧节点
  // 如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
  for (let i = 0; i < matrix.length; i++) {
    const len = matrix[i].length;
    for (let j = 0; j < len; j++) {
      if (matrix[i][j + 1]) {
        matrix[i][j].next = matrix[i][j + 1];
      } else {
        matrix[i][j].next = null;
      }
    }
  }
  return root;
};
// @lc code=end
export { connect };

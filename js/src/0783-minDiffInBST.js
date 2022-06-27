/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树节点最小距离
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
// Your runtime beats 50.52 % of javascript submissions
const minDiffInBST = function(root) {
  if (!root) {
    return null;
  }
  const list = [];
  runNode(root, list);
  list.sort((a, b) => a - b);
  let min = list[1] - list[0];
  for (let i = 1; i < list.length; i++) {
    const item = list[i] - list[i - 1];
    min = item < min ? item : min;
  }
  return min;
};

const runNode = (node, list) => {
  if (!node) return;
  list.push(node.val);
  runNode(node.left, list);
  runNode(node.right, list);
};
// @lc code=end

export { minDiffInBST };

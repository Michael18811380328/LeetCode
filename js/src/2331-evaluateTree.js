/*
 * @lc app=leetcode.cn id=2331 lang=javascript
 *
 * [2331] 计算布尔二叉树的值
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
 * Your runtime beats 17.96 % of javascript submissions
 */
const evaluateTree = function(root) {
  // 0 false,  1 true,  2 OR,  3 AND
  // 递归树节点即可
  if (!root) {
    return false;
  }
  if (root.val === 0 || root.val === 1) {
    return !!root.val;
  }
  if (root.val === 2) {
    return evaluateTree(root.left) || evaluateTree(root.right);
  }
  if (root.val === 3) {
    return evaluateTree(root.left) && evaluateTree(root.right);
  }
};
// @lc code=end
export { evaluateTree };

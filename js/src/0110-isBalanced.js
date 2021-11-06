/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
// 考点：计算树的深度，然后比较一下
// 92 ms, 在所有 JavaScript 提交中击败了92.03%
const runTree = function(node) {
  if (!node) {
    return 1;
  }
  const left = runTree(node.left);
  const right = runTree(node.right);
  // 如果子节点的深度不符合，直接返回 false
  if (!left || !right) {
    return false;
  }
  if (Math.abs(left - right) < 2) {
    return Math.max(left, right) + 1;
  } else {
    return false;
  }
  // 如果子节点的深度绝对值小于1，那么返回子节点的深度
};

const isBalanced = function(root) {
  if (!root) {
    return true;
  }
  const left = runTree(root.left);
  const right = runTree(root.right);
  // 如果子节点的深度不符合，直接返回 false
  if (!left || !right) {
    return false;
  }
  if (Math.abs(left - right) < 2) {
    return true;
  } else {
    return false;
  }
};

export { isBalanced, runTree };

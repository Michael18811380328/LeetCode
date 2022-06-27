/*
 * @lc app=leetcode.cn id=938 lang=javascript
 *
 * [938] 二叉搜索树的范围和
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// 244 ms
// , 在所有 JavaScript 提交中击败了
// 70.44%
// 的用户
const rangeSumBST = function(root, low, high) {
  if (!root) return 0;
  const value = root.val;
  let sum = 0;
  if (value <= low) {
    sum = rangeSumBST(root.right, low, high);
  } else if (value >= high) {
    sum = rangeSumBST(root.left, low, high);
  } else {
    sum = (rangeSumBST(root.right, low, high) + rangeSumBST(root.left, low, high));
  }
  if (value >= low && value <= high) {
    sum += value;
  }
  return sum;
};
// @lc code=end

export { rangeSumBST };

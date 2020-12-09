/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) return true;
  if (root.left && root.left.val > root.val) {
    return false;
  }
  if (root.right && root.right.val < root.val) {
    return false;
  }
  // 如果是左节点，返回左节点的最大值
  // 如果是右节点，返回右节点的最小值
  // 这两个值都需要和根节点比较
  return isValidBST(root.left) && isValidBST(root.right);
};
// @lc code=end


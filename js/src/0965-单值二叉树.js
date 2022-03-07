/*
 * @lc app=leetcode.cn id=965 lang=javascript
 *
 * [965] 单值二叉树
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
// Your runtime beats 15.95 % of javascript submissions
// 这个方法不好
const isUnivalTree = function(root) {
  if (!root || (!root.val && root.val !== 0)) return true;
  const run = function(node, key) {
    if (!node || (!node.val && node.val !== 0)) return true;
    if (node.val !== key) {
      return false;
    }
    if (run(node.left, key) === false) return false;
    if (run(node.right, key) === false) return false;
    return true;
  };
  return run(root, root.val);
  // [0,6,0,null,null,null,0,0,null,0,null,null,0]
};

// @lc code=end

/*
 * @lc app=leetcode.cn id=2236 lang=javascript
 *
 * [2236] 判断根结点是否等于子结点之和
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
 * Your runtime beats 94.47 % of javascript submissions
 */
const checkTree = function(root) {
  return root.val === (root.left.val + root.right.val);
};
// @lc code=end

export { checkTree };

/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  // 如果当前的节点中，节点值，左右的子树包含对应的 pq 那么
  // 这个节点的公共组件就是当前节点（直接返回）
  // 否则，就在子节点中
  let res = null;
  let isValue = function(node) {
    if (res !== null) return;
    if (!node) return;
    // console.log(isValue(node.left));
    if (isValue(node.left)) {
      res = node.left.val;
      return;
    }
    // console.log(isValue(node.right));
    if (isValue(node.right)) {
      res = node.right.val;
      return;
    }
    if (node.val === p || node.val === q) {
      console.log(node);
      return true;
    }
  }
  isValue(root);
  return res;
};
// @lc code=end


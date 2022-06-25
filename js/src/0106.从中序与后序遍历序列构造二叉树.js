/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 * 思路类似105题，只是获取根节点的位置变化了
 * 基本思路还是找到根节点和左右子树，然后递归处理
 * Your runtime beats 31.7 % of javascript submissions
 */
var buildTree = function(inorder, postorder) {
  // 如果根节点不存在，直接返回空树节点
  if (!postorder || postorder.length === 0) {
    return new TreeNode(null);
  }
  // 如果只有一个根节点，那么直接返回这个节点（没有子树）
  if (postorder.length === 1) {
    return new TreeNode(postorder[0]);
  }
  const rootVal = postorder[postorder.length - 1];
  const index = inorder.indexOf(rootVal);

  const rootNode = new TreeNode(rootVal);

  const leftInorder = inorder.slice(0, index);
  const rightInorder = inorder.slice(index + 1);

  const leftPostOrder = postorder.slice(0, index);
  const rightPostOrder = postorder.slice(index, postorder.length - 1);

  if (leftPostOrder.length > 0) {
    rootNode.left = buildTree(leftInorder, leftPostOrder);
  }
  if (rightPostOrder.length > 0) {
    rootNode.right = buildTree(rightInorder, rightPostOrder);
  }
  return rootNode;
};
// @lc code=end

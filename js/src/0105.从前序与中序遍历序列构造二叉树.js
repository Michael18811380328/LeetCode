/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 因为树中元素是唯一的，直接indexOf即可找到索引
 * 前序遍历：根左右（根节点可以找出来）
 * 中序遍历：左根右（可以把左右计算出来）
 * 然后递归节点即可
 * Your runtime beats 37.58 % of javascript submissions
 * 基本思路正常（如果传递的是数组的index，每次不需要slice，可以提高时间和空间利用率）
 */
var buildTree = function(preorder, inorder) {
  // 如果根节点不存在，直接返回空树节点
  if (!preorder || preorder.length === 0) {
    return new TreeNode(null);
  }
  // 如果只有一个根节点，那么直接返回这个节点（没有子树）
  if (preorder.length === 1) {
    return new TreeNode(preorder[0]);
  }
  const rootVal = preorder[0];
  const index = inorder.indexOf(rootVal);

  const rootNode = new TreeNode(rootVal);

  const leftInorder = inorder.slice(0, index);
  const rightInorder = inorder.slice(index + 1);

  const leftPreOrder = preorder.slice(1, index + 1);
  const rightPreOrder = preorder.slice(index + 1);

  if (leftPreOrder.length > 0) {
    rootNode.left = buildTree(leftPreOrder, leftInorder);
  }
  if (rightPreOrder.length > 0) {
    rootNode.right = buildTree(rightPreOrder, rightInorder);
  }
  return rootNode;
};
// @lc code=end

/*
 * [226] 翻转二叉树
 * 88 ms, 在所有 JavaScript 提交中击败了45.84%
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// 226. 翻转二叉树
// 翻转一棵二叉树。
// 示例：
// 输入：
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// 输出：
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

/**
 * @param {TreeNode} node
 * @return {TreeNode}
 */
const invert = function (node) {
  if (!node) {
    return null;
  }
  if (node.left && node.right) {
    const tmpNode = node.left;
    node.left = node.right;
    node.right = tmpNode;
  } else if (node.left) {
    node.right = node.left;
    node.left = null;
  } else {
    node.left = node.right;
    node.right = null;
  }
  invert(node.left);
  invert(node.right);
};

const invertTree = function (root) {
  invert(root);
  return root;
};

export { invertTree };

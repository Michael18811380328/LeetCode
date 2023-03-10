/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 * 最大二叉树
 * 找到当前数组的最大值，以及对应的 index 然后分别构建左子树和右子树
 * https://leetcode.cn/problems/maximum-binary-tree/
 */
const constructMaximumBinaryTree = function(nums) {
  function buildTree(arr) {
    if (arr.length === 0) {
      return null;
    }
    if (arr.length === 1) {
      return new TreeNode(arr[0]);
    }
    const max = Math.max(...arr);
    const index = arr.indexOf(max);
    const node = new TreeNode(max);
    node.left = buildTree(arr.slice(0, index));
    node.right = buildTree(arr.slice(index + 1));
    return node;
  }
  return buildTree(nums);
};

export { constructMaximumBinaryTree };

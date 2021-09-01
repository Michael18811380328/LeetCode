/*
 * [257] 二叉树的所有路径
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function (root) {
  const result = [];
  if (!root) return result;
  if (!root.left && !root.right) {
    const item = String(root.val);
    result.push(item);
    return result;
  }
  // DFS 深度优先遍历
  // 设置一个子函数，然后全局设置一个返回的值
  const getValue = function (node, str) {
    const val = String(node.val);
    if (str === '') {
      str = val;
    } else {
      str = `${str}->${val}`;
    }
    if (node.left) getValue(node.left, str);
    if (node.right) getValue(node.right, str);
    if (!node.left && !node.right) {
      result.push(str);
    }
  };
  // 这里处理空树的情况
  getValue(root, '');
  return result;
};

export { binaryTreePaths };

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
 * @return {TreeNode}
 * 二叉树剪枝 https://leetcode.cn/problems/binary-tree-pruning/
 */
const pruneTree = function(root) {
  const parseNode = (node) => {
    if (!node) return null;
    // 如果是1，没有子节点
    if (node.val === 1 && !node.left && !node.right) {
      return node;
    }
    // 处理左右子节点的情况
    node.left = parseNode(node.left);
    node.right = parseNode(node.right);
    // 如果是0，没有子节点
    if (node.val === 0 && !node.left && !node.right) {
      return null;
    }
    return node;
  };
  return parseNode(root);
};

export { pruneTree };

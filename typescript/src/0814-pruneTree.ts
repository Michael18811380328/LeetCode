import TreeNode from './treeNode';

// 二叉树剪枝 https://leetcode.cn/problems/binary-tree-pruning/
function pruneTree(root: TreeNode | null): TreeNode | null {
  function parseNode(node: TreeNode | null): TreeNode | null {
    if (!node) return null;
    if (node.val === 1 && !node.left && !node.right) {
      return node;
    }
    node.left = parseNode(node.left);
    node.right = parseNode(node.right);
    if (node.val === 0 && !node.left && !node.right) {
      return null;
    }
    return node;
  }
  return parseNode(root);
}

export {pruneTree};

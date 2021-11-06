import TreeNode from './treeNode';

function invert(node: TreeNode | null): null | undefined {
  if (!node) {
    return null;
  }
  if (node.left && node.right) {
    const tmpNode: TreeNode = node.left;
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
  return null;
}

function invertTree(root: TreeNode | null): TreeNode | null {
  invert(root);
  return root;
}

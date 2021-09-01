/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
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
}

function invertTree(root: TreeNode | null): TreeNode | null {
  invert(root);
  return root;
}

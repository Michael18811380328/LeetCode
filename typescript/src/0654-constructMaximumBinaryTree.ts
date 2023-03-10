import TreeNode from './treeNode';

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  function buildTree(arr: number[]): TreeNode | null {
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
}

export {constructMaximumBinaryTree};

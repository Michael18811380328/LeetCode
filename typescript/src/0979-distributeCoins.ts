import TreeNode from './treeNode';

function distributeCoins(root: TreeNode | null): number {
  let result = 0;
  function checkNode(node: TreeNode | null): number {
    if (!node) return 0;
    const tmp1 = checkNode(node.left);
    const tmp2 = checkNode(node.right);
    result = result + Math.abs(tmp1) + Math.abs(tmp2);
    return node.val + tmp1 + tmp2 - 1;
  }
  checkNode(root);
  return result;
}

export {distributeCoins};

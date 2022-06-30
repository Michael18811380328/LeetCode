import TreeNode from './treeNode';

// 196 ms, 在所有 TypeScript 提交中击败了50.00%
function goodNodes(root: TreeNode | null): number {
  let goodNumber = 0;
  const runNode = (node: TreeNode | null, max: number) => {
    if (!node) return;
    const val: number = node.val;
    if (val >= max) {
      goodNumber++;
    }
    const nextMax: number = Math.max(max, val);
    runNode(node.left, nextMax);
    runNode(node.right, nextMax);
  };
  runNode(root, root.val);
  return goodNumber;
}

export {goodNodes};

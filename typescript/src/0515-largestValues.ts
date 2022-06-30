import TreeNode from './treeNode';

// 96 ms, 在所有 TypeScript 提交中击败了91.67%
function largestValues(root: TreeNode | null): number[] {
  const tmpList: number[][] = [];
  const runNode = (node: TreeNode | null, layer: number) => {
    if (!node) {
      return;
    }
    if (!tmpList[layer]) {
      tmpList[layer] = [];
    }
    tmpList[layer].push(node.val);
    runNode(node.left, layer + 1);
    runNode(node.right, layer + 1);
  };
  runNode(root, 0);
  const list: number[] = [];
  tmpList.forEach((item, index) => {
    list[index] = Math.max(...item);
  });
  return list;
}

export {largestValues};

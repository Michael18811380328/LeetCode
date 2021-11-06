// [113] 路径总和 II
import TreeNode from './treeNode';

// 108 ms, 在所有 TypeScript 提交中击败了54.17%
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const list: number[][] = [];
  const tmp: number[] = [];
  var runNode = (
    node: TreeNode | null,
    tmp: number[],
    lastSum: number
  ): void => {
    if (!node) return;
    tmp.push(node.val);
    const tmpSum: number = lastSum + node.val;
    if (!node.left && !node.right) {
      if (tmpSum === targetSum) {
        list.push(tmp);
      }
    }
    runNode(node.left, [...tmp], tmpSum);
    runNode(node.right, [...tmp], tmpSum);
  };
  runNode(root, tmp, 0);
  return list;
}

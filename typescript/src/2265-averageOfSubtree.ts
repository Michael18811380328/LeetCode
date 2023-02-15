import TreeNode from './treeNode';

// 72 ms, 在所有 TypeScript 提交中击败了100.00%
function averageOfSubtree(root: TreeNode | null): number {
  const runNode = (node: TreeNode): {sum; number} => {
    let sum: number = node.val;
    let number = 1;
    // 叶子结点一定满足
    if (!node.left && !node.right) {
      result++;
      return {sum, number};
    }
    // 有子节点，那么需要判断
    if (node.left) {
      const {sum: sum1, number: number1} = runNode(node.left);
      sum += sum1;
      number += number1;
    }
    if (node.right) {
      const {sum: sum2, number: number2} = runNode(node.right);
      sum += sum2;
      number += number2;
    }
    // 判断当前子树是否满足条件
    if (Math.floor(sum / number) === node.val) {
      result++;
    }
    return {sum, number};
  };
  let result = 0;
  if (root) {
    runNode(root);
  }
  return result;
}

export {averageOfSubtree};

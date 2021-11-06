import TreeNode from './treeNode';

function levelOrderBottom(root: TreeNode | null): number[][] {
  if (!root) return [];
  const getNode = function (node: TreeNode | null, index: number): void {
    if (node) {
      const tmp: number[] = [];
      if (node.left) {
        tmp.push(node.left.val);
        getNode(node.left, index + 1);
      }
      if (node.right) {
        tmp.push(node.right.val);
        getNode(node.right, index + 1);
      }
      if (result[index]) {
        result[index] = result[index].concat(tmp);
      } else if (tmp.length > 0) {
        result[index] = tmp;
      }
    }
  };
  const tmp = [root.val];
  const result: number[][] = [tmp];
  getNode(root, 1);
  result.reverse();
  return result;
}

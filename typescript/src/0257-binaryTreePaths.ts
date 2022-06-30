import TreeNode from './treeNode';

function binaryTreePaths(root: TreeNode | null): string[] {
  const result: string[] = [];
  if (!root) return result;
  if (!root.left && !root.right) {
    const item = String(root.val);
    result.push(item);
    return result;
  }
  const getValue = function (node: TreeNode, str: string): void {
    const val: string = node.val ? String(node.val) : '';
    if (str === '') {
      str = val;
    } else {
      str = str + '->' + val;
    }
    if (node.left) getValue(node.left, str);
    if (node.right) getValue(node.right, str);
    if (!node.left && !node.right) {
      result.push(str);
    }
  };
  getValue(root, '');
  return result;
}

export {binaryTreePaths};

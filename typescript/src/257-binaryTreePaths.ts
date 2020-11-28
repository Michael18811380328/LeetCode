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

function binaryTreePaths(root: TreeNode | null): string[] {
  let result:string[] = [];
  if (!root) return result;
  if (!root.left && !root.right) {
    let item:string = String(root.val);
    result.push(item);
    return result;
  }
  let getValue = function(node: TreeNode, str:string): void {
    let val:string = node.val ? String(node.val) : '';
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
  }
  getValue(root, '');
  return result;
};
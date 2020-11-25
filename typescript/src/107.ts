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

function levelOrderBottom(root: TreeNode | null): number[][] {
  if (!root) return [];
  let getNode = function(node: TreeNode | null, index: number):void {
    if (node) {
      let tmp:number[] = [];
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
  }
  let tmp = [root.val];
  let result:number[][] = [tmp];
  getNode(root, 1);
  result.reverse();
  return result;
};
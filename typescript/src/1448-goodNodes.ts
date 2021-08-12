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
// 196 ms, 在所有 TypeScript 提交中击败了50.00%
function goodNodes(root: TreeNode | null): number {
  let goodNumber: number = 0;
  var runNode = (node: TreeNode | null, max: number) => {
    if (!node) return;
    let val: number = node.val;
    if (val >= max) {
      goodNumber++;
    }
    let nextMax: number = Math.max(max, val);
    runNode(node.left, nextMax);
    runNode(node.right, nextMax);
  };
  runNode(root, root.val);
  return goodNumber;
};

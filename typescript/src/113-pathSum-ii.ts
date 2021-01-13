// [113] 路径总和 II
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
// 108 ms, 在所有 TypeScript 提交中击败了54.17%
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  let list:number[][] = [];
  let tmp:number[] = [];
  var runNode = (node: TreeNode | null, tmp:number[], lastSum:number):void => {
    if (!node) return;
    tmp.push(node.val);
    let tmpSum:number = lastSum + node.val;
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
};
// @lc code=end
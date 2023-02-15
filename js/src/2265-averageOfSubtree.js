/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 判断当前节点的值等于子树的值的平均值，如果是小数则向下取整
 * https://leetcode.cn/problems/count-nodes-equal-to-average-of-subtree/submissions/
 * @param {TreeNode} root
 * @return {number}
 * 84 ms, 在所有 JavaScript 提交中击败了25.00%
 */
const averageOfSubtree = function(root) {
  const runNode = (node) => {
    let sum = node.val;
    let number = 1;
    // 叶子结点一定满足
    if (!node.left && !node.right) {
      result++;
      return { sum, number };
    }
    // 有子节点，那么需要判断
    if (node.left) {
      const { sum: sum1, number: number1 } = runNode(node.left);
      sum += sum1;
      number += number1;
    }
    if (node.right) {
      const { sum: sum2, number: number2 } = runNode(node.right);
      sum += sum2;
      number += number2;
    }
    // 判断当前子树是否满足条件
    if (Math.floor(sum / number) === node.val) {
      result++;
    }
    return { sum, number };
  };
  let result = 0;
  if (root) {
    runNode(root);
  }
  return result;
};

export { averageOfSubtree };

/*
 * [129] 求根到叶子节点数字之和
 * Definition for a binary tree node.
 */
// 辅助函数
function getSum(node, preSum) {
  if (!node) {
    return 0;
  }
  if (!node.left && !node.right) {
    return preSum * 10 + node.val;
  }
  return getSum(node.left, (preSum * 10 + node.val)) + getSum(node.right, (preSum * 10 + node.val));
}
// 思路：DFS计算，然后依次计算每一个情况，然后进行求和
/**
 * @param {TreeNode} root
 * @return {number}
 */
function sumNumbers(root) {
  const initSum = 0;
  return getSum(root, initSum);
}
// [1,0] 应该是10

export { sumNumbers };

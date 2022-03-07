/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 104 ms
// , 在所有 JavaScript 提交中击败了
// 44.95%
// 的用户
/**
 * @param {TreeNode} root
 * @return {number}
 */
const findTilt = function(root) {
  const list = [];
  getSum(root, list);
  let sum = 0;
  list.forEach((item) => sum += item);
  return sum;
};

// 辅助函数：计算节点的和集坡度
var getSum = function(node, list) {
  if (!node) {
    return 0;
  }
  if (node && !node.left && !node.right) {
    return node.val;
  }
  const nodeSum = node.val;
  const sum1 = getSum(node.left, list);
  const sum2 = getSum(node.right, list);
  const nodeSlope = Math.abs(sum1 - sum2);
  list.push(nodeSlope);
  return sum1 + sum2 + nodeSum;
};

// [1,2,3,4,5,6,7,8,9,null,null,13,null,19,38] 152
// @lc code=end

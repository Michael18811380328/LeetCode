/*
 * @lc app=leetcode.cn id=1022 lang=javascript
 *
 * [1022] 从根到叶的二进制数之和
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
/**
 * @param {TreeNode} root
 * @return {number}
 */
// Your runtime beats 84.42 % of javascript submissions
var sumRootToLeaf = function(root) {
  if (!root || (!root.val && root.val !== 0)) {
    return 0;
  } else if (!root.left && !root.right) {
    return root.val;
  }
  let list = [];
  // 递归子节点，直接叶子节点，然后转换成十进制
  var runNode = function(node, preVal) {
    if (!node) return;
    let newVal = '' + preVal + node.val;
    if (!node.left && !node.right) {
      // 没有左右子节点，证明是叶子节点，那么计算值并返回
      // console.log(newVal);
      newVal = parseInt(newVal, 2);
      // console.log(newVal);
      list.push(newVal);
    }
    runNode(node.left, newVal);
    runNode(node.right, newVal);
  }
  runNode(root.left, root.val);
  runNode(root.right, root.val);
  let sum = list.reduce((a, b) => a + b, 0);
  return sum;
};

// 下面这个执行错误
// 数据很大就会计算错误，为什么？？？
// 正确 newVal = parseInt(newVal, 2);
// 错误：newVal = parseInt(Number(newVal), 2);
// 这个转换过程中出错了
// @lc code=end

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
var sumRootToLeaf = function(root) {
  if (!root || (!root.val && root.val !== 0)) {
    return 0;
  }
  if (!root.left && !root.right) {
    return root.val;
  }
  // 递归子节点，直接叶子节点，然后转换成十进制
  let sum = runNode(root.left, root.val) + runNode(root.right, root.val);
  return sum;
};

var runNode = function(node, preVal) {
  if (!node) return 0;
  let newVal = '' + preVal + node.val;
  if (!node.left && !node.right) {
    // 没有左右子节点，证明是叶子节点，那么计算值并返回
    newVal = parseInt(Number(newVal), 2);
    return newVal;
  }
  return runNode(node.left, newVal) + runNode(node.right, newVal);
}

// 下面这个执行错误
// 数据很大就会计算错误，为什么？？？
// [0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,null,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,null,0,1,0,1,1,null,1,null,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,null,1,null,0,0,null,null,null,null,null,1,null,0,1,0,0,1,null,1,1,null,null,0,0,0,0,null,1,0,1,0,0,0,1,0,0,1,0,1,0,null,null,0,1,1,0,0,null,0,0,1,0,0,1,0,1,null,1,null,null,0,null,1,null,null,0,1,null,1,1,null,null,1,1,null,1,0,1,1,0,null,null,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,null,1,1,1,0,null,0,0,0,0,1,0,0,0,1,0,1,null,1,1,0,null,1,null,null,0,null,0,null,0,null,0,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,0,0,0,null,1,0,1,null,0,1,0,0,1,null,0,0,null,1,1,1,null,0,null,0,null,1,null,null,1,0,0,0,1,1,null,1,0,null,null,0,0,0,0,1,1,1,0,1,1,0,0,0,null,null,1,1,null,1,1,null,null,1,0,0,0,1,1,0,1,null,1,null,null,null,null,null,0,1,1,0,0,null,1,1,null,0,null,null,1,0,1,null,1,1,0,null,null,null,0,0,null,null,null,0,null,null,null,1,null,1,1,null,0,null,0,0,1,1,null,1,null,1,0,1,1,1,1,null,null,null,1,0,0,1,0,0,null,null,null,null,null,1,0,1,1,0,0,0,0,null,0,1,0,0,0,1,0,1,null,1,1,0,1,0,1,1,0,0,1,null,null,0,0,0,0,0,0,1,null,null,null,1,1,0,1,0,1,0,null,1,0,0,null,1,1,0,null,null,1,0,1,1,0,0,1,0,1,0,1,0,null,null,0,null,0,1,null,null,null,null,null,null,null,null,0,1,0,null,null,null,1,0,1,0,1,1,null,1,0,0,0,0,null,null,null,null,1,0,null,null,null,0,0,null,0,1,null,0,null,null,null,null,1,1,0,null,null,null,0,1,1,null,null,null,null,null,1,0,null,0,null,null,null,null,null,0,1,0,1,null,null,null,0,1,0,1,1,0,1,null,null,1,1,1,null,null,0,0,0,null,null,null,null,null,null,null,null,0,null,0,1,null,1,1,1,1,1,0,1,0,1,null,0,null,1,0,1,null,null,1,null,1,0,0,1,0,1,1,1,null,null,null,null,null,1,1,1,0,1,0,0,1,0,0,1,1,1,null,null,null,1,null,1,0,1,1,1,1,0,0,0,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,1,1,1,null,0,1,0,1,null,null,1,1,null,1,0,null,0,null,null,null,null,null,1,null,null,null,null,null,0,1,1,null,null,null,null,1,null,0,1,0,null,null,1,null,null,1,1,1,0,0,0,0,null,1,1,null,null,0,null,null,0,null,null,1,null,null,null,null,null,null,null,null,null,0,null,null,null,null,1,1,null,null,null,null,null,null,1,1,null,1,null,null,null,1,1,1,1,1,1,0,null,1,null,1,null,null,1,null,1,0,0,1,0,0,0,0,null,0,1,null,null,1,null,null,0,0,1,1,1,1,null,null,null,0,1,0,1,1,null,null,null,0,null,null,0,1,0,0,null,0,null,null,0,1,0,null,null,1,0,null,null,0,1,null,1,0,null,0,null,null,1,0,0,null,null,0,null,0,1,1,0,0,0,1,1,0,0,0,null,0,0,null,null,null,null,1,0,1,0,1,0,null,0,0,1,null,1,1,1,0,1,0,null,1,0,null,null,0,0,null,0,null,0,null,null,null,null,0,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,0,null,null,1,0,null,null,0,1,null,0,null,1,null,null,1,0,null,null,null,null,0,null,null,null,null,1,1,null,1,1,1,1,1,null,null,1,null,null,null,null,null,0,null,null,0,1,null,1,1,1,null,null,1,0,null,1,0,1,null,1,null,1,null,0,0,null,1,1,1,1,0,1,0,null,0,null,0,0,null,null,null,1,1,null,null,0,null,null,null,null,null,null,null,0,1,0,0,null,null,1,null,null,0,1,null,null,null,null,1,null,0,0,null,0,1,null,null,0,null,null,0,1,1,0,1,0,null,null,null,null,null,null,null,null,null,null,null,null,null,0,0,0,0,0,null,null,0,1,null,null,0,0,1,0,0,1,1,null,1,null,1,1,0,null,1,null,1,0,1,1,0,1,null,0,null,1,1,1,null,null,null,null,0,1,0,null,1,0,1,null,null,0,null,null,1,1,1,0,1,0,1,0,null,null,null,0,1,null,null,null,null,null,null,null,null,null,null,null,0,0,0,0,null,null,null,null,null,null,null,1,null,1,null,null,null,0,null,null,0,null,null,null,0,1,0,0,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,null,0,null,null,null,null,null,null,0,0,null,null,0,0,null,0,1,null,1,0,0,null,null,0,null,null,0,null,null,1,null,1,null,null,0,0,null,1,null,null,null,0,0,0,null,1,null,1,0,1,null,1,null,1,null,0,null,null,null,1,null,null,null,1,0,null,null,null,null,null,1,null,null,null,null,null,0,null,0,0,0,1,1,1,0,1,null,0,null,null,null,null,null,null,0,null,null,null,0,null,null,null,null,null,1,0,0,null,0,0,null,null,null,0,0,0,1,null,0,null,1,null,null,null,1,null,0,0,null,1,1,1,null,null,null,1,null,null,null,null,1,null,1,1,null,null,null,null,null,null,1,null,0,0,1,null,null,null,0,null,null,null,null,1,0,0,0,1,0,0,1,null,null,null,0,null,0,null,null,null,1,1,0,null,null,null,null,null,1,null,null,null,null,0,null,null,1,null,0,null,null,0,null,null,1,null,null,0,null,null,0,null,null,1,0,1,0,null,1,0,0,1,null,null,0,1,1,null,null,null,null,null,0,1,null,null,null,null,null,0,null,null,null,null,null,null,1,0,null,0,0,0,null,null,null,null,null,null,null,null,null,null,0,null,0,0,0,1,null,0,0,null,null,null,0,1,1,null,1,0,0,1,null,null,null,null,null,null,null,null,null,null,null,null,1,1,1,1,1,0,0,0,null,1,null,1,0,0,1,null,null,0,null,null,1,null,null,null,null,null,1,0,0,null,null,null,1,0,1,0,null,0,0,1,null,1,1,0,null,null,null,1,1,null,null,null,null,null,1,null,null,null,0,null,null,null,null,null,0,0,1,null,null,0,1,1,null,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,1,null,null,null,1,null,1,null,0,null,null,null,null,null,null,null,1,1,1,0,null,null,1,null,null,null,null,null,null,0,null,null,0,null,1,1,0,null,1,1,null,1,null,null,1,null,null,1,null,0,1,null,null,null,0,0,null,null,1,0,1,1,0,null,null,1,0,null,1,0,1,1,null,null,0,0,1,0,0,1,0,0,null,null,0,0,null,0,null,null,0,null,null,1,0,0,null,1,null,null,null,1,null,null,0,null,0,0,1,0,null,1,0,null,1,null,null,1,null,null,1,null,null,null,1,null,null,null,null,1,null,null,null,null,null,null,null,null,1,null,null,0,null,null,null,null,0,null,null,1,null,null,null,null,null,null,null,0,null,0,0,null,null,1,null,0,null,1,null,null,null,null,null,null,null,null,1,null,0,null,null,null,null,null,null,null,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,0,null,1,null,1,1,null,1,null,0,null,null,1,null,null,null,null,1,null,null,null,null,0,1,0,null,1,0,0,1,1,null,0,null,1,1,0,1,0,null,null,1,null,1,null,null,null,null,1,1,null,0,1,1,0,1,null,null,0,null,0,null,null,null,null,0,null,1,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,1,null,null,null,null,null,0,0,null,null,0,null,0,null,null,0,0,null,0,1,1,null,0,1,1,null,null,null,null,null,null,null,null,1,1,null,0,0,0,0,null,null,1,null,null,0,0,1,null,1,null,1,null,0,null,0,0,1,null,null,null,null,null,null,null,null,null,null,null,0,null,null,1,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,1,null,0,null,1,1,null,0,null,null,null,null,null,null,1,0,0,null,0,1,null,null,0,null,null,null,null,null,null,null,1,null,null,1,null,null,1,null,null,null,0,null,null,null,null,null,null,null,null,0,null,null,0,null,null,null,null,null,null,1,0,null,null,null,null,0,1,null,null,null,null,1,null,null,1,null,null,null,null,1,null,null,null,null,null,null,null,0]

// @lc code=end


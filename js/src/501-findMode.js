/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 112 ms
// , 在所有 JavaScript 提交中击败了
// 40.49%
// 问题：二叉搜索树这个条件怎么使用？现在没有用上
var findMode = function(root) {
  // 设置哈希表存储出现的值和次数
  let dict = {};
  // 使用辅助函数遍历树节点
  runTree(root, dict);
  console.log(dict);
  // 统计字典中的最大值
  let values = Object.values(dict);
  let max = Math.max(...values);
  let res = [];
  for (let key in dict) {
    if (dict[key] === max) {
      res.push(key);
    }
  }
  return res;
};

var runTree = function(node, dict) {
  if (!node) return;
  let key = node.val;
  if (dict[key]) {
    dict[key]++;
  } else {
    dict[key] = 1;
  }
  runTree(node.left, dict);
  runTree(node.right, dict);
}

// @lc code=end

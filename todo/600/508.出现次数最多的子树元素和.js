/*
 * @lc app=leetcode.cn id=508 lang=javascript
 *
 * [508] 出现次数最多的子树元素和
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
// Your runtime beats 24.39 % of javascript submissions
var findFrequentTreeSum = function(root) {
  if (!root) return [];
  if (!root.left && !root.right) {
    let key = root.val;
    return [key];
  }
  let dict = {};
  let sum = runNode(root.left, dict) + runNode(root.right, dict);
  let key = sum + root.val;
  dict[key] ? dict[key]++ : dict[key] = 1;
  // 获取最大值
  let res = [];
  let max = 0;
  // console.log(dict);
  for (let key in dict) {
    let times = dict[key];
    if (times > max) {
      max = times;
      res = [];
      res.push(key);
    }
    else if (times === max) {
      res.push(key);
    }
  }
  return res;
};

var runNode = (node, dict) => {
  if (!node) return 0;
  if (!node.left && !node.right) {
    let key = node.val;
    dict[key] ? dict[key]++ : dict[key] = 1;
    return node.val;
  }
  let sum = runNode(node.left, dict) + runNode(node.right, dict);
  let key = sum + node.val;
  dict[key] ? dict[key]++ : dict[key] = 1;
  return key;
}
// @lc code=end


/*
 * @lc app=leetcode.cn id=113 lang=javascript
 * [113] 路径总和 II
 * Your runtime beats 44.14 % of javascript submissions
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  let list = [];
  let tmp = [];
  var runNode = (node, tmp, lastSum) => {
    if (!node) {
      return;
    }
    tmp.push(node.val);
    let tmpSum = lastSum + node.val;
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

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
const pathSum = function(root, targetSum) {
  const list = [];
  const tmp = [];
  var runNode = (node, tmp, lastSum) => {
    if (!node) {
      return;
    }
    tmp.push(node.val);
    const tmpSum = lastSum + node.val;
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

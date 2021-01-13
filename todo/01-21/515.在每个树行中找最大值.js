/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
 * @return {number[]}
 */
// Your runtime beats 70.22 % of javascript submissions
var largestValues = function(root) {
  let tmpList = [];
  let runNode = (node, layer) => {
    if (!node) {
      return;
    }
    if (!tmpList[layer]) {
      tmpList[layer] = [];
    }
    tmpList[layer].push(node.val);
    runNode(node.left, layer + 1);
    runNode(node.right, layer + 1);
  }
  runNode(root, 0);
  let list = [];
  tmpList.forEach((item, index) => {
    list[index] = Math.max(...item);
  });
  return list;
};

// Your runtime beats 56.11 % of javascript submissions
var largestValues = function(root) {
  let list = [];
  let runNode = (node, layer) => {
    if (!node) {
      return;
    }
    if (!list[layer] && list[layer] !== 0) {
      list[layer] = node.val;
    } else {
      list[layer] = list[layer] > node.val ? list[layer] : node.val;
    }
    runNode(node.left, layer + 1);
    runNode(node.right, layer + 1);
  }
  runNode(root, 0);
  return list;
};
// @lc code=end


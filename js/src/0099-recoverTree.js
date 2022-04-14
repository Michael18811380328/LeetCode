/*
 * @lc app=leetcode.cn id=99 lang=javascript
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 * 这个题目需要几步转换才能做出来，用最直接能想到的思路做就可以
 * 二叉搜索树的特点：中序遍历结果是有序数组
 * 1、先把二叉搜索树中序遍历，获取数组
 * 2、分析数组，找到错位的两个数字（这里需要分相邻的错位，还是不相邻的错位，这个需要处理）
 * 3、再次遍历二叉搜索树，然后把这两个值替换一下即可
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 * Your runtime beats 91.8 % of javascript submissions
 */
 var recoverTree = function(root) {
  // 1、先把二叉搜索树中序遍历，获取数组
  let list = [];
  let inorder = (node) => {
    if (!node) return;
    inorder(node.left);
    list.push(node.val);
    inorder(node.right);
  };
  inorder(root);

  // 2、分析数组，找到错位的两个数字
  // 这个数组存放错位的两个数字
  let unorder = [];
  for (let i = 1; i < list.length; i++) {
    if (list[i] < list[i - 1]) {
      if (unorder.length === 0) {
        unorder.push(list[i - 1]);
      } else {
        unorder.push(list[i]);
      }
    }
  }
  // 处理只有一个错位的情况(找到前一个元素，并放入错位数组)
  if (unorder.length === 1) {
    let index = list.indexOf(unorder[0]);
    unorder.push(list[index + 1]);
  }
  // 3、遍历二叉搜索树，然后把这两个值替换一下即可
  let runNode = (node) => {
    if (!node) return;
      
    if (node.val === unorder[0]) {
      node.val = unorder[1];
    } else if (node.val === unorder[1]) {
      node.val = unorder[0];
    }
      
    runNode(node.left);
    runNode(node.right);
  }
  runNode(root);
};
// @lc code=end


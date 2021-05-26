/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
//  92 ms 在所有 JavaScript 提交中击败了 89.29%
var sortedArrayToBST = function(nums) {
  // 辅助函数
  const generateNode = (start, end) => {
    // 如果左大于右，返回错误，不设置节点
    if (start > end) {
      return null;
    }
    if (start === end) {
      return new TreeNode(nums[start]);
    }
    // start < end
    // 找到中间的节点作为根节点，然后递归设置子节点
    let middle = Math.floor((start + end) / 2);
    const node = new TreeNode(nums[middle]);
    node.left = generateNode(start, middle - 1);
    node.right = generateNode(middle + 1, end);
    return node;
  };
  // 思路：递归
  // 二叉搜索树：找到当前数组中，中间的元素，作为根节点
  // 然后把左边全部的元素作为左子树，右边的全部元素作为右子树即可
  return generateNode(0, nums.length - 1);
};

// @lc code=end


/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) return [];
  // 辅助函数：把当前节点的全部元素放到数组中
  // 能否传一个当前的层级，然后子节点就可以在不同的层级中插入了
  let getNode = function(node, index) {
    if (!node) return null;
    let tmp = [];
    if (node.left) {
      tmp.push(node.left.val);
      getNode(node.left, index + 1);
    }
    if (node.right) {
      tmp.push(node.right.val);
      getNode(node.right, index + 1);
    }
    if (result[index]) {
      result[index] = result[index].concat(tmp);
    } else if (tmp.length > 0) {
      result[index] = tmp;
    }
  }
  // 使用一个数组存放结果
  // 然后广度优先遍历（获取不同层级的子节点）
  // 然后 UNshift 到结果数组中
  let result = [];
  let tmp = [root.val];
  result.unshift(tmp);
  getNode(root, 1);
  result.reverse();
  return result;
};
// @lc code=end


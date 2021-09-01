/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
// 96 ms
// , 在所有 JavaScript 提交中击败了
// 95.50%
// 的用户
var postorder = function(root) {
  let list = [];
  runNode(root, list);
  return list;
};

var runNode = function(node, list) {
  if (!node) return;
  // 后序遍历：左右根
  if (node.children) {
    for (let i = 0; i < node.children.length; i++) {
      runNode(node.children[i], list);
    }
  }
  list.push(node.val);
}
// @lc code=end


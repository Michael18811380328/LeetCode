/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
// 120 ms, 在所有 JavaScript 提交中击败了33.70%
const runNode = function(node, list) {
  if (!node) return;
  // 前序遍历：根左右
  list.push(node.val);
  if (!node.children) return;
  for (let i = 0; i < node.children.length; i++) {
    runNode(node.children[i], list);
  }
};

const preorder = function(root) {
  const list = [];
  runNode(root, list);
  return list;
};

// @lc code=end
export { preorder };

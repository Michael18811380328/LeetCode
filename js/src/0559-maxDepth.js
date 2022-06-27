/*
 * @lc app=leetcode.cn id=559 lang=javascript
 * [559] N叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
// Your runtime beats 91.3 % of javascript submissions
const getDepth = function(node) {
  if (!node) return 1;
  let max = 0;
  const len = node.children.length;
  for (let i = 0; i < len; i++) {
    const child = node.children[i];
    const depth = getDepth(child);
    max = depth > max ? depth : max;
  }
  return max + 1;
};

/**
 * @param {Node} root
 * @return {number}
 */
 const maxDepth = function(root) {
  if (!root) return 0;
  return getDepth(root);
};
// @lc code=end

export { maxDepth };

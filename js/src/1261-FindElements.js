/*
 * @lc app=leetcode.cn id=1261 lang=javascript
 *
 * [1261] 在受污染的二叉树中查找元素
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
 */
// 124 ms, 在所有 JavaScript 提交中击败了97.50%
const FindElements = function(root) {
  // 还原二叉树，并设置字典实现查询
  this.dict = {};
  root.val == 0;
  this.dict[0] = true;
  runNode(root, 0, this.dict);
};

runNode = (node, value, dict) => {
  if (node.left) {
    const newLeft = 2 * value + 1;
    dict[newLeft] = true;
    node.left.val = newLeft;
    // console.log(newLeft);
    runNode(node.left, newLeft, dict);
  }
  if (node.right) {
    const newLeft = 2 * value + 2;
    dict[newLeft] = true;
    node.right.val = newLeft;
    // console.log(newLeft);
    runNode(node.right, newLeft, dict);
  }
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
  // console.log(this.dict);
  return !!this.dict[target];
};

/**
 * Your FindElements object will be instantiated and called as such:
 * let obj = new FindElements(root)
 * let param_1 = obj.find(target)
 */
// @lc code=end

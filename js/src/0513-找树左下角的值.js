/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
 * @return {number}
 */
// Your runtime beats 11.51 % of javascript submissions
const findBottomLeftValue = function(root) {
  if (root && !root.left && !root.right) {
    return root.val;
  }
  // 遍历树节点，然后获取树的不同层级的二维数组
  // 然后找到最后一个数组的第一个
  // 能否直接获取深度，然后遍历指定节点，这样就不需要遍历全部的节点
  const list = [];
  const depth = 0;
  runNode(root, depth, list);
  // console.log(list, depth);
  return list[list.length - 1][0];
};

var runNode = function(node, depth, list) {
  if (!node) return;
  const value = node.val;
  if (!list[depth]) {
    list[depth] = [];
  }
  list[depth].push(value);
  runNode(node.left, depth + 1, list);
  runNode(node.right, depth + 1, list);
};

// @lc code=end

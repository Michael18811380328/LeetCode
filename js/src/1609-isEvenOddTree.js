/*
 * @lc app=leetcode.cn id=1609 lang=javascript
 *
 * [1609] 奇偶树
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
 * @return {boolean}
 */
//  105/105 cases passed (452 ms)
//  Your runtime beats 11.61 % of javascript submissions
const isEvenOddTree = function(root) {
  // 思路 广度优先遍历
  // 使用递归，把树的不同层的节点，放在一个二维数组总
  // 放的时候，判断当前是否是递增或者递减的情况

  // 存储空间（二维数组）
  const matrix = [];
  // 临时队列
  const queue = [];

  // 辅助函数：遍历树节点
  // 参数：树节点，层数
  const runNode = (node, layer) => {
    if (!node) return;
    const value = node.val;

    // 当前层是空，则初始化
    if (!matrix[layer]) {
      matrix[layer] = [];
    }

    // 这里应该监测一下，是否满足递增或者递减，稍后处理
    // 不满足条件直接返回 false
    const len = matrix[layer].length;
    // 这里还应该处理，奇数层上是偶数，偶数层上是奇数
    if (layer % 2 === 0) {
      if (value % 2 === 0) {
        return false;
      }
      if (len > 0 && matrix[layer][len - 1] >= value) {
        return false;
      }
    }
    if (layer % 2 === 1) {
      if (value % 2 === 1) {
        return false;
      }
      if (len > 0 && matrix[layer][len - 1] <= value) {
        return false;
      }
    }
    // 将新的值放入层中
    matrix[layer].push(value);
    // 把子节点放在队列中
    if (node.left) {
      queue.push({
        node: node.left,
        layer: layer + 1,
      });
    }
    if (node.right) {
      queue.push({
        node: node.right,
        layer: layer + 1,
      });
    }
    return true;
  };

  // 初始化根节点到队列
  queue.push({
    node: root,
    layer: 0,
  });

  while (queue.length > 0) {
    const current = queue.shift();
    if (runNode(current.node, current.layer) === false) {
      return false;
    }
  }
  return true;
};
// @lc code=end
export { isEvenOddTree };

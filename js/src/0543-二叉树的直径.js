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

// 112 ms, 在所有 JavaScript 提交中击败了 26.34%
// 根节点：直接 maxLeft + maxRight
// 求当前节点下面左右子树的最大深度，然后 max = maxleft + maxright + 1 全局变量
// 返回值是 Math.max(maxLeft + maxRight) + 1
const diameterOfBinaryTree = function(root) {
  // 这是最大的深度
  let max = 0;
  // 辅助函数，获取一个节点的深度和直径
  const checkNode = (node) => {
    // 如果当前节点不存在，直接返回0
    if (!node) {
      return 0;
    }
    // 如果当前节点没有子节点，返回1
    if (!node.left && !node.right) {
      return 1;
    }
    // 如果当前节点有子节点，那么求当前最大值
    const leftDepth = checkNode(node.left);
    const rightDepth = checkNode(node.right);
    const currentLen = leftDepth + rightDepth + 1;
    if (currentLen > max) {
      max = currentLen;
    }
    // 并返回当前子节点的长度
    return Math.max(leftDepth, rightDepth) + 1;
  };
  // 根节点特殊，需要减去1
  checkNode(root);
  return max === 0 ? max : max - 1;
};

// [1,2,3,4,5]
// [1,2,3,4,5,null,6,7,8,null,null,19,20]
// [1, null, 2]
// [1, null, 2,1,2,3,4,5,null,6,7,8,null,null,19,20,null,null]
// [1]

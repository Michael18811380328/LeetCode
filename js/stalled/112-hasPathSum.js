/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */

// 思路一：获取全部树的路径，然后判断是否存在
function getPath(node) {
  const value = node.value;
  // 无子节点
  if (node.left === null && node.right === null) {
    return [value];
  }
  // 有一个子节点
  if (node.left === null) {
    const rightPath = getPath(node.right); // array
    for (let i = 0; i < rightPath.length; i++) {
      rightPath[i] += value;
    }
    return rightPath;
  }
  if (node.right === null) {
    const leftPath = getPath(node.left); // array
    for (let i = 0; i < leftPath.length; i++) {
      leftPath[i] += value;
    }
    return leftPath;
  }
  // 左右都有子节点
  const leftPath = getPath(node.left);
  const rightPath = getPath(node.right);
  let totalPath = [].concat(leftPath).concat(rightPath);
  for (let i = 0; i < totalPath.length; i++) {
    totalPath[i] += value;
  }
  return totalPath;
}

// 思路二：深度优先遍历：如果有值，直接返回真

var hasPathSum = function(root, sum) {
  return getPath(root).includes(sum);
};

export { hasPathSum };
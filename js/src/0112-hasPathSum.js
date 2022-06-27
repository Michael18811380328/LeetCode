// [112] 路径总和
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const runNode = function(node, sum, currentSum) {
  // 没有节点，直接返回
  if (!node) {
    return false;
  }
  // 没有子节点，那么是叶子节点
  if (!node.left && !node.right) {
    return currentSum + node.val === sum;
  }
  // 有子节点
  return runNode(node.left, sum, currentSum + node.val) || runNode(node.right, sum, currentSum + node.val);
};

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
// 104 ms , 在所有 JavaScript 提交中击败了 31.09% 的用户
const hasPathSum = function(root, sum) {
  // 空树，目标是0
  if (!root) {
    return false;
  }
  // 只有一个根节点
  if (!root.left && !root.right) {
    return root.val === sum;
  }
  const currentSum = root.val;
  return runNode(root.left, sum, currentSum) || runNode(root.right, sum, currentSum);
};

export { hasPathSum };

// 错误思路：// 思路一：获取全部树的路径，然后判断是否存在
// function getPath(node) {
//   const { value } = node;
//   // 无子节点
//   if (node.left === null && node.right === null) {
//     return [value];
//   }
//   // 有一个子节点
//   if (node.left === null) {
//     const rightPath = getPath(node.right); // array
//     for (let i = 0; i < rightPath.length; i++) {
//       rightPath[i] += value;
//     }
//     return rightPath;
//   }
//   if (node.right === null) {
//     const leftPath = getPath(node.left); // array
//     for (let i = 0; i < leftPath.length; i++) {
//       leftPath[i] += value;
//     }
//     return leftPath;
//   }
//   // 左右都有子节点
//   const leftPath = getPath(node.left);
//   const rightPath = getPath(node.right);
//   const totalPath = [].concat(leftPath).concat(rightPath);
//   for (let i = 0; i < totalPath.length; i++) {
//     totalPath[i] += value;
//   }
//   return totalPath;
// }

// // 思路二：深度优先遍历：如果有值，直接返回真

// function hasPathSum(root, sum) {
//   return getPath(root).includes(sum);
// }

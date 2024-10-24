/**
 * 完全二叉树的节点个数
 * https://leetcode.cn/problems/count-complete-tree-nodes/description/
 * 思路1：遍历树节点，计算全部的个数
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes1 = function(root) {
  if (!root) return 0;
  return 1 + countNodes(root.left) + countNodes(root.right);
};

export { countNodes1 };

// 思路2：深度优先遍历，根据完全二叉树的特点，找到最下层的第一个缺失的节点，然后右侧都是空，直接可以计算得出
// var countNodes2 = function(root) {
//   // 1 先计算这个树的深度
//   if (!root) return 0;
//   const getDepth = function(node) {
//     let depth = 0;
//     while (node) {
//       depth++;
//       node = node.left;
//     }
//     return depth;
//   };
//   const treeDepth = getDepth(root);

//   // 2 深度优先遍历，找到最下层的第一个缺失的节点，然后右侧都是空，直接可以计算得出
//   let depth = 0;
//   let node = root;
//   while (node) {
//     depth++;
//     node = node.left;
//   }
//   if (depth === 0) return 0;
//   let left = 1;
//   let right = Math.pow(2, depth) - 1;
// };

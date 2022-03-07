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
 * @return {TreeNode}
 */
// 一个节点新的值 = 所有右侧节点的值的和（先递归右侧节点，然后遍历根节点，然后遍历左侧节点）
// 使用临时变量保存已有节点的总和
// 84 ms, 在所有 JavaScript 提交中击败了66.41%
const bstToGst = function(root) {
  let sum = 0;
  var runNode = (node) => {
    if (!node) {
      return;
    }
    // 递归右子树
    runNode(node.right);
    sum = sum + node.val;
    node.val = sum;
    // 递归左子树
    runNode(node.left);
  };
  runNode(root);
  return root;
};

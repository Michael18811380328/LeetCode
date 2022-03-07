/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
// 328 ms, 在所有 JavaScript 提交中击败了89.69%
const getTargetCopy = function(original, cloned, target) {
  // 原始树和克隆树一样，所以直接遍历克隆树，找到对应的节点返回即可
  const runNode = function(node, value) {
    // console.log(node, value);
    if (!node) {
      return null;
    }
    if (node.val === value) {
      return node;
    }
    return runNode(node.left, value) || runNode(node.right, value);
  };
  return runNode(cloned, target.val);
};

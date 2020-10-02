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
 * @return {number[]}
 * [94] 二叉树的中序遍历
 * 中序遍历：左根右
 */
function runNode(node, list) {
  if (node.left) {
    runNode(node.left, list);
  }
  list.push(node.val);
  if (node.right) {
    runNode(node.right, list);
  }
}

const inorderTraversal = function (root) {
  if (!root || !root.val) {
    return [];
  }
  const list = [];
  runNode(root, list);
  return list;
};

export { inorderTraversal };

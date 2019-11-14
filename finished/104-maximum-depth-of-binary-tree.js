// 104. 二叉树的最大深度

// 给定二叉树 [3,9,20,null,null,15,7]，

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 68 ms , 在所有 javascript 提交中击败了 93.70%
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  if (root.left || root.right) {
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  }
}
// [3,9,20,15,7,null,null,10,null]

export { maxDepth };

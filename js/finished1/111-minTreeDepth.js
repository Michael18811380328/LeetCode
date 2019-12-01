// 111 计算二叉树的最小深度

// 思路：递归遍历子节点：当前节点的深度+下面子节点的深度
// return 1 + Math.min(fn(this.left), fn(this.right))
// 72 ms, 在所有 javascript 提交中击败了84.30%

// 注意：[1,2] 这个测试用例
// 题目中说明:叶子节点是指没有子节点的节点，这句话的意思是 1 不是叶子节点
// 题目问的是到叶子节点的最短距离，所以所有返回结果为 1 当然不是这个结果

// 叶子节点的定义是左孩子和右孩子都为 null 时叫做叶子节点
// ！当 root 节点左右孩子都为空时，返回 1
// 当 root 节点左右孩子有一个为空时，返回不为空的孩子节点的深度
// 当 root 节点左右孩子都不为空时，返回左右孩子较小深度的节点值
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
var minDepth = function(root) {
  if (root === null) {
    return 0;
  }
  // 注意：如果一个子节点没有左右节点，那么返回长度1
  if (!root.left && !root.right) {
    return 1; // [1,2]是这种情况
  }
  if (!root.left) {
    return 1 + minDepth(root.right);
  }
  if (!root.right) {
    return 1 + minDepth(root.left);
  }
  return 1 + Math.min(minDepth(root.right), minDepth(root.left));
};

export { minDepth };
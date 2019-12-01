// 111 计算二叉树的最小深度
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

// 给定二叉树 [3,9,20,null,null,15,7] 返回它的最小深度2.
// [1,2,3,4,5,6,null,null,1,2,4,null,7,null,null,null,null,null,null,8,9] 4

// 递归思路：当前节点的深度+下面子节点的深度
// return 1 + Math.min(fn(this.left), fn(this.right))

// 有坑
// 很多人写出的代码都不符合 [1,2] 这个测试用例，是因为没搞清楚题意

// 题目中说明:叶子节点是指没有子节点的节点，这句话的意思是 1 不是叶子节点

// 题目问的是到叶子节点的最短距离，所以所有返回结果为 1 当然不是这个结果

// 另外这道题的关键是搞清楚递归结束条件

// 叶子节点的定义是左孩子和右孩子都为 null 时叫做叶子节点
// 当 root 节点左右孩子都为空时，返回 1
// 当 root 节点左右孩子有一个为空时，返回不为空的孩子节点的深度
// 当 root 节点左右孩子都不为空时，返回左右孩子较小深度的节点值


var minDepth = function(root) {
  if (!root || !root.val) {
    return 0;
  }
  if (!root.left || !root.right) {
    return 1;
  }
  if (!root.left) {
    return minDepth(root.right);
  }
  if (!root.right) {
    return minDepth(root.left);
  }
  return Math.min(minDepth(root.right), minDepth(root.left));
  // 这里可以优化：如果一个子树的深度是0，那么不需要计算另个树的深度
  // let leftDepth = minDepth(root.left);
  // if (leftDepth === 0) {
  //   return 1;
  // }
  // return 1 + Math.min(leftDepth, minDepth(root.right));
};

export { minDepth };
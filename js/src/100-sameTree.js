/**
 * 100 same Tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// 难度：简单
// 考点：二叉树的基本结构（val+left+right）/ 二叉树递归遍历

// 工具函数：比较两个数组是否相同
function isSameArray(p, q) {
  // 比较数组的长度
  if (p.length !== q.length) {
    return false;
  }
  // 比较数组的每一项（假设全部是简单类型）
  for (let i = 0; i < p.length; i++) {
    if (p[i] !== q[i]) {
      return false;
    }
  }
  return true;
}
// const result = isSameArray([1, 2, 3], [1, 2, 3]);

// 72 ms , 在所有 javascript 提交中击败了 51.96%
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
  // 如果都是空树，相同
  if (p === null && q === null) {
    return true;
  }
  // 如果一个空，一个非空，不同
  if ((p && !q) || (!p && q)) {
    return false;
  }
  // 如果都有值，但是值不同，不同
  if (p && q && p.val !== q.val) {
    return false;
  }
  // 如果一个有子树，另一个没有子树，不同
  if ((p.left && !q.left) || (!p.left && q.left) || (p.right && !q.right) || (!p.right && q.right)) {
    return false;
  }
  // 递归左右子树
  return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
}

export { isSameArray, isSameTree };

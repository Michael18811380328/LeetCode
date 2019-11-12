// 100 same Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 题目0：比较两个数组是否相同
function isSameArray(p, q) {
  if (p.length !== q.length) return false;
  for (let i = 0; i < p.length; i++) {
    if (p[i] !== q[i]) {
      return false;
    }
  }
  return true;
}

// const result = isSameArray([1, 2, 3], [1, 2, 3]);

// 72 ms , 在所有 javascript 提交中击败了 51.96%
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
  // 返回左右子树的情况
  return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
}

// 编写测试用例时，需要把数组转化成树结构测试

export { isSameArray, isSameTree };

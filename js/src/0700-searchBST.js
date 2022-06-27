/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// 现在没有使用二叉搜索树的信息！
// Your runtime beats 34.06 % of javascript submissions
const searchBST = function(root, val) {
  if (!root) {
    return null;
  } else if (root.val === val) {
    return root;
  } else {
    // 这里做优化
    const leftVal = searchBST(root.left, val);
    if (leftVal) return leftVal;
    const rightVal = searchBST(root.right, val);
    if (rightVal) return rightVal;
    return null;
  }
};

// 改进
// 100 ms
// , 在所有 JavaScript 提交中击败了
// 82.18%
const searchBST = function(root, val) {
  if (!root) {
    return null;
  } else if (root.val === val) {
    return root;
  } else {
    // 这里做优化
    if (!root.right || val <= root.right.val) {
      const leftVal = searchBST(root.left, val);
      if (leftVal) return leftVal;
    }
    if (!root.left || val >= root.left.val) {
      const rightVal = searchBST(root.right, val);
      if (rightVal) return rightVal;
    }
    return null;
  }
};
// @lc code=end

export { searchBST };

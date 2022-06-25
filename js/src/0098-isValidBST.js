/*
 * @lc app=leetcode.cn id=98 lang=javascript
 * [98] 验证二叉搜索树
 */
// 本题考察二叉搜索树的性质
// 左子树是二叉搜索树
// 右子树是二叉搜索树
// 左子树的最大值小于当前节点值
// 右子树的最小值大于当前节点值

// @lc code=start
// 思路1：递归，判断每一个子树是二叉搜索树
// 56 ms, 在所有 JavaScript 提交中击败了99.13%
// 需要给定一个辅助函数，判断一个子树的最值(子树的最值在 small-large 之间)，这是解题关键
var checkTree = function(node, small, large) {
  // 如果没有节点，满足
  if (!node) {
    return true;
  }
  // 如果当前节点的值，大于等于最大值或者小于等于最小值，那么不是二叉搜索树
  if (node.val >= large || node.val <= small) {
    return false;
  }
  // 子节点在函数中递归判断，更改上下边界即可，辅助函数不需要返回最值
  // 左子树的最大值小于当前节点值，右子树的最小值大于当前节点值
  return checkTree(node.left, small, node.val) && checkTree(node.right, node.val, large);
};

const isValidBST = function(root) {
  // 默认根节点不设置最值判断
  const small = -Infinity;
  const large = +Infinity;
  return checkTree(root, small, large);
};

// 思路二：二叉树中序遍历
// 如果是二叉搜索树，那么中序遍历（左根右）的结果是升序的数组
// 60 ms, 在所有 JavaScript 提交中击败了96.81%
const isValidBST2 = function(root) {
  // 这个存放遍历的结果（或者用一个number变量存放也可以）
  const arr = [];
  function runNode(node) {
    if (!node) {
      return true;
    }
    if (node && node.left) {
      const res = runNode(node.left);
      if (res === false) {
        return false;
      }
    }
    if (node) {
      // 判断当前的值和前一个的值
      if (arr[arr.length - 1] >= node.val) {
        return false;
      }
      arr.push(node.val);
    }
    if (node && node.right) {
      const res = runNode(node.right);
      if (res === false) {
        return false;
      }
    }
    return true;
  }
  const res = runNode(root);
  if (res === false) {
    return false;
  }
  return true;
};

// @lc code=end

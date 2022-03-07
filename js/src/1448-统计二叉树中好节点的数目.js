/*
 * @lc app=leetcode.cn id=1448 lang=javascript
 *
 * [1448] 统计二叉树中好节点的数目
 */

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
 * @return {number}
 */
//  Your runtime beats 47.3 % of javascript submissions
const goodNodes = function(root) {
  let goodNumber = 0;
  // 辅助函数，判断一个点是否是好节点
  var runNode = (node, max) => {
    if (!node) return;
    const val = node.val;
    if (val >= max) {
      goodNumber++;
    }
    const nextMax = Math.max(max, val);
    runNode(node.left, nextMax);
    runNode(node.right, nextMax);
  };
  // 这里不能设置初始值是0，应该设置初始值是根节点的值
  runNode(root, root.val);
  // 测试空树
  return goodNumber;
};

// 树节点的值可能是负数，那么需要处理这个情况
// [-1,5,-2,4,4,2,-2,null,null,-4,null,-2,3,null,-2,0,null,-1,null,-3,null,-4,-3,3,null,null,null,null,null,null,null,3,-3]
// 这个过不去
// @lc code=end

/*
 * @lc app=leetcode.cn id=235 lang=javascript
 * [235] 二叉搜索树的最近公共祖先
 * 考察二叉搜索树的性质，遍历树节点，难度一般
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
  let res = root;
  // 设置当前节点是根节点
  // eslint-disable-next-line
  while (true) {
    // 如果当前节点的值大于两个目标节点，那么当前节点是这个节点的左子节点
    if (res.val > p.val && res.val > q.val) {
      res = res.left;
    }
    // 如果当前节点的值小于两个目标节点，那么当前节点是这个节点的右子节点
    else if (res.val < p.val && res.val < q.val) {
      res = res.right;
    }
    // 如果相等，或者介于其中，就是这个节点
    else {
      break;
    }
  }
  return res;
};

export { lowestCommonAncestor };

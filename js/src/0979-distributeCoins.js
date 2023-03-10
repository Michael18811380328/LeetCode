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
 * https://leetcode.cn/problems/distribute-coins-in-binary-tree/
 * 979. 在二叉树中分配硬币
 * 当时没有想到怎么解决，参考答案的思路，不考虑一个移动到另一个，只考虑当前节点上净变化数量，然后求和：
 * 对叶子结点，移动的数量是 abs(node.val - 1)
 * 对其他节点，移动的数量是 abs(node.val + 左子树移动的数量 + 右子树移动的数量 - 1)
 * 然后 DFS 即可实现
 * https://leetcode.cn/problems/distribute-coins-in-binary-tree/
 */
const distributeCoins = function(root) {
  let result = 0;
  const checkNode = (node) => {
    if (!node) return 0;
    const tmp1 = checkNode(node.left);
    const tmp2 = checkNode(node.right);
    result = result + Math.abs(tmp1) + Math.abs(tmp2);
    return node.val + tmp1 + tmp2 - 1;
  };
  checkNode(root);
  return result;
};

export { distributeCoins };

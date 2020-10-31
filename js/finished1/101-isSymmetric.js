/*
 * [101] 对称二叉树
 */
// 辅助函数: 对比全部的树节点
function testTree(left, right) {
  if (!left && !right) {
    return true;
  }
  if ((left && !right) || (!left && right) || left.val !== right.val) {
    return false;
  }
  return testTree(left.left, right.right) && testTree(left.right, right.left);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 广度优先遍历
// 把左子树的节点放在一个数组中,把右子树的节点放在另一个数组中
// 每循环一层，然后比较两个数组是否镜像相等,如果不相等，那么返回false,直到全部遍历树节点
function isSymmetric(root) {
  // 无根节点
  if (!root) {
    return true;
  }
  const leftNode = root.left;
  const rightNode = root.right;
  // 无左节点或者右节点，返回false
  if ((leftNode && !rightNode) || (!leftNode && rightNode)) {
    return false;
  }
  // todo: 这种思路不好，能否直接比较两个子树的左右节点？
  return testTree(leftNode, rightNode);
}

export { isSymmetric };

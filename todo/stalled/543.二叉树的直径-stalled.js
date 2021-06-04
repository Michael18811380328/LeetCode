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

// 如果只有一个根节点，那么直接返回0，// 这里需要测试
// // [1, null, 2] 这个测试不通过
var diameterOfBinaryTree = function(root) {
  // 获取每一个节点的左右的深度，然后求一下最大值，然后全局设置一个变量
  if (!root.left && !root.right) {
    return 1;
  }
  let max = 0;
  // 辅助函数，获取一个节点的深度和直径
  let checkNode = (node) => {
    // 如果当前节点不存在，直接返回0
    if (!node) {
      return 0;
    }
    // 如果当前节点没有子节点，返回1
    if (!node.left && !node.right) {
      return 1;
    }
    // 如果当前节点有子节点，那么求当前最大值
    let leftDepth = checkNode(node.left);
    let rightDepth = checkNode(node.right);
    let currentLen = leftDepth + rightDepth;
    if (currentLen > max) {
      max = currentLen;
    }
    // 并返回当前子节点的长度
    return Math.max(leftDepth, rightDepth) + 1;
  }
  
  // [1,2,3,4,5,null,6,7,8,null,null,19,20]
  // 这个测试通过
  // let leftDepth = checkNode(root.left);
  // let rightDepth = checkNode(root.right);
  // // 这里不合适
  // console.log(leftDepth, rightDepth);
  // let currentLen = leftDepth + rightDepth + 1;
  // if (currentLen > max) {
  //   max = currentLen;
  // }
  let len = checkNode(root);
  if (len > max) {
    return len;
  }
  return max;
};

/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  // 考点：二叉树的层序遍历（广度优先遍历）
  // 先把二叉树转换成数组，然后把数组转换成字符串
  let arr = [];
  let tmp = [];
  tmp.push(root);
  while (tmp.length > 0) {
    let currNode = tmp.shift(1);
    // 如果当前节点存在
    if (currNode) {
      // 把值放在结果数组中，然后把左右节点放在临时数组中
      arr.push(currNode.value);
      
    }
    // 如果节点不存在
    else {
      // 
    }
    
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  // 先把字符串转换成数组，然后转换成二叉树
  // 需要树节点
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end


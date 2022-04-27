// 297 二叉树的序列化和反序列化，需要按照官方的格式，去序列化
// 简单就是：中序遍历（递归二叉树的节点） + 字符串拼接即可
// 可以不用转换成数组，然后再转换成字符串的格式

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 * 二叉树序列化成字符串
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const runNode = (root, str) => {
    if (root === null) {
      str += 'None,';
    } else {
      str = str + root.val + ',';
      str = runNode(root.left, str);
      str = runNode(root.right, str);
    }
    return str;
  }
  return runNode(root, '');
};

/**
 * Decodes your encoded data to tree.
 * 字符串反序列化成二叉树
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const runArr = (arr) => {
    if (arr[0] === 'None') {
      arr.shift();
      return null;
    }
    let node = new TreeNode(parseInt(arr[0]));
    arr.shift();
    node.left = runArr(arr);
    node.right = runArr(arr);
    return node;
  }
  let list = data.split(',');
  return runArr(list);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
 

/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序查找树
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
//Your runtime beats 91.69 % of javascript submissions
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var increasingBST = function(root) {
  let arr = [];
  // 先把这个树中序遍历，然后把结果放在线性的数组中
  let runNode = (node) => {
    if (node.left) {
      runNode(node.left);
    }
    arr.push(node.val);
    if (node.right) {
      runNode(node.right);
    }
  };
  runNode(root, arr);
  // console.log(arr);
  // 然后把线性的数组，转换成只有右子节点的树
  let getTree = (node, arr) => {
    if (arr.length > 0) {
      let value = arr.shift();
      node.right = new TreeNode(value);
      getTree(node.right, arr);
    }
  };
  let start = arr.shift();
  let res = new TreeNode(start);
  getTree(res, arr);
  return res;
};

// @lc code=end


/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
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
 */
// 两种思路：
// 第一种：直接把二叉搜索树中序遍历，放入临时栈中，不断取出
// Your runtime beats 5.08 % of javascript submissions
var BSTIterator = function(root) {
  this.stack = [];
  this.pointer = getPointer(root, this.stack); // 指针指向当前最小值
};

var getPointer = (node, stack) => {
  if (!node) return node;
  while (node.left) {
    stack.push(node);
    node = node.left;
  }
  return node;
};

BSTIterator.prototype.next = function() {
  let res = this.pointer.val;
  // 每次next操作可能需要使用getPointer函数，性能不好
  this.pointer = this.pointer.right ? getPointer(this.pointer.right, this.stack) : this.stack.pop();
  return res;
};

BSTIterator.prototype.hasNext = function() {
  return !!this.pointer;
};

// 第二种：直接初始化把树转换成数组
// 缺点：把全部的树节点取出来，可能没必要
// Your runtime beats 72.88 % of javascript submissions
var BSTIterator = function(root) {
  this.arr = [];
  this.arr.push(...runNode(root.left), root.val, ...runNode(root.right));
};

var runNode = (node) => {
  if (!node) return [];
  return [...runNode(node.left), node.val, ...runNode(node.right)];
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  return this.arr.shift();
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.arr.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end


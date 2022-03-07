/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
// Your runtime beats 6.03 % of javascript submissions
const levelOrder = function(root) {
  // 递归遍历树节点，然后传递层数，将结果放在对应的层数内部
  // 递归非常耗性能，可以使用BFS解决问题
  const res = [];
  const depth = 0;
  runNode(root, depth, res);
  return res;
};

const runNode = function(node, depth, res) {
  if (!node) return;
  if (!res[depth]) {
    res[depth] = [];
  }
  res[depth].push(node.val);
  if (!node.children) return;
  node.children.forEach((element) => {
    runNode(element, depth + 1, res);
  });
};

// 思路二
// Your runtime beats 57.81 % of javascript submissions
const levelOrder = function(root) {
  // 层序遍历：广度优先遍历
  if (!root) return [];
  const tmpArr = [];
  const res = [];
  tmpArr.push(root);
  while (tmpArr.length > 0) {
    const tmp = [];
    const len = tmpArr.length;
    for (let i = 0; i < len; i++) {
      const item = tmpArr.shift();
      tmp.push(item.val);
      if (item.children) tmpArr.push(...item.children);
    }
    res.push(tmp);
  }
  return res;
};

// @lc code=end

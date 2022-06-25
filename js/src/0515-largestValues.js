/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Your runtime beats 70.22 % of javascript submissions
// 遍历树节点，然后把每一层放在临时数组中，求最大值即可
const largestValues1 = function(root) {
  const tmpList = [];
  const runNode = (node, layer) => {
    if (!node) {
      return;
    }
    if (!tmpList[layer]) {
      tmpList[layer] = [];
    }
    tmpList[layer].push(node.val);
    runNode(node.left, layer + 1);
    runNode(node.right, layer + 1);
  };
  runNode(root, 0);
  const list = [];
  tmpList.forEach((item, index) => {
    list[index] = Math.max(...item);
  });
  return list;
};

// Your runtime beats 56.11 % of javascript submissions
const largestValues2 = function(root) {
  const list = [];
  const runNode = (node, layer) => {
    if (!node) {
      return;
    }
    if (!list[layer] && list[layer] !== 0) {
      list[layer] = node.val;
    } else {
      list[layer] = list[layer] > node.val ? list[layer] : node.val;
    }
    runNode(node.left, layer + 1);
    runNode(node.right, layer + 1);
  };
  runNode(root, 0);
  return list;
};

export { largestValues2, largestValues1 };

// 113 路径总和
var pathSum = function(root, targetSum) {
  let list = [];
  let tmp = [];
  // 辅助函数
  let runNode = (node, tmp, lastSum) => {
    if (!node) {
      return;
    }
    tmp.push(node.val);
    let tmpSum = lastSum + node.val;
    if (!node.left && !node.right) {
      if (tmpSum === targetSum) {
        list.push(tmp);
      }
    }
    runNode(node.left, [...tmp], tmpSum);
    runNode(node.right, [...tmp], tmpSum);
  };
  runNode(root, tmp, 0);
  return list;
};

// 144 二叉树的前序遍历
var preorderTraversal = (root) => {
  if (!root) {
    return [];
  }
  return [root.val].concat(preorderTraversal(root.left)).concat(preorderTraversal(root.right));
};

// 145 二叉树的后续遍历
var postorderTraversal = function(root) {
  if (!root || !root.val) {
    return [];
  }
  return [].concat(postorderTraversal(root.left)).concat(postorderTraversal(root.right)).concat([root.val]);
};
